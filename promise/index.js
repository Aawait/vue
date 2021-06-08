function MyPromise(actuator) {
  // 添加属性
  this.PromiseState = "pending"; // 初始化状态
  this.PromiseResult = null;

  // 用来保存then方法的回调函数
  this.callbacks = [];
  // 保存this指向
  let that = this;

  function resolve(data) {
    // 状态只允许改变一次 从pending -> fulfilled
    if (that.PromiseState !== "pending") return;

    // 调用reslove 改变promise对象的状态为成功
    that.PromiseState = "fulfilled" 
    that.PromiseResult = data

    // 状态改变 调用then方法,为了保证多次调用then都会被执行，所以要遍历
    that.callbacks.forEach((item) => {
      item.onResolve(data);
    });
  }

  function reject(data) {
    // 状态只允许改变一次 从pending -> rejected
    if (that.PromiseState !== "pending") return;

    // 调用reject 改变promise对象的状态为失败
    that.PromiseState = "rejected" 
    that.PromiseResult = data

    that.callbacks.forEach((item) => {
      item.onReject(data);
    });
  }

  // 如果再函数执行中抛出错误，也将promise状态改为失败
  try {
    actuator(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// 添加then方法
MyPromise.prototype.then = function (onResolve, onReject) {

    // 保存this指向
    const that = this

  // then方法返回一个promise对象，返回的结果由onResolve返回的结果决定
  return new MyPromise((resolve, reject) => {
    
     function callback(state){
        try {
            // then方法第一个回调的返回值
            const result = state(that.PromiseResult);
    
            // 如果then返回的时一个promise对象，那么状态由返回的promise对象决定
            if (result instanceof MyPromise) {
              result.then(res => {
                  resolve(res); // 返回的promise成功调用resolve,并将成功的结果传递过去
                },
                err => {
                  reject(err); // 返回的promise失败调用reject,并将失败的结果传递过去
                }
              );
            } else {
              // 如果返回的不是promise对象，那么状态为成功，值为onResolve返回的结果
              resolve(result);
            }
            // 如果then中抛出错误，也将状态改为失败，并且结果为抛出的结果
          } catch (err) {
    
              reject(err)
          }
     }

    // 成功调用then方法第一个回调
    if (this.PromiseState === "fulfilled") {
          callback(onResolve)
    }

    // 失败调用then方法第二个回调
    if (this.PromiseState === "rejected") {
        callback(onReject)
    }
   
    
    // 异步任务就把这两个方法保存下来，状态改变时调用
    if (this.PromiseState === "pending") {
         this.callbacks.push({
           onResolve: function(){
              callback(onResolve)
           },
           onReject: function(){
              callback(onReject)
           }
         });
    }
  });
};

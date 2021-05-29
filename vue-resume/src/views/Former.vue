<template>
  <div class="former">
      <p>作品3</p>
     <div class="former-grid">
          <div>
             <img :src="imgUrl.img9" alt="">
          </div>
          <div>
             <img :src="imgUrl.img10" alt="">
          </div>
          <div>
             <img :src="imgUrl.img11" alt="">
          </div>
          <div>
             <img :src="imgUrl.img12" alt="">
          </div>
          <div>
             <img :src="imgUrl.img13" alt="">
          </div>
          <div>
             <img :src="imgUrl.img14" alt="">
          </div>
     </div>
  </div>
</template>


<script>

export default {
   name:"Former",
   props:['imgUrl'],
   
}
</script>

<style scoped>
    
    .former p {
       margin-top: 10px;
       font-size: 20px;
       font-weight: 600;
   }
   .former-grid{
       width: 100%;
       height: 1000px;
       display: grid;
       grid-template-rows: repeat(2,50%);
       grid-template-columns: repeat(3,33.33%);
   }

   .former-grid div{
      margin: 10px;
        box-sizing: border-box;
        border: 2px solid skyblue;
        border-radius: 3px;
        overflow: hidden;
   }
   .former-grid div img{
       width: 100%;
       height: 100%;
   }
</style>
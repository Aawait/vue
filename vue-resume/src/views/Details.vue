<template>
  <div class="details">
      <p>作品2</p>
     <div class="details-grid">
          <div>
             <img :src="imgUrl.img5" alt="">
          </div>
            <div>
             <img :src="imgUrl.img6" alt="">
          </div>  <div>
             <img :src="imgUrl.img7" alt="">
          </div>  <div>
             <img :src="imgUrl.img8" alt="">
          </div>
     </div>
  </div>
</template>


<script>

export default {
   name:"Details",
   props:['imgUrl']
}
</script>

<style scoped>
     .details{
       height: 100%;
   }
    .details p {
       margin-top: 10px;
       font-size: 20px;
       font-weight: 600;
   }
   .details-grid{
       width: 100%;
       height: 700px;
       display: grid;
       grid-template-rows: repeat(2,50%);
       grid-template-columns: repeat(2,50%);
   }

   .details-grid div{
        margin: 10px;
        box-sizing: border-box;
        border: 2px solid skyblue;
        border-radius: 3px;
        overflow: hidden;
   }
   .details-grid div img{
       width: 100%;
       height: 100%;
   }
</style>
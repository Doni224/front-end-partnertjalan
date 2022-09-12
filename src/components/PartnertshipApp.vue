<template>
  <div id="app " >
    <div class="con container">
      <h2>Paket Wisata yang bisa kamu pilih</h2>
      <br />
      <center>
      <carousel
        :items="2"
        :loop="true"
        :autoplay="true"
        :margin="10"
        :nav="false"
        :dots="true"
        :animateOut="fadeOut"
        :animateIn="fadeIn"
        :autoplayHoverPause="false"
        :responsive="{
          0: {
            items: 1,
          },
          768: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        }"
      >
      
      <div class="carousel">
        <div class="carousel-img-card d-flex align-items-center">
          <img class="carousel-img"
            src="@/assets/img/Partnert/Hayu.png"
            alt="Snow"
style="width:40%"
          />
        </div>
        </div>
        <div class="carousel">
          <div class="carousel-img-card d-flex align-items-center">
          <img class="carousel-img"
            src="@/assets/img/Partnert/dwidaya.png"
            alt="Snow"
style="width:50%"
          />
        </div>
        </div>

        <div class="carousel">
          <div class="carousel-img-card d-flex align-items-center">
          <img class="carousel-img"
            src="@/assets/img/Partnert/mister.png"
            alt="Snow"
style="width:50%"
          />
        </div>
        </div>
        <div class="carousel">
          <div class="carousel-img-card d-flex align-items-center">
          <img class="carousel-img"
            src="@/assets/img/Partnert/salsa.png"
            alt="Snow"
style="width:50%"
          />
        </div>
        </div>
        <div class="carousel">
          <div class="carousel-img-card d-flex align-items-center">
          <img class="carousel-img"
            src="@/assets/img/Partnert/trave.png"
            alt="Snow"
style="width:50%"
          />
        </div>
        </div>
      </carousel>
      </center>
    </div>
  </div>
</template>
  
  <script>
import carousel from "vue-owl-carousel";

export default {
  name: "DaftarWisata",
  components: {
    carousel,
  },
};
</script>
  
  <style>
    .carousel-img-card {
      width:100%;
      height:300px;
      padding:1em;
      background-color:#fff;

    }
.con {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 130px;
}

.carousel {
  width:100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: auto;
}


</style>
  
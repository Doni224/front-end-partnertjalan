<template>
  <div id="app">
    <div class="con container">
      <h2 class="terbaru">Paket Wisata terbaru untuk kamu</h2>
      <br />
      <carousel  v-if="wisataTerbaru.length > 0"
        :items="1"
        :loop="true"
        :autoplay="true"
        :margin="30"
        :nav="false"
        :dots="true"
        :animateOut="fadeOut"
        :animateIn="fadeIn"
        :autoplayHoverPause="false"
        :responsive="{
          0: {
            items: 1.5,
          },
          500: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        }"
      >
        <div class=" d-flex"  v-for="wisata in wisataTerbaru" :key="wisata.id">
          <div class="carousel col-md-12"> 
            <h3 class="carousel-text">paket wisata <br>{{wisata.namapaket}} </h3>
            <button class="carousel-btn btn btn-primary">Lihat Detail</button>
            <!-- <WisataRekomend/> -->
            <div class="carousel-bg"></div>
            <img class="carousel-img" :src=" pathTerbaru + wisata.pathgambar" alt="about1">
          </div>
        <!-- <img class="aboutimg" :src=" pathRekomen + foto.pathgambar" alt="about1" style="width:100%"> -->
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
//import WisataRekomend from "./wisata/WisataRekomend.vue";
import axios from 'axios';
export default {
  name: "DaftarWisata",
  components: {
    carousel,
   //WisataRekomend
},
data(){
  return{
    wisataTerbaru:[],
      pathTerbaru: this.$pathApi
  }
},

methods: {
   setFoto(data) {
     this.wisataTerbaru = data;
   },
   },
   props: ["wisata"],
 mounted() {
     axios
       .get(this.pathTerbaru + "api/user/halamanutama/terbaru", {
         headers: {
           'ngrok-skip-browser-warning': 1
         }
      })
       .then((response) => this.setFoto(response.data))
       .catch((error) =>
         console.log("gagal :", error));
   },

};
</script>

<style>

.carousel {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 300px;
  
}
.carousel-text {
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
  margin-left: 20px;
  z-index: 551;
  color: #ffffff;
}
.carousel-btn {
  position: absolute;
  bottom: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-bottom: 40px;
}
.carousel-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
}
.carousel-img {
  height:100%;
}
.terbaru{
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  line-height: 43px;
  font-style: normal;
}
</style>

<template>
  <div>
    <div class="con container" >
      <div id="app1" style="width:100%;height:60px"></div>
      <h2 class="terbaik col-md">Paket Wisata terbaik untuk kamu</h2>
      <br />
      <carousel  v-if="rekomen.length > 0"
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
          <div class="carousel" v-for="paket in rekomen" :key="paket.id">
            <h3 class="carousel-text">Paket Wisata <br />{{paket.kota.kota}}</h3>
            <button class="carousel-btn btn btn-primary">
              <router-link class="nav-link" :to="{ name: 'paket', params: { id: paket.id } }">Lihat Detail</router-link>
            </button>
            <div class="carousel-bg"></div>
            <img class="carousell-img" :src="pathRekomen + paket.kota.pathgambar" alt />
          </div>

      </carousel>
    </div>
  </div>
</template>
  
  <script>
    import axios from 'axios';
import carousel from "vue-owl-carousel";

export default {
  name: "DaftarWisata",
  components: {
    carousel,
  },
  data(){
    return{
      rekomen:[],
      pathRekomen: this.$pathApi
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      try {
        const rekomen = await axios.get(this.pathRekomen + "api/user/halamanutama/terbaik/", {
          headers: {
            "ngrok-skip-browser-warning": 1,
          },
        });

        this.rekomen = rekomen.data;
      } catch (e) {
        console.log(e);
      }
    },
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
.carousell-img {
  height:100%;
}
.terbaik{
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  line-height: 43px;
  font-style: normal;
}


</style>
  
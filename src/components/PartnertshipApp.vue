<template>
  <div class="mypartnership">
    <div class="container"  >
      <h2 class="partnert">Partnership Kami</h2>

      <carousel  v-if="fotoProfil.length > 0"
        :items="1"
        :loop="true"
        :autoplay="true"
        :margin="20"
        :nav="true"
        :dots="false"
        :animateOut="fadeOut"
        :animateIn="fadeIn"
        :autoplayHoverPause="false"
        :responsive="{
          0: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        }"
      >
      <div class="carousellah"  v-for="foto in fotoProfil" :key="foto.id">
          <div class="carousel-img-card d-flex align-items-center justify-content-center" >
          <img class="carousel-img"
           :src="pathPartnert + foto.path" alt="Snow"/> 
         </div>
        </div>
        <!-- <div class="carousellah d-flex" >
          <div class="carousel-img-card d-flex align-items-center justify-content-center"
         >
           <img class="carousel-img"
           :src="pathPartnert + foto.path"
                  alt="Snow"
style="width:50%"
          
        </div>
        </div> -->

        <!-- <div class="carousel">
          <div class="carousel-img-card d-flex align-items-center justify-content-center">
           <img class="carousel-img"
            src="@/assets/img/Partnert/mister.png"
            alt="Snow"
style="width:40%"
          
        </div>
        </div> -->
        <!-- <div class="carousel">
          <div class="carousel-img-card d-flex align-items-center justify-content-center">
           <img class="carousel-img"
            src="@/assets/img/Partnert/salsa.png"
            alt="Snow"
style="width:50%"
          />
        </div>
        </div>
        <div class="carousel">
          <div class="carousel-img-card d-flex align-items-center justify-content-center">
           <img class="carousel-img"
            src="@/assets/img/Partnert/trave.png"
            alt="Snow"
style="width:50%"
          /> 
        </div>
        </div> -->
      </carousel>
    </div>
  </div>
</template>
  
  <script>
import carousel from "vue-owl-carousel";

import axios from "axios";
export default {
  name: "DaftarWisata",
  components: {
    carousel,
  },
  data() {
    return {
      fotoProfil: [],
      pathPartnert: this.$pathApi,
    };
  },
  methods: {
    setFoto(data) {
      this.fotoProfil = data;
    },
  },
  props: ["foto"],
  mounted() {
    axios
      .get(this.pathPartnert + "api/user/partnership", {
        headers: {
          "ngrok-skip-browser-warning": 1,
        },
      })
      .then((response) => this.setFoto(response.data))
      .catch((error) => console.log("gagal :", error));
  },
};
</script>
  
<style>
.mypartnership {
  height: 200px;
}
.carousel-img-card {
  padding: 1em;
  background-color: #fff;
}

.carousellah {
  width: 90%;
  position: relative;
  overflow: hidden;
  padding: 15px 0px 0px;
}
.partnert{
  
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  line-height: 43px;
  font-style: normal;
}
</style>
  
<template>
  <div id="app " style="background-color: #f5f6f8; height: 500px">
    <div class="conku container">
      <h2 class="text pt-5">Apa yang pelanggan katakan tentang kami?</h2>
      <br />
      <carousel
        :items="2"
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
            items: 1,
          },
          768: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        }"
      >
        <div class="carouselku">
          <h3 class="carousel-textku">
            Testimoni untuk paket <br />
            wisata yogyakarta
          </h3>
          <div class="carousel-bglu">
            <a @click="modalShow = !modalShow"
              ><img
                class="carousel-imgku"
                src="../assets/img/testimoni/Group 127(1).png"
                alt
              />
            </a>
          </div>
          <div class="carousel-bgku"></div>
          <b-modal v-model="modalShow" class="mob">
            <img
              class="carousel-img2"
              src="../assets/img/testimoni/Group 127(1).png"
              alt
            />
          </b-modal>
        </div>
        <div class="carouselku">
          <h3 class="carousel-textku">
            Testimoni untuk paket <br />
            wisata jakarta
          </h3>
          <div class="carousel-bglu">
            <a @click="modalShow1 = !modalShow1"
              ><img
                class="carousel-imgku"
                src="../assets/img/testimoni/Group 129.png"
                alt
              />
            </a>
          </div>
          <div class="carousel-bgku"></div>
          <b-modal v-model="modalShow1" class="mob">
            <img
              class="carousel-img2"
              src="../assets/img/testimoni/Group 129.png"
              alt
            />
          </b-modal>
        </div>
        <div class="carouselku">
          <h3 class="carousel-textku">
            Testimoni untuk paket <br />
            wisata semarang
          </h3>
          <div class="carousel-bglu">
            <a @click="modalShow2 = !modalShow2"
              ><img
                class="carousel-imgku"
                src="../assets/img/testimoni/Group 124.png"
                alt
              />
            </a>
          </div>
          <div class="carousel-bgku"></div>
          <b-modal v-model="modalShow2" class="mob">
            <img
              class="carousel-img2"
              src="../assets/img/testimoni/Group 124.png"
              alt
            />
          </b-modal>
        </div>
      </carousel>
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
  data() {
    return {
      modalShow: false,
      modalShow1: false,
      modalShow2: false,
    };
  },
};
</script>
  
  <style>
.conku h2 {
  font-family: "Lato", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  margin-top: 9px;
}

.carouselku {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 259px;
  width: 340px;
}
.carousel-textku {
  position: absolute;
  font-family: "Lato", sans-serif;
  font-style: normal;
  bottom: 0;
  margin-bottom: 10px;
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
.carousel-bgku {
  width: 100%;
  position: absolute;
  margin-left: 20px;
  bottom: 0;
  height: 40%;
  background: linear-gradient(transparent, #000000);
  opacity: 20;
  z-index: 550;
}
.carousel-imgku {
  width: 900px;
  height: 900px;
}
.carousel-img2 {
  transform: scale(1.5);
  height: 400px;
  width: 350px;
  margin-left: 70px;
}
.mob {
  visibility: visible;
}
@media only screen and (max-width: 380px) {
  .carousel-img2 {
    transform: scale(1.5);
    height: 290px;
    width: 290px;
    margin-left: 7px;
  }
}
</style>
  
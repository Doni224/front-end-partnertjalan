<template>
  <div class="container-fluid" style="background-color: #f5f6f8;padding-top:21px;padding-bottom:42px;">
    

    <div class="container">
      <h2 class="col mt-5">Paket wisata yang bisa kamu pilih</h2>
      <div class="row " style="margin-top:42px;" >
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 listpaket paketWisatasemua"  v-for="wisata in wisataSemua" :key="wisata.id">
          <h3 class="paketWisata-text-semua">Paket Wisata <br />{{wisata.kota}}</h3>
          <button class="paketWisatasemua-btn btn btn-primary">
            <router-link class="nav-link" :to="{ name: 'paket', params: { id: wisata.id } }">Lihat Detail</router-link></button>
          <div class="paketWisatasemua-bg"></div>
          <img
            class="paketWisatasemua-img"
            :src="pathKota + wisata.pathgambar"
            alt
          />
        </div>

      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
  return{
    wisataSemua:[],
      pathKota: this.$pathApi,
      search: '',
  }
},

methods: {
   setFoto(data) {
     this.wisataSemua = data;
   },
   },
   props: ["wisata"],
 mounted() {
     axios
       .get(this.pathKota + "api/dashboard/kota", {
         headers: {
           'ngrok-skip-browser-warning': 1
         }
      })
       .then((response) => this.setFoto(response.data))
       .catch((error) =>
         console.log("gagal :", error));
   },

  }
</script>
<style>

.paketWisatasemua {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width:100%;
  height: 300px;
  margin: 20px 0px 20px;
}
.paketWisata-text-semua {
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
  margin-left: 20px;
  z-index: 551;
  color: #ffffff;
}
.paketWisatasemua-btn {
  position: absolute;
  bottom: 0;
  z-index: 552;
  margin-left: 20px;
  margin-bottom: 40px;
}
.paketWisatasemua-img {
  width:100%;
  height: 95%;
  border-radius: 10px;
}
.paketWisatasemua-bg {
  width: 95%;
  position: absolute;
  border-radius: 10px;
  height: 95%;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
}
/* .carousel-img {
  transform: scale(1.5);
} */
/* #carii {
  text-align: center;
  margin-top: 0px;
}
.ak h2 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
}
.carou {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
  width: 90px;
  margin: 20px 0px 20px;

}
.carou-text {
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
  margin-left: 20px;
  z-index: 551;
  color: #ffffff;
}
.carou-btn {
  position: absolute;
  bottom: 0;
  z-index: 1;
  margin-left: 20px;
  margin-bottom: 40px;
}
.carou-bg {
  width: 99%;
  position: absolute;
  bottom: 0;
  height: 90%;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
  right: 70px;
}
.carou-img {
  transform: scale(1.9);
  width: 170px;
  height: 280px;
}
@media only screen and (max-width: 800px) {
  #carii {
    margin-top: 30px;
  }
  .ak h2 {
    font-size: 24px;
  }
  .carou-img {
    width: 120px;
    height: 210px;
  }
  .carou-bg {
    width: 100%;
    height: 86%;
    right: 0px;
  }
  .carou {
    height: 300px;
    width: 90px;
    margin-left: 20px;
  }
}
@media only screen and (max-width: 380px) {
  .ak h2 {
    font-size: 18px;
  }
  .carou-bg {
    width: 76%;
    height: 99%;
    left: 0px;
  }
  .carou-img {
    width: 179px;
    height: 220px;
  }
  .carou {
    margin: 0px 40px 20px;
  }
} */
</style>
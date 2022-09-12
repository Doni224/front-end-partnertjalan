<template>
  <div class="container-fluid flu" style="background-color: #F5F6F8;">
    <div class="ak col" id="carii">
      <h2 class="col mt-5">Paket wisata yang bisa kamu pilih</h2>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="carou col-md-3">
          <h3 class="carou-text">Paket Wisata <br />Jakarta</h3>
          <button class="carousel-btn btn btn-primary">Lihat Detail</button>
          <div class="carou-bg"></div>
          <img class="carou-img" src="../assets/img/paket/dieng.jpg" alt />
        </div>
        <div class="carou col-md-3">
          <h3 class="carou-text">Paket Wisata <br />Bali</h3>
          <button class="carousel-btn btn btn-primary">Lihat Detail</button>
          <div class="carou-bg"></div>
          <img class="carou-img" src="../assets/img/paket/bali.jpg" alt />
        </div>
        <div class="carou col-md-3">
          <h3 class="carou-text">Paket Wisata <br />Jakarta</h3>

          <button class="carousel-btn btn btn-primary">Lihat Detail</button>
          <div class="carou-bg"></div>
          <img class="carou-img" src="../assets/img/paket/jakarta.jpg" alt />
        </div>
        <div class="carou col-md-3">
          <h3 class="carou-text">Paket Wisata <br />Dieng</h3>
          <button class="carousel-btn btn btn-primary">Lihat Detail</button>
          <div class="carou-bg"></div>
          <img class="carou-img" src="../assets/img/paket/dieng.jpg" alt />
        </div>
        <div class="carou col-md-3">
          <h3 class="carou-text">Paket Wisata <br />Dieng</h3>
          <button class="carousel-btn btn btn-primary">Lihat Detail</button>
          <div class="carou-bg"></div>
          <img class="carou-img" src="../assets/img/paket/dieng.jpg" alt />
        </div>
        <div class="carou col-md-3">
          <h3 class="carousel-text">Paket Wisata <br />Dieng</h3>
          <button class="carousel-btn btn btn-primary">Lihat Detail</button>
          <div class="carou-bg"></div>
          <img class="carou-img" src="../assets/img/paket/dieng.jpg" alt />
        </div>
        <div class="carou col-md-3">
          <h3 class="carou-text">Paket Wisata <br />Dieng</h3>
          <button class="carousel-btn btn btn-primary">Lihat Detail</button>
          <div class="carou-bg"></div>
          <img class="carou-img" src="../assets/img/paket/dieng.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
#carii {
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
  margin:20px 0px 20px;
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
  z-index: 9999;
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
  #carii{
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
.carou{
  margin:0px 40px 20px;
}

}
</style>
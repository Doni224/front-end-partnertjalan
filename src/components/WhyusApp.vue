<template>
  <div class="container">
    <div class="hero-dk h-100">
      <div class="row">
        <div class="aku col-md-6">
          <h1>Kenapa Memilih Kami?</h1>
          <img class="gbr" src="@/assets/img/kacamta.png" alt="" />
        </div>
        <div class="row col-md-6">
            <div class="aku1  ">
          <p class="kete">
            Kami siap mengantarkan kamu ke berbagai destinasi menarik di
            berbagai kota wisata terbaik di indonesia dan kami jamin kamu bakal
            dapat pengalaman yang terbaik deh.
          </p>
          <div class="icon d-flex">
            <div class="dolar">
              <img src="@/assets/img/Icons/price.png" alt="" />
              <p style="font-size:18px;">Range harga terbaik dan terjangkau</p>
            </div>
            <div class="dolar">
              <img src="@/assets/img/Icons/home.png" alt="" />
              <p>Beragam akomodasi yang bisa di pilih</p>
            </div>
            <div class="dolar">
              <img src="@/assets/img/Icons/place.png" alt="" />
              <p>Tempat wisata favorit di indonesia</p>
            </div>
          </div>
        </div>
        </div>
      
      </div>
    </div>
   
  </div>
</template>
<script>
</script>
<style>
p {
  font-size:18px;
}
.aku h1 {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  padding-top: 5%;
  font-size: 30px;
  line-height: 36px;
}
.aku p {
  font-weight: 400;
  padding-top: 17%;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-style: normal;
  line-height: 150%;
}
.aku img {
  margin-top: 6%;
  width: 480px;
  height: 387px;
}
.icon img {
  width: 70px;
  height: 70px;
  margin-top: 25px;
  margin-left: 55px;
}
@media only screen and (max-width: 800px) {
  .hero-dk .gbr {
    display: none;
  }
  
}
.icon {
  justify-content: space-between;
}
.icon p {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  line-height: 150%;
  text-align: center;
  margin-bottom: 90%;
}
.aku1 .kete{
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin-top: 140px;
 
}
.aku1{
  width: 90%;
 
}

</style>
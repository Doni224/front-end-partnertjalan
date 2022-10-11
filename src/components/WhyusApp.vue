<template>
  <div class="container whyus">
    <h3 style="" class="kenapa">Kenapa Memilih Kami ?</h3>
    <div class="row">
      <div class="col-md-6">
        <img class="gbr" src="@/assets/img/kacamta.png" style="width:100%" />
      </div>
      <div class="col-md-6">
        <br>
        <div class="whycards">
          <p class="whydesc">
            Kami siap mengantarkan kamu ke berbagai destinasi menarik di
            berbagai kota wisata terbaik di indonesia dan kami jamin kamu bakal
            dapat pengalaman yang terbaik deh.
          </p>
          <div class="row">
            <div class="whycard col-4">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <img src="@/assets/img/Icons/price.png" alt="" />
                  </div>
                  <div class="col-12">
                    <p class="text-center">Range harga terbaik dan terjangkau</p>
                  </div>
                </div>
            </div>
            <div class="whycard col-4">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <img src="@/assets/img/Icons/home.png" alt="" />
                  </div>
                  <div class="col-12">
                    <p class="text-center">Beragam akomodasi yang bisa di pilih</p>
                  </div>
                </div>
            </div>
            <div class="whycard col-4">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <img src="@/assets/img/Icons/place.png" alt="" />
                  </div>
                  <div class="col-12">
                    <p class="text-center">Tempat wisata favorit di indonesia</p>
                  </div>
                </div>
            </div>
 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .whyus {
    padding-top:84px;
    padding-bottom:84px;
  }

  .whycards {
    padding:1em;
  }

  .whycard {
    width:33.33%;
    background:#fff;
  }
  .whydesc {
    margin-bottom: 42px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
  }
  .whycard p {
    margin-top:21px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
  .kenapa{
    margin-bottom:42px;
    font-family: 'Lato', sans-serif;
  font-weight: bold;
  line-height: 43px;
  font-style: normal;
  }
</style>
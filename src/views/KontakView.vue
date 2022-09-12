<template>
  <div class="">
    <div style="padding-right: 9px">
      <NavigationApp />
      <div class="container">
        <div class="kontak row">
          <h1>Kontak Kami</h1>
          <p>
            Hubungi kami, jika ingin paket wisata secara custom <br />
            atau ada pertanyaan terkait layanan kami.
          </p>
        </div>
        <div class="kontak1 row">
          <div class="jr col-md-6">
            <h1>Hubungi kami melalui</h1>
            <div class="ikon mt-5">
              <img class="phone" src="@/assets/img/Icons/phone.png" />
              <p>0852 705 705 30</p>
              <img class="email" src="@/assets/img/Icons/email.png" alt="" />
              <p class="title-email">partnerjalantour@gmail.com</p>
            </div>
          </div>
          <div class="sos col-md-5">
            <h1>Media sosial kami</h1>
            <div class="sosmed d-flex mt-5">
              <div class="sos1">
                <img class="ig" src="@/assets/img/Icons/Icons1/instagram.png" />
                <p class="tulis-sos">partnerjalan_id</p>
                <img class="fb" src="@/assets/img/Icons/Icons1/facebook.png" />
                <p class="tulis-sos">partnerjalan_id</p>
              </div>
              <div class="sos2">
                <img class="twt" src="@/assets/img/Icons/Icons1/twitter.png" />
                <p class="tulis-sos">partnerjalan_id</p>
                <img class="ytb" src="@/assets/img/Icons/Icons1/youtube.png" />
                <p class="tulis-sos">partnerjalan_id</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterApp />
  </div>
</template>
<script>
import NavigationApp from "@/components/NavigationApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  components: { NavigationApp, FooterApp },
};
</script>
<style>
.kontak h1 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  margin-top: 50px;
}
.kontak p {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
}

.kontak1 {
  padding-top: 50px;
}

.jr h1 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
}
.sos h1 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  background-color: blue;
}
.ikon p {
  text-align: justify;

  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 150%;
}
.ikon .phone {
  float: left;
  margin: 0 15px 3px 0;
  width: 50px;
  height: 42px;
}
.ikon .email {
  float: left;
  margin: 9px 15px 3px 0;
  width: 50px;
  height: 42px;
}
.ikon .title-email {
  text-align: justify;
  margin-top: 6%;
  font-size: 19px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 150%;
}
.sosmed .ig {
  float: left;

  width: 45px;
  height: 42px;
}
.sosmed .tulis-sos {
  text-align: justify;
  font-size: 19px;
  font-family: "Roboto", sans-serif;
  margin-left: 66px;
  font-weight: 400;
  font-style: normal;
  line-height: 150%;
}
.sosmed .fb {
  float: left;
  margin: 9px 0px 0px 0;
  width: 45px;
  height: 42px;
}
.sos2 {
  margin-left: 45px;
}
.sos2 .twt {
  float: left;
  width: 45px;
  height: 42px;
}
.sos2 .tulis-sos {
  text-align: justify;
  font-size: 19px;
  font-family: "Roboto", sans-serif;
  margin-left: 66px;
  font-weight: 400;
  font-style: normal;
  line-height: 150%;
}
.sos2 .ytb {
  float: left;
  margin: 9px 0px 3px 0;
  width: 45px;
  height: 42px;
}
@media only screen and (max-width: 800px) {
  .sos {
    padding-top: 90%;
  }
}
</style>

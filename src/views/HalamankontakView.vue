<template>
  <div class="fasilitasBox1">
    <div class="container-fl bg-white">
      <NavigationApp />
    </div>

    <div class="row">
      <div class="teks-gambar">
        <h2 class="head">Kontak Kami Melalui</h2>
        <p class="head1">
          Hubungi kami, jika ingin paket wisata secara custom <br />
          atau ada pertanyaan terkait layanan kami.
        </p>
      </div>
    </div>
    <div class="box row">
      <div
        class="big col-lg-4 offset-lg-2 col-sm-12 mt-3 col-md-5 offset-md-1"
      >
        <div class="flexbox mt-4">
          <h2>Hubungi kami melalui</h2>
          <div class="kontak d-flex">
            <img src="@/assets/img/Icons/phone.png" alt="" />
            <p>0852 7057 0530</p>
          </div>
          <div class="kontak d-flex">
            <img src="@/assets/img/Icons/email.png" alt="" />
            <p>partnerjalantour@gmail.com</p>
          </div>
        </div>
      </div>
      <div
        class="big col-lg-4 col-md-5 col-sm-12 mt-3 " id="shift"
      >
        <div class="flexbox mt-4">
          <h2>Media sosial kami</h2>
        </div>
        <div class="main-section">
          <div class="ig-fb d-flex">
            <div class="cardo">
              <img src="@/assets/img/Icons/Icons1/instagram.png" alt="" />
              <P>partnerjalan_id</P>
            </div>
            <div class="cardo" style="margin-left: 2%">
              <img src="@/assets/img/Icons/Icons1/twitter.png" alt="" />
              <P>partnerjalan_id</P>
            </div>
          </div>
          <div class="twt-ytb mt-3 d-flex">
            <div class="cardo">
              <img src="@/assets/img/Icons/Icons1/facebook.png" alt="" />
              <p>PartnerJalan</p>
            </div>
            <div class="cardo" style="margin-left: 6%">
              <img src="@/assets/img/Icons/Icons1/youtube.png" alt="" />
              <p>Partner Jalan ID</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coll" style="margin-top:40px;">
      <FooterApp />
    </div>
  </div>
</template>
  
  <script>
import FooterApp from "@/components/FooterApp.vue";
import NavigationApp from "@/components/NavigationApp.vue";

export default {
  components: {
    FooterApp,
    NavigationApp,
  },
};
</script>
  
  <style>
.fasilitasBox1 {
  background: #eee7e7;
  flex-wrap: wrap;
}
.box .big {
  background-color: white;
  border-radius: 12px;
  height: 250px;
}
.teks-gambar {
  background-image: url("@/assets/img/img-kontak.png");
  background-size: contain;
  height: 260px;
}
.teks-gambar .head {
  padding: 70px 100px 30px;
  color: white;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
}
.teks-gambar .head1 {
  color: white;
  padding-left: 100px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
}
.flexbox h2 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin-left: 12px;
}
#shift{
  margin-left: 10px;
}
.kontak img {
  width: 54px;
  height: 54px;
  left: 1044px;
  top: 471px;
  margin-top: 19px;
  margin-left: 17px;
}
.kontak p {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  margin-top: 29px;
  margin-left: 9px;
}
.main-section {
  margin-top: 9px;
}
.main-section .cardo img {
  width: 54px;
  height: 54px;
  margin-left: 12px;
}
.main-section .cardo p {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 150%;
  margin-top: 15px;
  margin-left: 9px;
}
.cardo {
  display: flex;
}
@media only screen and (max-width: 800px) {
  .kontak img {
    width: 32px;
    height: 32px;
  }
  .kontak p {
    font-size: 16px;
    padding-bottom: 8px;
  }
  .main-section .cardo img {
    width: 31px;
    height: 31px;
    margin-top: 12px;
  }
  .main-section .cardo p {
    font-size: 15px;
    font-weight: 400;
  }
  .teks-gambar {
 
  background-size: cover;
}

}
@media only screen and (max-width: 380px) {
  .teks-gambar .head {
  padding: 70px 50px 30px;
  font-size: 24px;
}
.teks-gambar .head1 {
  padding-left: 50px;
  font-size: 14px;
}
.box .big {
  width: 350px;
  margin-left: 25px;
}
#shift{
  margin-left: 23px;
}

}
</style>
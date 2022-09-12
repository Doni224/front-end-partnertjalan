<template>
  <div class="contanier-fluid">
    <div class="navi bg-white">
      <NavigationApp />
    </div>
    <div class="container-fluid mt-5 bg-light" id="sampul" >
      <div class="container">
        <div class="row aboutku">
          <div class="col-md-8 mt-4 bg-white" id="tentang" >
            <h2>Tentang kami</h2>
            <p class="tiki1" id="tuki">
              PartnerJalan adalah perusahaan manajemen perjalanan wisata yang
              berprinsip pada spititual, intelektual dan profesional dalam
              setiap program maupun pelayanannya. Partnerjalan lahir diujung
              tahun 2021. <br />
              Selanjutnya PartnerJalan berkomitmen untuk terus mengembangkan
              pelayanan dalam memberi fasilitas perjalanan liburan, wisata
              edukasi, serta manajemen pertemuan korporasi
            </p>
          </div>

          <div class="bungkus-img col-sm-3 logo-s mt-4">
            <div class="logox">
              <img
              class=" mx-auto d-block mt-4"
              src="@/assets/img/logo.png"
              alt=""
            />
            </div>
            
            <div class="cols-md-4 mt-4" style="">
              <img
                alt=""
                src="@/assets/img/kontak/Mask group.png"
                style="height: 330px; width: 380px"
              />
            </div>
            <div class="cols-md-4 mt-4" style="">
              <img
                alt=""
                src="@/assets/img/kontak/orang.png"
                style="height: 330px; width: 380px"
              />
            </div>
          </div>
          <div class="col-md-8 mt-4 bg-white" id="tentang">
            <h2
              class="vimi"
            >
              Visi dan Misi
            </h2>
            <div class="title" id="koki">
              <li class="tik1">
                <p>
                  Partnerjalan memiliki misi untuk menyediakan dan memperluas
                  akses terhadap <br> pariwisata berkualitas melalui teknologi untuk
                  masyarakat umum khususnya <br> semua siswa, mahasiswa, maupun
                  karyawan kapan saja dan di mana saja.
                </p>
              </li>
              <li class="tik1">
                <p>
                  Kami percaya bahwa pariwisata adalah kebutuhan setiap manusia
                  di era sekarang. <br> Maka dari itu, kami bertujuan untuk
                  menyediakan program pelayanan pariwisata <br> yang bisa diakses
                  secara mudah dengan biaya yang terjangkau.
                </p>
              </li>
              <li class="tik1">
                <p>
                  Kami juga bertujuan untuk meningkatkankualitas wisatawan lokal
                  dengan <br> memberikan edukasi serta menciptakan lapangan pekerjaan
                  dan tambahan <br> penghasilan bagi anak-anak muda di Indonesia.
                </p>
              </li>
              <li class="tik1">
                <p>
                  Kami bertekad untuk terus mengembangkan layanan kami serta
                  berkolaborasi <br> dengan berbagai pihak guna mencapai
                  tujuan-tujuan kami.
                </p>
              </li>
              <li class="tik1">
                <p>
                  Partnerjalan juga percaya bahwa teknologi memudahkan
                  masyarakat untuk <br> menjalankan aktivitasnya menjadi lebih
                  efektif dan efisien.
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="food mt-0">
      <FooterApp/>
    </div>
  </div>
</template>
<script>
import NavigationApp from "@/components/NavigationApp.vue";
import FooterApp from "@/components/FooterApp.vue";
export default {
  components: {
    NavigationApp,
    FooterApp
  },
};
</script>
<style>
.bungkus-img {
  margin-left: 10px;
  background-color: white;
  width: 500px;
  height: 100px;
  left: 1169px;
  border-radius: 12px;
  top: 136px;
}
.logo-s img {
  width: 193px;
  height: 60.57px;
  left: 1232px;
  top: 168px;
}
#sampul{
  height: 900px;
}
#tentang h2 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  padding: 25px 20px 4px;
}
#tentang p {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  padding: 9px 23px 8px;
  color: rgba(51, 51, 51, 0.68);
}
#tentang li{
  margin-left: 36px;
}
@media only screen and (max-width: 800px) {
  #tentang h2 {
  font-size: 25px;
  }
  .bungkus-img{
    display: none;
  }
  .aboutku #tentang{
   width: 900px;
 
  }
  #sampul{
  height: 930px;
}
}
@media only screen and (max-width: 380px) {
  #tentang h2 {
  font-size: 25px;
  }
  .bungkus-img{
    display: none;
  }
 
  .aboutku #tentang #tuki{
    height: 430px;
  }
  .aboutku #tentang #koki{
   
    height: 1149px;
  }
  #tentang p {
  font-size: 19px;
  padding: 9px 7px 8px;
  
}
#tentang li{
  margin-left: 36px;
}
#sampul{
  height: 1800px;
}
.food{
  padding-top: 0px;
}
}
</style>


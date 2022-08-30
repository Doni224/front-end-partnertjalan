<template>
  <div class="container-fluid">
    <NavigationApp />
    <div class="row">
      <div class="col-md-5">
        <img
          style="width: 446px; height: 363px; margin-right: 10%"
          src="@/assets/img/logo-about.png"
          alt=""/>
      </div>
      <div class="col-md-6">
        <h1
          class="heading"
          style="
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 25px;">
          Tentang Kami
        </h1>
        <p
          class="subheading"
          style="font-family:'Roboto',sans-serif;font-style: normal; padding-top:9px; 400;font-size: 18px;">
          PartnerJalan adalah perusahaan manajemen perjalanan wisata yang
          berprinsip pada spititual, intelektual dan profesional dalam setiap
          program maupun pelayanannya. Partnerjalan lahir diujung tahun 2021.
          Selanjutnya PartnerJalan berkomitmen untuk terus mengembangkan
          pelayanan dalam memberi fasilitas perjalanan liburan, wisata edukasi,
          serta manajemen pertemuan korporasi.
        </p>
        <br />
        <h1
          class="vimi"
          style="
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 25px;">
          Visi dan Misi
        </h1>
        <div class="title">
          <li
            class="tik1"
            style="
              font-family: 'Roboto', sans-serif;
              padding-top: 9px;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;">
            <p>
              Partnerjalan memiliki misi untuk menyediakan dan memperluas akses
              terhadap pariwisata berkualitas melalui teknologi untuk masyarakat
              umum khususnya semua siswa, mahasiswa, maupun karyawan kapan saja
              dan di mana saja.
            </p>
          </li>
          <li
            class="tik1"
            style="
              font-family: 'Roboto', sans-serif;
              padding-top: 9px;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;">
            <p>
              Kami percaya bahwa pariwisata adalah kebutuhan setiap manusia di
              era sekarang. Maka dari itu, kami bertujuan untuk menyediakan
              program pelayanan pariwisata yang bisa diakses secara mudah dengan
              biaya yang terjangkau.
            </p>
          </li>
          <li
            class="tik1"
            style="
              font-family: 'Roboto', sans-serif;
              padding-top: 9px;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;">
            <p>
              Kami juga bertujuan untuk meningkatkankualitas wisatawan lokal
              dengan memberikan edukasi serta menciptakan lapangan pekerjaan dan
              tambahan penghasilan bagi anak-anak muda di Indonesia.
            </p>
          </li>
          <li
            class="tik1"
            style="
              font-family: 'Roboto', sans-serif;
              padding-top: 9px;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;">
            <p>
              Kami bertekad untuk terus mengembangkan layanan kami serta
              berkolaborasi dengan berbagai pihak guna mencapai tujuan-tujuan
              kami.
            </p>
          </li>
          <li
            class="tik1"
            style="
              font-family: 'Roboto', sans-serif;
              padding-top: 9px;
              font-style: normal;
              font-weight: 400;
              font-size: 18px;">
            <p>
              Partnerjalan juga percaya bahwa teknologi memudahkan masyarakat
              untuk menjalankan aktivitasnya menjadi lebih efektif dan efisien.
            </p>
          </li>
          <div class="classs"></div>
        </div>
      </div>
    </div>
    <FooterApp />
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


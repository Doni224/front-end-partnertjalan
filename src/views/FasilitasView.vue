<template>
  <div class="fasilitasBox">
    <NavigationApp/>
    <div class="container box">
        <h3 style="margin-top:42px;margin-bottom:21px;">Fasilitas yang didapatkan</h3>
            <div class="row d-flex justify-content-between">
                <div class="col-md-3 fasilitasList p-5">
                    <h4>Fasilitas Tour</h4>
                    <ol>
                        <li>Transportasi Bus Pariwisata</li>
                        <li>Profesional Tour Leader</li>
                        <li>Photographer Kegiatan</li>
                        <li>Biaya Parkir Bus</li>
                        <li>Tips Driver</li>
                        <li>Tips Co Driver</li>
                        <li>P3K</li>
                        <li>Banner Kegiatan</li>
                    </ol>
                </div>
                <div class="col-md-3 fasilitasList p-5">
                    <h4>Fasilitas Peserta</h4>
                    <ol>
                        <li>Tiket Masuk Destinasi</li>
                        <li>Dokumentasi Video</li>
                        <li>Air Mineral</li>
                        <li>Snack</li>
                        <li>Makan Berat</li>
                    </ol>
                </div>
                <div class="col-md-3 fasilitasList p-5">
                    <h4>Bonus</h4>
                    <ol>
                        <li>Frame Photo 12R/Organisasi</li>
                        <li>Photo 4R/Peserta</li>
                        <li>Soft File Photo</li>
                        <li>Doorprize</li>
                        <li>Poster Kegiatan</li>
                    </ol>
                </div>
            </div>
            <div style="padding-bottom:3rem"></div>
        </div>
    <FooterApp/>
  </div>
</template>

<script>
import FooterApp from "@/components/FooterApp.vue";
import NavigationApp from "@/components/NavigationApp.vue";
export default{
  components:{
    FooterApp,
    NavigationApp
}
}
</script>

<style>

    .fasilitasBox {
        background:#f5f6f8;
    }
    .fasilitasList {

        background:#fff;
        border-radius:8px;
    }
    h4 {
        color:#55C9D3;
    }
</style>
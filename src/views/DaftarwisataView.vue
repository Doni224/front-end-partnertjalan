<template>
<div>
  <div class="navi">
    <NavigationApp />
    <div class="continer" id="cari">
      <div class="row-mt-4">
        <div class="aku col">
          <h2>Mau wisata kemana hari ini ?</h2>
        </div>
      </div>
      <div class="row-mt-3">
        <div class="aki col">
           
          <div class="input-group mb-3 ">
            <input
              type="text"
              class="form-control"
              placeholder="Cari partnert anda"
              aria-label="Cari"
              aria-describedby="button-addon2"
            />
            <button 
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            > <b-icon-search></b-icon-search>
              Cari
            </button>
          </div>
        </div>
      </div>
      <div class="inputt"></div>
    </div>
    
  </div>
  <DetaildaftarWisata/>
  </div>
</template>
<script>
import NavigationApp from "@/components/NavigationApp.vue";
import DetaildaftarWisata from "../components/DetaildaftarWisata.vue";
export default {
  components: { NavigationApp, DetaildaftarWisata },
};
</script>
<style>
#cari {
  text-align: center;
}
.aku h2 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;

  margin-top: 60px;
}
.aku .tabel {
  width: 500px;
  justify-content: center;
}
.aki {
  width: 600px;
  margin: auto;
}
</style>
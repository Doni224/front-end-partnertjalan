<template>
  <div class="conta">
    <NavigationApp />
    <div class="sampul">
            <img
              src="@/assets/img/testimoni/image 7.png"
              alt=""
            />
          </div>
    <div class="container-fluid mt-5" id="bodi" style="height:490%;">
            <div class="pesan-dk">
                <div class="container mt-5">
            <div class="col-md-6">
                <div class="titele">
                    <h2>Cek Pemesanan</h2>
              <p>
                Cek kode pemesanan dibawah untuk melihat detail pemesanan paket
                wisata yang sudah kamu pesan.
              </p>
                </div>
             
              <div class="row">
                <div class="col">
                  <div class="input-group mb-3">
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
                    >
                      <b-icon-search></b-icon-search>
                      Cari
                    </button>
                  </div>
                  <div class="col-md-6 box-sampul">
                    <div class="sampul1 mt-5">
                        <h1>hello</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
         <div class="pesan-mb">
            <div class="container mt-5">
            <div class="col-md-6">
                <div class="titele">
                    <h2>Cek Pemesanan</h2>
              <p>
                Cek kode pemesanan dibawah untuk melihat detail pemesanan paket
                wisata yang sudah kamu pesan.
              </p>
                </div>
             
              <div class="row">
                <div class="col">
                  <div class="input-group mb-3">
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
                    >
                      <b-icon-search></b-icon-search>
                      Cari
                    </button>
                  </div>
                  <div class="col-md-6 box-sampul">
                    <div class="sampul1  mt-5">
                        <h1>hello</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
      
    <FooterApp class="mt-0"/>
   </div>
</template>
<script>
import NavigationApp from "./NavigationApp.vue";
import FooterApp from "./FooterApp.vue";

export default {
  components: { NavigationApp, FooterApp },
};
</script>
<style scoped>
#bodi {
  background-color: #f5f6f8;
}
.sampul1{
    width: 500px;
    height: 300px;
}
.sampul img {
  padding: 12px 0px 0px 80px;
  width: 736px;
  height: 548px;
  left: 1084px;
  top: 80px;
  position: relative;
  top: 0;
  left: 0;
  float: right;
}
.sampul1{
  background-color: #fff;
  width: 200%;
}
.pesan-mb{
    display: none;
}
.titele{
    padding: 20px 5px 0px 10px;
    
}
@media only screen and (max-width: 768px){
.sampul img {
  padding: 1px 0px 0px 0px;
  width:100%;
  height: 364px;
  left: 1084px;
  top: 80px;
  position: relative;
  top: 0;
  left: 0;
  float: none;

}
/* .box-sampul{
  padding: 0px 50px 0px ;
 
}   */
.sampul1{
  width: 400%;
 
}
}
@media only screen and (max-width: 380px){
  .sampul1{
    width: 100%;
  }
}
</style>
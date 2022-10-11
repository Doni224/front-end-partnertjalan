<template>
  <div>
    <NavigationApp />
    <div class="container-fluid detailPemesanan" style="padding:84px 0">
      <div class="container">
        <div class="breadCrumb">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="text-decoration-none" style="cursor: pointer;" v-on:click="navigate()">Home</a></li>
                <li class="breadcrumb-item"><a class="text-decoration-none" style="cursor: pointer;" v-on:click="navigate()">Paket Wisata{{ semua.kota}}</a></li>
                <li class="breadcrumb-item"><a class="text-decoration-none" style="cursor: pointer;" v-on:click="navigate()">Paket Wisata {{ paket.kota.kota }}</a></li>
                <li class="breadcrumb-item active" aria-current="page" > {{ paket.namapaket }}</li>
              </ol>
            </nav>
          </div>
          <h3>Detail Pemesanan</h3>
        <div class="row gx-" style="margin-top:21px">
          <div class="detailPesananCard col-md-6">
            <div class="pesancard bg-white">
              <img
                class="rounded mx-auto d-block"
                :src="pathPaket + paket.pathgambar"
                        alt="paket"
              />
              <br/>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h2>Paket Wisata {{paket.namapaket}}</h2>
                    <p>{{paket.hari}}</p>
                    <h4>{{paket.harga}}</h4>
                    <br/>
                    <div class="pesananTempatWisata">
                      <span class="fw-bolder">Tempat Wisata</span>
                      <div class="row">
                        <div class="col-lg-10">
                          <ul class="row mt-1" style="margin-left: -0.75em">
                            <li class="col-lg-6 col-12" v-for="list in paket.paketwisata" :key="list.id">{{list.wisata.tempatwisata}}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-------- Isi From --------->
          
          <!-- <div class="detailPesananCard col-md-6 mt-3 mt-md-0">
            <div class="pesancard  bg-white">
              <h3>Silahkan isi form reservasi untuk memesan paket wisata</h3>
              <br/>
              <form>
                <div class="mb-3">

                  <input
                  v-model="form.paketid"
                    type="text"
                    class="form-control"
                  />
                  <label for="exampleInputName">Nama Lengkap</label>
                  <input
                    v-model="form.namalengkap"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPhone">No.Telp/WA</label>
                  <input
                    v-model="form.notelp"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                  v-model="form.email"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                    <label for="example-datepicker">Pilih Tanggal</label>
                    <input
                      v-model="form.datetime"
                      type="text"
                      class="form-control"
                    />
                    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                </div>
                <div class="d-flex justify-content-end">
                  <b-button
                  
                    class="mt-3 ms-3"
                    type="submit"
                    variant="primary"
                    block
                    @click="checkout"
                    >Pesan Paket
                  </b-button>
                </div>
              </form>
             
            </div>
          </div> -->
          <FromPemesanan/>
        </div>
      </div>
    </div>
    <FooterApp/>
  </div>
</template>
<script>
  import NavigationApp from "./NavigationApp.vue";
  import FooterApp from "./FooterApp.vue";
  import axios from "axios";
  import router from "../router";
import FromPemesanan from "./FromPemesanan.vue";
  export default {
    components: { NavigationApp, FooterApp, FromPemesanan  },
    data() {
        return {
          // form: {
          //   paketid: 1,
          //   namalengkap: "",
          //   notelp: "",
          //   email: "",
          //   datetime: "",
          // },
          id: 0,
          paket: [],
          semua: '',
          pathPaket: this.$pathApi,
          pathSemua: this.$pathApi
        }
    },
    created() {
      this.id = this.$route.params.id;
    },
    methods: {
      navigate() {
        router.go(-1);
      },
      mounted() {
     axios
       .get(this.pathSemua + "api/user/halamanutama/semua", {
         headers: {
           'ngrok-skip-browser-warning': 1
         }
      })
       .then((response) => this.semua(response.data))
       .catch((error) =>
         console.log("gagal :", error));
   },
      async load() {
        try {
          const loadpaket = await axios.get(
            this.$pathApi + "api/user/paketuser/paket/" + this.$route.params.id,
            {
              headers: {
                "ngrok-skip-browser-warning": 1,
              },
            }
          );
  
          this.paket = loadpaket.data;
        } catch (e) {
          console.log(e);
        }
      },
    },
    // async add() {
    //   try {
    //     await axios.post(
    //       this.$pathApi + "api/user/pesanan/",
    //       this.form
    //     );
    //      this.load();
    //      this.form.paketid  = "";
    //      this.form.namalengkap = "";
    //      this.form.notelp = "";
    //      this.form.email = "";
    //      this.form.datetime = "";
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    mounted() {
      this.load();
    },
  };
  </script>
<style scoped>
.detailPemesanan {
  background: #f5f6f8;
  height: auto;
}

.detailPesananCard {
  border-radius:16px;
}
.pesancard {
  padding:42px;
  border-radius:16px;
}
.pesancard img {
  width:100%;
}

.pesancard p {
  color: #55c9d3;
}
@media only screen and (max-width: 768px) {
  .pesancard {
    padding:21px;
  }
}
</style>
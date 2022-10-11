<template>
      <div class="detailPesananCard col-md-6 mt-3 mt-md-0">
            <div class="pesancard  bg-white">
              <h3>Silahkan isi form reservasi untuk memesan paket wisata</h3>
              <br/>
              <!-- <div class="alert alert-success" v-if="isSuccess" > joss</div> -->
              <form @submit.prevent="onCreatepost">
                <div class="mb-3">

                  <input
                  v-model="paketid"
                    type="hidden"
                    class="form-control"
                  />
                  <label for="exampleInputName">Nama Lengkap</label>
                  <input
                    v-model="namalengkap"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPhone">No.Telp/WA</label>
                  <input
                    v-model="notelp"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                  v-model="email"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                    <label for="example-datepicker">Pilih Tanggal (22/09/2022)</label>
                    <input
                      v-model="datetime"
                      type="text"
                      class="form-control"
                    />
                    <!-- <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker> -->
                </div>
                <div class="d-flex justify-content-end">
                  <b-button
                 
                    class="mt-3 ms-3"
                    type="submit"
                    variant="primary"
                    block
                    >Pesan Paket
                  </b-button>
                </div>
              </form>
             
            </div>
          </div>
</template>
<script>
    import axios from 'axios'
    // import router from '../router'
export default{
    data() {
        return {
         
            paketid: 1,
            namalengkap: "",
            notelp: "",
            email: "",
            datetime: "",
            // isSuccess: false,
          pathPaket: this.$pathApi
        }
    },
    created() {
      this.id = this.$route.params.id;
    },
    methods: {
      onCreatepost(){
        axios.post(this.pathPaket + "/api/user/pesanan", {
            headers: {
           'ngrok-skip-browser-warning': 1
         },
            paketid: this.paketid, namalengkap: this.namalengkap, notelp: this.notelp,
            email: this.email, datetime: this.datetime
        
      },)
      .then((response) =>   {  //this.setFoto(response.data))
    //   this.isSuccess =true
    //    .catch((error) =>
         console.log(response);
        })
      }
    },
    // async pesan() {
    //   try {
    //     await axios.post(
    //       this.$pathApi + "api/user/pesanan",
    //       this.form
    //     );
       
    //     this.form.paketid  = "";
    //     this.form.namalengkap = "";
    //     this.form.notelp = "";
    //     this.form.email = "";
    //     this.form.datetime = "";
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    // mounted() {
    //   this.load();
    // },
  };
        

</script>
<style>

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
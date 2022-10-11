<template>
   <div class="container-fluid bg-white navigation">
        <div class="container" >
            <div class="row" >
                <nav class="navbar navbar-expand-lg fixed-top">
                    <div class="container-fluid bg-white">
                        
                        <a> <img style="width:145px; padding: 14px 0px 10px 10px;" src="@/assets/img/logo.png"></a>
                        <button style="width:56px;  " class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i></button>              
                        <span class="navbar-text">      
                            <div class="collapse navbar-collapse bg-white" id="navbarText">
                                <ul class="navbar-nav  mb-4 mb-lg-0" >
                                    <li class="nav-item " >
                                        <router-link class="nav-link active " to="/">Home</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/DaftarwisataView">Paket Wisata</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/FasilitasView">Fasilitas</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/AboutView">Tentang Kami</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/HalamankontakView">Kontak</router-link>
                                    </li>
                                    <li class="nav-item btn">
                                        <b-row>
                                            <b-col lg="1" style="width:160px;">
                                                <b-button to="KodePemesanan"
                                           size="sm">Cek Pemesanan
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </li>                           
                                </ul>
                            </div>                    
                        </span>                  
                    </div>
                </nav>          
            </div>
        </div>
    </div>   
</template>
<script>
   
</script>
<style>

.container-fluid .navbar-text{
    font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;

}
.navbar {
    background:#fff;
    height:60px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.1);
    z-index:9999;
}
@media only screen and (max-width: 800px) {
   button.navbar-toggler{
        margin-left: 58%;
    }
}
@media only screen and (max-width: 380px) {
     button.navbar-toggler{
        margin-left: 80px;
      
       
    }
}
</style>
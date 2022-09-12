<template>
   <div class="container-fluid bg-white ">
        <div class="container" >
            <div class="row" >
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid ">
                        
                        <a> <img style="width:145px;" src="@/assets/img/logo.png"></a>
                        <button style="width:56px;  " class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i></button>              
                        <span class="navbar-text">      
                            <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav  mb-4 mb-lg-0" >
                                    <li class="nav-item " >
                                        <router-link class="nav-link active " to="/">Home</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="DaftarwisataView">Paket Wisata</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="FasilitasView">Fasilitas</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="AboutView">Tentang Kami</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="HalamankontakView">Kontak</router-link>
                                    </li>
                                    <li class="nav-item btn">
                                        <b-row>
                                            <b-col lg="1" class="pb-2" style="width:160px;">
                                                <b-button size="sm">Cek Pemesanan</b-button>
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
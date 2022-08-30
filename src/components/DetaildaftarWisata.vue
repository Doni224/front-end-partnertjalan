<template>
<div class="" id="badan">
     <div class="container" >
       <div class="row-mt-4">
        <div class="aku col">
          <h2>Paket wisata yang bisa kamu pilih</h2>
          <img src="@/assets/img/bali.png" alt="">
        </div>
      </div>
    </div>
   <div class="fott mt-5">
    <FooterApp/>
   </div>
</div>
</template>
<script>
import FooterApp from './FooterApp.vue';

export default{
    components: { FooterApp,}
}
</script>
<style>
#badan{
    background-color:#F5F6F8;
    height: 600px;
}
.aku h2 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  margin-top: 60px;
}
</style>
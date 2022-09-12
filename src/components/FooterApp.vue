<template>
  <div class="badan container-fluid">
    <div class="container">
      <div class="row">
        <div class="tengah col-md-4">
          <div class="sosmed mt-5">
            <a
              href="https://instagram.com/partnerjalan_id?igshid=YmMyMTA2M2Y="
              target=""
              rel=""
            >
              <img
                style="margin-left: 5%"
                src="@/assets/img/Icons/instagram.png"
                alt=""
              />
            </a>
            <a href="" target="" rel="">
              <img
                style="margin-left: 5%"
                src="@/assets/img/Icons/facebook.png"
                alt=""
              />
            </a>
            <a href="" target="" rel="">
              <img
                style="margin-left: 5%"
                src="@/assets/img/Icons/twitter.png"
                alt=""
              />
            </a>
            <a href="" target="" rel="">
              <img
                style="margin-left: 5%"
                src="@/assets/img/Icons/youtube.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="titleku container-fluid">
      <p>@ 2022 copyright Partnerjalan</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterApp",
};
</script>
<style>
.badan {
  background-color: #133345;
  height: 150px;
  padding-bottom: 2em;
}
.titleku {
  background-color: #0b1e29;
  height: 45px;
  margin-top: 15px;
}
.titleku p {
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
}
.tengah {
  display: block;
  margin-left: 37%;
  margin-right: auto;
}
@media only screen and (max-width: 380px) {
  .tengah {
    margin-left: 10%;
  }
}
</style>
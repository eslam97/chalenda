<template>
  <div class="hd-white p-2">
    <header class="row px-3">
      <nav id="navigation" class="style-1 col-md-4 m-0 d-flex">
        <ul id="responsive">
          <li><a href="#">Your Reservations</a></li>
          <li><i class="fa fa-map-marker"></i><a href="#">Sell & Buy</a></li>
        </ul>
      </nav>
      <div class="col-md-4" id="logo">
        <a href="index.html"><img src="@/assets/images/logo.png" alt=""></a>
      </div>
      <div class="col-md-4" id="userInfo">
        menu
      </div>
    </header>
  </div>
</template>
<style scoped>
#logo img {
  width:100px
}
.col-md-4{
  text-align: center;
  align-items: center;
  display: flex;
}
#userInfo{
  display: flex;
  justify-content: flex-end;
}
</style>
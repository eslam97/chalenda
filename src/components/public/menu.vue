<template>
  <div class="navigation-wrap bg-light start-header start-style p-2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-md navbar-light">

            <a class="navbar-brand" href="#" target="_blank"><img src="@/assets/images/logo.png" alt=""></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto py-4 py-md-0">
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <a class="dropdown-item" href="#">Another action</a>
                  </div>
                </li>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a class="nav-link" href="#">Agency</a>
                </li>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <a class="dropdown-item" href="#">Another action</a>
                  </div>
                </li>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a class="nav-link" href="#">Journal</a>
                </li>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>

          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    toggleBodyClass() {
      document.body.classList.toggle("menu-active");
    }
  }
}
</script>
<style scoped>

/* #Navigation
================================================== */

.start-header {
  opacity: 1;
  transform: translateY(0);
  padding: 20px 0;
  box-shadow: 0 10px 30px 0 rgba(138, 155, 165, 0.15);
  -webkit-transition : all 0.3s ease-out;
  transition : all 0.3s ease-out;
}
.start-header.scroll-on {
  box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
  padding: 10px 0;
  -webkit-transition : all 0.3s ease-out;
  transition : all 0.3s ease-out;
}
.start-header.scroll-on .navbar-brand img{
  height: 24px;
  -webkit-transition : all 0.3s ease-out;
  transition : all 0.3s ease-out;
}
.navigation-wrap{
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  -webkit-transition : all 0.3s ease-out;
  transition : all 0.3s ease-out;
}
.navbar{
  padding: 0;
}
.navbar-brand img{
  height: auto;
  width: 100px;
  display: block;
  -webkit-transition : all 0.3s ease-out;
  transition : all 0.3s ease-out;
}
.navbar-toggler {
  float: right;
  border: none;
  padding-right: 0;
}
.navbar-toggler:active,
.navbar-toggler:focus {
  outline: none;
}
.navbar-light .navbar-toggler-icon {
  width: 24px;
  height: 17px;
  background-image: none;
  position: relative;
  border-bottom: 1px solid #000;
  transition: all 300ms linear;
}
.navbar-light .navbar-toggler-icon:after,
.navbar-light .navbar-toggler-icon:before{
  width: 24px;
  position: absolute;
  height: 1px;
  background-color: #000;
  top: 0;
  left: 0;
  content: '';
  z-index: 2;
  transition: all 300ms linear;
}
.navbar-light .navbar-toggler-icon:after{
  top: 8px;
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
  transform: rotate(45deg);
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
  transform: translateY(8px) rotate(-45deg);
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  border-color: transparent;
}
.nav-link{
  color: #212121 !important;
  font-weight: 500;
  transition: all 200ms linear;
}
.nav-item:hover .nav-link{
  color: #8167a9 !important;
}
.nav-item.active .nav-link{
  color: #777 !important;
}
.nav-link {
  position: relative;
  padding: 5px 0 !important;
  display: inline-block;
}
.nav-item:after{
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  content: '';
  background-color: #8167a9;
  opacity: 0;
  transition: all 200ms linear;
}
.nav-item:hover:after{
  bottom: 0;
  opacity: 1;
}
.nav-item.active:hover:after{
  opacity: 0;
}
.nav-item{
  position: relative;
  transition: all 200ms linear;
}

/* #Primary style
================================================== */

.bg-light {
  background-color: #fff !important;
  transition: all 200ms linear;
}
.section {
  position: relative;
  width: 100%;
  display: block;
}
.full-height {
  height: 100vh;
}
.over-hide {
  overflow: hidden;
}
.absolute-center {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  margin-top: 40px;
  transform: translateY(-50%);
  z-index: 20;
}
h1{
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  color: #212112;
  text-align: center;
}
p{
  text-align: center;
  margin: 0;
  padding-top: 10px;
  opacity: 1;
  transform: translate(0);
  transition: all 300ms linear;
  transition-delay: 1700ms;
}
body.hero-anime p{
  opacity: 0;
  transform: translateY(40px);
  transition-delay: 1700ms;
}
h1 span{
  display: inline-block;
  transition: all 300ms linear;
  opacity: 1;
  transform: translate(0);
}
body.hero-anime h1 span:nth-child(1){
  opacity: 0;
  transform: translateY(-20px);
}
body.hero-anime h1 span:nth-child(2){
  opacity: 0;
  transform: translateY(-30px);
}
body.hero-anime h1 span:nth-child(3){
  opacity: 0;
  transform: translateY(-50px);
}
body.hero-anime h1 span:nth-child(4){
  opacity: 0;
  transform: translateY(-10px);
}
body.hero-anime h1 span:nth-child(5){
  opacity: 0;
  transform: translateY(-50px);
}
body.hero-anime h1 span:nth-child(6){
  opacity: 0;
  transform: translateY(-20px);
}
body.hero-anime h1 span:nth-child(7){
  opacity: 0;
  transform: translateY(-40px);
}
body.hero-anime h1 span:nth-child(8){
  opacity: 0;
  transform: translateY(-10px);
}
body.hero-anime h1 span:nth-child(9){
  opacity: 0;
  transform: translateY(-30px);
}
body.hero-anime h1 span:nth-child(10){
  opacity: 0;
  transform: translateY(-20px);
}
h1 span:nth-child(1){
  transition-delay: 1000ms;
}
h1 span:nth-child(2){
  transition-delay: 700ms;
}
h1 span:nth-child(3){
  transition-delay: 900ms;
}
h1 span:nth-child(4){
  transition-delay: 800ms;
}
h1 span:nth-child(5){
  transition-delay: 1000ms;
}
h1 span:nth-child(6){
  transition-delay: 700ms;
}
h1 span:nth-child(7){
  transition-delay: 900ms;
}
h1 span:nth-child(8){
  transition-delay: 800ms;
}
h1 span:nth-child(9){
  transition-delay: 600ms;
}
h1 span:nth-child(10){
  transition-delay: 700ms;
}
body.hero-anime h1 span:nth-child(11){
  opacity: 0;
  transform: translateY(30px);
}
body.hero-anime h1 span:nth-child(12){
  opacity: 0;
  transform: translateY(50px);
}
body.hero-anime h1 span:nth-child(13){
  opacity: 0;
  transform: translateY(20px);
}
body.hero-anime h1 span:nth-child(14){
  opacity: 0;
  transform: translateY(30px);
}
body.hero-anime h1 span:nth-child(15){
  opacity: 0;
  transform: translateY(50px);
}
h1 span:nth-child(11){
  transition-delay: 1300ms;
}
h1 span:nth-child(12){
  transition-delay: 1500ms;
}
h1 span:nth-child(13){
  transition-delay: 1400ms;
}
h1 span:nth-child(14){
  transition-delay: 1200ms;
}
h1 span:nth-child(15){
  transition-delay: 1450ms;
}
#switch,
#circle {
  cursor: pointer;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
#switch {
  width: 60px;
  height: 8px;
  border: 2px solid #8167a9;
  border-radius: 27px;
  background: #000;
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  opacity: 1;
  transform: translate(0);
  transition: all 300ms linear;
  transition-delay: 1900ms;
}
body.hero-anime #switch{
  opacity: 0;
  transform: translateY(40px);
  transition-delay: 1900ms;
}
#circle {
  position: absolute;
  top: -11px;
  left: -13px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #000;
}
.switched {
  border-color: #000 !important;
  background: #8167a9 !important;
}
.switched #circle {
  left: 43px;
  box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
  background: #fff;
}
.nav-item .dropdown-menu {
  transform: translate3d(0, 10px, 0);
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  display: block;
  padding: 0;
  margin: 0;
  transition: all 200ms linear;
}
.nav-item.show .dropdown-menu {
  opacity: 1;
  visibility: visible;
  max-height: 999px;
  transform: translate3d(0, 0px, 0);
}
.dropdown-menu {
  padding: 10px!important;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
  color: #212121;
  background-color: #fcfaff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
  transition: all 200ms linear;
}
.dropdown-toggle::after {
  display: none;
}

.dropdown-item {
  padding: 3px 15px;
  color: #212121;
  border-radius: 2px;
  transition: all 200ms linear;
}
.dropdown-item:hover,
.dropdown-item:focus {
  color: #fff;
  background-color: rgba(129,103,169,.6);
}




/* #Media
================================================== */

@media (max-width: 767px) {
  h1{
    font-size: 38px;
  }
  .nav-item:after{
    display: none;
  }
  .nav-item::before {
    position: absolute;
    display: block;
    top: 15px;
    left: 0;
    width: 11px;
    height: 1px;
    content: "";
    border: none;
    background-color: #000;
    vertical-align: 0;
  }
  .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 10px;
    left: -23px;
    width: 1px;
    height: 11px;
    content: "";
    border: none;
    background-color: #000;
    vertical-align: 0;
    transition: all 200ms linear;
  }
  .dropdown-toggle[aria-expanded="true"]::after{
    transform: rotate(90deg);
    opacity: 0;
  }
  .dropdown-menu {
    padding: 0 !important;
    background-color: transparent;
    box-shadow: none;
    transition: all 200ms linear;
  }
  .dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
    margin-top: 10px !important;
    margin-bottom: 20px !important;
  }
  body.dark .nav-item::before {
    background-color: #fff;
  }
  body.dark .dropdown-toggle::after {
    background-color: #fff;
  }
  body.dark .dropdown-menu {
    background-color: transparent;
    box-shadow: none;
  }
}

/* #Link to page
================================================== */

.logo {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: block;
  z-index: 100;
  transition: all 250ms linear;
}
.logo img {
  height: 100px;
  width: auto;
  display: block;
  transition: all 250ms linear;
}
/*#userInfo{
  display: flex;
  justify-content: flex-end;
}

.logo img {
  max-width: 100px;
}

.navbar {
  align-items: center;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  font-family: sans-serif;
  padding: 10px 50px;
}

.push-left {
  margin-left: auto;
}

!* Menu *!
.hamburger {
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  outline: none;
  height: 30px;
  position: relative;
  width: 30px;
  z-index: 1000;
}
@media screen and (max-width: 768px) {
  .hamburger {
    display: inline-block;
  }
}
.hamburger-line {
  background: #272727;
  height: 3px;
  position: absolute;
  left: 0;
  transition: all 0.2s ease-out;
  width: 100%;
}
.hamburger:hover .hamburger-line {
  background: #777;
}
.hamburger-line-top {
  top: 3px;
}
.menu-active .hamburger-line-top {
  top: 50%;
  transform: rotate(45deg) translatey(-50%);
}
.hamburger-line-middle {
  top: 50%;
  transform: translatey(-50%);
}
.menu-active .hamburger-line-middle {
  left: 50%;
  opacity: 0;
  width: 0;
}
.hamburger-line-bottom {
  bottom: 3px;
}
.menu-active .hamburger-line-bottom {
  bottom: 50%;
  transform: rotate(-45deg) translatey(50%);
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.25s ease-in;
}
@media screen and (max-width: 768px) {
  .nav-menu {
    background: #fff;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translatey(-100%);
    text-align: center;
  }
  .menu-active .nav-menu {
    transform: translatey(0%);
    opacity: 1;
  }
}
.nav-menu .menu-item a {
  color: #444444;
  display: block;
  line-height: 30px;
  margin: 0px 10px;
  text-decoration: none;
  text-transform: uppercase;
}
.nav-menu .menu-item a:hover {
  color: #777777;
  text-decoration: underline;
}
@media screen and (max-width: 768px) {
  .nav-menu .menu-item a {
    font-size: 20px;
    margin: 8px;
  }
}

.sub-nav {
  border: 1px solid #ccc;
  display: none;
  position: absolute;
  background-color: #fff;
  padding: 5px 5px;
  list-style: none;
  width: 230px;
}
@media screen and (max-width: 768px) {
  .sub-nav {
    position: relative;
    width: 100%;
    display: none;
    background-color: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }
}

.nav__link:hover + .sub-nav {
  display: block;
}

.sub-nav:hover {
  display: block;
}*/
</style>
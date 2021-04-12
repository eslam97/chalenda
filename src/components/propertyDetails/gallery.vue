<template>
  <div id="listingDetailsSlider" class="carousel listing-details-sliders slide mb-30">
    <h5 class="mb-4">Gallery</h5>
    <div class="carousel-inner">
      <carousel :items="1" :nav="false" :dots="false">
        <div class="active item carousel-item" data-slide-number="0">
          <img src="@/assets/images/single-property/s-1.jpg" class="img-fluid" alt="slider-listing">
        </div>
        <div  data-slide-number="1">
          <img src="@/assets/images/single-property/s-2.jpg" class="img-fluid" alt="slider-listing">
        </div>
        <div  data-slide-number="2">
          <img src="@/assets/images/single-property/s-3.jpg" class="img-fluid" alt="slider-listing">
        </div>
        <div data-slide-number="4">
          <img src="@/assets/images/single-property/s-4.jpg" class="img-fluid" alt="slider-listing">
        </div>
        <div  data-slide-number="5">
          <img src="@/assets/images/single-property/s-5.jpg" class="img-fluid" alt="slider-listing">
        </div>
        <template slot="prev"><span class="carousel-control left"  data-slide="prev"><i class="fa fa-angle-left"></i></span></template>
        <template slot="next"><span class="carousel-control right" data-slide="next"><i class="fa fa-angle-right"></i></span></template>
      </carousel>
    </div>
    <!-- main slider carousel nav controls -->
    <ul class="carousel-indicators smail-listing list-inline">
      <li class="list-inline-item active">
        <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#listingDetailsSlider">
          <img src="@/assets/images/single-property/s-1.jpg" class="img-fluid" alt="listing-small">
        </a>
      </li>
      <li class="list-inline-item">
        <a id="carousel-selector-1" data-slide-to="1" data-target="#listingDetailsSlider">
          <img src="@/assets/images/single-property/s-2.jpg" class="img-fluid" alt="listing-small">
        </a>
      </li>
      <li class="list-inline-item">
        <a id="carousel-selector-2" data-slide-to="2" data-target="#listingDetailsSlider">
          <img src="@/assets/images/single-property/s-3.jpg" class="img-fluid" alt="listing-small">
        </a>
      </li>
      <li class="list-inline-item">
        <a id="carousel-selector-3" data-slide-to="3" data-target="#listingDetailsSlider">
          <img src="@/assets/images/single-property/s-4.jpg" class="img-fluid" alt="listing-small">
        </a>
      </li>
      <li class="list-inline-item">
        <a id="carousel-selector-4" data-slide-to="4" data-target="#listingDetailsSlider">
          <img src="@/assets/images/single-property/s-5.jpg" class="img-fluid" alt="listing-small">
        </a>
      </li>
    </ul>
    <!-- main slider carousel items -->
  </div>
</template>
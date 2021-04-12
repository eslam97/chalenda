<template>
  <!-- START SECTION RECENTLY PROPERTIES -->
  <section class="featured portfolio home18 bg-white-3">
    <div class="container-fluid">
      <div class="section-title ml-3">
        <h3>Recent</h3>
        <h2>Properties</h2>
      </div>
      <div class="portfolio col-xl-12">
        <VueSlickCarousel :arrows="false" :dots="true" class="slick-lancers" :slidesToShow='4' :responsive='responsive' :slidesToScroll="4" lazyLoad=true :rows="1">
          <div class="agents-grid">
            <div class="landscapes">
              <div class="project-single">
                <div class="project-inner project-head">
                  <div class="homes">
                    <!-- homes img -->
                    <a href="single-property-1.html" class="homes-img">
                      <div class="homes-tag button alt featured">Featured</div>
                      <div class="homes-tag button alt sale">For Sale</div>
                      <div class="homes-price">$9,000/mo</div>
                      <img src="@/assets/images/blog/b-11.jpg" alt="home-1" class="img-responsive">
                    </a>
                  </div>
                  <div class="button-effect">
                    <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                    <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                  </div>
                </div>
                <!-- homes content -->
                <div class="homes-content">
                  <!-- homes address -->
                  <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                  <p class="homes-address mb-3">
                    <a href="single-property-1.html">
                      <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  <!-- homes List -->
                  <ul class="homes-list clearfix">
                    <li>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <span>2 Garages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="agents-grid">
            <div class="people">
              <div class="project-single">
                <div class="project-inner project-head">
                  <div class="homes">
                    <!-- homes img -->
                    <a href="single-property-1.html" class="homes-img">
                      <div class="homes-tag button sale rent">For Rent</div>
                      <div class="homes-price">$3,000/mo</div>
                      <img src="@/assets/images/blog/b-12.jpg" alt="home-1" class="img-responsive">
                    </a>
                  </div>
                  <div class="button-effect">
                    <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                    <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                  </div>
                </div>
                <!-- homes content -->
                <div class="homes-content">
                  <!-- homes address -->
                  <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                  <p class="homes-address mb-3">
                    <a href="single-property-1.html">
                      <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  <!-- homes List -->
                  <ul class="homes-list clearfix">
                    <li>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <span>2 Garages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="agents-grid">
            <div class="people landscapes no-pb pbp-3">
              <div class="project-single">
                <div class="project-inner project-head">
                  <div class="homes">
                    <!-- homes img -->
                    <a href="single-property-1.html" class="homes-img">
                      <div class="homes-tag button alt sale">For Sale</div>
                      <div class="homes-price">$9,000/mo</div>
                      <img src="@/assets/images/blog/b-1.jpg" alt="home-1" class="img-responsive">
                    </a>
                  </div>
                  <div class="button-effect">
                    <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                    <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                  </div>
                </div>
                <!-- homes content -->
                <div class="homes-content">
                  <!-- homes address -->
                  <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                  <p class="homes-address mb-3">
                    <a href="single-property-1.html">
                      <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  <!-- homes List -->
                  <ul class="homes-list clearfix">
                    <li>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <span>2 Garages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="agents-grid">
            <div class="landscapes">
              <div class="project-single no-mb">
                <div class="project-inner project-head">
                  <div class="homes">
                    <!-- homes img -->
                    <a href="single-property-1.html" class="homes-img">
                      <div class="homes-tag button alt featured">Featured</div>
                      <div class="homes-tag button sale rent">For Rent</div>
                      <div class="homes-price">$3,000/mo</div>
                      <img src="@/assets/images/feature-properties/fp-10.jpg" alt="home-1" class="img-responsive">
                    </a>
                  </div>
                  <div class="button-effect">
                    <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                    <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                  </div>
                </div>
                <!-- homes content -->
                <div class="homes-content">
                  <!-- homes address -->
                  <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                  <p class="homes-address mb-3">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  <!-- homes List -->
                  <ul class="homes-list clearfix">
                    <li>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <span>2 Garages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="agents-grid">
            <div class="people">
              <div class="project-single no-mb">
                <div class="project-inner project-head">
                  <div class="homes">
                    <!-- homes img -->
                    <a href="single-property-1.html" class="homes-img">
                      <div class="homes-tag button alt sale">For Sale</div>
                      <div class="homes-price">$9,000/mo</div>
                      <img src="@/assets/images/feature-properties/fp-11.jpg" alt="home-1" class="img-responsive">
                    </a>
                  </div>
                  <div class="button-effect">
                    <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                    <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                  </div>
                </div>
                <!-- homes content -->
                <div class="homes-content">
                  <!-- homes address -->
                  <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                  <p class="homes-address mb-3">
                    <a href="single-property-1.html">
                      <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  <!-- homes List -->
                  <ul class="homes-list clearfix">
                    <li>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <span>2 Garages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="agents-grid">
            <div class="people landscapes no-pb pbp-3">
              <div class="project-single no-mb last">
                <div class="project-inner project-head">
                  <div class="homes">
                    <!-- homes img -->
                    <a href="single-property-1.html" class="homes-img">
                      <div class="homes-tag button sale rent">For Rent</div>
                      <div class="homes-price">$3,000/mo</div>
                      <img src="@/assets/images/feature-properties/fp-12.jpg" alt="home-1" class="img-responsive">
                    </a>
                  </div>
                  <div class="button-effect">
                    <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                    <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                  </div>
                </div>
                <!-- homes content -->
                <div class="homes-content">
                  <!-- homes address -->
                  <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                  <p class="homes-address mb-3">
                    <a href="single-property-1.html">
                      <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  <!-- homes List -->
                  <ul class="homes-list clearfix">
                    <li>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <span>2 Garages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="agents-grid">
            <div class="landscapes">
              <div class="project-single">
                <div class="project-inner project-head">
                  <div class="homes">
                    <!-- homes img -->
                    <a href="single-property-1.html" class="homes-img">
                      <div class="homes-tag button alt featured">Featured</div>
                      <div class="homes-tag button alt sale">For Sale</div>
                      <div class="homes-price">$9,000/mo</div>
                      <img src="@/assets/images/blog/b-11.jpg" alt="home-1" class="img-responsive">
                    </a>
                  </div>
                  <div class="button-effect">
                    <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                    <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                  </div>
                </div>
                <!-- homes content -->
                <div class="homes-content">
                  <!-- homes address -->
                  <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                  <p class="homes-address mb-3">
                    <a href="single-property-1.html">
                      <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  <!-- homes List -->
                  <ul class="homes-list clearfix">
                    <li>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <span>2 Garages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="agents-grid">
            <div class="people">
              <div class="project-single">
                <div class="project-inner project-head">
                  <div class="homes">
                    <!-- homes img -->
                    <a href="single-property-1.html" class="homes-img">
                      <div class="homes-tag button sale rent">For Rent</div>
                      <div class="homes-price">$3,000/mo</div>
                      <img src="@/assets/images/blog/b-12.jpg" alt="home-1" class="img-responsive">
                    </a>
                  </div>
                  <div class="button-effect">
                    <a href="single-property-1.html" class="btn"><i class="fa fa-link"></i></a>
                    <a href="https://www.youtube.com/watch?v=14semTlwyUY" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a>
                    <a href="single-property-2.html" class="img-poppu btn"><i class="fa fa-photo"></i></a>
                  </div>
                </div>
                <!-- homes content -->
                <div class="homes-content">
                  <!-- homes address -->
                  <h3><a href="single-property-1.html">Real House Luxury Villa</a></h3>
                  <p class="homes-address mb-3">
                    <a href="single-property-1.html">
                      <i class="fa fa-map-marker"></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>
                  <!-- homes List -->
                  <ul class="homes-list clearfix">
                    <li>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <span>2 Garages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
  <!-- END SECTION RECENTLY PROPERTIES -->
</template>
<script>
export default {
  data(){
    return{
      responsive: [{
        breakpoint: 1292,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false
        }
      }, {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }]
    }
  }
}
</script>
<style scoped>
.agents-grid {
  width: 98% !important;
}
</style>
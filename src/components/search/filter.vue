<template>
  <div class="widget-boxed main-search-field">
    <div class="widget-boxed-header">
      <h4>Find Your Resort</h4>
    </div>
    <!-- Search Form -->
    <div class="trip-search">
      <form class="form">
        <!-- Form Lookin for -->
        <div class="form-group looking">
          <div class="first-select wide">
            <div class="main-search-input-item">
              <input type="text" placeholder="Enter Keyword..." value="" />
            </div>
          </div>
        </div>
        <!--/ End Form Lookin for -->
        <!-- Form Location -->
        <div class="form-group location">
          <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-map-marker"></i>Location</span>
            <ul class="list">
              <li data-value="1" class="option selected ">New York</li>
              <li data-value="2" class="option">Los Angeles</li>
              <li data-value="3" class="option">Chicago</li>
              <li data-value="3" class="option">Philadelphia</li>
              <li data-value="3" class="option">San Francisco</li>
              <li data-value="3" class="option">Miami</li>
              <li data-value="3" class="option">Houston</li>
            </ul>
          </div>
        </div>
        <!--/ End Form Location -->
        <!-- Form Categories -->
        <div class="form-group categories">
          <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-home" aria-hidden="true"></i>Property Type</span>
            <ul class="list">
              <li data-value="1" class="option selected ">House</li>
              <li data-value="2" class="option">Apartment</li>
              <li data-value="3" class="option">Condo</li>
              <li data-value="3" class="option">Land</li>
              <li data-value="3" class="option">Bungalow</li>
              <li data-value="3" class="option">Single Family</li>
            </ul>
          </div>
        </div>
        <!--/ End Form Categories -->
        <!-- Form Property Status -->
        <div class="form-group categories">
          <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-home"></i>Property Status</span>
            <ul class="list">
              <li data-value="1" class="option selected ">For Sale</li>
              <li data-value="2" class="option">For Rent</li>
            </ul>
          </div>
        </div>
        <!--/ End Form Property Status -->
        <!-- Form Bedrooms -->
        <div class="form-group beds">
          <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-bed" aria-hidden="true"></i> Bedrooms</span>
            <ul class="list">
              <li data-value="1" class="option selected">1</li>
              <li data-value="2" class="option">2</li>
              <li data-value="3" class="option">3</li>
              <li data-value="3" class="option">4</li>
              <li data-value="3" class="option">5</li>
              <li data-value="3" class="option">6</li>
              <li data-value="3" class="option">7</li>
              <li data-value="3" class="option">8</li>
              <li data-value="3" class="option">9</li>
              <li data-value="3" class="option">10</li>
            </ul>
          </div>
        </div>
        <!--/ End Form Bedrooms -->
        <!-- Form Bathrooms -->
        <div class="form-group bath">
          <div class="nice-select form-control wide" tabindex="0"><span class="current"><i class="fa fa-bath" aria-hidden="true"></i> Bathrooms</span>
            <ul class="list">
              <li data-value="1" class="option selected">1</li>
              <li data-value="2" class="option">2</li>
              <li data-value="3" class="option">3</li>
              <li data-value="3" class="option">4</li>
              <li data-value="3" class="option">5</li>
              <li data-value="3" class="option">6</li>
              <li data-value="3" class="option">7</li>
              <li data-value="3" class="option">8</li>
              <li data-value="3" class="option">9</li>
              <li data-value="3" class="option">10</li>
            </ul>
          </div>
        </div>
        <!--/ End Form Bathrooms -->
      </form>
    </div>
    <!--/ End Search Form -->
    <!-- Price Fields -->
    <div class="main-search-field-2">
      <!-- Area Range -->
      <div class="range-slider">
        <label>Area Size</label>
        <div id="area-range" data-min="0" data-max="1300" data-unit="sq ft"></div>
        <div class="clearfix"></div>
      </div>
      <br>
      <!-- Price Range -->
      <div class="range-slider">
        <label>Price Range</label>
        <div id="price-range" data-min="0" data-max="600000" data-unit="$"></div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!-- More Search Options -->
    <a href="#" class="more-search-options-trigger margin-bottom-10 margin-top-30" data-open-title="Advanced Features" data-close-title="Advanced Features"></a>

    <div class="more-search-options relative">
      <!-- Checkboxes -->
      <div class="checkboxes one-in-row margin-bottom-10">
        <input id="check-2" type="checkbox" name="check">
        <label for="check-2">Air Conditioning</label>
        <input id="check-3" type="checkbox" name="check">
        <label for="check-3">Swimming Pool</label>
        <input id="check-4" type="checkbox" name="check">
        <label for="check-4">Central Heating</label>
        <input id="check-5" type="checkbox" name="check">
        <label for="check-5">Laundry Room</label>
        <input id="check-6" type="checkbox" name="check">
        <label for="check-6">Gym</label>
        <input id="check-7" type="checkbox" name="check">
        <label for="check-7">Alarm</label>
        <input id="check-8" type="checkbox" name="check">
        <label for="check-8">Window Covering</label>
        <input id="check-9" type="checkbox" name="check">
        <label for="check-9">WiFi</label>
        <input id="check-10" type="checkbox" name="check">
        <label for="check-10">TV Cable</label>
        <input id="check-11" type="checkbox" name="check">
        <label for="check-11">Dryer</label>
        <input id="check-12" type="checkbox" name="check">
        <label for="check-12">Microwave</label>
        <input id="check-13" type="checkbox" name="check">
        <label for="check-13">Washer</label>
        <input id="check-14" type="checkbox" name="check">
        <label for="check-14">Refrigerator</label>
        <input id="check-15" type="checkbox" name="check">
        <label for="check-15">Outdoor Shower</label>
      </div>
      <!-- Checkboxes / End -->
    </div>
    <!-- More Search Options / End -->
    <div class="col-lg-12 no-pds">
      <div class="at-col-default-mar">
        <button class="btn btn-default hvr-bounce-to-right" type="submit">Search</button>
      </div>
    </div>
  </div>
</template>
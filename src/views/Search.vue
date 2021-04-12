<template>
  <div class="inner-pages listing homepage-4 agents hd-white">
    <div id="wrapper">
      <section class="properties-right list featured portfolio blog pt-5">
        <div class="container">
          <section class="headings-2 pt-0 pb-55">
            <div class="pro-wrapper">
              <div class="detail-wrapper-body">
                <div class="listing-title-bar">
<!--                  <div class="text-heading text-left">
                    <p class="pb-2"><a href="index.html">Home </a> &nbsp;/&nbsp; <span>Listings</span></p>
                  </div>-->
                  <h3>Explore Resorts</h3>
                </div>
              </div>
            </div>
          </section>
          <div class="row">
            <div class="col-lg-8 col-md-12 blog-pots">
              <section class="headings-2 pt-0">
                <div class="pro-wrapper">
                  <div class="detail-wrapper-body">
                    <div class="listing-title-bar">
                      <div class="text-heading text-left">
                        <p class="font-weight-bold mb-0 mt-3">7 Search results</p>
                      </div>
                    </div>
                  </div>
                  <div class="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center grid">
                    <div class="input-group border rounded input-group-lg w-auto mr-4">
                      <label class="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" for="inputGroupSelect01"><i class="fas fa-align-left fs-16 pr-2"></i>Sortby:</label>
                      <select class="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3" id="inputGroupSelect01" name="sortby">
                        <option selected>Top Selling</option>
                        <option value="1">Most Viewed</option>
                        <option value="2">Price(low to high)</option>
                        <option value="3">Price(high to low)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>
              <searchResults/>
            </div>
            <aside class="col-lg-4 col-md-12 car">
              <div class="widget">
                <filterSearch/>
                <featureProperties/>
                <recentProperties/>
              </div>
            </aside>
          </div>
          <nav aria-label="..." class="agents pt-55">
            <ul class="pagination disabled">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
@import '/assets/css/default.css';
</style>
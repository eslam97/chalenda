<template>
  <div class="inner-pages sin-1 hd-white">
  <section class="single-proper blog details">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12 blog-pots">
          <div class="row">
            <div class="col-md-12">
              <title-of-property/>
              <galerryOfProperty/>
              <description/>
            </div>
          </div>
            <property-details/>
          <people-reviews/>
          <add-review/>
        </div>
        <aside class="col-lg-4 col-md-12 car">
          <div class="single widget">
            <!-- end author-verified-badge -->
            <div class="sidebar">
<!--              <div class="widget-boxed mt-33 mt-5">
                <div class="widget-boxed-header">
                  <h4>Agent Information</h4>
                </div>
                <div class="widget-boxed-body">
                  <div class="sidebar-widget author-widget2">
                    <div class="author-box clearfix">
                      <img src="@/assets/images/testimonials/ts-1.jpg" alt="author-image" class="author__img">
                      <h4 class="author__title">Lisa Clark</h4>
                      <p class="author__meta">Agent of Property</p>
                    </div>
                    <ul class="author__contact">
                      <li><span class="la la-map-marker"><i class="fa fa-map-marker"></i></span>302 Av Park, New York</li>
                      <li><span class="la la-phone"><i class="fa fa-phone" aria-hidden="true"></i></span><a href="#">(234) 0200 17813</a></li>
                      <li><span class="la la-envelope-o"><i class="fa fa-envelope" aria-hidden="true"></i></span><a href="#">lisa@gmail.com</a></li>
                    </ul>
                    <div class="agent-contact-form-sidebar">
                      <h4>Request Inquiry</h4>
                      <form name="contact_form" method="post" action="https://code-theme.com/html/findhouses/functions.php">
                        <input type="text" id="fname" name="full_name" placeholder="Full Name" required />
                        <input type="number" id="pnumber" name="phone_number" placeholder="Phone Number" required />
                        <input type="email" id="emailid" name="email_address" placeholder="Email Address" required />
                        <textarea placeholder="Message" name="message" required></textarea>
                        <input type="submit" name="sendmessage" class="multiple-send-message" value="Submit Request" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>-->
              <div class="main-search-field-2">
                <availabilty/>
                <recent-properties/>
                <feature-properties/>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <!-- START SIMILAR PROPERTIES -->
      <similar-property/>
      <!-- END SIMILAR PROPERTIES -->
    </div>
  </section>
  </div>
</template>
<script>
export default {
}
</script>
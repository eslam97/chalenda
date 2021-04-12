<template>
  <div class="inner-pages checkout hd-white">
    <section class="payment-method notfound">
    <div class="container">
      <section class="headings-2 pt-0 hee">
        <div class="pro-wrapper">
          <div class="detail-wrapper-body">
            <div class="listing-title-bar">
              <div class="text-heading text-left">
                <p><a href="index.html">Home </a> &nbsp;/&nbsp; <span>Checkout</span></p>
              </div>
              <h3>Checkout</h3>
            </div>
          </div>
        </div>
      </section>
      <div class="row">
        <div class="col-md-12 mb-4">
        <div class="tr-single-box mb-0">
          <div class="tr-single-body">
            <div class="tr-single-header">
              <h4><i class="fa fa-star-o"></i>Booking Summary</h4>
            </div>
            <div class="booking-price-detail side-list no-border mb-3">
              <h5>Reservation Details</h5>
              <ul>
                <li>Property Type<strong class="pull-right">Villa</strong></li>
                <li>No. Of Room<strong class="pull-right">3</strong></li>
                <li>No. Of Guests<strong class="pull-right">10</strong></li>
                <li>Check-In<strong class="pull-right">15/08/2021</strong></li>
                <li>Check-Out<strong class="pull-right">20/08/2021</strong></li>
              </ul>
            </div>
            <div class="booking-price-detail side-list no-border">
              <h5>Pricing Details</h5>
              <ul>
                <li>Reservation<strong class="pull-right">$60</strong></li>
                <li>Tax<strong class="pull-right">$53</strong></li>
                <li class="red pb-0">Total Cost<strong class="pull-right">$263</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        <div class="col-md-12 col-lg-12 col-xl-6">
          <div class="tr-single-box">
            <div class="tr-single-body">
              <div class="tr-single-header">
                <h4><i class="far fa-address-card pr-2"></i>Billing Information</h4>
              </div>
              <div class="row">
                <div class="rld-single-input col-md-12 mb-3">
                  <input type="text" placeholder="First Name">
                </div>

                <div class="rld-single-input col-md-12  mb-3">
                  <input type="text" placeholder="Last Name">
                </div>
                <div class="rld-single-input col-md-12  mb-3">
                  <input type="text" placeholder="Email Address">
                </div>
                <div class="rld-single-input col-md-12  mb-3">
                  <input type="text" placeholder="Confirm Email Address">
                </div>
                <div class="rld-single-input col-md-12  mb-3">
                  <input type="number" placeholder="Mobile Number">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-12 col-xl-6">
          <div class="tr-single-box">
            <div class="tr-single-body">
              <div class="tr-single-header">
                <h4><i class="far fa-credit-card pr-2"></i>Payment Method</h4>
              </div>
              <div class="payment-card">
                <header class="payment-card-header cursor-pointer" data-toggle="collapse" data-target="#debit-credit" aria-expanded="true">
                  <div class="payment-card-title flexbox">
                    <h4>Credit / Debit Card</h4>
                  </div>
                  <div class="pull-right">
                    <img src="@/assets/images/credit.png" class="img-responsive" alt="">
                  </div>
                </header>
                <div class="collapse" id="debit-credit" role="tablist" aria-expanded="false">
                  <div class="payment-card-body">
                    <div class="row mrg-bot-20">
                      <div class="col-sm-6">
                        <label>Card Holder Name</label>
                        <input type="text" class="form-control" placeholder="Chris Seail">
                      </div>
                      <div class="col-sm-6">
                        <label>Card No.</label>
                        <input type="email" class="form-control" placeholder="1800 5785 6758 2458">
                      </div>
                    </div>
                    <div class="row mrg-bot-20">
                      <div class="col-sm-4 col-md-4">
                        <label>Expire Month</label>
                        <input type="text" class="form-control" placeholder="09">
                      </div>
                      <div class="col-sm-4 col-md-4">
                        <label>Expire Year</label>
                        <input type="email" class="form-control" placeholder="2022">
                      </div>
                      <div class="col-sm-4 col-md-4">
                        <label>CCV Code</label>
                        <input type="email" class="form-control" placeholder="258">
                      </div>
                    </div>
                    <div class="row mrg-bot-20">
                      <div class="col-sm-7">
                                                    <span class="custom-checkbox d-block font-12 mb-2">
													<input type="checkbox" id="promo">
													<label for="promo"></label>
													Have a promo code?
												</span>
                        <input type="text" class="form-control">
                      </div>
                      <div class="col-sm-5 padd-top-10 text-right">
                        <label>Total Order</label>
                        <h2 class="mrg-0"><span class="theme-cl">$</span>987</h2>
                      </div>
                      <div class="col-sm-12 bt-1 padd-top-15 pt-3">
                                                    <span class="custom-checkbox d-block font-12 mb-3">
													<input type="checkbox" id="privacy1">
													<label for="privacy1"></label>
													By ordering you are agreeing to our <a href="#" class="theme-cl">Privacy policy</a>.
													</span>
                        <button type="submit" class="btn btn-m btn-success">Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="payment-card">
                <header class="payment-card-header cursor-pointer" data-toggle="collapse" data-target="#vodafone" aria-expanded="true">
                  <div class="payment-card-title flexbox">
                    <h4>Vodafone Cash</h4>
                  </div>
                  <div class="pull-right">
                    <img src="@/assets/images/vodafone.png" class="img-responsive" alt="">
                  </div>
                </header>
                <div class="collapse" id="vodafone" role="tablist" aria-expanded="false">
                  <div class="payment-card-body">
                    <div class="row mrg-bot-20">
                      <div class="col-sm-6">
                        <label>Card Holder Name</label>
                        <input type="text" class="form-control" placeholder="Chris Seail">
                      </div>
                      <div class="col-sm-6">
                        <label>Card No.</label>
                        <input type="email" class="form-control" placeholder="1800 5785 6758 2458">
                      </div>
                    </div>
                    <div class="row mrg-bot-20">
                      <div class="col-sm-4 col-md-4">
                        <label>Expire Month</label>
                        <input type="text" class="form-control" placeholder="09">
                      </div>
                      <div class="col-sm-4 col-md-4">
                        <label>Expire Year</label>
                        <input type="email" class="form-control" placeholder="2022">
                      </div>
                      <div class="col-sm-4 col-md-4">
                        <label>CCV Code</label>
                        <input type="email" class="form-control" placeholder="258">
                      </div>
                    </div>
                    <div class="row mrg-bot-20">
                      <div class="col-sm-7">
                                                    <span class="custom-checkbox d-block font-12 mb-2">
													<input type="checkbox">
													<label for="promo"></label>
													Have a promo code?
												</span>
                        <input type="text" class="form-control">
                      </div>
                      <div class="col-sm-5 padd-top-10 text-right">
                        <label>Total Order</label>
                        <h2 class="mrg-0"><span class="theme-cl">$</span>987</h2>
                      </div>
                      <div class="col-sm-12 bt-1 padd-top-15 pt-3">
                                                    <span class="custom-checkbox d-block font-12 mb-3">
													<input type="checkbox">
													<label for="privacy1"></label>
													By ordering you are agreeing to our <a href="#" class="theme-cl">Privacy policy</a>.
													</span>
                        <button type="submit" class="btn btn-m btn-success">Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="payment-card mb-0">
                <header class="payment-card-header cursor-pointer" data-toggle="collapse" data-target="#fawry" aria-expanded="true">
                  <div class="payment-card-title flexbox">
                    <h4>Fawry</h4>
                  </div>
                  <div class="pull-right">
                    <img src="@/assets/images/fawry.png" class="img-responsive" alt="">
                  </div>
                </header>
                <div class="collapse" id="fawry" role="tablist" aria-expanded="false">
                  <div class="payment-card-body">
                    <div class="row mrg-bot-20">
                      <div class="col-sm-6">
                        <label>Card Holder Name</label>
                        <input type="text" class="form-control" placeholder="Chris Seail">
                      </div>
                      <div class="col-sm-6">
                        <label>Card No.</label>
                        <input type="email" class="form-control" placeholder="1800 5785 6758 2458">
                      </div>
                    </div>
                    <div class="row mrg-bot-20">
                      <div class="col-sm-4 col-md-4">
                        <label>Expire Month</label>
                        <input type="text" class="form-control" placeholder="09">
                      </div>
                      <div class="col-sm-4 col-md-4">
                        <label>Expire Year</label>
                        <input type="email" class="form-control" placeholder="2022">
                      </div>
                      <div class="col-sm-4 col-md-4">
                        <label>CCV Code</label>
                        <input type="email" class="form-control" placeholder="258">
                      </div>
                    </div>
                    <div class="row mrg-bot-20">
                      <div class="col-sm-7">
                                                    <span class="custom-checkbox d-block font-12 mb-2">
													<input type="checkbox">
													<label for="promo"></label>
													Have a promo code?
												</span>
                        <input type="text" class="form-control">
                      </div>
                      <div class="col-sm-5 padd-top-10 text-right">
                        <label>Total Order</label>
                        <h2 class="mrg-0"><span class="theme-cl">$</span>987</h2>
                      </div>
                      <div class="col-sm-12 bt-1 padd-top-15 pt-3">
                                                    <span class="custom-checkbox d-block font-12 mb-3">
													<input type="checkbox">
													<label for="privacy1"></label>
													By ordering you are agreeing to our <a href="#" class="theme-cl">Privacy policy</a>.
													</span>
                        <button type="submit" class="btn btn-m btn-success">Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
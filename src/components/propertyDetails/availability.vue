<template>
  <div class="schedule widget-boxed mt-33 mt-0">
    <div class="widget-boxed-header">
      <h4><i class="fa fa-calendar pr-3 padd-r-10"></i>Schedule a Tour</h4>
    </div>
    <div class="widget-boxed-body">
      <div class="row">
        <div class="col-lg-6 col-md-12 book">
          <input type="text" id="reservation-date" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" class="form-control" readonly="">
        </div>
        <div class="col-lg-6 col-md-12 book2">
          <input type="text" id="reservation-time" class="form-control" readonly="">
        </div>
      </div>
      <div class="row mrg-top-15 mb-3">
        <div class="col-lg-6 col-md-12 mt-4">
          <label class="mb-4">Adult</label>
          <div class="input-group">
                                                <span class="input-group-btn">
										 <button type="button" class="btn counter-btn theme-cl btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
											 <i class="fa fa-minus"></i>
										 </button>
									        </span>
            <input type="text" name="quant[1]" class="border-0 text-center form-control input-number" data-min="0" data-max="10" value="0">
            <span class="input-group-btn">
											 <button type="button" class="btn counter-btn theme-cl btn-number" data-type="plus" data-field="quant[1]">
											  <i class="fa fa-plus"></i>
											 </button>
									        </span>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 mt-4">
          <label class="mb-4">Children</label>
          <div class="input-group">
                                                <span class="input-group-btn">
										 <button type="button" class="btn counter-btn theme-cl btn-number" disabled="disabled" data-type="minus" data-field="quant[2]">
											 <i class="fa fa-minus"></i>
										 </button>
									        </span>
            <input type="text" name="quant[2]" class="border-0 text-center form-control input-number" data-min="0" data-max="10" value="0">
            <span class="input-group-btn">
											 <button type="button" class="btn counter-btn theme-cl btn-number" data-type="plus" data-field="quant[2]">
											  <i class="fa fa-plus"></i>
											 </button>
									        </span>
          </div>
        </div>
      </div>
      <router-link :to="{name:'checkout'}" class="btn reservation btn-radius theme-btn full-width mrg-top-10">Submit Request</router-link>
    </div>
  </div>
</template>
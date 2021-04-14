<template>
  <section class="home17 overlay home-three bg-img3">
    <div class="hero-main">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="banner-inner">
              <h5 class="sub-title">We Have Over Million Properties For You</h5>
              <h1 class="title">Find Your <br> Dream Home</h1>
            </div>
          </div>
          <!-- Search Form -->
          <div class="col-12">
            <div class="banner-search-wrap">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tabs_1">
                  <div class="">
                      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="rld-main-search row" novalidate @submit.prevent="handleSubmit(onSubmit)">
                          <ValidationProvider vid="location" name="location" rules="required" v-slot="{ errors }" class="col-lg-3 col-md-4">
                            <div class="form-group m-0 rld-single-input">
                              <input type="text" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                                     id="location" aria-describedby="emailHelp"
                                     v-model="search.location" placeholder="Enter email" required>
                              <div class="invalid-feedback">
                                <span>{{ errors[0] }}</span>
                              </div>
                            </div>
                          </ValidationProvider>
                          <ValidationProvider vid="dateTo" name="Date From" rules="required" v-slot="{ errors }" class="col-lg-3 col-md-4">
                            <div class="form-group m-0 rld-single-input">
                              <input type="date" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                                     id="dateFrom" aria-describedby="emailHelp"
                                     v-model="search.dateFrom" placeholder="Enter email" required>
                              <div class="invalid-feedback">
                                <span>{{ errors[0] }}</span>
                              </div>
                            </div>
                          </ValidationProvider>
                          <ValidationProvider vid="dateFrom" name="Date To" rules="required" v-slot="{ errors }" class="col-lg-3 col-md-4">
                            <div class="form-group m-0 rld-single-input">
                              <input type="date" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                                     id="dateTo" aria-describedby="emailHelp"
                                     v-model="search.dateTo" placeholder="Enter email" required>
                              <div class="invalid-feedback">
                                <span>{{ errors[0] }}</span>
                              </div>
                            </div>
                          </ValidationProvider>
                          <div class="col-lg-3 col-md-4">
                            <button class="btn btn-yellow" type="submit">Search Now</button>
                          </div>
                        </form>
                      </ValidationObserver>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/ End Search Form -->
        </div>
      </div>
    </div>
  </section>

</template>
<script>
export default {
  data(){
    return{
      search:{
        location:'',
        dateFrom:'',
        dateTo:''
      }
    }
  },
  methods:{
    goToSearch(){
      this.$router.push({name: 'search'})
    }
  }
}
</script>
<style scoped>
.form-control.is-invalid, .was-validated .form-control:invalid {
  border-color: #dc3545 !important;
}
.the-search .rld-single-input input {
  width: 100%;
  border: 1px solid #ebebeb;
  margin-right: 0 !important;
}
.form-control
{
  border-radius: 9px !important;
  padding: 20px 11px !important;
}
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
    margin: 0;
    padding: 0 3px;
    margin-bottom: 0;
  }
}
</style>
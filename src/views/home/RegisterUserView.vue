<template>
  <div>




    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://superawesomevectors.com/wp-content/uploads/2016/02/truck-icon-800x566.jpg"
                 class="img-fluid" alt="Sample image">
            <h1>Transport - made simple</h1>
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div>
                <h1 class="text-xl-start">TransaBuddy</h1><br>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              </div>
              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0"></p>
              </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <RegisterUser/><br>
                  <button type="button" class="btn btn-primary btn-lg" v-on:click="backToLogin">Back to login</button>
                </div>


            </form>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div

          class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div class="text-white mb-3 mb-md-0">

        </div>


      </div>
    </section>
  </div>
</template>

<script>

import RegisterUser from "@/components/login/RegisterUser";
export default {
  name: "RegisterUserView",
  components: {RegisterUser},
  methods: {
    backToLogin(){
      this.$router.push( {name: 'home'})
    }
  }
}

</script>



<style scoped>

</style>
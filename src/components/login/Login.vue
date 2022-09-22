<template>
  <section class="vh-100">
    <div class="container-fluid h-custom" v-if="divLogin">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://superawesomevectors.com/wp-content/uploads/2016/02/truck-icon-800x566.jpg"
               class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div>
              <h1 class="text-xl-start">TransaBuddy</h1><br>
            </div>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="text">Sign in with</p>
            </div>
            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0"></p>
            </div>
            <div v-if="divLoginInputForm">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control form-control-lg"
                       placeholder="Enter a valid username" v-model="loginRequest.username"/>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input type="password" id="form3Example4" class="form-control form-control-lg"
                       placeholder="Enter password" v-model="loginRequest.password"/>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">Forgot password?</a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button  type="button" class="btn btn-primary btn-lg" v-on:click="logIn">Login</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                  <router-link to="/register"> Register </router-link></p>
              </div>
            </div>
            <div v-if="divChooseRole">
              <br>

              <h2>Choose role</h2>
              <input checked type="radio" id="optionOne" :value="roles[0]" v-model="roleSelected"/>
              <label for="optionOne">{{ roles[0] }}</label>
              <br>
              <input checked type="radio" id="optionTwo" :value="roles[1]" v-model="roleSelected"/>
              <label for="optionTwo">{{ roles[1] }}</label>
              <br>
              <input checked type="radio" id="optionThree" :value="roles[2]" v-model="roleSelected"/>
              <label for="optionThree">{{ roles[2] }}</label>
              <br>
              <button type="button" v-on:click="LoginWithRole()">Sisene</button>

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
</template>


<script>


import AlertError from "@/components/alerts/AlertError";

export default {
  name: "Login",
  components: {AlertError},
  props: {
    title: String
  },
  data: function () {
    return {
      roleHomeRoute: '',
      alertError: '',
      roles: [],
      divLogin: true,
      divLoginInputForm: true,
      divChooseRole: false,
      divTest: false,
      roleSelected: '',
      loginRequest: {
        username: '',
        password: '',
      },
      contactInfo: {
        userId: '',
        roleNames: [],
        firstName: '',
        lastName: '',
        personalCode: '',
        email: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    logIn: function () {
      this.$http.post("/login", this.loginRequest
      ).then(response => {
        console.log()
        this.contactInfo = response.data
        this.roles = this.contactInfo.roleNames
        console.log(this.roles)

        if (this.roles.length > 1) {
          this.divLoginInputForm = false
          this.divChooseRole = true
        } else {
          if (this.roles[0] == 'admin') {
            this.roleSelected = "admin"
            sessionStorage.setItem('roleSelected', this.roleSelected )
            this.navigateToRoleHomeView('adminRoute')
          } else if (this.roles[0] == 'sender') {
            this.roleSelected = "sender"
            sessionStorage.setItem('roleSelected', this.roleSelected )
            this.navigateToRoleHomeView('senderRoute')
          } else {
            this.roleSelected = "courier"
            sessionStorage.setItem('roleSelected', this.roleSelected )
            this.navigateToRoleHomeView('courierRoute')
          }
        }
      }).catch(error => {
        this.alertError = 'Invalid username or password';
      })
    },
    LoginWithRole() {
      if (this.roleSelected == 'admin') {
        sessionStorage.setItem('roleSelected', this.roleSelected )
        this.navigateToRoleHomeView('adminRoute')
      } else if (this.roleSelected == 'sender') {
        sessionStorage.setItem('roleSelected', this.roleSelected )
        this.navigateToRoleHomeView('senderRoute')
      } else {
        sessionStorage.setItem('roleSelected', this.roleSelected )
        this.navigateToRoleHomeView('courierRoute')
      }
    },
    navigateToRoleHomeView(roleHomeRoute) {
      sessionStorage.setItem('userId', this.contactInfo.userId)
      this.$router.push({name: roleHomeRoute, query: {userId: this.contactInfo.userId}})
    },
  }
}
</script>

<style scoped>


</style>
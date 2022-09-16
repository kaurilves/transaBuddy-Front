<template>
  <div v-if="divLogin">
    <div v-if="divLoginInputForm">
      <br>
      <h2>{{ title }}</h2> <br>
      <AlertError :errorMessage="alertError"/><br>
      <input type="text" placeholder="Username" v-model="loginRequest.username"> <br><br>
      <input type="password" placeholder="password" v-model="loginRequest.password"><br><br>
      <button type="button" v-on:click="logIn">Log in</button><br><br>

      <router-link to="/register"> Register </router-link>

      <!--    todo register nupp-->


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

  </div>


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
            this.navigateToRoleHomeView('adminRoute')
          } else if (this.roles[0] == 'sender') {
            this.navigateToRoleHomeView('senderRoute')
          } else {
            this.navigateToRoleHomeView('courierRoute')
          }
        }
      }).catch(error => {
        this.alertError = 'Invalid username or password';
      })
    },
    LoginWithRole() {
      if (this.roleSelected == 'admin') {
        this.navigateToRoleHomeView('adminRoute')
      } else if (this.roleSelected == 'sender') {
        this.navigateToRoleHomeView('senderRoute')
      } else {
        this.navigateToRoleHomeView('courierRoute')
      }
    },
    navigateToRoleHomeView(roleHomeRoute) {
      sessionStorage.setItem('firstName', this.contactInfo.firstName)
      sessionStorage.setItem('lastName', this.contactInfo.firstName)
      sessionStorage.setItem('personalCode', this.contactInfo.personalCode)
      sessionStorage.setItem('email', this.contactInfo.email)
      sessionStorage.setItem('phoneNumber', this.contactInfo.phoneNumber)
      sessionStorage.setItem('roleNames', this.contactInfo.roleNames)

      this.$router.push({name: roleHomeRoute, query: {userId: this.contactInfo.userId}})
    },
  }
}
</script>

<style scoped>

</style>
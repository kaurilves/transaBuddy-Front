<template>
  <div v-if="divLoginInputForm">
    <div>
      <br>
      <h2>{{ title }}</h2>
<!--      <AlertError :errorMessage="alertError"/>-->
      <input type="text" placeholder="kasutajanimi" v-model = "loginRequest.username"> <br><br>
      <input type="password" placeholder="salasõna" v-model = "loginRequest.password"><br><br>
      <button type="button" v-on:click="logIn">Logi sisse</button>

      <!--    todo register nupp-->
    </div>

    <div>
      <!--      todo choose role-->
    </div>


  </div>


</template>


<script>


export default {
  name: "Login",
  props: {
    title: String
  },
  data: function () {
    return {
      roles: [],
      divLoginInputForm: true,
      divChooseRole: false,
      roleSelected: 'admin',
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
      }).catch(error => {
        console.log(error)
      })
    }

  }
}
</script>

<style scoped>

</style>
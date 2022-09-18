<template>
<div>
<h2>Register new account</h2><br><br>
<AlertSuccess :successMessage="successMessage"/>
<AlertError :errorMessage="errorMessage"/>

<div>
  <input type="text" placeholder="Username" v-model="userRequest.userName"><br><br>
  <input type="text" placeholder="Password" v-model="userRequest.password"><br><br>
  <input type="text" placeholder="First name" v-model="userRequest.firstName"><br><br>
  <input type="text" placeholder="Last name" v-model="userRequest.lastName"><br><br>
  <input type="text" placeholder="Personal code" v-model="userRequest.personalCode"><br><br>
  <input type="text" placeholder="Phone number" v-model="userRequest.phoneNumber"><br><br>
  <input type="text" placeholder="Email address" v-model="userRequest.email"><br><br>
  <input checked type="radio" id="optionOne" :value="1" v-model="userRequest.roleId"/>
  <label for="optionOne">Sender</label><br>
  <input checked type="radio" id="optionTwo" :value="2" v-model="userRequest.roleId"/>
  <label for="optionTwo">Courier</label><br>
  <button type="button" v-on:click="registerNewUser()">Register</button>
</div>


</div>
</template>

<script>
import AlertSuccess from "@/components/alerts/AlertSuccess";
import AlertError from "@/components/alerts/AlertError";


export default {
  name: "RegisterUser",
  components: {AlertError, AlertSuccess},
  data: function () {
    return{
      successMessage: '',
      errorMessage: '',
      userRequest:{
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        personalCode: '',
        phoneNumber: '',
        email: '',
        roleId: '',
      }
    }
  },
  methods: {
    registerNewUser: function () {
      this.$http.post("/register/user", this.userRequest
      ).then(response => {
        this.userRequest = response.data
        this.successMessage = 'New account registered'
      }).catch(() => {
        this.errorMessage = 'All fields must be filled'
      })
    }
  }
}
</script>
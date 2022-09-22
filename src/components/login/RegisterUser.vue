<template>
<div>
<h2>Register new account</h2><br><br>
<AlertSuccess :successMessage="successMessage"/>
<AlertError :errorMessage="errorMessage"/>

<div>
  <input type="text" placeholder="Username" class="form-control form-control-lg" v-model="userRequest.userName"><br>
  <input type="text" placeholder="Password" class="form-control form-control-lg" v-model="userRequest.password"><br>
  <input type="text" placeholder="First name" class="form-control form-control-lg" v-model="userRequest.firstName"><br>
  <input type="text" placeholder="Last name" class="form-control form-control-lg" v-model="userRequest.lastName"><br>
  <input type="text" placeholder="Personal code" class="form-control form-control-lg" v-model="userRequest.personalCode"><br>
  <input type="text" placeholder="Phone number" class="form-control form-control-lg" v-model="userRequest.phoneNumber"><br>
  <input type="text" placeholder="Email address" class="form-control form-control-lg" v-model="userRequest.email"><br>
  <h3>Choose role</h3>
  <input checked type="radio" id="optionOne"  :value="1"  v-model="userRequest.roleId"/>
  <label for="optionOne">Sender</label><br>
  <input checked type="radio" id="optionTwo" :value="2" v-model="userRequest.roleId"/>
  <label for="optionTwo">Courier</label><br><br>
  <button type="button" class="btn btn-primary btn-lg" v-on:click="registerNewUser()">Register</button>
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
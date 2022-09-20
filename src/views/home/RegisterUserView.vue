<template>
  <div>
 <RegisterUser/>
    <button type="button" v-on:click="backToLogin">Back to login</button>
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
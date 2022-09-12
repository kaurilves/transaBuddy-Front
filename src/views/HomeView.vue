<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login title="Sisse logimine"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/login/Login";

export default {
  name: 'HomeView',
  components: {
    Login
  }
}
</script>

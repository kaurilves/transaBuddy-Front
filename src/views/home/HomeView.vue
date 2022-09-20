<template>
  <div class="home">
    <Login title="Log into your account"/>
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

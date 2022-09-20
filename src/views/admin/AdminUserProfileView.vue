<template>

  <div>

    <div>
      <UserProfile/>

      <button type="button" v-on:click="backToAdminView">Back</button>
    </div>

  </div>


</template>

<script>

import UserProfile from "@/components/UserProfile";
export default {
  name: "AdminUserProfileView",
  components: {UserProfile},
  methods:{
    backToAdminView(){
      this.$router.push({name: 'adminRoute'})
    }
  }
}

</script>

<style scoped>

</style>
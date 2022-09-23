<template>

  <div>

    <div class="justify-content-center">
      <ViewUserProfile/>

      <button type="button" class="btn btn-primary btn-lg" v-on:click="backToAdminView">Back</button>
    </div>

  </div>


</template>

<script>
import ViewUserProfile from "@/components/users/UserProfile";
export default {
  name: "AdminUserProfileView",
  components: {ViewUserProfile},
  methods:{
    backToAdminView(){
      this.$router.push({name: 'adminRoute'})
    }
  }
}

</script>

<style scoped>

</style>
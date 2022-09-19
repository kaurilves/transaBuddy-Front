<template>

  <div>

    <div>
      <ViewUserProfile/>

      <button type="button" v-on:click="backToAdminView">Back</button>
    </div>

  </div>


</template>

<script>
import ViewUserProfile from "@/components/ViewUserProfile";
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
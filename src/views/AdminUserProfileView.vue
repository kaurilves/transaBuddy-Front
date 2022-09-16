<template>

  <div>
    <h2>User profile</h2>
    <div>
      <textarea></textarea>

      <button type="button" v-on:click="backToAdminView">Back</button>
    </div>

  </div>


</template>

<script>
export default {
  name: "AdminUserProfileView",
  methods:{
    backToAdminView(){
      this.$router.push({name: 'adminRoute'})

    }
  }
}

</script>

<style scoped>

</style>
<template>
  <div>
    <h2>Admin view</h2>
    <div>
      <button v-on:click="displayAllUsers" >All users</button>
      <button v-on:click="displayFindUsers">Search users</button>
      <button v-on:click="displayAddCustomer">Add user </button>
      
    </div>
  </div>

</template>

<script>
export default {
  name: "AdminView",
  data: function () {
    return{

    }
  },
  methods: {
    displayAllUsers: function () {
      
    }

  }
}
</script>


<style scoped>

</style>
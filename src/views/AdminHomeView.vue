<template>
  <div>
    <h2>Admin view</h2>
    <div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllUsers" >All users</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayFindUsers">Search users</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAddCustomer">Add user </button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAddNewOrder">Add order</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAdjustPricing">Adjust pricing list</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayViewProfile">View profile</button>
    </div>
    <div v-if="divDisplayAllUsers">
      <FindAllUsersTable :users="users" title="All users"/>
    </div>


  </div>

</template>

<script>
import FindAllUsersTable from "@/components/FindAllUsersTable";
export default {
  name: "AdminView",
  components: {FindAllUsersTable},
  data: function () {
    return{
      user: {},
      users: [],
      divDisplayAllUsers: false,
      divDisplayFindUsers: false,
      divDisplayAddCustomer: false,
      divDisplayAddNewOrder: false,
      divDisplayAdjustPricing: false,
      divDisplayViewProfile: false,
      divDisplayUserProfile: false,

    }
  },
  methods: {
    findAllUsers(){
      this.$http.get('/admin/users')
          .then(response => {

            this.users = response.data
            console.log(this.users)
          })
          .catch(reason => {
            console.log(reason)
          })
    },
    hideAllDivs(){
      this.divDisplayAllUsers = false,
          this.divDisplayFindUsers = false,
          this.divDisplayAddCustomer = false,
          this.divDisplayAddNewOrder = false,
          this.divDisplayAdjustPricing = false,
          this.divDisplayViewProfile = false
    },
    displayAllUsers() {
      this.hideAllDivs()
      this.divDisplayAllUsers = true
      this.findAllUsers()
    },
    displayFindUsers(){
      this.hideAllDivs()

    },
    displayAddCustomer(){
      this.hideAllDivs()
    },
    displayAddNewOrder(){
      this.hideAllDivs()
    },
    displayAdjustPricing(){
      this.hideAllDivs()
    },
    displayViewProfile(){

    },

  }
}
</script>


<style scoped>

</style>
<template>
  <div>
    <h2>Admin view</h2>
    <div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllUsers" >All users</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayFindUsers">Search users</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAddUser">Add user </button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAddNewOrder">Add order</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAdjustPricing">Pricing list</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayViewProfile">View profile</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>

    </div>
    <div v-if="divDisplayAllUsers">
      <FindAllUsersTable :users="users" title="All users"/>
    </div>

    <div v-if="divDisplayFindUsers">
      <FindUsersByNameAndCode title="Find users" @usersResultSuccess="updateUsersFromResult"/>
      <div v-if="users.length > 0">
        <FindAllUsersTable :users="users" title="Found users"/>
      </div>

    </div>
    <div v-if="divDisplayAddUser">
      <RegisterUser/>
    </div>

    <div v-if="divDisplayAdjustPricing">
      <div v-if="shipmentPriceInfos.length > 0">
        <FindAllShipmentPrices :shipmentPriceInfos="shipmentPriceInfos" title="Current pricing list"/>
      </div>
      <div v-if="divDisplayUserProfile">
        User profile
        <ViewUserProfile/>
      </div>

    </div>


  </div>

</template>

<script>
import FindAllUsersTable from "@/components/FindAllUsersTable";
import FindUsersByNameAndCode from "@/components/FindUsersByNameAndCode";
import AddNewUser from "@/components/AddNewUser";
import RegisterUser from "@/components/RegisterUser.vue";
import FindAllShipmentPrices from "@/components/FindAllShipmentPrices";
import Logout from "@/components/login/Logout";
import ViewUserProfile from "@/components/ViewUserProfile";


export default {
  name: "AdminView",
  components: {
    ViewUserProfile,
    Logout, FindAllShipmentPrices, RegisterUser, AddNewUser, FindUsersByNameAndCode, FindAllUsersTable,},
  data: function () {
    return{
      user: {},
      users: [],
      shipmentPriceInfo: {},
      shipmentPriceInfos: [],
      divDisplayAllUsers: false,
      divDisplayFindUsers: false,
      divDisplayAddUser: false,
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
    updateUsersFromResult(usersResult){
      this.users = usersResult
    },
    findAllPrices: function () {
      this.$http.get("/admin/prices")
          .then(response => {
        this.shipmentPriceInfos = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    hideAllDivs(){
      this.divDisplayAllUsers = false,
          this.divDisplayFindUsers = false,
          this.divDisplayAddUser = false,
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
      this.users = []
      this.hideAllDivs()
      this.divDisplayFindUsers = true

    },
    displayAddUser(){
      this.hideAllDivs()
      this.divDisplayAddUser = true
    },
    displayAddNewOrder(){
      this.hideAllDivs()
    },
    displayAdjustPricing(){
      this.hideAllDivs()
      this.shipmentPriceInfos = []
      this.findAllPrices()
      this.divDisplayAdjustPricing = true
    },
    displayViewProfile(){


    },
    logOut(){
      sessionStorage.clear()
      localStorage.clear()
      this.$confirm("Are you sure you want to log out?").then(() => {
        this.$router.push( {name: 'home'})
      });


    }


  }
}
</script>


<style scoped>

</style>
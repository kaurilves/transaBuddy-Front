<template>
  <div>
    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>
    </div>

    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAddOrder">Add new order</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="">Search orders</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayViewProfile">View profile</button>

    <div v-if="divDisplayActiveOrders">
    <UserActiveOrdersTable/>
    </div>

    <div v-if="divDisplayUserProfile">
      User profile
      <UserProfile/>
    </div>

  </div>
</template>

<script>
import UserActiveOrdersTable from "@/components/SenderActiveOrdersTable";
import UserProfile from "@/components/UserProfile";
import SenderUserProfileView from "@/views/SenderUserProfileView";

export default {
  name: "SenderView",
  components: {
    UserActiveOrdersTable, UserProfile, SenderUserProfileView
  },
  data: function (){
    return  {
      divDisplayActiveOrders: true,
      divDisplayUserProfile: false
    }
  },
  methods: {
    logOut() {
      sessionStorage.clear()
      localStorage.clear()
      this.$confirm("Are you sure you want to log out?").then(() => {
        this.$router.push({name: 'home'})
      });
    },
    hideAllDivs: function () {
      this.divDisplayActiveOrders = false

    },
    displayAddOrder: function () {
      this.hideAllDivs()
      this.$router.push({name: 'NewOrderView'})
    },
    displayViewProfile: function () {
      this.hideAllDivs();
      this.$router.push({name: 'SenderUserProfileView'})
    },
  }
}
</script>

<style scoped>
#logOutButton {
  position: relative;
  top: -50px;
  right: -700px;
  margin: 5px;
}
</style>
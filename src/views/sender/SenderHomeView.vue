<template>
  <div>
    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>
    </div>

    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToAddOrder">Add new order</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToSearchSenderOrders">Search orders</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToViewProfile">View profile</button>
    <SenderActiveOrdersTable/>
  </div>
</template>

<script>
import UserProfile from "@/components/users/UserProfile";
import SenderUserProfileView from "@/views/sender/SenderUserProfileView";
import SenderActiveOrdersTable from "@/components/sender/SenderActiveOrdersTable";

export default {
  name: "SenderHomeView",
  components: {
    SenderActiveOrdersTable, UserProfile, SenderUserProfileView
  },
  data: function (){
    return  {
      userId: localStorage.getItem('userId')
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
    navigateToAddOrder: function () {
      this.$router.push({name: 'newOrderView', query:{userId: this.userId}})
    },
    navigateToViewProfile: function () {
      this.$router.push({name: 'senderUserProfileView', query:{userId: this.userId}})
    },
    navigateToSearchSenderOrders: function () {
      this.$router.push({name:'senderSearchOrders', query:{userId: this.userId}})
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
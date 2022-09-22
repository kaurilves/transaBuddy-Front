<template>
  <div>
    <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    </head>
    <body>

    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#" v-on:click="navigateToAddOrder">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
        </ul>
      </div>
    </nav>

    </body>
    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>
    </div>

    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToAddOrder">Add new order</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToAllSenderOrders">All orders</button>
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
  data: function () {
    return {
      userId: sessionStorage.getItem('userId')
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
      this.$router.push({name: 'newOrderView', query: {userId: this.userId}})
    },
    navigateToViewProfile: function () {
      this.$router.push({name: 'senderUserProfileView', query: {userId: this.userId}})
    },
    navigateToAllSenderOrders: function () {
      this.$router.push({name: 'senderAllOrders', query: {userId: this.userId}})
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
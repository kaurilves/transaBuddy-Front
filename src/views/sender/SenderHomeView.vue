<template>
  <div>
    <div class="d-flex justify-content-center">
      <head>
        <title>Bootstrap Example</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      </head>
      <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-brand bg-dark">TransaBuddy</button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav btn-group btn-group-toggle" data-toggle="buttons">
            <button style="margin: 5px" class="btn btn-outline-light" v-on:click="navigateToAddOrder">Add new order
            </button>
            <button style="margin: 5px" class="btn btn-outline-light" v-on:click="navigateToAllSenderOrders">All orders
            </button>
            <button style="margin: 5px" class="btn btn-outline-light" v-on:click="navigateToViewProfile">View profile
            </button>
            <button id="logOutButton" style="margin: 5px" class="btn btn-outline-light" v-on:click="logOut">Logout
            </button>
            <select class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" v-model="roleSelected" v-on:change="changeRole">
              <option v-for="role in roles" :value="role">{{ role }}</option>
            </select>
          </div>
        </div>
      </nav>
      <div class="container-fluid text-center">
        <div class="row content"></div>
      </div>
      </body>
    </div>
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
      userId: this.$route.query.userId,
      roleSelected: sessionStorage.getItem('roleSelected'),
      roles: JSON.parse(sessionStorage.getItem('roles')),
      roleHomeRoute: ''
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
    changeRole: function () {
      sessionStorage.setItem('roles', JSON.stringify(this.roles))
      if (this.roleSelected == 'admin') {
        sessionStorage.setItem('roleSelected', this.roleSelected)
        this.navigateToRoleHomeView('adminRoute')
      } else if (this.roleSelected == 'sender') {
        sessionStorage.setItem('roleSelected', this.roleSelected)
        this.navigateToRoleHomeView('senderRoute')
      } else {
        sessionStorage.setItem('roleSelected', this.roleSelected)
        this.navigateToRoleHomeView('courierRoute')
      }
    },
    navigateToRoleHomeView(roleHomeRoute) {
      this.$router.push({name: roleHomeRoute, query: {userId: this.userId}})
    },
  }
}
</script>

<style scoped>
</style>
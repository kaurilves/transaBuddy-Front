<template>
  <div class="d-flex justify-content-center">
    <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    </head>
    <body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-light ">
      <button class="navbar-brand btn btn-primary btn-lg" v-on:click="hideAllDivs">TransaBuddy</button>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav btn-group btn-group-toggle" data-toggle="buttons">
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayAvailableOrders">Available
            orders
          </button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayActiveOrders">Active orders
          </button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayOrderHistory">Delivered orders
          </button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="navigateToViewProfile">View profile
          </button>
          <button id="logOutButton" type="button" class="btn btn-warning btn-lg" v-on:click="logOut">Logout</button>
          <select class="btn btn-warning btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false" v-model="roleSelected" v-on:change="changeRole">
            <option v-for="role in roles" :value="role">{{ role }}</option>
          </select>

        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="container-fluid">

        <div v-if="divDisplayActiveOrders">
          <CourierActiveOrdersTable/>
        </div>

        <div v-if="divDisplayAvailableOrders">
          <AvailableOrdersTable/>
        </div>

        <div v-if="divDisplayOrderHistory">
          <CourierOrderHistoryTable/>
        </div>
      </div>

    </div>
    </body>
  </div>


</template>

<script>
import AvailableOrdersTable from "@/components/courier/AvailableOrdersTable";
import CourierActiveOrdersTable from "@/components/courier/CourierActiveOrdersTable";
import CourierOrderHistoryTable from "@/components/courier/CourierOrderHistoryTable";
import UserProfile from "@/components/users/UserProfile";
import CourierUserProfileView from "@/views/courier/CourierUserProfileView";


export default {
  name: "CourierHomeView",
  components: {
    AvailableOrdersTable,
    CourierActiveOrdersTable, CourierOrderHistoryTable,
    UserProfile, CourierUserProfileView
  },
  data: function () {
    return {
      divDisplayAvailableOrders: false,
      divDisplayActiveOrders: true,
      divDisplayOrderHistory: false,
      userId: sessionStorage.getItem('userId'),
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

    displayActiveOrders: function () {
      this.hideAllDivs()
      this.divDisplayActiveOrders = true;
    },

    displayAvailableOrders: function () {
      this.hideAllDivs()
      this.divDisplayAvailableOrders = true;
    },

    displayOrderHistory: function () {
      this.hideAllDivs()
      this.divDisplayOrderHistory = true;
    },

    hideAllDivs: function () {
      this.divDisplayAvailableOrders = false
      this.divDisplayActiveOrders = false
      this.divDisplayOrderHistory = false
    },

    navigateToViewProfile: function () {
      this.$router.push({name: 'courierUserProfileView', query: {userId: this.userId}})
      this.$router.push({name: 'senderUserProfileView', query: {userId: this.userId}})
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
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
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayAllUsers">All users</button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayFindUsers">Search users</button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayAddUser">Add user</button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayAddNewOrder">Add order</button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayAllOrders">All orders</button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="displayAdjustPricing">Pricing list
          </button>
          <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="navigateToProfileView">View profile
          </button>
          <select style="margin: 5px" class="btn btn-warning btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false" v-model="roleSelected" v-on:change="changeRole">
            <option v-for="role in roles" :value="role">{{ role }}</option>
          </select>
          <button style="margin: 5px" id="logOutButton" type="button" class="btn btn-danger btn-lg" v-on:click="logOut">Logout</button>

        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row content">

        <div class="justify-content-center" v-if="divDisplayAllUsers">
          <h1>Users</h1>
          <AllUsersTable :users="users" title="All users"/>
          <hr>

        </div>

        <div class="justify-content-center" v-if="divDisplayFindUsers">
          <UsersByNameAndCodeTable title="Find users" @usersResultSuccess="updateUsersFromResult"/>
          <div v-if="users.length > 0">
            <AllUsersTable :users="users" title="Found users"/>
          </div>
        </div>

        <div class="justify-content-center" v-if="divDisplayAddUser">
          <RegisterUser/>
        </div>

        <div class="justify-content-center" v-if="divDisplayAdjustPricing">
          <div v-if="shipmentPriceInfos.length > 0">
            <AllShipmentPrices :shipmentPriceInfos="shipmentPriceInfos" title="Current pricing list"/>
          </div>
        </div>
        <div class="justify-content-center" v-if="divDisplayUserProfile">
          User profile
          <UserProfile/>
        </div>

        <div class="justify-content-center" v-if="divDisplayAllOrders">
          <AllOrdersTable :orders="orders" title="All orders"/>
        </div>


      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    </body>
  </div>


</template>

<script>
import RegisterUser from "@/components/login/RegisterUser.vue";
import Logout from "@/components/login/Logout";
import UserProfile from "@/components/users/UserProfile";
import AllUsersTable from "@/components/users/AllUsersTable";
import AllShipmentPrices from "@/components/order/AllShipmentPrices";
import UsersByNameAndCodeTable from "@/components/users/UsersByNameAndCodeTable";
import SenderActiveOrdersTable from "@/components/sender/SenderActiveOrdersTable";
import SenderActiveOrdersTableBody from "@/components/sender/SenderActiveOrdersTableBody";
import AllOrdersTable from "@/components/order/AllOrdersTable";


export default {
  name: "AdminHomeView",
  components: {
    AllOrdersTable,
    SenderActiveOrdersTableBody,
    SenderActiveOrdersTable,
    UserProfile, Logout, AllShipmentPrices, RegisterUser, UsersByNameAndCodeTable, AllUsersTable,
  },
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      user: {},
      users: [],
      orders: [],
      roleSelected: sessionStorage.getItem('roleSelected'),
      roles: JSON.parse(sessionStorage.getItem('roles')),
      roleHomeRoute: '',
      shipmentPriceInfo: {
        shipmentPriceId: ''
      },
      shipmentPriceInfos: [],
      divDisplayAllOrders: false,
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

    finaAllOrders() {
      this.$http.get("/transabuddy/active-orders"
      ).then(response => {
        this.orders = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    findAllUsers() {
      this.$http.get('/admin/users')
          .then(response => {

            this.users = response.data
            console.log(this.users)
          })
          .catch(reason => {
            console.log(reason)
          })
    },
    updateUsersFromResult(usersResult) {
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
    hideAllDivs() {
      this.divDisplayAllUsers = false,
          this.divDisplayFindUsers = false,
          this.divDisplayAddUser = false,
          this.divDisplayAddNewOrder = false
      this.divDisplayAdjustPricing = false
      this.divDisplayViewProfile = false
      this.divDisplayAllOrders = false
    },
    displayAllUsers() {
      this.hideAllDivs()
      this.divDisplayAllUsers = true
      this.findAllUsers()
    },
    displayFindUsers() {
      this.users = []
      this.hideAllDivs()
      this.divDisplayFindUsers = true

    },
    displayAddUser() {
      this.hideAllDivs()
      this.divDisplayAddUser = true
    },
    displayAddNewOrder() {
      this.hideAllDivs()
      this.$router.push({name: 'newOrderView', query: {userId: this.userId}})
    },
    displayAdjustPricing() {
      this.hideAllDivs()
      this.shipmentPriceInfos = []
      this.findAllPrices()
      this.divDisplayAdjustPricing = true
    },

    displayAllOrders() {
      this.hideAllDivs()
      this.divDisplayAllOrders = true
      this.finaAllOrders()
    },
    navigateToProfileView() {
      this.$router.push({name: 'adminUserProfileView', query: {userId: this.userId}})
    },
    logOut() {
      sessionStorage.clear()
      localStorage.clear()
      this.$confirm("Are you sure you want to log out?").then(() => {
        this.$router.push({name: 'home'})
      });
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
/* Remove the navbar's default margin-bottom and rounded borders */
.navbar {
  margin-bottom: 0;
  border-radius: 0;
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
.row.content {
  height: 450px
}

/* Set gray background color and 100% height */
.sidenav {

  padding-top: 20px;
  background-color: #F6F0E0;
  height: 100%;
}

/* Set black background color, white text and some padding */
footer {
  background-color: #555;
  color: white;
  padding: 15px;
}

/* On small screens, set height to 'auto' for sidenav and grid */
@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }

  .row.content {
    height: auto;
  }
}
#wrapper{

  width: 650px  ;
  height: auto;
  background-color: rgb(198, 241, 200);
  margin: 0 auto;
  margin-top: 200px;
  border-radius: 10px;
}



</style>
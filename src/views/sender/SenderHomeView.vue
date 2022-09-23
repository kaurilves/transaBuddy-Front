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
      <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <button class="navbar-brand btn btn-primary btn-lg">TransaBuddy</button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav btn-group btn-group-toggle" data-toggle="buttons">
            <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="navigateToAddOrder">Add new order
            </button>
            <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="navigateToAllSenderOrders">All orders
            </button>
            <button style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="navigateToViewProfile">View profile
            </button>
            <select style="margin: 5px" class="btn btn-warning btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" v-model="roleSelected" v-on:change="changeRole">
              <option v-for="role in roles" :value="role">{{ role }}</option>
            </select>
            <button style="margin: 5px" id="logOutButton" type="button" class="btn btn-danger btn-lg" v-on:click="logOut">Logout</button>
          </div>
        </div>
      </nav>
      <div class="container-fluid text-center">
        <div class="row content">
          <SenderActiveOrdersTable/>
        </div>
      </div>
      </body>
    </div>

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
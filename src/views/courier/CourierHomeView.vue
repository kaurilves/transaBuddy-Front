<template>
  <div>
    <h2>Hello courier</h2>
    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>
    </div>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAvailableOrders">Available orders</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayActiveOrders">Active orders</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayOrderHistory">Delivered orders</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToViewProfile">View profile</button>
    <select class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false" v-model="roleSelected" v-on:change="changeRole">
      <option v-for="role in roles" :value="role">{{ role }}</option>
    </select>

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
      this.$router.push({name: 'courierUserProfileView', query:{userId: this.userId}})
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
#logOutButton {
  position: relative;
  top: -50px;
  right: -500px;
  margin: 5px;
}
</style>
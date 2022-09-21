<template>
  <div>
    <h2>Hello courier</h2>
    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>
    </div>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllAvailableOrders">Available orders
    </button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayActiveOrders">Active orders</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayOrderHistory">Delivered orders</button>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="navigateToViewProfile">View profile</button>

    <div v-if="divDisplayActiveOrders">
      <CourierActiveOrdersTable/>
    </div>

    <div v-if="divDisplayAllAvailableOrders">
      <AllAvailableOrdersTable :orders="orders" title="All available orders"/>
    </div>

    <div v-if="divDisplayOrderHistory">
      <CourierOrderHistoryTable/>
    </div>

  </div>
</template>

<script>
import AllAvailableOrdersTable from "@/components/courier/AllAvailableOrdersTable";
import CourierActiveOrdersTable from "@/components/courier/CourierActiveOrdersTable";
import CourierOrderHistoryTable from "@/components/courier/CourierOrderHistoryTable";
import UserProfile from "@/components/users/UserProfile";
import CourierUserProfileView from "@/views/courier/CourierUserProfileView";


export default {
  name: "CourierHomeView",
  components: {
    AllAvailableOrdersTable,
    CourierActiveOrdersTable, CourierOrderHistoryTable,
    UserProfile, CourierUserProfileView
  },
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      order: {},
      orders: [],
      divDisplayAllAvailableOrders: false,
      divDisplayActiveOrders: true,
      divDisplayOrderHistory: false,
      pickUpDistrictId: '0',
      dropOffDistrictId: '0',
      status: 'N',

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
    findOrdersByDistrictAndStatus: function () {
      this.$http.get('/transabuddy/orders/available', {
            params: {
              pickUpDistrictId: this.pickUpDistrictId,
              dropOffDistrictId: this.dropOffDistrictId,
              status: this.status,

            }
          }
      ).then(response => {
        this.orders = response.data
        console.log(this.orders)
      })
    },
    displayAllAvailableOrders: function () {
      this.hideAllDivs()
      this.divDisplayAllAvailableOrders = true;
      this.findOrdersByDistrictAndStatus()
    },
    displayActiveOrders: function () {
      this.hideAllDivs()
      this.divDisplayActiveOrders = true;
    },
    displayOrderHistory: function () {
      this.hideAllDivs()
      this.divDisplayOrderHistory = true;
    },
    hideAllDivs: function () {
      this.divDisplayAllAvailableOrders = false
      this.divDisplayActiveOrders = false
      this.divDisplayOrderHistory = false
    },
    navigateToViewProfile: function () {
      this.$router.push({name: 'courierUserProfileView', query:{userId: this.userId}})
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
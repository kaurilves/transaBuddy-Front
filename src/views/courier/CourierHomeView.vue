<template>
  <div>
    <h2>Hello courier</h2>
    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>
    </div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllAvailableOrders">Available jobs</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayActiveOrders">Active jobs</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="">Delivered orders</button>

    <div v-if="divDisplayActiveOrders">
    <CourierActiveOrdersTable/>
    </div>

    <div v-if="divDisplayAllAvailableOrders">
      <AllAvailableOrdersTable :orders="orders" title="All available orders"/>
    </div>

    </div>
</template>

<script>
import AllAvailableOrdersTable from "@/components/courier/AllAvailableOrdersTable";
import CourierActiveOrdersTable from "@/components/courier/CourierActiveOrdersTable";


export default {
  name: "CourierHomeView",
  components: {
    AllAvailableOrdersTable, CourierActiveOrdersTable
  },
  data: function () {
    return {
      order: {},
      orders: [],
      divDisplayAllAvailableOrders: false,
      divDisplayActiveOrders: true,
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
    findOrderSByDistrictAndStatus: function () {
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
      this.findOrderSByDistrictAndStatus()
    },
    displayActiveOrders: function () {
      this.hideAllDivs()
      this.divDisplayActiveOrders = true;


    },
    hideAllDivs: function () {
      this.divDisplayAllAvailableOrders = false
      this.divDisplayActiveOrders = false
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
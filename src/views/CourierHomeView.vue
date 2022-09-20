<template>
  <div>
    <h2>Hello courier</h2>
    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>
    </div>
    <div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllAvailableOrders">Available jobs</button>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayActiveOrders" >Active jobs</button>-->
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayDeliveredOrders" >Delivered orders</button>-->
      <!--      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllUsers" >All users</button>-->
    </div>
    <div v-if="divDisplayAllAvailableOrders">
      <AllAvailableOrdersTable :orders="orders" title="All available orders"/>
    </div>
    <div v-if="divDisplayActiveOrders">
      <AllAvailableOrdersTable :orders="orders" title="All available orders"/>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import AllAvailableOrdersTable from "@/components/AllAvailableOrdersTable";
import CourierActiveOrdersTable from "@/components/SenderActiveOrdersTable";



export default {
  name: "CourierView",
  components: {
    AllAvailableOrdersTable
  },
  data: function () {
    return {
      order: {},
      orders: [],
      divDisplayAllAvailableOrders: false,
      divDisplayActiveOrders: true,
      pickUpDistrictId: '0',
      dropOffDistrictId: '0',
      status: 'N'

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
    displayAllAvailableOrders: function (){
      this.hideAllDivs()
      this.findOrderSByDistrictAndStatus()
    },
    displayActiveOrders: function (){
      this.hideAllDivs()
      this.divDisplayActiveOrders = true;
      CourierActiveOrdersTable.findActiveOrdersByCourierUserId()


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
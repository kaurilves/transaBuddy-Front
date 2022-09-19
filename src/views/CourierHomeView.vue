<template>
  <div>
    <h2>Hello courier</h2>
    <div>
      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllAvailableOrders">Available orders
      </button>
      <!--      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllUsers" >All users</button>-->
      <!--      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllUsers" >All users</button>-->
      <!--      <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAllUsers" >All users</button>-->
    </div>
    <div v-if="divDisplayAllAvailableOrders">
      <AllAvailableOrdersTable :orders="orders" title="All available orders"/>
    </div>
  </div>
</template>

<script>
import AllAvailableOrdersTable from "@/components/login/AllAvailableOrdersTable";


export default {
  name: "CourierView",
  components: {
    AllAvailableOrdersTable
  },
  data: function () {
    return {
      order: {},
      orders: [],
      divDisplayAllAvailableOrders: true,
      pickUpDistrict: 0,
      dropOffDistrict: 0,
      status: 'N'
    }
  },
  methods: {
    findOrderSByDistrictAndStatus: function () {
      this.$http.get('/transabuddy/orders/available', {
            params: {
              pickUpDistrict: this.pickUpDistrict,
              dropOffDistrict: this.dropOffDistrict,
              status: this.status,

            }
          }
      ).then(response => {
        this.orders = response.data
        console.log(this.orders)
      })
    },
    displayAllAvailableOrders: function (){
      this.findOrderSByDistrictAndStatus()
    }
  }
}
</script>

<style scoped>

</style>
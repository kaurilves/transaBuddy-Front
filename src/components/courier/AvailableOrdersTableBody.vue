<template>
  <tbody>
  <tr v-for="order in orderInfo">
    <td>{{order.deliveryDate}}</td>
    <td>{{order.timeFrame}}</td>
    <td>{{order.pickUpAddress}}</td>
    <td>{{order.dropOffAddress}}</td>
    <td>{{order.priceCategory}}</td>
    <td>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toOrderView(order)">
        View order info
      </button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'AvailableOrdersTableBody',
  data: function () {
    return {
      orderId: 0,
      orderInfo: [{}],
      pickUpDistrictId: '0',
      dropOffDistrictId: '0',
      status: 'N',

    }
  },
  methods: {
    findOrdersByDistrictAndStatus: function () {
      this.$http.get('/transabuddy/orders/available', {
            params: {
              pickUpDistrictId: this.pickUpDistrictId,
              dropOffDistrictId: this.dropOffDistrictId,
              status: this.status,
            }
          }
      ).then(response => {
        this.orderInfo = response.data
        console.log(this.orders)
      }).catch(error => {
        console.log(error)
      })
    },
    toOrderView: function (orderId) {
      this.$router.push({name: 'orderView', query: {orderId: orderId}})
    }
  },
  mounted(){
    this.findOrdersByDistrictAndStatus();
  }
}
</script>
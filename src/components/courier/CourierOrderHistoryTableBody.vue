<template>
  <tbody>
  <tr v-for="order in orderInfo">
    <td>{{ order.deliveryDate }}</td>
    <td>{{ order.pickUpAddress }}</td>
    <td>{{ order.dropOffAddress }}</td>
    <td>{{ order.priceCategory }}</td>
    <td>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="toOrderView(order.orderId)">View order
      </button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'CourierOrderHistoryTableBody',
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      orderId: 0,
      orderInfo: [{
        deliveryDate: '',
        pickUpAddress: '',
        dropOffAddress: '',
        priceCategory: '',
      }],
    }
  },
  methods: {
    findCompletedOrdersByCourierUserId: function () {
      this.$http.get("transabuddy/orders/courier-completed-orders", {
            params: {
              courierUserId: this.userId
            }
          }
      ).then(response => {
        console.log(response.data)
        this.orderInfo = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    toOrderView: function (orderId) {
      this.$router.push({name: 'orderView', query: {orderId: orderId}})
    }
  },
  mounted(){
    this.findCompletedOrdersByCourierUserId()
  }
}
</script>
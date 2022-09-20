<template>
  <tbody>
  <tr v-for="order in orderInfo">
    <td>{{ order.deliveryDate }}</td>
    <td>{{ order.fromHour }} - {{ order.toHour }}</td>
    <td>{{ order.pickUpAddress }}</td>
    <td>{{ order.dropOffAddress }}</td>
    <td>{{ order.priceCategory }}</td>
    <td>{{ order.status }}</td>
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
  name: 'CourierActiveOrdersTableBody',
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      orderId: 0,
      orderInfo: {
        deliveryDate: '',
        fromHour: 0,
        toHour: 0,
        pickUpAddress: '',
        dropOffAddress: '',
        priceCategory: '',
        status: '',
      }
    }
  },
  methods: {
    findActiveOrdersByCourierUserId: function () {
      this.$http.get("/transabuddy/user/courier-active-orders", {
            params: {
              userId: this.userId
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
      this.$router.push({name: 'senderOrderView', query: {orderId: orderId}})
    }
  },
  mounted() {
    this.findActiveOrdersByCourierUserId()
  }
}
</script>
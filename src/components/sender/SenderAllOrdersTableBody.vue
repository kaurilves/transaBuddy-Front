<template>

  <tbody>
  <tr v-for="order in orderInfo">
    <td>{{ order.deliveryDate }}</td>
    <td>{{ order.timeFrame }}</td>
    <td>{{ order.pickUpAddress }}</td>
    <td>{{ order.dropOffAddress }}</td>
    <td>{{ order.status }}</td>
    <td>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="toOrderView(order.orderId )">View order
      </button>
    </td>
  </tr>
  </tbody>
</template>
<script>


export default {
  name: 'SenderAllOrdersTableBody',
  data: function () {
    return {

      userId: this.$route.query.userId,
      orderId: 0,
      orderInfo:
          {
            deliveryDate: '',
            timeFrame: 0,
            pickUpAddress: '',
            dropOffAddress: '',
            status: ''
          }
    }
  },
  methods: {
    findOrdersBySenderUserId: function () {
      this.$http.get("/transabuddy/user/sender/all-orders", {
            params: {
              userId: this.userId,
              status: ' '
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
    },
  },
  mounted() {
    this.findOrdersBySenderUserId()
  }
}
</script>
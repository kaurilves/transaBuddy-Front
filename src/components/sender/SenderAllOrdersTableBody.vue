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
    <select class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false" v-model="orderInfo.status" v-on:change="findOrdersBySenderUserIdAndStatus">
      <option value=" "> All </option>
      <option value="N"> New </option>
      <option value="A"> Accepted </option>
      <option value="P"> Picked up </option>
      <option value="C"> Collected </option>
    </select>
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
    findOrdersBySenderUserIdAndStatus: function () {
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
    this.findOrdersBySenderUserIdAndStatus()
  }
}
</script>
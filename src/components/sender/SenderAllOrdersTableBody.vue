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
  props: {
    orderInfo: {}
  },

  data: function () {
    return {
      orderId: 0,

    }
  },
  methods: {

    toOrderView: function (orderId) {
      this.$router.push({name: 'orderView', query: {orderId: orderId}})
    },
  }
}
</script>
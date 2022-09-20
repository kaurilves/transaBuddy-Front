<template>
    <tbody>
    <tr v-for="order in orderInfo">
      <td>{{ order.orderId }}</td>
      <td>{{ order.status }}</td>
      <td>{{ order.receiverName }}</td>
      <td>{{ order.receiverPhoneNumber }}</td>
      <td>{{ order.deliveryDate }}</td>
      <td>{{ order.timeFrame }}</td>
      <td>{{ order.comment }}</td>
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
  name: 'SenderActiveOrdersTableBody',
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      orderId: 0,
      orderInfo:
        {
          orderId: 0,
          senderUserId: 0,
          receiverName: '',
          receiverPhoneNumber: '',
          courierUserId: 0,
          deliveryDate: '',
          timeFrame: '',
          comment: '',
          status: '',
          shipmentId: 0
        }

    }
  },
  methods: {


    findActiveOrdersBySenderUserId: function () {
      this.$http.get("/transabuddy/user/sender-active-orders", {
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
    toOrderView:function (orderId) {
      this.$router.push({name: 'orderView', query: {orderId: orderId}})

    }

  },
  mounted() {
    this.findActiveOrdersBySenderUserId()
  }
}
</script>
<template>
  <div>
    <table class="table">
    <tbody>
    <tr v-for="order in orderInfo">
      <td>{{ order.deliveryDate }}</td>
      <td>{{ order.fromHour }} - {{order.toHour}}</td>
      <td>{{ order.pickUpAddress }}</td>
      <td>{{ order.dropOffAddress }}</td>
      <td>{{ order.status }}</td>
      <td>
        <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                v-on:click="toOrderView(order.orderId)">View order
        </button>
      </td>
    </tr>
    </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'SenderActiveOrdersTableBody',
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      orderInfo:
        {
          deliveryDate: '',
          fromHour: 0,
          toHour: 0,
          pickUpAddress: '',
          dropOffAddress: '',
          status: '',
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
      this.$router.push({name: 'senderOrderView', query: {orderId: orderId}})
    }

  },
  mounted() {
    this.findActiveOrdersBySenderUserId()
  }
}
</script>
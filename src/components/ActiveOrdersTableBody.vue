<template>
  <div>
    <tbody>
    <tr v-for="order in orderInfo">
      <td>{{ order.id }}</td>
      <td>{{ order.status }}</td>
      <td>{{ order.receiverName }}</td>
      <td>{{ order.receiverPhoneNumber }}</td>
      <td>{{ order.deliveryDate }}</td>
      <td>{{ order.fromHour }}</td>
      <td>{{ order.toHour }}</td>
      <td>{{ order.comment }}</td>
      <td>
        <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                v-on:click="toOrderView(order.id)">View order
        </button>
      </td>
    </tr>
    </tbody>
  </div>
</template>
<script>
export default {
  name: 'ActiveOrdersTableBody',
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      orderInfo:
        {
          orderId: 0,
          senderUserId: 0,
          receiverName: '',
          receiverPhoneNumber: '',
          courierUserId: 0,
          deliveryDate: '',
          fromHour: 0,
          toHour: 0,
          comment: '',
          status: '',
          shipmentId: 0
        }

    }
  },
  methods: {


    findActiveOrdersBySenderId: function () {
      this.$http.get("/transabuddy/user/active-orders", {
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
      sessionStorage.setItem('orderId', orderId)
      this.$router.push({name: 'SenderOrderView'})
    }

  },
  mounted() {
    this.findActiveOrdersBySenderId()
  }
}
</script>
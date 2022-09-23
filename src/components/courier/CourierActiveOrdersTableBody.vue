<template>
  <tbody>
  <tr v-for="order in orderInfos">
    <td>{{ order.deliveryDate }}</td>
    <td>{{ order.timeFrame }}</td>
    <td>{{ order.pickUpAddress }}</td>
    <td>{{ order.dropOffAddress }}</td>
    <td>{{ order.priceCategory }}</td>
    <td>{{ order.status }}</td>
    <td v-if="order.status === 'Accepted'">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="orderPickedUp(order.orderId)">{{ order.deliveryButtonName }}
      </button>
    </td>
    <td v-if="order.status === 'Picked Up'">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="orderDelivery(order.orderId)">{{ order.deliveryButtonName }}
      </button>
    </td>
    <td>
      <button type="button" style="margin: 5px" class="btn btn-primary btn-lg"
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
      deliveryButtonName: 'Picked Up',
      orderInfos: [
        {
          deliveryDate: '',
          timeFrame: '',
          pickUpAddress: '',
          dropOffAddress: '',
          priceCategory: '',
          status: '',
          deliveryButtonName: ''
        }
      ]
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
        this.orderInfos = response.data
        for (let i = 0; i < this.orderInfos.length; i++) {
          if (this.orderInfos[i].status == 'A') {
            this.orderInfos[i].deliveryButtonName = 'Picked Up'
            this.orderInfos[i].status = 'Accepted'
          } else {
            this.orderInfos[i].deliveryButtonName = 'Delivered'
            this.orderInfos[i].status = 'Picked Up'
          }
        }
      }).catch(error => {
        console.log(error)
      })
    },

    orderPickedUp: function (orderId) {
      this.$http.patch("/transabuddy/order/pickedup", null, {
            params: {
              orderId: orderId
            }
          }
      ).then(response => {
        console.log(response.data)
        location.reload()
      }).catch(error => {
        console.log(error)
      })
    },
    orderDelivery: function (orderId) {
      this.$http.patch("/transabuddy/order/delivery", null, {
            params: {
              orderId: orderId
            }
          }
      ).then(response => {
        console.log(response.data)
        location.reload()
      }).catch(error => {
        console.log(error)
      })
    },

    toOrderView: function (orderId) {
      this.$router.push({name: 'orderView', query: {orderId: orderId}})
    }
  },
  mounted() {
    this.findActiveOrdersByCourierUserId()
  }
}
</script>
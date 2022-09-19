<template>
  <div>
    <h1>Order ID: {{ orderId }}</h1>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Order status</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail">
        {{ orderInfo.status }}
      </div>
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
      </div>
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
      </div>
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
      </div>
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SenderOrderView",
  data: function () {
    return {
      orderId: sessionStorage.getItem('orderId'),
      orderInfo: [
        {
          orderId: 0,
          senderUserId: 0,
          receiverName: '',
          receiverPhoneNumber: '',
          courierUserId: 0,
          deliveryDate: '',
          fromHour: 0,
          toHour: 0,
          pickUpDistrictId: 0,
          pickUpAddress: '',
          dropOffDistrictId: 0,
          dropOffAddress: '',
          comment: '',
          status: '',
          shipmentId: 0
        }
      ]
    }
  },
  methods: {
    getOrderById: function () {
      this.$http.get("/transabuddy/order", {
            params: {
              orderId: this.orderId
            }
          }
      ).then(response => {
        this.orderInfo = response.data
      }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
    this.getOrderById(this.orderId);
  }
}
</script>

<style scoped>

</style>
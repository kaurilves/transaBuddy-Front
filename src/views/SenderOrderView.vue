<template>
  <div>
    <h1>Order ID: {{this.orderId}}</h1>

    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="">Log out</button>
    </div>

    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Order status</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value=orderInfo.status>
      </div>

      <label for="staticEmail" class="col-sm-2 col-form-label">Order date</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value=Date>
      </div>

      <label for="staticEmail" class="col-sm-2 col-form-label">Collection address</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value=orderInfo.pickUpAddress>
      </div>

      <label for="staticEmail" class="col-sm-2 col-form-label">Delivery address</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value=orderInfo.dropOffAddress>
      </div>

      <label for="staticEmail" class="col-sm-2 col-form-label">Delivery phone number</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value=orderInfo.receiverPhoneNumber>
      </div>

      <label for="staticEmail" class="col-sm-2 col-form-label">Delivery date</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="orderInfo.deliveryDate">
      </div>

      <label for="staticEmail" class="col-sm-2 col-form-label">Pickup hour</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="orderInfo.fromHour">

      </div>

      <label for="staticEmail" class="col-sm-2 col-form-label">Delivery hour</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="orderInfo.toHour">
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
#logOutButton {
  position: relative;
  top: -80px;
  right: -700px;
  margin: 5px;
}
</style>
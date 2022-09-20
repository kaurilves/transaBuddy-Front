<template>


  <div class="container bootstrap snippets bootdey">
    <h2>Order information</h2>
    <div class="panel-body inf-content">
      <div class="row">
        <div class="col-md-6">
          <strong>Order details</strong><br>
          <div class="table-responsive">
            <table class="table table-user-information">
              <tbody>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-asterisk text-primary"></span>
                    Order added
                  </strong>
                </td>
                <td class="text-primary">
                  {{ orderInfo.deliveryDate }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-user  text-primary"></span>
                    Sender name
                  </strong>
                </td>
                <td class="text-primary">
                  {{ orderInfo.senderName }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-cloud text-primary"></span>
                    Sender phone number
                  </strong>
                </td>
                <td class="text-primary">
                  {{ orderInfo.senderPhoneNumber }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-eye-open text-primary"></span>
                    Pickup address
                  </strong>
                </td>
                <td class="text-primary">
                  {{ orderInfo.pickUpAddress }}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-eye-open text-primary"></span>
                    Receiver Name
                  </strong>
                </td>
                <td class="text-primary">
                  {{ orderInfo.receiverName }}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-envelope text-primary"></span>
                    Receiver phone number
                  </strong>
                </td>
                <td class="text-primary">
                  {{ orderInfo.receiverPhoneNumber }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-eye-open text-primary"></span>
                    Reciever address
                  </strong>
                </td>
                <td class="text-primary">
                  {{ orderInfo.dropOffAddress }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Delivery starting from:
                  </strong>
                </td>
                <td class="text-primary">
                  {{ hourToString(orderInfo.fromHour) }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Delivery end:
                  </strong>
                </td>
                <td class="text-primary">
                  {{ hourToString(orderInfo.toHour) }}
                </td>

              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Shipment amount
                  </strong>
                </td>
                <td class="text-primary">
                  {{}}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Shipment price category
                  </strong>
                </td>
                <td class="text-primary">
                  {{ orderInfo.priceCategory }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Order status
                  </strong>
                </td>
                <td class="text-primary">
                  {{ statusToString(orderInfo.status)}}
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>


<script>
export default {
  name: "OrderInfo",
  data: function () {
    return {
      orderId: sessionStorage.getItem('orderId'),
      orderInfo: {
        deliveryDate: '',
        senderUserId: '',
        courierUserId: '',
        fromHour: '',
        toHour: '',
        pickUpDistrictId: '',
        pickUpAddress: '',
        dropOffDistrictId: '',
        dropOffAddress: '',
        receiverName: '',
        receiverPhoneNumber: '',
        packageAmountInShipment: '',
        shipmentPriceId: '',
        shipmentDescription: '',
        comment: '',
        priceCategory: '',
        status: '',
        senderPhoneNumber: "",
        shipmentId: '',
        senderName: '',


      }
    }

  },
  methods: {
    getOrderByOrderId: function (orderId) {
      this.$http.get("/transabuddy/order", {
            params: {
              orderId: orderId
            }
          }
      ).then(response => {
        this.orderInfo = response.data
        console.log(this.orderInfo)

      }).catch(error => {
        console.log(error)
      })
    },
    hourToString(hour) {
      if (hour < 10) {
        return "0" + hour + ':00'
      } else {
        return hour + ':00'
      }

    },
    statusToString(status){
      if(status === "N"){
        return "Order active"
      }
      if(status === "A")
        return "Accepted by courier"
      if(status === "P"){
        return "Picked up by courier"
      }
      if(status === "D"){
        return "Delivered"
      }
      if(status === "C"){
        return "Cancelled"
      }
    }
  },
  mounted() {
    this.getOrderByOrderId(this.orderId)
    this.$forceUpdate();
  }

}
</script>

<style scoped>

</style>
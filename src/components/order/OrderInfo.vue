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
                  {{ orderInfo.packageAmount }}
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
                  {{ statusToString(orderInfo.status) }}
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div>

      <div class="left-img">
        Pictures from sender
        <ImageInput @imageInputSuccess="getImageDataFromFile"/>
        <br>
        <button type="button" style="margin: 5px" class="btn btn-outline-primary" v-on:click="sendImageDataToBackend(typeS)">
          Upload image
        </button>
        <br><br><br><br>
        <button type="button" style="margin: 5px" class="btn btn-outline-primary" v-on:click="findImageByOrderIdAndType(typeS)">
          Find sender picture
        </button>
        <div class="container">
          <div class="row" v-for="image in imageResponseS">
            <div class="col-sm">
              <img class="my-style" :src="image.base64"><br><br><br><br><br>
            </div>
          </div>
        </div>
      </div>

      <div class="center-img">
        Images from courier on pickup
        <ImageInput @imageInputSuccess="getImageDataFromFile"/>
        <br>
        <button type="button" style="margin: 5px" class="btn btn-outline-primary" v-on:click="sendImageDataToBackend(typeP)">
          Upload image
        </button>
        <br><br><br><br>
        <button type="button" style="margin: 5px" class="btn btn-outline-primary" v-on:click="findImageByOrderIdAndType(typeP)">
          Find courier pickup images
        </button>

        <div class="container">
          <div class="row" v-for="image in imageResponseP">
            <div class="col-sm">
              <img class="my-style" :src="image.base64"><br><br><br><br><br>
            </div>
          </div>
        </div>
      </div>

      <div class="right-img">
        Images from courier on dropoff
        <ImageInput @imageInputSuccess="getImageDataFromFile"/>
        <br>
        <button type="button" style="margin: 5px" class="btn btn-outline-primary" v-on:click="sendImageDataToBackend(typeD)">
          Upload image
        </button>
        <br><br><br><br>
        <button type="button" style="margin: 5px" class="btn btn-outline-primary" v-on:click="findImageByOrderIdAndType(typeD)">
          Find courier dropoff images
        </button>
        <div class="container">
          <div class="row" v-for="image in imageResponseD">
            <div class="col-sm">
              <img class="my-style" :src="image.base64"><br><br><br><br><br>
            </div>
          </div>
        </div>
      </div>







    </div>


  </div>

</template>


<script>
import ImageInput from "@/components/image/ImageInput";

export default {
  name: "OrderInfo",
  components: {ImageInput},
  data: function () {
    return {
      imageUploadRequest: {
        orderId: this.$route.query.orderId,
        base64: '',
        type: ''
      },
      imageResponseS: [
        {
          base64: ''
        }
      ],
      imageResponseP: [
        {
          base64: ''
        }
      ],
      imageResponseD: [
        {
          base64: ''
        }
      ],
      typeS: 'S',
      typeP: 'P',
      typeD: 'D',
      orderId: this.$route.query.orderId,

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
        packageAmount: ''

      }
    }

  },
  methods: {
    findImageByOrderIdAndType: function (type) {
      this.$http.get("/transabuddy/image", {
            params: {
              orderId: this.orderId,
              type: type

            }
          }
      ).then(response => {
        if(type === "S"){
          this.imageResponseS = response.data
        }
        if(type === "P"){
          this.imageResponseP = response.data
        }
        if(type === "D"){
          this.imageResponseD = response.data
        }

        console.log(this.imageResponse)
      }).catch(error => {
        console.log(error)
      })
    },
    getImageDataFromFile(base64) {
      this.imageUploadRequest.base64 = base64
    },
    sendImageDataToBackend(type) {
      this.imageUploadRequest.type = type
      this.$http.post("/transabuddy/image", this.imageUploadRequest
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
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
    statusToString(status) {
      if (status === "N") {
        return "Order active"
      }
      if (status === "A")
        return "Accepted by courier"
      if (status === "P") {
        return "Picked up by courier"
      }
      if (status === "D") {
        return "Delivered"
      }
      if (status === "C") {
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
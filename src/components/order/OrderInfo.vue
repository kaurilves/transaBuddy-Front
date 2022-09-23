<template>
  <div>

    <AlertSuccess :successMessage="successMessage"/>
    <AlertError :errorMessage="errorMessage"/>

    <div>
      <h1>Order details</h1><br>
        <div class="table-responsive">
          <table class="table table-user-information">
            <tbody>
            <tr>
              <td>
                <strong>
                  <span class="glyphicon glyphicon-asterisk text-primary"></span>
                  Delivery date
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
                  Delivery time frame:
                </strong>
              </td>
              <td class="text-primary">
                {{ orderInfo.timeFrame }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>
                  <span class="glyphicon glyphicon-calendar text-primary"></span>
                  Package amount
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
                {{ orderInfo.status }}
              </td>
            </tr>
            </tbody>
          </table>
      </div>


    </div>

    <div>

      <div>
        <div v-if="divDisplayLeftImage">
          <div >
            <div v-for="image in imageResponseS">
              <div >
                <img class="my-style" :src="image.base64">
              </div>
            </div>
          </div>
        </div>

        <div v-if="divDisplaySenderPicture">
          <h2>Pictures from sender</h2>
          <ImageInput @imageInputSuccess="getImageDataFromFile"/>
          <br>
          <button type="button" style="margin: 5px" class="btn btn-outline-primary" v-on:click="uploadImage(typeS)">
            Upload image
          </button>

        </div>


        <div v-if="divDisplayCenterImage">

          <div>
            <div v-for="image in imageResponseP">
              <div>
                <img class="my-style" :src="image.base64"/>
              </div>
            </div>


          </div>
        </div>

        <div v-if="divDisplayPickupPicture">
          <h2>Images from courier on pickup</h2>
          <ImageInput @imageInputSuccess="getImageDataFromFile"/>
          <br>
          <button type="button" style="margin: 5px" class="btn btn-outline-primary"
                  v-on:click="sendImageDataToBackend(typeP)">
            Upload image
          </button>
        </div>

        <div v-if="divDisplayRightImage">

          <div>
            <div v-for="image in imageResponseD">
              <div>
                <img class="my-style" :src="image.base64"><br><br><br><br><br>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div v-if="divDisplayPickupPicture">
        <h2>Images from courier on dropoff</h2>
        <ImageInput @imageInputSuccess="getImageDataFromFile"/>
        <br>
        <button type="button" style="margin: 5px" class="btn btn-outline-primary"
                v-on:click="sendImageDataToBackend(typeD)">
          Upload image
        </button>
      </div>


    <div v-if="orderInfo.status === 'Accepted' && roleSelected === 'courier'">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="rejectAccept(orderInfo.orderId)">Cancel
      </button>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="orderPickedUp(orderInfo.orderId)">Picked Up
      </button>
    </div>
    <div v-if="orderInfo.status === 'Waiting for acception' && roleSelected === 'courier'">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="acceptOrder(orderInfo.orderId)">Accept
      </button>
    </div>
    <div v-if="orderInfo.status === 'Picked Up' && roleSelected === 'courier' || roleSelected === 'admin'">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="orderDelivery(orderInfo.orderId)">Delivered
      </button>
    </div>
    <div
        v-if="(orderInfo.status === 'Waiting for acception' || orderInfo.status === 'Accepted') && roleSelected === 'sender'">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="navigateToModifyOrderView(orderInfo.orderId)">Modify order
      </button>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark"
              v-on:click="deleteOrder(orderInfo.orderId)">Delete
      </button>
    </div>

  </div>
  </div>
</template>


<script>
import ImageInput from "@/components/image/ImageInput";
import AlertError from "@/components/alerts/AlertError";
import AlertSuccess from "@/components/alerts/AlertSuccess";

export default {
  name: "OrderInfo",
  components: {ImageInput, AlertError, AlertSuccess},
  data: function () {
    return {
      role: sessionStorage.getItem('roleSelected'),
      successMessage: '',
      errorMessage: '',
      imageUploadRequest: {
        orderId: this.$route.query.orderId,
        base64: '',
        type: ''
      },
      imageResponseS: [{base64: ''}],
      imageResponseP: [{base64: ''}],
      imageResponseD: [{base64: ''}],
      typeS: 'S',
      typeP: 'P',
      typeD: 'D',
      orderId: this.$route.query.orderId,
      roleSelected: sessionStorage.getItem('roleSelected'),
      divDisplaySenderPicture: true,
      divDisplayDropOffPicture: true,
      divDisplayPickupPicture: true,
      divDisplayRightImage: true,
      divDisplayCenterImage: true,
      divDisplayLeftImage: true,
      orderInfo: {
        deliveryDate: '',
        senderUserId: '',
        courierUserId: '',
        timeFrame: '',
        pickUpDistrictId: '',
        pickUpAddress: '',
        dropOffDistrictId: '',
        dropOffAddress: '',
        receiverName: '',
        receiverPhoneNumber: '',
        shipmentPriceId: '',
        shipmentDescription: '',
        comment: '',
        priceCategory: '',
        status: '',
        senderPhoneNumber: "",
        shipmentId: '',
        senderName: '',
        packageAmount: 0

      }
    }

  },
  methods: {

    hideImageUpload() {
      if (this.roleSelected == "sender") {
        this.divDisplayDropOffPicture = false
        this.divDisplayPickupPicture = false
      }
      if (this.roleSelected === "courier") {
        this.divDisplaySenderPicture = false
      }
    },
    findImageByOrderIdAndType: function (type) {
      this.$http.get("/transabuddy/image", {
            params: {
              orderId: this.orderId,
              type: type

            }
          }
      ).then(response => {
        if (type === "S") {
          this.imageResponseS = response.data
          this.divDisplayRightImage = this.imageResponseS.length != 0
        }
        if (type === "P") {
          this.imageResponseP = response.data
          this.divDisplayCenterImage = this.imageResponseP.length != 0
        }
        if (type === "D") {
          this.imageResponseD = response.data
          this.divDisplayLeftImage = this.imageResponseD.length != 0
        }
      }).catch(error => {
        console.log(error)
      })


    },
    getImageDataFromFile(base64) {
      this.imageUploadRequest.base64 = base64
    },
    uploadImage(type) {
      this.sendImageDataToBackend(type)
    },
    rejectAccept: function (orderId) {
      this.$http.patch("/transabuddy/order/rejected", null, {
            params: {
              orderId: orderId
            }
          }
      ).then(response => {
        console.log(response.data)
        location.reload();
      }).catch(error => {
        console.log(error)
      })
    },
    acceptOrder: function (orderId) {
      this.$http.patch("/transabuddy/order/accepted", null, {
            params: {
              orderId: orderId
            }
          }
      ).then(response => {
        console.log(response.data)
        location.reload();
      }).catch(error => {
        console.log(error)
      })
    },
    navigateToModifyOrderView: function (orderId) {
      this.$router.push({name: 'modifyOrderView', query: {orderId: orderId}})

    },
    orderDelivery: function (orderId) {
      this.$http.patch("/transabuddy/order/delivery", null, {
            params: {
              orderId: orderId
            }
          }
      ).then(response => {
        console.log(response.data)
        location.reload();
      }).catch(error => {
        console.log(error)
      })
    },
    deleteOrder: function (orderId) {
      this.$http.patch("/transabuddy/order/delete", null, {
            params: {
              orderId: orderId
            }
          }
      ).then(response => {
        console.log(response.data)
        location.reload();
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
        location.reload();
      }).catch(error => {
        console.log(error)
      })
    },
    sendImageDataToBackend(type) {
      this.imageUploadRequest.type = type
      this.$http.post("/transabuddy/image", this.imageUploadRequest
      ).then(response => {
        this.successMessage = "Image successfully uploaded"
        console.log(response.data)
        location.reload();
      }).catch(error => {
        this.errorMessage = "Image upload failed"
        console.log(error)
      })

    },
    getOrderByOrderId: function () {
      this.$http.get("/transabuddy/order", {
            params: {
              orderId: this.orderId
            }
          }
      ).then(response => {
        this.orderInfo = response.data
        if (this.orderInfo.status === "N") {
          this.orderInfo.status = "Waiting for acception"
        } else if (this.orderInfo.status === "A") {
          this.orderInfo.status = "Accepted"
        } else if (this.orderInfo.status === "P") {
          this.orderInfo.status = "Picked Up"
        } else if (this.orderInfo.status === "D") {
          this.orderInfo.status = "Deleted"
        } else if (this.orderInfo.status === "C") {
          this.orderInfo.status = "Delivered"
        }
        console.log(this.orderInfo)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
    this.getOrderByOrderId(this.orderId)
    this.hideImageUpload()
    this.findImageByOrderIdAndType(this.typeS)
    this.findImageByOrderIdAndType(this.typeP)
    this.findImageByOrderIdAndType(this.typeD)

  }

}
</script>

<style scoped>

</style>
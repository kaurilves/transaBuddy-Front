<template>
  <div>
    <AlertSuccess :successMessage="successMessage"/>
    <AlertError :errorMessage="errorMessage"/>
    <form>
      <div class="form-group row" >
        <label class="col-sm-2 col-form-label">Delivery start time</label>
        <div class="col-sm-2">
          <select id="inputStartTime" class="form-control" v-model="this.fromHour">
            <option disabled value="">Choose start time...</option>
            <option value="7">0700</option>
            <option value="7">0700</option>
            <option value="8">0800</option>
            <option value="9">0900</option>
            <option value="10">1000</option>
            <option value="11">1100</option>
            <option value="12">1200</option>
            <option value="13">1300</option>
            <option value="14">1400</option>
            <option value="15">1500</option>
            <option value="16">1600</option>
            <option value="17">1700</option>
            <option value="18">1800</option>
          </select>
        </div>
      </div>

      <div class="form-group row" >
        <label class="col-sm-2 col-form-label">Delivery end time</label>
        <div class="col-sm-2">
          <select id="inputEndTime" class="form-control" v-model="this.toHour">
            <option disabled value="">Choose end time...</option>
            <option value="7">0700</option>
            <option value="8">0800</option>
            <option value="9">0900</option>
            <option value="10">1000</option>
            <option value="11">1100</option>
            <option value="12">1200</option>
            <option value="13">1300</option>
            <option value="14">1400</option>
            <option value="15">1500</option>
            <option value="16">1600</option>
            <option value="17">1700</option>
            <option value="18">1800</option>
          </select>
        </div>

      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Pickup district</label>
        <div class="col-sm-2">
          <select id="inputPickupDistrict" class="form-control" v-model="modifiedOrderInfo.pickUpDistrictId" placeholder = "orderInfo.pickUpdDistrictId">
            <option disabled value="">Choose pickup district...</option>
            <option value="1">Mustamäe</option>
            <option value="2">Lasnamäe</option>
            <option value="3">Haabersti</option>
            <option value="4">Nõmme</option>
            <option value="5">Põhja-Tallinn</option>
            <option value="6">Kesklinn</option>
            <option value="7">Kristiine</option>
            <option value="8">Pirita</option>

          </select>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Pickup address</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="modifiedOrderInfo.pickUpAddress" placeholder="orderInfo.pickUpAddress">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Dropoff district</label>
          <div class="col-sm-2">
            <select id="inputDropoffDistrict" class="form-control"  v-model="modifiedOrderInfo.dropOffDistrictId" placeholder="orderInfo.dropOffDistrict">
              <option disabled value="">Choose dropoff district...</option>
              <option value="1">Mustamäe</option>
              <option value="2">Lasnamäe</option>
              <option value="3">Haabersti</option>
              <option value="4">Nõmme</option>
              <option value="5">Põhja-Tallinn</option>
              <option value="6">Kesklinn</option>
              <option value="7">Kristiine</option>
              <option value="8">Pirita</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Dropoff address</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="modifiedOrderInfo.dropOffAddress" placeholder="orderInfo.dropOffAddress">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Receiver name</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="modifiedOrderInfo.receiverName" placeholder="orderInfo.receiverName">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Receiver phone number</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="modifiedOrderInfo.receiverPhoneNumber"
                   placeholder="orderInfo.receiverPhoneNumber">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Package amount</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="modifiedOrderInfo.packageAmountInShipment"
                   placeholder="orderInfo.packageAmountInShipment">
          </div>

        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Package type</label>
        <div class="col-sm-2">
          <select id="inputPackageType" class="form-control" v-model="modifiedOrderInfo.shipmentPriceId" placeholder="orderInfo.shipmentPriceId">
            <option disabled value="">Choose package size...</option>
            <option value="1">XS</option>
            <option value="2">S</option>
            <option value="3">M</option>
            <option value="4">L</option>
            <option value="5">XL</option>
          </select>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Shipment description</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="modifiedOrderInfo.shipmentDescription"
                   placeholder="orderInfo.shipmentDescription">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Extra comments</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="modifiedOrderInfo.comment" placeholder="this.orderInfo.comment">
          </div>

        </div>

      </div>
    </form>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="modifyOrder()">Save</button>
  </div>
</template>

<script>
import AlertError from "@/components/alerts/AlertError";
import AlertSuccess from "@/components/alerts/AlertSuccess";

export default {
  name: "modifyOrder",
  components: {AlertError, AlertSuccess},
  data: function () {
    return {
      UserId: sessionStorage.getItem(),
      orderId: this.$route.query.orderId,
      errorMessage: '',
      successMessage: '',
      fromHour: 0,
      toHour: 0,
      modifiedOrderInfo: {
        senderUserId: this.orderInfo.senderUserId
      },
      orderInfo:{

      }
    }
  },
  methods:{
    toOrderView(orderId){
      this.$router.push({name: 'orderView', query:{orderId: orderId}})
    },
    modifyOrder: function () {
      this.$http.patch("/transabuddy/order/update", null,{
          params: {
            orderInfo: this.orderInfo,
            hourFrom: this.fromHour,
            toHour: this.toHour
          }
      }
      ).then(response => {
        this.modifiedOrderInfo = response.data
        this.orderId = response.data.orderId
        this.successMessage = "Order has been changed successfully"
        console.log(response.data)
      }).catch(error => {
        this.errorMessage = 'Something went wrong'
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
  mounted () {
    this.getOrderByOrderId();
  }
}


</script>

<style scoped>

</style>
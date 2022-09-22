<template>
  <div>
    <AlertSuccess :successMessage="successMessage"/>
    <AlertError :errorMessage="errorMessage"/>

    <form>
      <div class="form-group row" >
        <label class="col-sm-2 col-form-label">Delivery start time</label>
        <div class="col-sm-2">
          <select id="inputStartTime" class="form-control" v-model="orderRequest.fromHour">
            <option disabled value="">Choose start time...</option>
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
          <select id="inputEndTime" class="form-control" v-model="orderRequest.toHour">
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
          <select id="inputPickupDistrict" class="form-control" v-model="orderRequest.pickUpDistrictId">
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
            <input class="form-control" v-model="orderRequest.pickUpAddress" placeholder="Enter pickup address">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Dropoff district</label>
          <div class="col-sm-2">
            <select id="inputDropoffDistrict" class="form-control" v-model="orderRequest.dropOffDistrictId">
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
            <input class="form-control" v-model="orderRequest.dropOffAddress" placeholder="Enter dropoff address">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Receiver name</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderRequest.receiverName" placeholder="Enter receiver name">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Receiver phone number</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderRequest.receiverPhoneNumber"
                   placeholder="Enter receiver phone number">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Package amount</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderRequest.packageAmountInShipment"
                   placeholder="Enter package amount">
          </div>

        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Package type</label>
        <div class="col-sm-2">
          <select id="inputPackageType" class="form-control" v-model="orderRequest.shipmentPriceId">
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
            <input class="form-control" v-model="orderRequest.shipmentDescription"
                   placeholder="Enter shipment description">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Extra comments</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderRequest.comment" placeholder="Enter comments">
          </div>

        </div>

      </div>
    </form><br>

    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="addNewOrder()">Add order</button>
  </div>
</template>

<script>
import AlertError from "@/components/alerts/AlertError";
import AlertSuccess from "@/components/alerts/AlertSuccess";
export default {
  name: "newOrder",
  components: {AlertError, AlertSuccess},
  data: function () {
    return {
      orderId: '',
      errorMessage: '',
      successMessage: '',
      orderRequest: {
        deliveryDate: '2022-09-20',
        senderUserId: this.$route.query.userId,
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

      }
    }
  },
  methods:{

    addNewOrder() {
      this.addOrder()

    },
    addOrder: function () {

      this.$http.post("/transabuddy/order", this.orderRequest).then(response => {
        this.orderRequest = response.data
        this.orderId = response.data.orderId
        this.successMessage = "New order added"
        console.log(response.data)
        this.$router.push({name: 'orderView', query:{orderId: this.orderId}})
      }).catch(error => {
        this.errorMessage = 'Something went wrong'
        console.log(error)
      })

    }
  }

}


</script>

<style scoped>

</style>
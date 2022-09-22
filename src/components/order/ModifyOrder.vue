<template>
  <div>
    <AlertSuccess :successMessage="successMessage"/>
    <AlertError :errorMessage="errorMessage"/>
    <form>
      <div class="form-group row" >
        <label class="col-sm-2 col-form-label">Delivery start time</label>
        <div class="col-sm-2">
          <select id="inputStartTime" class="form-control" v-model="fromHour">
            <option disabled value="">Choose start time...</option>
            <option value="7">07:00</option>
            <option value="8">08:00</option>
            <option value="9">09:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
          </select>
        </div>
      </div>

      <div class="form-group row" >
        <label class="col-sm-2 col-form-label">Delivery end time</label>
        <div class="col-sm-2">
          <select id="inputEndTime" class="form-control" v-model="toHour">
            <option disabled value="">Choose end time...</option>
            <option value="7">07:00</option>
            <option value="8">08:00</option>
            <option value="9">09:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
          </select>
        </div>

      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Pick-up district</label>
        <div class="col-sm-2">
          <select id="inputPickupDistrict" class="form-control" v-model="orderInfo.pickUpDistrictId">
            <option disabled value="">Choose pick-up district...</option>
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
          <label class="col-sm-2 col-form-label">Pick-up address</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderInfo.pickUpAddress" >
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Drop-off district</label>
          <div class="col-sm-2">
            <select id="inputDropoffDistrict" class="form-control"  v-model="orderInfo.dropOffDistrictId">
              <option disabled value="">Choose drop-off district...</option>
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
          <label class="col-sm-2 col-form-label">Drop-off address</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderInfo.dropOffAddress">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Receiver name</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderInfo.receiverName">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Receiver phone number</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderInfo.receiverPhoneNumber">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Package amount</label>
          <div class="col-sm-2">
            <input class="form-control" v-model=orderInfo.packageAmount>
          </div>

        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Package type</label>
        <div class="col-sm-2">
          <select id="inputPackageType" class="form-control" v-model="orderInfo.priceCategory">
            <option disabled value="">Choose package size...</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Shipment description</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderInfo.shipmentDescription">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Extra comments</label>
          <div class="col-sm-2">
            <input class="form-control" v-model="orderInfo.comment">
          </div>

        </div>

      </div>
    </form>
    <button style="margin: 5px" class="btn btn-outline-dark" v-on:click="modifyOrder()">Save changes</button>
  </div>
</template>

<script>
import AlertError from "@/components/alerts/AlertError";
import AlertSuccess from "@/components/alerts/AlertSuccess";


export default {
  name: "ModifyOrder",
  components: {AlertError, AlertSuccess},
  data: function () {
    return {
      orderId: this.$route.query.orderId,
      errorMessage: '',
      successMessage: '',
      fromHour: 0,
      toHour: 0,
      orderInfo: {
      },
    }
  },
  methods:{
    modifyOrder: function () {
      this.$http.patch( "/transabuddy/order/update", null ,{
          params: {
            orderInfo: this.orderInfo,
            fromHour: this.fromHour,
            toHour: this.toHour
          }
      }
      ).then(response => {
        this.orderInfo = response.data
        this.orderId = response.data.orderId
        this.successMessage = "Order has been changed successfully"
        console.log(response.data)
        this.$router.push({name: 'orderView', query:{orderId: this.orderId}})
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
        this.fromHour = parseInt(this.orderInfo.timeFrame.substring(0, 2).replace("0", ''));
        this.toHour = parseInt(this.orderInfo.timeFrame.substring(8, 10).replace("0", ''));
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
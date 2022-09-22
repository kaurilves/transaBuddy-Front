<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-if="divDisplayPrices">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Dimensions</th>
          <th scope="col">Weight</th>
          <th scope="col">Price</th>
          <th scope="col">Type</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="shipmentPriceInfo in shipmentPriceInfos">
          <td>{{ shipmentPriceInfo.dimensions }}</td>
          <td>{{ shipmentPriceInfo.weight + " kg" }}</td>
          <td>{{ shipmentPriceInfo.price + " €" }}</td>
          <td>{{ shipmentPriceInfo.type }}</td>
          <td>
            <button type="button" style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="adjustPricing(shipmentPriceInfo)">
              Adjust pricing
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <button type="button" style="margin: 5px" class="btn btn-primary btn-lg" v-on:click="addNewPriceCategory">
        Add new price category
      </button>
    </div>


    <div v-if="divDisplayAddNewCategory">
      <NewPriceCategoryForm/>


    </div>


  </div>
</template>

<script>


import NewPriceCategoryForm from "@/components/order/NewPriceCategoryForm";
export default {
  name: "AllShipmentPrices",
  components: {NewPriceCategoryForm},
  props: {
    shipmentPriceInfos: {},
    title: String
  },
  data: function () {
    return{
      divDisplayAddNewCategory: false,
      divDisplayPrices: true,
    }

  },
  methods: {
    addNewPriceCategory() {
    this.divDisplayPrices = false
    this.divDisplayAddNewCategory = false

    },
    adjustPricing(shipmentPriceInfo) {
      this.$router.push({name: 'adminAdjustPricingView', query: {shipmentPriceInfo: shipmentPriceInfo}})
      // this.$router.push({name: 'adminAdjustPricingView', query: {shipmentPriceId: shipmentPriceInfo.shipmentPriceId}})
      // this.$router.push({name: 'adminAdjustPricingView', query: {weight: shipmentPriceInfo.weight}})
      // this.$router.push({name: 'adminAdjustPricingView', query: {price: shipmentPriceInfo.price}})
      // this.$router.push({name: 'adminAdjustPricingView', query: {type: shipmentPriceInfo.type}})
    }
  }
}
</script>


<style scoped>

</style>
<template>
  <div>
    <h2>{{ title }}</h2>
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
        <td>{{ shipmentPriceInfo.dimensions}}</td>
        <td>{{ shipmentPriceInfo.weight + " kg" }}</td>
        <td>{{ shipmentPriceInfo.price + " €"}}</td>
        <td>{{ shipmentPriceInfo.type }}</td>
                  <td>
                    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="adjustPricing">
                      Adjust pricing
                    </button>
                  </td>
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
export default {
  name: "FindAllShipmentPrices",
  props: {
    shipmentPriceInfos: {},
    title: String
  },
  methods: {
    adjustPricing(){

    }
  }
}
</script>


<style scoped>

</style>
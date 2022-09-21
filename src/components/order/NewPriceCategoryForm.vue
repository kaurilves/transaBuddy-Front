<template>
  <div>
    <AlertError :error-message="errorMessage"/>
    <br>
    <h2>{{ title }}</h2>
    <input type="text" placeholder="Dimensions" v-model="shipmentPriceRequest.dimensions"><br><br>
    <input type="text" placeholder="Weight" v-model="shipmentPriceRequest.weight"><br><br>
    <input type="text" placeholder="Price" v-model="shipmentPriceRequest.price"><br><br>
    <input type="text" placeholder="Type" v-model="shipmentPriceRequest.type"><br><br>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="addNewPrice">Lisa klient
    </button>
  </div>
</template>

<script>
export default {
  name: "NewPriceCategoryForm",
  data: function () {
    return{
      shipmentPriceRequest: {
        dimensions: '',
        weight: '',
        price: '',
        type: ''
      }
    }

  }
}
</script>

<style scoped>

</style>
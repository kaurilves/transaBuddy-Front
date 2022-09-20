<template>
  <div>
    <h2>{{ title }}</h2>
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Time frame</th>
      <th scope="col">Pick up address</th>
      <th scope="col">Drop off address</th>
      <th scope="col">Price category</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="order in orders">
      <td>{{order.deliveryDate}}</td>
      <td>{{order.timeFrame}}</td>
      <td>{{order.pickUpAddress}}</td>
      <td>{{order.dropOffAddress}}</td>
      <td>{{order.priceCategory}}</td>
      <td>
        <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toOrderInfo(order)">
        View order info
      </button>
      </td>
    </tr>
    </tbody>
    </table>
  </div>

</template>

<script>

import OrderInfo from "@/components/OrderInfo";
export default {
  name: "AllAvailableOrdersTable",
  components: {OrderInfo},
  props: {
    orders: {},
    title: String,
  },
  methods:{
    toOrderInfo(order) {
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <h2>{{ title }}</h2>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Date added</th>
        <th scope="col">Sender name</th>
        <th scope="col">Status</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders">
        <td>{{ order.deliveryDate }}</td>
        <td>{{ order.senderName }}</td>
        <td>{{ order.status }}</td>
        <td>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toOrderView(order)">
            View order
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
export default {
  name: "AllOrdersTable",
  props: {
    title: String,
    orders: []
  },
  data: function () {
    return{


    }
  },
  methods: {
    toOrderView(order){
      this.$router.push({name: 'orderView', query:{orderId: order.orderId}})
    }
  }
}
</script>

<style scoped>

</style>
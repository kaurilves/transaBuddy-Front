<template>
  <div>
    <br>
    <table>
      <thead>
      <tr>
        <th>Order ID</th>
        <th>Status</th>
        <th>From district</th>
        <th>To district</th>
        <th>Receiver Name</th>
        <th>Receiver phone number</th>
        <th>Delivery date</th>
        <th>From hour</th>
        <th>To hour</th>
        <th>Comment</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders">
        <td>{{order.id}}</td>
        <td>{{order.status}}</td>
        <td>{{district.name}}</td>
        <td>{{district.name}}</td>
        <td>{{order.receiverName}}</td>
        <td>{{order.receiverPhoneNumber}}</td>
        <td>{{order.hour}}</td>
        <td>{{order.hour}}</td>
        <td><button type="button" style="margin: 5px" class="btn btn-outline-dark"
                    v-on:click="toOrderView(order)">View order
        </button>
        </td>
      </tr>
      </tbody>
    </table>
</div>
</template>

<script>
export default {
  name: "FindUserOrdersByStatusTable",
  props:{
    orders: {},
    districts: {},



  },
  methods:{
    toOrderView(order){

    }
  }
}

</script>

<style scoped>

</style>
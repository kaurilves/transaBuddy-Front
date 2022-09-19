<template>
  <div>
    <br>
    <h1>Active orders</h1>
    <table>
      <ActiveOrdersTableHeader/>
      <ActiveOrdersTableBody/>
    </table>
  </div>
</template>

<script>
import ActiveOrdersTableHeader from "@/components/ActiveOrdersTableHeader";
import ActiveOrdersTableBody from "@/components/ActiveOrdersTableBody";

export default {
  name: "UserActiveOrdersTable",
  components: {ActiveOrdersTableBody, ActiveOrdersTableHeader},
  methods: {


    toOrderView(order) {
      sessionStorage.clear()
      sessionStorage.setItem('id', order.id)
      sessionStorage.setItem('status', order.status)
      sessionStorage.setItem('receiverName', order.receiverName)
      sessionStorage.setItem('receiverPhoneNumber', order.receiverPhoneNumber)
      sessionStorage.setItem('fromHour', order.hour)
      sessionStorage.setItem('toHour', order.hour)
      this.$router.push({name: 'SenderOrderView', query: {orderId: order.orderId}})
    },


  }
}

</script>


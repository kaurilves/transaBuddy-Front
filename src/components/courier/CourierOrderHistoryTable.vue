<template>
  <div>
    <br>
    <h1>Delivered orders</h1>
    <table class="table table-hover">
      <CourierOrderHistoryTableHeader/>
      <CourierOrderHistoryTableBody/>
    </table>
  </div>
</template>

<script>
import CourierOrderHistoryTableHeader from "@/components/courier/CourierOrderHistoryTableHeader";
import CourierOrderHistoryTableBody from "@/components/courier/CourierOrderHistoryTableBody";
export default {
  name: "CourierOrderHistoryTable",
  components: {CourierOrderHistoryTableBody, CourierOrderHistoryTableHeader},
}
</script>


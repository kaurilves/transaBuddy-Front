<template>
  <div>
    <br>
    <h1>Active orders</h1>
    <table class="table table-hover">
      <CourierActiveOrdersTableHeader/>
      <CourierActiveOrdersTableBody/>
    </table>
  </div>
</template>

<script>
import CourierActiveOrdersTableHeader from "@/components/courier/CourierActiveOrdersTableHeader";
import CourierActiveOrdersTableBody from "@/components/courier/CourierActiveOrdersTableBody";
export default {
  name: "CourierActiveOrdersTable",
  components: {CourierActiveOrdersTableHeader, CourierActiveOrdersTableBody},
}
</script>


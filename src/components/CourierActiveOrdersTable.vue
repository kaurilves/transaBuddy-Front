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
import CourierActiveOrdersTableHeader from "@/components/CourierActiveOrdersTableHeader";
import CourierActiveOrdersTableBody from "@/components/CourierActiveOrdersTableBody";

export default {
  name: "CourierActiveOrdersTable",
  components: {CourierActiveOrdersTableBody, CourierActiveOrdersTableHeader},
}
</script>


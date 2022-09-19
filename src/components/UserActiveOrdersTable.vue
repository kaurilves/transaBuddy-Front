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
}
</script>


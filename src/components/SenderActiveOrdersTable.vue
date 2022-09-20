<template>
  <div>
    <br>
    <h1>Active orders</h1>
    <table>
      <SenderActiveOrdersTableHeader/>
      <SenderActiveOrdersTableBody/>
    </table>
  </div>
</template>

<script>
import SenderActiveOrdersTableHeader from "@/components/SenderActiveOrdersTableHeader";
import SenderActiveOrdersTableBody from "@/components/SenderActiveOrdersTableBody";
export default {
  name: "UserActiveOrdersTable",
  components: {SenderActiveOrdersTableBody, SenderActiveOrdersTableHeader},
}
</script>


<template>
  <div>
    <br>
    <h1>Active orders</h1>
    <table class="table table-hover">
      <SenderActiveOrdersTableHeader/>
      <SenderActiveOrdersTableBody/>
    </table>
  </div>
</template>

<script>
import SenderActiveOrdersTableHeader from "@/components/SenderActiveOrdersTableHeader";
import SenderActiveOrdersTableBody from "@/components/SenderActiveOrdersTableBody";
export default {
  name: "SenderActiveOrdersTable",
  components: {SenderActiveOrdersTableBody, SenderActiveOrdersTableHeader},
}
</script>


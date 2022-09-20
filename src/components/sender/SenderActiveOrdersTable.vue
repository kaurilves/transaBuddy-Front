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
import SenderActiveOrdersTableHeader from "@/components/sender/SenderActiveOrdersTableHeader";
import SenderActiveOrdersTableBody from "@/components/sender/SenderActiveOrdersTableBody";

export default {
  name: "SenderActiveOrdersTable",
  components: {SenderActiveOrdersTableBody, SenderActiveOrdersTableHeader},
}
</script>


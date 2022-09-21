<template>
  <div>
    <br>
    <h1>Available orders</h1>

    <table class="table table-hover">
      <AvailableOrdersTableHeader/>
      <AvailableOrdersTableBody/>
    </table>
  </div>
</template>

<script>
import AvailableOrdersTableHeader from "@/components/courier/AvailableOrdersTableHeader";
import AvailableOrdersTableBody from "@/components/courier/AvailableOrdersTableBody";
export default {
  name: 'AvailableOrdersTable',
  components: {AvailableOrdersTableHeader, AvailableOrdersTableBody},
}
</script>


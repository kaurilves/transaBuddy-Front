<template>
  <div>
    <br>
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


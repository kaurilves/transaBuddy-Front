<template>
  <div>
    <h2>Your active jobs</h2>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Delivery date</th>
        <th scope="col">Time frame</th>
        <th scope="col">Pick-up address</th>
        <th scope="col">Drop-off address</th>
        <th scope="col">Price category</th>
        <th scope="col">Status</th>
        <th scope="col"></th>
      </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CourierActiveOrdersTableHeader'
}
</script>

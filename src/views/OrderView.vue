<template>
  <div>
    <h2>View Order</h2>

    <div>
      <OrderInfo/>
    </div>
  </div>
</template>

<script>
import OrderInfo from "@/components/OrderInfo";
export default {
  name: "OrderView",
  components: {OrderInfo}
}
</script>

<style scoped>

</style>
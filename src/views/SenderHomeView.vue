<template>
  <div>
    <div>
      <button id="mybutton" type="button" class="btn btn-outline-dark" v-on:click="">Log out</button>
    </div>

      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="">Add new order</button>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="">Search orders</button>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="">My profile</button>


      <UserActiveOrdersTable />


  </div>
</template>

<script>
import UserActiveOrdersTable from "@/components/UserActiveOrdersTable";

export default {
  name: "SenderView",
  components: {UserActiveOrdersTable}
}
</script>

<style scoped>
#mybutton {
  position: relative;
  top: -80px;
  right: -700px;
  margin: 5px;
}
</style>
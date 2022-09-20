<template>
  <div>
    <div>
      <button id="logOutButton" type="button" class="btn btn-outline-dark" v-on:click="logOut">Logout</button>
    </div>

    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="displayAddOrder">Add new order</button>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="">Search orders</button>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="">My profile</button>

    <div v-if="divDisplayActiveOrders">
    <UserActiveOrdersTable/>
    </div>

  </div>
</template>

<script>
import UserActiveOrdersTable from "@/components/UserActiveOrdersTable";

export default {
  name: "SenderView",
  components: {UserActiveOrdersTable},
  data: function (){
    return  {
      divDisplayActiveOrders: true
    }
  },
  methods: {
    logOut() {
      sessionStorage.clear()
      localStorage.clear()
      this.$confirm("Are you sure you want to log out?").then(() => {
        this.$router.push({name: 'home'})
      });
    },
    hideAllDivs: function () {
      this.divDisplayActiveOrders = false
    },
    displayAddOrder: function () {
      this.hideAllDivs()

    },
  }
}
</script>

<style scoped>
#logOutButton {
  position: relative;
  top: -50px;
  right: -700px;
  margin: 5px;
}
</style>
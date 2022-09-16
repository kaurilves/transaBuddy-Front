<template>
  <div>
    <div>
      <button id="mybutton" type="button" class="btn btn-outline-dark" v-on:click="">Log out</button>
    </div>
    <div v-if="divDisplayThreeButtons">
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="">Add new order</button>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="">Search orders</button>
      <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="">My profile</button>
    </div>

    <div>
      <FindUserOrdersByStatusTable :orders="orders" title="Sender orders"/>

    </div>

  </div>
</template>

<script>
import FindUserOrdersByStatusTable from "@/components/FindUserOrdersByStatusTable";
export default {
  name: "SenderView",
  components:{FindUserOrdersByStatusTable},
  data: function() {
    return {
      districts:[],
      district:{},
      order:{},
      orders: [],
      divDisplayThreeButtons: true,
      divDisplayOrders: true,

    }
  },
  methods: {
    findAllOrdersBySenderId: function (){
      this.$http.get('/transabuddy/user/active-orders')
          .then(response => {
            this.orders = response.data
          })
          .catch(reason =>{
            console.log(reason)
          })
    },




  }
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
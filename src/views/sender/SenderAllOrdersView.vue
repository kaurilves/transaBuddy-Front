<template>
  <div>
    <div>
      <h1>All orders</h1>

      <table class="table table-hover">
        <SenderAllOrdersTableHeader/>
        <SenderAllOrdersTableBody/>
      </table>
    </div>
    <div>
      <button type="button" v-on:click="backToMainView">Back</button>
    </div>
  </div>
</template>

<script>
import SenderAllOrdersTableHeader from "@/components/sender/SenderAllOrdersTableHeader";
import SenderAllOrdersTableBody from "@/components/sender/SenderAllOrdersTableBody";


export default {
  name: "SenderAllOrdersView",
  components: {SenderAllOrdersTableBody, SenderAllOrdersTableHeader},
  data: function () {
    return {

    }
  },
  methods: {
    backToMainView() {

      const roleSelected = sessionStorage.getItem('roleSelected')
      if (roleSelected == 'sender') {
        this.$router.push({name: 'senderRoute'});
      } else if (roleSelected == 'courier') {
        this.$router.push({name: 'courierRoute'});
      } else {
        this.$router.push({name: 'adminRoute'});
      }
    },


  },
}


</script>


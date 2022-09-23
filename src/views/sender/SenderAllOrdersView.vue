<template>
  <div>
    <div>
      <h1>All orders</h1>
      <select class="btn btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false" v-model="selectedStatus" v-on:change="findOrdersBySenderUserIdAndStatus">
        <option value=" "> All</option>
        <option value="N"> New</option>
        <option value="A"> Accepted</option>
        <option value="P"> Picked up</option>
        <option value="C"> Collected</option>
      </select>
      <table class="table table-hover">
        <SenderAllOrdersTableHeader/>
        <SenderAllOrdersTableBody :order-info="orderInfo"/>
      </table>
    </div>
    <div>
      <button type="button" class="btn btn-primary btn-lg" v-on:click="backToMainView">Back</button>
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
      userId: this.$route.query.userId,
      selectedStatus: ' ',
      orderInfo:
          {
            deliveryDate: '',
            timeFrame: 0,
            pickUpAddress: '',
            dropOffAddress: '',
            status: ''
          }
    }
  },
  methods: {
    findOrdersBySenderUserIdAndStatus: function () {
      this.$http.get("/transabuddy/user/sender/all-orders", {
            params: {
              userId: this.userId,
              status: this.selectedStatus
            }
          }
      ).then(response => {
        console.log(response.data)
        this.orderInfo = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    backToMainView() {

      const roleSelected = sessionStorage.getItem('roleSelected')
      if (roleSelected == 'sender') {
        this.$router.push({name: 'senderRoute'});
      } else if (roleSelected == 'courier') {
        this.$router.push({name: 'courierRoute'});
      } else {
        this.$router.push({name: 'adminRoute'});
      }
    }

  },
  mounted() {
    this.findOrdersBySenderUserIdAndStatus()
  }
}


</script>


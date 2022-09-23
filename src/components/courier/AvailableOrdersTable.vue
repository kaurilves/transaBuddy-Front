<template>
  <div>
    <h1>Available orders</h1>
    <br>
    <label>Sort by pick-up district:</label>
    <select class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false" v-model="pickUpDistrictId" v-on:change="findAvailableOrdersByDistrict">
      <option disabled="">Choose pick-up district</option>
      <option value="0">All districts</option>
      <option value="1">Mustamäe</option>
      <option value="2">Lasnamäe</option>
      <option value="3">Haabersti</option>
      <option value="4">Nõmme</option>
      <option value="5">Põhja-Tallinn</option>
      <option value="6">Kesklinn</option>
      <option value="7">Kristiine</option>
      <option value="8">Pirita</option>
    </select>
    <label>        Sort by drop-off district:</label>
    <select class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false"v-model="dropOffDistrictId"v-on:change="findAvailableOrdersByDistrict">
      <option disabled value="">Choose drop-off district</option>
      <option value="0">All districts</option>
      <option value="1">Mustamäe</option>
      <option value="2">Lasnamäe</option>
      <option value="3">Haabersti</option>
      <option value="4">Nõmme</option>
      <option value="5">Põhja-Tallinn</option>
      <option value="6">Kesklinn</option>
      <option value="7">Kristiine</option>
      <option value="8">Pirita</option>
    </select>
    <table class="table table-hover">
      <AvailableOrdersTableHeader/>
      <AvailableOrdersTableBody :order-info="orderInfo"/>
    </table>
  </div>
</template>

<script>
import AvailableOrdersTableHeader from "@/components/courier/AvailableOrdersTableHeader";
import AvailableOrdersTableBody from "@/components/courier/AvailableOrdersTableBody";
export default {
  name: 'AvailableOrdersTable',
  components: {AvailableOrdersTableHeader, AvailableOrdersTableBody},
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      orderId: 0,
      orderInfo: [{}],
      pickUpDistrictId: '0',
      dropOffDistrictId: '0',
    }
  },
  methods: {
    findAvailableOrdersByDistrict: function () {
      this.$http.get('/transabuddy/orders/available', {
            params: {
              pickUpDistrictId: this.pickUpDistrictId,
              dropOffDistrictId: this.dropOffDistrictId,
            }
          }
      ).then(response => {
        this.orderInfo = response.data
        console.log(this.orders)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted(){
    this.findAvailableOrdersByDistrict();
  }
}
</script>


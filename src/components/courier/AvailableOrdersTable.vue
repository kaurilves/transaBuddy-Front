<template>
  <div>
    <br>
    <h1>Available orders</h1>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Find available orders by district:</label>
      <div class="col-sm-2">
        <select id="pickUpDistrict" class="form-control" v-model="orderInfo">
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
      </div>

      <div class="col-sm-2">
        <select id="dropOffDistrict" class="form-control">
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
      </div>
      <div class="col-sm-2">
        <button type="button" style="margin: 5px" class="btn btn-outline-dark"
                v-on:click="findOrderByDistrict()">Search
        </button>
      </div>
    </div>
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


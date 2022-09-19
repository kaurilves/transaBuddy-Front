<template>
  <div class="container bootstrap snippets bootdey">
    <h2>Adjust pricing</h2>
    <AlertSuccess :successMessage="successMessage"/>
    <AlertError :errorMessage="errorMessage"/>
    <div class="panel-body inf-content">
      <div class="row">
        <div class="col-md-6">
          <strong>Price category information</strong><br>
          <div class="table-responsive">
            <table class="table table-user-information">
              <tbody>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-asterisk text-primary"></span>
                    Package dimensions
                  </strong>
                </td>
                <td class="text-primary">
                  {{ dimensions }}
                </td>
                <td>
                  <input type="text" placeholder="New dimensions" v-model="shipmentPriceInfo.dimensions"><br><br>
                </td>

              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-user  text-primary"></span>
                    Package maximum weight
                  </strong>
                </td>
                <td class="text-primary">
                  {{ weight + ' kg' }}
                </td>
                <td>
                  <input type="text" placeholder="New weight" v-model="shipmentPriceInfo.weight"><br><br>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-cloud text-primary"></span>
                    Unit price
                  </strong>
                </td>
                <td class="text-primary">
                  {{ price + ' €' }}
                </td>
                <td>
                  <input type="text" placeholder="New price" v-model="shipmentPriceInfo.price"><br><br>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-eye-open text-primary"></span>
                    Unit designation
                  </strong>
                </td>
                <td class="text-primary">
                  {{ type }}
                </td>
                <td>
                  <input type="text" placeholder="New designation" v-model="shipmentPriceInfo.type"><br><br>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button type="button" v-on:click="backToAdminView">Back</button>
    </div>
    <div>
      <button type="button" v-on:click="adjustShipmentPrice()">Save new shipment info</button>
    </div>
  </div>
</template>

<script>
import AlertSuccess from "@/components/alerts/AlertSuccess";
import AlertError from "@/components/alerts/AlertError";

export default {
  name: "AdminAdjustPricingView",
  components:{AlertSuccess, AlertError},
  data: function () {
    return {
      successMessage: '',
      errorMessage: '',
      dimensions: sessionStorage.getItem('dimensions'),
      weight: sessionStorage.getItem('weight'),
      price: sessionStorage.getItem('price'),
      type: sessionStorage.getItem('type'),
      shipmentPriceInfo: {
        shipmentPriceId: sessionStorage.getItem('shipmentPriceId'),
        dimensions: sessionStorage.getItem('dimensions'),
        weight: sessionStorage.getItem('weight'),
        price: sessionStorage.getItem('price'),
        type: sessionStorage.getItem('type'),
      }
    }
  },
  methods: {
    backToAdminView() {
      this.$router.push({name: 'adminRoute'})
    },
    adjustShipmentPrice(){
      this.successMessage = "Updated shipment info",
      this.$http.patch("/admin/prices", this.shipmentPriceInfo

      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        this.errorMessage = "Updating price failed"
        console.log(error)
      })
    }
  }

}
</script>

<style scoped>

</style>
<template>

  <div>
    <AlertError :error-message="errorMessage"/>
    <AlertWarning :warning-message="warningMessage"/>
    <h2>{{ title }}</h2>
    <input type="text" style="margin: 5px" placeholder="First name" v-model="firstName">
    <input type="text" style="margin: 5px" placeholder="Last name" v-model="lastName">
    <input type="text" style="margin: 5px" placeholder="Personal code" v-model="personalCode">

    <button type="button" style="margin: 5px" class="btn btn-dark" v-on:click="findCustomersByNameAndCode">Find</button>

  </div>

</template>

<script>
import AlertError from "@/components/alerts/AlertError";
import AlertWarning from "@/components/alerts/AlertWarning";
export default {
  name: "FindUsersByNameAndCode",
  components: {AlertError, AlertWarning},
  props: {
    title: String,
  },
  data: function () {
    return {
      firstName: '',
      lastName: '',
      personalCode: '',
      errorMessage: '',
      warningMessage: '',
    }

  },
  methods: {
    findCustomersByNameAndCode(){
      this.errorMessage = ''
      this.warningMessage = ''

      if (this.firstName.length === 0 && this.lastName.length === 0 && this.personalCode.length === 0){
        this.errorMessage = 'At least one field must be filled'
    } else{
        this.$http.get("/admin/find", {
              params: {
                firstName: this.firstName,
                lastName: this.lastName,
                personalCode: this.personalCode
              }

            }

        ).then(response => {
          let usersResult = response.data
          if (usersResult.length === 0) {
            this.warningMessage = 'Found no users'
          } else {
            this.$emit('usersResultSuccess', usersResult);
          }

        }).catch(error => {
          console.log(error)
        });

      }


}


  }
}
</script>


<style scoped>

</style>
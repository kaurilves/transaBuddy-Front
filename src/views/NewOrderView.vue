<template>
  <div>
    <H2>Add new order</H2>
    <div>
      <NewOrder/>

    </div>
    <button type="button" v-on:click="backToAdminView">Back</button>

  </div>

</template>

<script>
import NewOrder from "@/components/NewOrder";
export default {
  name: "NewOrderView",
  components: {NewOrder},
  data: function () {
    return{

    }
  },
  methods:{
    backToAdminView(){
      this.$router.push({name: 'adminRoute'})
    }
  }
}
</script>

<style scoped>

</style>
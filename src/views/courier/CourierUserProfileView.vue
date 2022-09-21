<template>
  <div>

    <div>
      <ViewUserProfile/>

      <button type="button" v-on:click="backToMainView">Back</button>
    </div>

  </div>
</template>

<script>
import ViewUserProfile from "@/components/users/UserProfile";

export default {
  name: "CourierUserProfileView",
  components: {ViewUserProfile},
  methods: {
    backToMainView() {

      const roleSelected = sessionStorage.getItem('roleSelected')
      if (roleSelected == 'courier') {
        this.$router.push({name: 'courierRoute'});
      } else if (roleSelected == 'sender') {
        this.$router.push({name: 'senderRoute'});
      } else {
        this.$router.push({name: 'senderRoute'});
      }
    }
  }
}
</script>

<style scoped>

</style>
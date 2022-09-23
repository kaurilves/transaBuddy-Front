<template>
  <div>

    <div>
      <ViewUserProfile/>

      <button type="button" class="btn btn-primary btn-lg" v-on:click="backToMainView">Back</button>
    </div>

  </div>
</template>

<script>
import ViewUserProfile from "@/components/users/UserProfile";

export default {
  name: "SenderUserProfileView",
  components: {ViewUserProfile},
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
    }
  }
}
</script>

<style scoped>

</style>
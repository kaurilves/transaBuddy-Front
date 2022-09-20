<template>
  <div>

    <div>
      <ViewUserProfile/>

      <button type="button" v-on:click="backToSenderView">Back</button>
    </div>

  </div>
</template>

<script>
import ViewUserProfile from "@/components/UserProfile";
export default {
  name: "SenderUserProfileView",
  components: {ViewUserProfile},
  methods:{
    backToSenderView(){
      this.$router.push({name: 'senderRoute'})
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <h2>{{ title }}</h2>
    <table class="table table-hover">
      <thead>
      <tr>
        <!--        <th scope="col">Username</th>-->
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Personal code</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.personalCode }}</td>
        <td>
          <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="toUserProfile(user)">
            View user profile
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>



import ViewUserProfile from "@/components/UserProfile";
import UserProfile from "@/components/UserProfile";



export default {
  name: "AllUsersTable",
  components: {UserProfile},
  props: {
    users: {},
    title: String,

  },

  methods: {
    toUserProfile(user){
      sessionStorage.clear()
      sessionStorage.setItem('firstName', user.firstName)
      sessionStorage.setItem('lastName', user.lastName)
      sessionStorage.setItem('personalCode', user.personalCode)
      sessionStorage.setItem('email', user.email)
      sessionStorage.setItem('phoneNumber', user.phoneNumber)
      sessionStorage.setItem('roleNames', user.roleNames)
      this.$router.push({name: 'adminUserProfileView', query:{userId: user.userId}})

    }
  }
}
</script>

<style scoped>

</style>
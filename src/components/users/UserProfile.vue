<template>

  <div class="container bootstrap snippets bootdey">
    <h2>{{firstName}} {{lastName}}</h2>
    <div class="panel-body inf-content">
      <div class="row">
        <div class="col-md-6">
          <strong>User information</strong><br>
          <div class="table-responsive">
            <table class="table table-user-information">
              <tbody>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-asterisk text-primary"></span>
                    Identification code
                  </strong>
                </td>
                <td class="text-primary">
                  {{ contactInfo.personalCode }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-user  text-primary"></span>
                    First name
                  </strong>
                </td>
                <td class="text-primary">
                  {{ contactInfo.firstName }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-cloud text-primary"></span>
                    Last name
                  </strong>
                </td>
                <td class="text-primary">
                  {{ contactInfo.lastName }}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-eye-open text-primary"></span>
                    User roles
                  </strong>
                </td>
                <td class="text-primary">
                  {{ contactInfo.roleNames }}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-envelope text-primary"></span>
                    Email
                  </strong>
                </td>
                <td class="text-primary">
                  {{contactInfo.email}}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Phone Number
                  </strong>
                </td>
                <td class="text-primary">
                  {{ contactInfo.phoneNumber }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data: function () {
    return{
      userId: this.$route.query.userId,
      contactInfo: {}

    }
  },
  methods: {
    getContactInfoByUserId() {
      this.$http.get("/admin/user/contacts", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.contactInfo = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
  this.getContactInfoByUserId()
  }
}
</script>

<style scoped>

</style>
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
                  {{ personalCode }}
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
                  {{ firstName }}
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
                  {{ lastName }}
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
                  {{ roleNames }}
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
                  {{email}}
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
                  {{ phoneNumber }}
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
      firstName: localStorage.getItem('firstName'),
      personalCode: localStorage.getItem('personalCode'),
      lastName: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      phoneNumber: localStorage.getItem('phoneNumber'),
      roleNames: localStorage.getItem('roleNames'),
    }
  }
}
</script>

<style scoped>

</style>
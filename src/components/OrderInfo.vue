<div class="container bootstrap snippets bootdey">
<h2>Order information</h2>
<div class="panel-body inf-content">
  <div class="row">
    <div class="col-md-6">
      <strong>User information</strong><br>
      <div class="table-responsive">
        <table class="table Order information">
          <tbody>
          <tr>
            <td>
              <strong>
                <span class="glyphicon glyphicon-asterisk text-primary"></span>
                Date
              </strong>
            </td>
            <td class="text-primary">
              {{orderDate}}
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                <span class="glyphicon glyphicon-user  text-primary"></span>
                Time frame
              </strong>
            </td>
            <td class="text-primary">
              {{ fromHour }} {{toHour}}
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                <span class="glyphicon glyphicon-cloud text-primary"></span>
                Sender name
              </strong>
            </td>
            <td class="text-primary">
              {{ firstName }} {{lastName}}
            </td>
          </tr>

          <tr>
            <td>
              <strong>
                <span class="glyphicon glyphicon-eye-open text-primary"></span>
                Sender phone
              </strong>
            </td>
            <td class="text-primary">
              {{ senderPhoneNumber }}
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                <span class="glyphicon glyphicon-envelope text-primary"></span>
                Pick-up address
              </strong>
            </td>
            <td class="text-primary">
              {{pickUpAddress}}
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                <span class="glyphicon glyphicon-calendar text-primary"></span>
                Drop-off address
              </strong>
            </td>
            <td class="text-primary">
              {{ dropOffAddress }}
            </td>
            <strong>
              <span class="glyphicon glyphicon-calendar text-primary"></span>
              Receiver name
            </strong>
            </td>
            <td class="text-primary">
              {{ receiverName }}
            </td>
            <strong>
              <span class="glyphicon glyphicon-calendar text-primary"></span>
              Receiver phone
            </strong>
            </td>
            <td class="text-primary">
              {{ reiceverPhoneNumber }}
            </td><strong>
            <span class="glyphicon glyphicon-calendar text-primary"></span>
            Additional information
          </strong>
            </td>
            <td class="text-primary">
              {{ comments }}
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
  name: "OrderInfo",
}
</script>

<style scoped>

</style>
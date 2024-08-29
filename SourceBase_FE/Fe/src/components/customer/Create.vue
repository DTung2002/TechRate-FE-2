<template>
  <h3 style="text-align: center">Tạo mới khách hàng</h3>
  <div class="table">
    <form  v-on:submit.prevent="createCustomer"> >
      <fieldset>
        <table style="margin-left: auto; margin-right: auto">
          <tr>
            <th>Tên</th>
            <td><input v-model="customer.name"  class="form-control" type="text"></td>
          </tr>
          <tr>
            <th>Email</th>
            <td><input v-model="customer.email"  class="form-control" type="text"></td>
          </tr>
          <tr>
            <th>Số điện thoại</th>
            <td><input v-model="customer.phone"  class="form-control" type="text"></td>
          </tr>
          <td></td>
          <td>
            <button class="btn btn-primary" type="submit">Tạo mới</button>
          </td>
        </table>
      </fieldset>
    </form>
  </div>
</template>

<script>
import CustomerService from '@/services/CustomerService.js';
import Customer from '@/models/Customer';
export default {
  name: 'create',
  data() {
    return {
      customer: new Customer()
    };
  },
  methods: {
    createCustomer() {
      CustomerService.createCustomer(this.customer).then(() => {
        this.$router.push('/customer');
      });
    }
  }
};
</script>

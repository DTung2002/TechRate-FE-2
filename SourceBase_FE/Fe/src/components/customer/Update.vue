<template>
  <h3 style="text-align: center">Chỉnh sửa thông tin</h3>
  <div class="table">
    <form v-on:submit.prevent="updateCustomer">
      <fieldset>
        <table style="margin-left: auto; margin-right: auto">
          <tr>
            <th>Tên</th>
            <td><input v-model="customer.name" class="form-control" type="text"></td>
          </tr>
          <tr>
            <th>Email</th>
            <td><input v-model="customer.email" class="form-control" type="text"></td>
          </tr>
          <tr>
            <th>Số điện thoại</th>
            <td><input v-model="customer.phone" class="form-control" type="text"></td>
          </tr>
          <td></td>
          <td>
            <button class="btn btn-primary" type="submit">Sửa</button>
            <button class="btn btn-primary" @click="cancelEdit">Huỷ</button>
          </td>
        </table>
      </fieldset>
    </form>
  </div>
</template>
<script>
import CustomerService from '@/services/CustomerService.js';

export default {
  name: 'update',
  data() {
    return {
      customer: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  mounted() {
    this.loadCustomerData(this.$route.params.id);
  },
  methods: {
    loadCustomerData() {
      const customerId = this.$route.params.id;
      CustomerService.getCustomer(customerId).then(response => {
        this.customer = response.data;
      }).catch(error => {
        console.error('Error loading customer data:', error);
        this.$router.push('/customer');
      });
    },

    updateCustomer() {
      CustomerService.updateCustomer(this.$route.params.id, this.customer).then(() => {
        this.$router.push('/customer');
      }).catch(error => {
        console.error('Error updating customer:', error);
      });
    },

    cancelEdit() {
      this.$router.push('/customer');
    }
  }
};
</script>

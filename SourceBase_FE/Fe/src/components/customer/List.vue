<template>
  <head>
    <meta charset="UTF-8">
    <title>Customer list</title>
  </head>
  <body>
  <h2 style="text-align: center">Quản Lý Khách Hàng</h2>

  <nav class="navbar  navbar-light bg-light justify-content-between">
    <router-link to="/create">
      <button type="button" class="btn btn-primary">Tạo mới</button>
    </router-link>
  </nav>
  <div class="table-responsive-md" style="">
    <table class="table table-striped table-hover table-bordered m-0 center" border="1" style="text-align: center">
      <thead class="table-success">
      <tr>
        <th scope="col">Tên</th>
        <th scope="col">Email</th>
        <th scope="col">Số điện thoại</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="cus in customers" :key="cus.id">
        <td>{{ cus.name }}</td>
        <td>{{ cus.email }}</td>
        <td>{{ cus.phone }}</td>
        <td>
          <router-link v-bind:to="'/update/'+cus.id" type="button">
            <button type="button" class="btn btn-primary">Sửa</button>
          </router-link>
        </td>
        <td>
          <button type="button" v-on:click="deleteCustomer(cus.id)" class="btn btn-danger">Xoá</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  </body>
</template>

<script>
import CustomerService from '@/services/CustomerService.js';

export default {
  name : 'customer',
  data() {
    return {
      customers: [],
    };
  },

  mounted() {
    this.getList()
  },

  methods: {
    deleteCustomer(id) {
      if (confirm("Bạn có muốn xoá không??!!!")) {
        CustomerService.deleteCustomer(id).then(() => {
          this.customers = this.customers.filter(customer => customer.id !== id);
        });
      }
    },
    getList () {
      CustomerService.getList().then(response => {
        this.customers = response.data;
      });
    }
  }
};
</script>

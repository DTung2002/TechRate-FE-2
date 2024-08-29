<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <RouterLink class="nav-link active" aria-current="page" to="/">Trang chủ</RouterLink>
              <RouterLink class="nav-link" to="/about">Thông tin (về chúng tôi)</RouterLink>
              <RouterLink class="nav-link" to="/customer">Thông tin khách hàng</RouterLink>
            </div>
          </div>
        </div>
        <form class="d-flex">
          <RouterLink class="nav-link active" aria-current="page" to="/login">
            <button class="btn btn-outline-success" type="submit">Login</button>
          </RouterLink>
        </form>
      </nav>

    </div>
  </header>
  <router-view />

</template>



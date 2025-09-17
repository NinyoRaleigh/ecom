<script setup>
import { defineComponent, h, onMounted, ref } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const email = ref("");
const password = ref("");

async function login() {
  try {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    console.log(data);
    alert(data.message);
  } catch (error) {
    console.log(error);
  }
}


</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <!-- Header -->

    <Header />

    <main>
      <div class="top-1/2 left-1/2 absolute -translate-1/2 space-x-2">

        <input class="border p-2" type="email" v-model="email" placeholder="Enter Email">
        <input class="border p-2 " type="password" v-model="password" placeholder="Enter Password">
        <button class="p-2 border" @click="login" type="button">Login</button>
      </div>
    </main>



    <!-- Footer -->

  </div>
</template>

<script setup>
import { ref } from 'vue';
const quantity = ref(1);

function increment() {
  quantity.value++;
}
function decrement() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

</script>
 

<template>
     <div class="text-sm  py-2 items-center flex space-x-10">
          <div class="text-gray-500">
            <p>Quantity</p>
          </div>
          <div class="flex border border-gray-300">
            <button class="border-r border-gray-300 px-2" @click="decrement">-</button>
            <p class="w-15 px-5 text-center">{{ quantity }}</p>
            <button class="border-l border-gray-300 px-2" @click="increment">+</button>


          </div>
        </div>
</template>
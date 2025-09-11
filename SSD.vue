<script setup>
import { ref } from 'vue'
import Button from './components/Button.vue';

let cartQuantity = ref(0);

</script>

<template>
  <div class="p-10 space-x-4">
    <Button @click=" console.log(`Cart Quantity : ${ cartQuantity}`);">Show Quantity</Button>
    <Button @click="cartQuantity ++;
    console.log(`Cart Quantity : ${ cartQuantity}`);">Add to Cart</Button>
    <Button @click="cartQuantity = cartQuantity + 2;
    console.log(`Cart Quantity : ${ cartQuantity}`);">+2</Button>
    <Button @click="cartQuantity = cartQuantity + 3;
    console.log(`Cart Quantity : ${ cartQuantity}`);">+3</Button>

    <Button @click="cartQuantity --;
    console.log(`Cart Quantity : ${ cartQuantity}`);">Remove from Cart</Button>
    <Button @click="cartQuantity = cartQuantity - 2;
    console.log(`Cart Quantity : ${ cartQuantity}`);">-2</Button>
    <Button @click="cartQuantity = cartQuantity - 3;
    console.log(`Cart Quantity : ${ cartQuantity}`);">-3</Button>

    <Button>Reset Cart</Button>
  </div>
 
</template>



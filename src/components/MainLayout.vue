<script setup>
import Header from './Header.vue';
import { onMounted, ref } from 'vue'

const products = ref([]);

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products.value = data;
    } catch (error) {
       alert('Error fetching products');
    }
}

onMounted(async() => {
    await fetchProducts();
});

</script>


<template>
    <div>
        <div class="mt-5 ">
            <ul class="grid grid-cols-5 gap-5 p-20">
                <li v-for="(product) in products" :key="product.id" class="card bg-orange-100 shadow-xl p-10">
                    <div class="flex justify-center h-40">
                        <img :src="product.image" class="h-full object-contain" />
                    </div>

                    <div class="mt-5 flex-1 flex items-start">
                        <h1 class="font-semibold line-clamp-2">{{ product.title }}</h1>
                    </div>
                    
                    <div class="mt-2">
                        <p class="text-sm text-gray-600">₱{{ product.price }}</p>
                    </div>

                    <div class="flex justify-end">
                        <button class="bg-orange-300 p-3 rounded-lg font-semibold hover:bg-orange-400"> Buy Now</button>
                    </div>

                </li>

            </ul>

        </div>

    </div>


</template>
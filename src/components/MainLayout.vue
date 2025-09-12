<script setup>
import { RouterLink } from 'vue-router';
import Header from './Header.vue';
import { onMounted, ref } from 'vue'
import Button from './Button.vue';

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

onMounted(async () => {
    await fetchProducts();
});

</script>


<template>
    <div>
        <div class="mt-5 ">
            <ul class="grid grid-cols-5 gap-5 p-20">
                <li v-for="(product) in products" :key="product.id" class="card bg-orange-100 shadow-xl p-10">
                    <RouterLink :to="`/products/${product.id}`">
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
                             <Button> Buy Now</Button>
                        </div>
                    </RouterLink>
                </li>

            </ul>

        </div>

    </div>


</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import Header from './Header.vue';
import Button from './Button.vue';
import ColorCard from './products/ColorCard.vue';
import SizeCard from './products/SizeCard.vue';
import QuantityCard from './products/QuantityCard.vue';
import Footer from './Footer.vue';

const route = useRoute();
const product = ref(null);
const loading = ref(true);




onMounted(async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
    const data = await response.json();
    product.value = data;
  } catch (error) {
    console.error(error);
    alert("Failed to load product.");
  } finally {
    loading.value = false;
  }
});


</script>

<template>
  <Header />

  <!-- Back button -->
  <div class="sticky top-1/10 p-5">
    <RouterLink to="/">
      <Button class="bg-orange-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="size-6">
          <path fill-rule="evenodd"
            d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd" />
        </svg>
      </Button>
    </RouterLink>
  </div>

  <!-- Loading state -->
  <div v-if="loading" class="flex items-center justify-center h-screen">
    <span class="loading loading-infinity loading-xl"></span>
  </div>

  <!-- Product card -->
  <div v-else-if="product" class="relative w-3/5 -top-30 bg-white shadow-2xl mx-auto mt-20 rounded-lg p-10">
    <div class="flex space-x-10">
      <!-- Left: Image -->
      <div class="space-y-5 w-3/7">
        <div class="shadow-xl bg-orange-100 w-full rounded-lg flex flex-col items-center justify-center">
          <img v-if="product.image" :src="product.image" :alt="product.title" class="h-96 w-full object-contain p-10" />
        </div>

        <div class="px-5 flex items-center justify-between text-sm mt-10 ">
          <div class="flex items-center space-x-2 border-r pr-5 ">
            <p>Share :</p>
            <!-- messenger -->
            <svg class="w-6 h-6 hover:cursor-pointer hover:scale-130 transition duration-300" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="256" height="256"
              preserveAspectRatio="xMidYMid">
              <defs>
                <radialGradient id="messenger__a" cx="19.247%" cy="99.465%" r="108.96%" fx="19.247%" fy="99.465%">
                  <stop offset="0%" stop-color="#09F" />
                  <stop offset="60.975%" stop-color="#A033FF" />
                  <stop offset="93.482%" stop-color="#FF5280" />
                  <stop offset="100%" stop-color="#FF7061" />
                </radialGradient>
              </defs>
              <path fill="url(#messenger__a)"
                d="M128 0C55.894 0 0 52.818 0 124.16c0 37.317 15.293 69.562 40.2 91.835 2.09 1.871 3.352 4.493 3.438 7.298l.697 22.77c.223 7.262 7.724 11.988 14.37 9.054L84.111 243.9a10.218 10.218 0 0 1 6.837-.501c11.675 3.21 24.1 4.92 37.052 4.92 72.106 0 128-52.818 128-124.16S200.106 0 128 0Z" />
              <path fill="#FFF"
                d="m51.137 160.47 37.6-59.653c5.98-9.49 18.788-11.853 27.762-5.123l29.905 22.43a7.68 7.68 0 0 0 9.252-.027l40.388-30.652c5.39-4.091 12.428 2.36 8.82 8.085l-37.6 59.654c-5.981 9.489-18.79 11.852-27.763 5.122l-29.906-22.43a7.68 7.68 0 0 0-9.25.027l-40.39 30.652c-5.39 4.09-12.427-2.36-8.818-8.085Z" />
            </svg>

            <!-- Facebook -->
            <svg class="w-6 h-6 hover:cursor-pointer hover:scale-130 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#facebook__a)"
              height="40" width="40">
              <defs>
                <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="facebook__a">
                  <stop offset="0%" stop-color="#0062E0" />
                  <stop offset="100%" stop-color="#19AFFF" />
                </linearGradient>
              </defs>
              <path
                d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
              <path fill="#FFF"
                d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" />
            </svg>

            <!-- Pinterest -->
            <svg class="w-6 h-6 hover:cursor-pointer hover:scale-130 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
              <path fill="#CB1F27"
                d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239c-.36-8.938-.064-19.668 2.228-29.393c2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136c11.643 0 17.268 8.745 17.268 19.217c0 11.704-7.465 29.211-11.304 45.426c-3.207 13.578 6.808 24.653 20.203 24.653c24.252 0 40.586-31.149 40.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828 0-63.017 28.956-63.017 61.3c0 11.152 3.288 19.016 8.438 25.106c2.368 2.797 2.697 3.922 1.84 7.134c-.614 2.355-2.024 8.025-2.608 10.272c-.852 3.242-3.479 4.401-6.409 3.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361 30.666-79.961 91.482-79.961c48.87 0 81.035 35.364 81.035 73.325c0 50.213-27.916 87.726-69.066 87.726c-13.819 0-26.818-7.47-31.271-15.955c0 0-7.431 29.492-9.005 35.187c-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0C57.314 0 0 57.309 0 128.002" />
            </svg>

            <!-- X  ex-Twitter -->
            <svg class="w-6 h-6 hover:cursor-pointer hover:scale-130 transition duration-300" viewBox="0 0 256 209" width="256" height="209" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid">
              <path
                d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
                fill="#55acee" />
            </svg>
          </div>

          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="#ff424f" class="size-6 hover:cursor-pointer hover:scale-130 transition duration-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

            <p> Favorite </p>
            <p> (number) </p>
          </div>
        </div>

      </div>

      <!-- Right: Info -->
      <div class="flex flex-col space-y-2 w-2/3 p-5">
        <p class="font-bold text-2xl">{{ product.title }}</p>

        <!-- Rating -->
        <div v-if="product.rating" class="flex items-center space-x-5 align-middle justify-between">
          <div class="flex items-baseline space-x-2 p-2 hover:cursor-pointer">
            <p class="underline-offset-5 underline">{{ product.rating?.rate }}</p>
            <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">
              {{ i <= Math.round(product.rating?.rate || 0) ? '★' : '☆' }} </span>
                <p class="border-l pl-5 underline-offset-5 underline">
                  {{ product.rating?.count }}
                </p>
                <span class="text-sm text-gray-500">Reviews</span>
          </div>

          <p class="text-sm text-gray-500 hover:cursor-pointer">Report</p>
        </div>

        <!-- Price block -->
        <div>
          <div class="flex items-center space-x-3 bg-orange-100 py-2 px-5 font-semibold">
            <img src="/images/discount.png" class="w-8 h-8" />
            <p>New User Exclusive</p>
          </div>
          <div class="shadow-2xl p-5 text-orange-400 font-semibold">
            <p>₱ {{ product.price }}</p>
          </div>
        </div>

        <!-- Guarantee -->
        <div class="text-sm px-5 py-2 items-center flex space-x-10 border-t border-b">
          <div class="text-gray-500">
            <p>Shopping <br /> Guarantee</p>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-6 fill-orange-300">
              <path fill-rule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd" />
            </svg>
            <p>Free & Easy Returns · Merchandise Protection</p>
          </div>
        </div>

        <!-- colors -->
        <ColorCard />
        <!-- sizes -->
        <SizeCard />
        <!-- quantity -->
        <QuantityCard />




        <!-- Buttons -->
        <div class="flex space-x-5 justify-end">
          <Button>Add to Cart</Button>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="p-10 mt-5 bg-orange-100 rounded-lg shadow-2xl">
      <h1 class="font-bold text-lg mb-2">Product Description</h1>
      <p>{{ product.description }}</p>
    </div>
  </div>

  <!-- Error state -->
  <div v-else class="flex items-center justify-center h-screen text-red-500">
    <p>⚠️ Product not found.</p>
  </div>

  <Footer/>
</template>

<script setup>
import ColorButton from './ColorButton.vue';

</script>

<template>
    <div class="text-sm px-5 py-2 items-center flex space-x-10">
        <div class="text-gray-500">
            <p>Color</p>

        </div>
        <div class="grid grid-cols-5 gap-2 flex-1">

            <ColorButton class="hover:border-blue-500 transition duration-300 hover:text-blue-500">blue</ColorButton>
            <ColorButton class="hover:border-black transition duration-300 hover:text-black">black</ColorButton>
            <ColorButton class="hover:border-red-500 transition duration-300 hover:text-red-500">red</ColorButton>
            <ColorButton class="hover:border-green-500 transition duration-300 hover:text-green-500">green</ColorButton>
            <ColorButton class="hover:border-yellow-500 transition duration-300 hover:text-yellow-500">yellow
            </ColorButton>
            <ColorButton class="hover:border-violet-500 transition duration-300 hover:text-violet-500">violet
            </ColorButton>
            <ColorButton class="hover:border-orange-500 transition duration-300 hover:text-orange-500">orange
            </ColorButton>
            <ColorButton class="hover:border-white transition duration-300 hover:text-white hover:bg-black">white
            </ColorButton>
        </div>
    </div>
</template>
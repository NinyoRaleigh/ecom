<script setup>
import ColorButton from './ColorButton.vue';

</script>

<template>
            <div class="text-sm px-5 py-2 items-center flex space-x-10">
          <div class="text-gray-500">
            <p>Size</p>

          </div>
          <div class="grid grid-cols-5 gap-2 flex-1">

            <ColorButton>XS</ColorButton>
            <ColorButton>S</ColorButton>
            <ColorButton>M</ColorButton>
            <ColorButton>L</ColorButton>
            <ColorButton>XL</ColorButton>
            <ColorButton>XXL</ColorButton>
          </div>
        </div>
</template>
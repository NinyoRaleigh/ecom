<script setup>
import ColorButton from './ColorButton.vue';

</script>

<template>
    <div class="text-sm px-5 py-2 items-center flex space-x-10">
        <div class="text-gray-500">
            <p>Color</p>

        </div>
        <div class="grid grid-cols-5 gap-2 flex-1">

            <ColorButton >blue</ColorButton>
            <ColorButton>black</ColorButton>
            <ColorButton >red</ColorButton>
            <ColorButton>green</ColorButton>
            <ColorButton>yellow</ColorButton>
            <ColorButton >violet</ColorButton>
            <ColorButton >orange</ColorButton>
            <ColorButton>white</ColorButton>
        </div>
    </div>
</template>
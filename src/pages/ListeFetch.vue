<script setup lang="ts">
import Card from "../components/card.vue";
const res = await fetch("./maison.json");
const posts = await res.json();
</script>
    
<template>
    <div class="flex flex-col">
    <Card v-for="maison in posts" :key="maison" v-bind="maison"/>
    </div>
</template>
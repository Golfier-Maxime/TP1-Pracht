<script setup lang="ts">
import cardVue from "@/components/card.vue";
import ListeCard from "../assets/maison.json";

// const ListeCard = [
//   {
//     price: "2000",
//     adresse: "OUI",
//     image: "house.jpg",
//   },
//   {
//     price: "4000",
//     adresse: "NON",
//     image: "house.jpg",
//   },
//   {
//     price: "6000",
//     adresse: "PEUX ETRE",
//     image: "house.jpg",
//   },
// ];
</script>

<template>
    <div class="flex" v-for="maison in ListeCard" :key="maison">
        <cardVue class="" v-bind="maison"/>
    </div>
</template>


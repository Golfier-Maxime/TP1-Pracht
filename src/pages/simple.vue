<script setup lang="ts">
import cardVue from "@/components/card.vue";
const UnObjet = {
  adresse: "OUI",
  price: "60",
  image: "house.jpg",
};
</script>

<template>
    <div class="flex flex-col">
      <cardVue adresse="TEST" price="20" image="house.jpg"/>
      <br>
      <cardVue adresse="TEST N°2" price="40" image="house.jpg"/>
      <br>
      <cardVue v-bind="UnObjet" />
    </div>
</template>
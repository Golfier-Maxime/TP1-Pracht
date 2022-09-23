<script setup lang="ts">
import Card from "../components/card.vue";
// const res = await fetch("./maison.json");
// const posts = await res.json();
import { ref } from "@vue/reactivity";
import { supabase, user } from "../supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const maisons = []; // à remplacer par l'appel à Supabase

let { data: maison, error } = await supabase.from("maison").select("*");
console.log(maison);
</script>
    
<template>
  <br />
  <div class="flex" v-for="maisons in maison" :key="maisons">
    <Card v-bind="maisons" />
  </div>
</template>
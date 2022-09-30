<script setup lang="ts">
import FormOffMai from "../../components/FormulaireOffreMaison.vue";
defineProps({ id_maison: String });
</script>

<template>
  <div>
    <!-- <p>New</p> -->
    <FormOffMai :id="id_maison"/>
  </div>
</template>
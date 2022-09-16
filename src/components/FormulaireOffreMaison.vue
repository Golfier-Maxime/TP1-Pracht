<script setup lang="ts">
import { ref } from "@vue/reactivity";
import card from "@/components/card.vue";
// on fait une variable réactive qui reference les données
// ATTENTION : faire une ref pas une Reactive car :
// c'est l'objet qui doit etre réactif, pas les props
const maison = ref({});
</script>

<template>
  <div class="flex justify-around">
    <div class="p-2">
      <h2 class="text-2xl">Résultat (Prévisualisation)</h2>
      <!-- Optionnet on affiche les données -->
      <card v-bind="maison" />
    </div>
    <div class="p-2">
      <FormKit
        type="form"
        v-model="maison"
        :config="{
          classes: {
            input: 'p-1 rounded border-gray-300 shadow-sm border',
            label: 'text-gray-600',
          },
        }"
        :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
      >
        <FormKit name="adresse" label="adresse" />
        <FormKit name="price" label="prix" type="number" />
        <FormKit
          name="favori"
          label="mettre en valeur"
          type="checkbox"
          wrapper-class="flex"
        />
      </FormKit>
    </div>
  </div>
</template>
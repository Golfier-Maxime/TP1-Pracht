<script setup lang="ts">
import { ref } from "@vue/reactivity";
import card from "@/components/card.vue";
import { useRouter } from "vue-router";
import { supabase } from "@/supabase";
const router = useRouter();
// on fait une variable réactive qui reference les données
// ATTENTION : faire une ref pas une Reactive car :
// c'est l'objet qui doit etre réactif, pas les props
const maison = ref({});

async function upsertMaison(dataForm, node) {
  const { data, error } = await supabase.from("maison").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "edit-id", params: { id: data[0].id } });
  }
}
const props = defineProps(["id"]);
if (props.id) {
  // On charge les données de la maison
  let { data, error } = await supabase
    .from("maison")
    .select("*")
    .eq("id_maison", props.id);
  if (error) console.log("n'a pas pu charger le table Maison :", error);
  else maison.value = (data as any[])[0];
}
</script>

<template>
  <div class="flex justify-around">
    <div class="p-2">
      <h2 class="text-2xl">Résultat (Prévisualisation)</h2>
      <!-- Optionnet on affiche les données -->
      <card v-bind="maison" />
    </div>
    <div class="p-2">
      <FormKit type="form" v-model="maison" @submit="upsertMaison" :config="{
        classes: {
          input: 'p-1 rounded border-gray-300 shadow-sm border',
          label: 'text-gray-600',
        },
      }" :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }">
        <FormKit name="adresse" label="Adresse" />
        <FormKit name="price" label="Prix" type="number" />
        <FormKit name="name" label="Nom" type="text" />
        <FormKit name="NbrSDB" label="NbrSDB" type="number" />
        <FormKit name="NbrChambre" label="NbrChambre" type="number" />
        <FormKit name="Surface" label="Surface" type="number" />
        <FormKit name="image" label="image" placeholder="house.jpg" type="text" />
        <FormKit name="favori" label="Mettre en Favori" type="checkbox" wrapper-class="flex gap-2" />
      </FormKit>
    </div>
  </div>
</template>
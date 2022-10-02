<script setup lang="ts">
import groupBy from "lodash/groupBy";
import { supabase } from "@/supabase";
import { Disclosure } from "@headlessui/vue";
const { data, error } = await supabase.from("quartierCommune").select("*");
if (error) console.log("n'a pas pu charger la table quartierCommune :", error);
</script>
      
  <template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="quartierObject in (data as any[])">
        {{ quartierObject.Nom_Commune }} -
        {{ quartierObject.Nom_Quartier }}
      </li>
    </ul>
    <Disclosure
      v-for="(listeQuartier, Nom_Commune) in groupBy(data, 'Nom_Commune')"
      :key="Nom_Commune"
    >
    </Disclosure>
  </section>
</template>
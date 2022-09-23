<script setup lang="ts">
import { HeartIcon } from "@heroicons/vue/24/outline";
import bath from "./icones/bath.vue";
import bed from "./icones/bed.vue";
import superficie from "./icones/superficie.vue";

defineProps({
  // définir  paramètres card
  price: {
    type: Number,
    default: 2700,
  },
  adresse: {
    type: String,
    default: "2821 Lake Sevilla, Palm Harbor, TX",
  },
  favori: Boolean,
  image: {
    type: String,
    default: "/house.jpg",
  },
  name: {
    type: String,
    default: "OUI",
  },
  NbrSDB: {
    type: Number,
    default: 1,
  },
  NbrChambre: {
    type: Number,
    default: 1,
  },
  Surface: {
    type: Number,
    default: 1,
  },
});
</script>
  <template>
  <figure class="flex flex-col">
    <img
      :src="image"
      alt="house"
      class="rounded-t-lg w-full h-48 object-cover"
    />
    <figcaption
      class="
        flex
        w-full
        flex-col
        gap-4
        rounded-b
        border border-indigo-50
        py-7
        px-5
      "
    >
      <div class="flex justify-between">
        <div class="w-2/5">
          <div class="flex items-center justify-between">
            <p class="text-2xl font-bold text-indigo-500">${{ price }}</p>
            <span class="text-xs font-normal text-gray-900">/month</span>
          </div>
          <p class="text-2xl font-bold">{{ name }}</p>
        </div>
        <div
          class="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-2 border-indigo-100
          "
        >
          <HeartIcon
            class="h-6 stroke-indigo-500"
            :class="{ 'fill-red-500 stroke-red-500': favori }"
          ></HeartIcon>
        </div>
      </div>
      <p class="text-base font-normal text-gray-900">
        {{ adresse }}
      </p>
      <div class="w-full border border-indigo-50"></div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <bed class="h-5 stroke-indigo-500"></bed>
          <span class="text-xs text-gray-500">{{ NbrChambre }} Beds</span>
        </div>
        <div class="flex items-center gap-2">
          <bath class="h-5 stroke-indigo-500"></bath>
          <span class="text-xs text-gray-500">{{ NbrSDB }} Bathrooms</span>
        </div>
        <div class="flex items-center gap-2">
          <superficie class="h-5 stroke-indigo-500"></superficie>
          <span class="text-xs text-gray-500">{{ Surface }} m²</span>
        </div>
      </div>
    </figcaption>
  </figure>
</template>
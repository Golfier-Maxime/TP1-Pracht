<template>
  <nav class="ml-2">
    <h1 class="mt-2 text-xl font-bold">Maxime GOLFIER - MMI 2 - B2</h1>
    <h4 class="">menu (dans <code class="font-mono">/src/App.vue</code>)</h4>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/">
          lien vers
          <code class="font-mono">/src/pages/index.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-purple-600 underline" to="/simple">
          lien vers
          <code class="font-mono">/src/pages/simple.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-green-600 underline" to="/Liste">
          lien vers
          <code class="font-mono">/src/pages/Liste.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-blue-600 underline" to="/ListeFetch">
          lien vers
          <code class="font-mono">/src/pages/Liste-Fetch.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-orange-600 underline" to="/edit/New">
          lien vers
          <code class="font-mono">/src/pages/edit/New.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-pink-600 underline" to="/Supabase">
          lien vers
          <code class="font-mono">/src/pages/Supabase.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-yellow-600 underline" to="/Login">
          lien vers
          <code class="font-mono">/src/pages/Login.vue</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-gray-600 underline" to="/Quartier/">
          lien vers
          <code class="font-mono">/src/pages/Quartier/index.vue</code>
        </router-link>
      </li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup lang="ts">
</script>


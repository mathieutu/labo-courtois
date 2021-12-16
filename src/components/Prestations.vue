<script setup lang="ts">
import PrestationsContent, { prestations, title } from '../data/prestations.md'

</script>
<template>
  <div class="py-12 lg:py-24 bg-white">
    <div class="mx-auto px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
        <div>
          <h2
            class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
          >{{title}}</h2>
          <PrestationsContent class="mt-6 max-w-3xl text-gray-500" />
        </div>
        <div class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
          <div
            v-for="prestation in prestations"
            :key="prestation.name"
            class="col-span-1 flex gap-2 items-center justify-center py-8 px-8 bg-gray-50 "
          >
            <img class="md:h-8 h-5 flex-shrink-0" :src="prestation.iconUrl" alt="">
            <span class="text-gray-500 font-medium text-center">{{prestation.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

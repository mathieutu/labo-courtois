<script setup lang="ts">
import TechnologyContent, { machines, title } from '../data/technology.md'
</script>
<template>
  <div class="bg-gray-50 py-16 lg:py-24">
    <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
      <div class="space-y-12">
        <div class="md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{{ title }}</h2>
          <TechnologyContent class="mt-6 text-gray-500" />
        </div>
        <ul
          role="list"
          class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          <li v-for="machine in machines" :key="machine.name">
            <div class="relative">
              <div class="aspect-w-3 aspect-h-2">
                <img
                  class="object-cover shadow-lg rounded-lg"
                  :src="machine.imageUrl"
                  :alt="machine.name"
                />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-transparent rounded-lg mix-blend-darken"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-transparent rounded-lg mix-blend-darken"
              />
              <div class="absolute bottom-2 right-4 text-white font-medium">{{ machine.name }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
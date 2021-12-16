<script setup lang="ts">
const people = Object.values(import.meta.globEager('../data/team/*.md'))
  .map(({ default: description, name, role, imageUrl }) => ({ description, name, role, imageUrl }))

import {title} from '../data/team.md'
</script>

<template>
  <div class="bg-white">
    <Aurelie />
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{{title}}</h2>

        <ul
          role="list"
          class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
        >
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover shadow-lg rounded-lg grayscale" :src="person.imageUrl" alt="" />
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ person.name }}</h3>
                    <p class="text-primary">{{ person.role }}</p>
                  </div>
                  <component :is="person.description" class="text-gray-500" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
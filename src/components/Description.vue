<script setup lang="ts">
import DescriptionContent, { imageUrl, title } from '../data/description.md'
</script>

<template>
  <div class="relative pt-20 pb-10 bg-gray-50">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div class="relative sm:py-16 lg:py-0">
        <div
          aria-hidden="true"
          class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
          <svg
            class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div class="relative mx-auto px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <div class="relative w-3xl h-96 rounded-2xl shadow-xl overflow-hidden">
            <img class="absolute inset-0 h-full w-full object-cover" :src="imageUrl" alt="" />
          </div>
        </div>
      </div>

      <div class="relative mx-auto px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2
            class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl"
          >{{title}}</h2>
            <DescriptionContent class="mt-6 text-gray-500"/>
        </div>
      </div>
    </div>
  </div>
</template>

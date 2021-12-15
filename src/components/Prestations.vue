<script setup lang="ts">
const prestations = [
  { name: 'Prothèse Fixe', icon: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg' },
  { name: 'Prothèse amovible', icon: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg' },
  { name: 'Prothèse sur implants', icon: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg' },
  { name: 'Numérique', icon: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg' },
  { name: 'Traditionnel', icon: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg' },
  { name: 'Gouttière', icon: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg' },
]
</script>
<template>
  <div class="py-12 lg:py-24 bg-white">
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
        <div>
          <h2
            class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
          >Nos prestations</h2>
          <p
            class="mt-6 max-w-3xl text-lg leading-7 text-gray-500"
          >Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
          <div
            v-for="prestation in prestations"
            :key="prestation.name"
            class="col-span-1 flex gap-2 items-center justify-center py-8 px-8 bg-gray-50 "
          >
            <LogoDent class="text-gray-600 h-8"/>
            <span class="text-gray-500 font-medium">{{prestation.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

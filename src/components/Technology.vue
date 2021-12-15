<script setup lang="ts">
const machines = [
  {
    name: 'Imprimante 3D',
    image:
      'https://i0.wp.com/www.deteched.com/wp-content/uploads/2017/04/3D-Printer-Edit2.jpg?fit=4333%2C2913',
  }, {
    name: 'Une autre Imprimante 3D',
    image:
      'https://www.techulator.com/attachments/Resources/15814-1-Altem-3D-dental-printers.jpg',
  },
  {
    name: 'Encore une autre !',
    image:
      'https://i0.wp.com/www.deteched.com/wp-content/uploads/2017/04/3D-Printer-Edit2.jpg?fit=4333%2C2913',
  },
]
</script>
<template>
  <div class="bg-gray-50 py-16 lg:py-24">
    <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 ">
      <div class="space-y-12">
        <div class="md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Le tout numérique</h2>
          <p class="mt-6 text-lg text-gray-500">
            Le laboratoire est équipé de
            <strong>machines de dernière technologie</strong>, afin de réaliser vos prothèses dentaires dans les meilleures conditions possibles.
            Ces moyens techniques nous permettent d'être des
            <strong>partenaires performants</strong>.
          </p>
          <p class="mt-3 text-lg text-gray-500">Pour celà nous nous appuyons notament sur l'expertise de partenaires tel que Ivoclar, bredent 3shzpe medit ou encore via sirona.</p>
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
                  :src="machine.image"
                  :alt="machine.name"
                />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-transparent rounded-lg mix-blend-darken"
              /><div
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
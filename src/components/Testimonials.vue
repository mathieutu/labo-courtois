<script setup lang="ts">
import Contact1 from './Contact.vue';
const testimonials = Object.values(import.meta.globEager('../data/testimonials/*.md'))
  .map(({ default: texte, company, logoUrl, author }) => ({ texte, company, logoUrl, author }))

</script>
<template>
  <section class="bg-primary">
    <div class="max-w-7xl mx-auto md:flex md:px-6 md:overflow-x-scroll md:gap-10 lg:px-8">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.company"
        class="py-12 px-4 md:w-1/3 sm:px-6 md:flex-none md:flex-grow md:flex md:flex-col md:py-16"
      >
        <div class="md:flex-shrink-0">
          <img
            v-if="testimonial.logoUrl"
            class="h-12 brightness-0 invert opacity-75"
            :src="testimonial.logoUrl"
            :alt="testimonial.company"
          />
          <div v-else class="h-12" />
        </div>
        <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
          <div class="relative text-lg font-medium text-white md:flex-grow">
            <svg
              class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-white opacity-25"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
              />
            </svg>
            <component :is="testimonial.texte" class="relative" />
          </div>
          <footer class="mt-8">
            <div class="flex items-start">
              <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  class="h-12 w-12 rounded-full"
                  v-if="testimonial.author.imageUrl"
                  :src="testimonial.author.imageUrl"
                  :alt="testimonial.author.name"
                />
              </div>
              <div class="ml-4">
                <div class="text-base font-medium text-white">{{testimonial.author.name}}</div>
                <div class="text-base font-medium text-white opacity-75">{{testimonial.author.role}}, {{testimonial.company}}</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>

    </div>
  </section>
</template>

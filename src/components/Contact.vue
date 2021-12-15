<script setup lang="ts">
import { MailIcon, PhoneIcon, ClockIcon, LocationMarkerIcon } from '@heroicons/vue/outline/esm/index.js'
const contact = {
  phone: '04 88 86 07 17',
  mail: 'contact@labo-courtois.com',
  time: 'Du lundi au vendredi 8h30-19h00',
  address: '16 rue du refuge, 13002 Marseille'
}

const phoneUrl = `tel:${contact.phone}`
const mailUrl = `mailto:${contact.mail}`
const adresseUrl = `https://www.google.com/maps/search/Laboratoire+Courtois+${contact.address.replaceAll(' ', '+')}`
</script>

<template>
  <div class="overflow-hidden bg-gray-50 py-24">
    <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Contactez-nous</h2>
      <p
        class="mt-6 text-lg text-gray-500 max-w-3xl"
      >Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et fermentum amet consequat.</p>
    </div>

    <!-- Contact section -->
    <section class="relative mt-10">
      <!-- Decorative dot pattern -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative bg-white rounded-lg shadow-xl">
          <h2 id="contact-heading" class="sr-only">Contact us</h2>

          <div class="grid grid-cols-1 lg:grid-cols-3">
            <!-- Contact information -->
            <div
              class="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-primary-light to-primary rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg sm:px-10 xl:p-12"
            >
              <!-- Decorative angle backgrounds -->
              <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="343"
                  height="388"
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fill-opacity="0.1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="359"
                  height="339"
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fill-opacity="0.1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="160"
                  height="678"
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fill-opacity="0.1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 class="text-lg font-medium text-white">Venez nous voir</h3>
              <p
                class="mt-6 text-base text-white/90 max-w-3xl"
              >Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
              <dl class="mt-8 space-y-6">
                <dt>
                  <span class="sr-only">Téléphone</span>
                </dt>
                <dd class="flex text-base items-center text-white/90">
                  <PhoneIcon class="flex-shrink-0 w-5 h-5 text-white/40" aria-hidden="true" />
                  <a :href="phoneUrl" target="_blank" rel="noreferer noopener" class="ml-3 hover:opacity-50">{{contact.phone}}</a>
                </dd>
                <dt>
                  <span class="sr-only">Email</span>
                </dt>
                <dd class="flex text-base items-center text-white/90">
                  <MailIcon class="flex-shrink-0 w-5 h-5 text-white/40" aria-hidden="true" />
                  <a :href="mailUrl" target="_blank" rel="noreferer noopener" class="ml-3 hover:opacity-50">{{contact.mail}}</a>
                </dd>
                <dt>
                  <span class="sr-only">Horaires</span>
                </dt>
                <dd class="flex text-base items-center text-white/90">
                  <ClockIcon class="flex-shrink-0 w-5 h-5 text-white/40" aria-hidden="true" />
                  <span class="ml-3">{{contact.time}}</span>
                </dd>
                <dt>
                  <span class="sr-only">Adresse</span>
                </dt>
                <dd class="flex text-base items-center text-white/90">
                  <LocationMarkerIcon class="flex-shrink-0 w-5 h-5 text-white/40" aria-hidden="true" />
                  <a :href="adresseUrl" target="_blank" rel="noreferer noopener" class="ml-3 hover:opacity-50">{{contact.address}}</a>
                </dd>
              </dl>
            </div>

            <!-- Contact form -->
            <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 class="text-lg font-medium text-gray-900">Envoyez nous un message</h3>
              <form
            action="/?success=true#contact"
            data-netlify="true"
            method="POST"
            name="contact"
                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div class="sm:col-span-2">
                  <label
                    for="nom"
                    class="block text-sm font-medium text-gray-900"
                  >Nom</label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      autocomplete="name"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-light focus:border-primary-light border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-light focus:border-primary-light border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex justify-between">
                    <label for="tel" class="block text-sm font-medium text-gray-900">Téléphone</label>
                  </div>
                  <div class="mt-1">
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      autocomplete="tel"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-light focus:border-primary-light border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="subject" class="block text-sm font-medium text-gray-900">Sujet</label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-light focus:border-primary-light border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-900"
                    >Message</label>
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primary-light focus:border-primary-light border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-light hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light sm:w-auto"
                  >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  

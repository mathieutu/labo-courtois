<template>
  <div class="bg-red-500">
    <main>
      <Hero />
      <Description/>
      <Prestations />
      <Technology />
      <Team />
      <Testimonials />
      <Contact />
    </main>

    <footer class="bg-gray-50">
      <div class="mx-auto max-w-md pb-4 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p class="mt-8 text-center text-base text-gray-400">
          &copy; {{new Date().getFullYear()}} Labo Courtois, Tous droits resérvés. <br>
          Réalisé par <a class="hover:text-gray-600" href="https://github.com/mathieutu">Mathieu TUDISCO</a> sous <a class="hover:text-gray-600" href="https://github.com/mathieutu/labo-courtois">licence MIT</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

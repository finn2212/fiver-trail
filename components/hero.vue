
<script setup>
</script>

<template>
  <section class="relative py-32 lg:py-36 bg-primary">
    <div class="absolute inset-0">
      <img
        src="/images/hero.png"
        alt="Hero Background"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="mx-auto lg:max-w-7xl w-full px-5 sm:px-20 md:px-22 lg:px-25 flex flex-col lg:flex-row gap-10 lg:gap-12"
    >
      <div
        class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
      >
        <h1
          class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white"
        >
          we connect
          <br />
          human resources
          <br />
          competence
        </h1>
        <p class="mt-8 text-base md:text-lg text-white opacity-90 max-w-lg">
          Plattform für spannende Fachvorträge, interessante Webinare und
          fachlichen Wissensaustausch
        </p>
        <div class="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
          <div
            class="flex sm:flex-row flex-col justify-center lg:justify-start gap-5 w-full"
          >
            <NuxtLink
              to="/"
              class="px-10 py-1 flex items-center justify-center max-w-lg text-base rounded-full text-white border border-white undefined"
            >
              <span class="z-[5]"> Mehr Details </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"
      ></div>
    </div>
  </section>


</template>

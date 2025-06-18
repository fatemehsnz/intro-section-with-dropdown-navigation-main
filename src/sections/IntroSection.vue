<template>
  <section class="flex lg:justify-between flex-col-reverse lg:flex-row ">
    <div class="flex flex-col lg:w-1/2 w-full lg:ml-[180px] mt-32">
      <h1 class="text-7xl font-epilogue font-bold  leading-none">
        Make <br class="hidden lg:block" />
        remote work
      </h1>
      <p class="text-mediumgray text-lg mb-12 mt-8 w-[400px]">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button
        class="border border-black text-almostwhite rounded-xl px-2 py-2.5 bg-black hover:bg-almostwhite hover:text-black transition-colors font-medium w-[130px]"
      >
        Learn more
      </button>
      <div class="flex justify-between items-center mt-16 w-[460px]">
        <img src="../assets/images/client-databiz.svg" alt="databiz" />
        <img src="../assets/images/client-audiophile.svg" alt="audiophile" />
        <img src="../assets/images/client-meet.svg" alt="meet" />
        <img src="../assets/images/client-maker.svg" alt="maker" />
      </div>
    </div>
    <div class="lg:w-1/2 w-full flex justify-center lg:mr-16">
      <img
        src="../assets/images/image-hero-desktop.png"
        alt="image-hero-desktop"
        class="w-[420px] h-auto object-contain hidden lg:block"
      />
      <img
        src="../assets/images/image-hero-mobile.png"
        alt="image-hero-mobile"
        class="block lg:hidden"
      />
    </div>
  </section>
</template>

<script setup></script>

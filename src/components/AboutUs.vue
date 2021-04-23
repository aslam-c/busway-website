<template>
  <div class="">
    <!-- component -->
    <div class="container mx-auto rounded m-4">
      <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div class="max-h-80 md:h-screen">
          <img
            class="w-screen h-screen object-cover object-top"
            src="@/assets/busway-about.webp"
            alt=""
          />
        </div>
        <div class="flex bg-gray-100 p-10">
          <div class="mb-auto mt-auto max-w-lg">
            <h1 class="text-3xl uppercase font-mono">Who we are ?</h1>
            <!-- <p class="font-semibold mb-5">Web Developer</p> -->
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
            <button class="bg-black rounded-md py-3 px-7 mt-6  text-white">
              <router-link
                to="/contact-us"
                class="text-white-900 px-3 py-2 rounded-md font-medium"
                >Contact Us</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<template>
  <div
    class="
      flex
      items-center
      justify-center
      w-screen
      h-screen
      bg-gradient-to-r
      from-sky-500
      to-indigo-600
    "
  >
    <div class="px-40 py-20 bg-white rounded-md shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-blue-600 text-9xl logo_font ">( X _ X )</h1>

        <h6
          class="mb-2 text-2xl text-center text-gray-800 md:text-3xl title_font"
        >
          <span class="text-red-500">Oops!</span> No ethereum library was found
        </h6>

        <p class="mb-8 text-center text-gray-500 md:text-lg">
            please consider installing a wallet on your browser first! 
        </p>

        <a
          href="/"
          class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 title_font"
          >Go to home page</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  props: ["error"],
};
</script>
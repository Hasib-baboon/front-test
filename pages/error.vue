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
    <div class="px-40 py-20 bg-white rounded-md shadow-xl shadow-gray-700">
      <div class="flex flex-col items-center">
                <span class="text-red-500 text-xl">Oops!</span>
        <div v-if="error_code === 404">
          <h1 class="font-bold text-blue-600 text-9xl logo_font">404</h1>
          <h6
            class="
              mb-2
              text-2xl
              font-bold
              text-center text-gray-800
              md:text-3xl
              p-6
              title_font
            "
          >
            Page not found
          </h6>
        </div>
        <div v-else>
          <h6
            class="
              mb-2
              font-bold
              text-center text-gray-800
              text-lg
              p-6
            "
          >
            {{ error_message }}
          </h6>
        </div>
                  <a
            href="/"
            class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
            >Go to home page</a
          >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      error_code: this.$route.params["error_code"],
      error_message: this.$route.params["error_message"],
    };
  },
  layout: "error",
};
</script>
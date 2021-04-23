<template>
  <div
    class="h-screen bg-white flex flex-col space-y-10 justify-center items-center"
  >
    <div class="bg-white w-100 shadow-xl rounded p-10">
      <h1 class="text-3xl font-medium">Contact Us</h1>
      <p class="text-sm">Reach us by sending a message</p>

      <form class="space-y-5 mt-5">
        <input
          type="text"
          class="w-full h-12 border border-gray-800 rounded px-3"
          placeholder="Email"
        />
        <p class="text-red-900 text-sm">We need a valid Email address</p>
        <input
          type="text"
          class="w-full h-12 border border-gray-800 rounded px-3"
          placeholder="Phone"
        />
        <textarea
          class="w-full h-12 border border-gray-800 rounded p-2"
          placeholder="Message"
        >
        </textarea>
        <button
          class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

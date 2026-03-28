<template>
  <section class="py-20 px-4 md:px-10 bg-[#1a1a1a]">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-white text-4xl font-bold mb-8 md:text-5xl">Contact Us</h2>
        <form class="space-y-6">
          <div>
            <label class="text-white font-medium mb-2 block" for="name">Your Name</label>
            <input
              class="form-input w-full rounded-md text-white bg-[#222222] border-[#444444] h-12 px-4 placeholder:text-gray-500 focus:border-[#ea2a33] focus:ring-[#ea2a33]"
              id="name" placeholder="Enter your name" type="text" />
          </div>
          <div>
            <label class="text-white font-medium mb-2 block" for="email">Your Email</label>
            <input
              class="form-input w-full rounded-md text-white bg-[#222222] border-[#444444] h-12 px-4 placeholder:text-gray-500 focus:border-[#ea2a33] focus:ring-[#ea2a33]"
              id="email" placeholder="Enter your email" type="email" />
          </div>
          <div>
            <label class="text-white font-medium mb-2 block" for="message">Your Message</label>
            <textarea
              class="form-input w-full rounded-md text-white bg-[#222222] border-[#444444] p-4 placeholder:text-gray-500 focus:border-[#ea2a33] focus:ring-[#ea2a33]"
              id="message" placeholder="Enter your message" rows="5"></textarea>
          </div>
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#ea2a33] text-white text-base font-bold tracking-[0.015em] hover:bg-[#c02128] transition-colors"
            type="submit">
            <span class="truncate">Send Message</span>
          </button>
        </form>
      </div>
      <div class="flex flex-col">
        <div class="w-full h-64 md:h-full bg-cover bg-center rounded-lg"
          style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSDXuK9QqM8dTIbx9N5sRboDRr8elgvC36SzplYUq1hRy02ZCjQ_V0ehNEaXfbVrsf8ljmOjn7IpqgFfzHukEsl0Yxk7JzNcXaJbUybA3bNW4Ic2mrtF0A4OQeF61ncJO6fvFspWzgsSrdneXulm-IFumiErnL3BTnHvpLLSStneqMiJLr2XbM9QwEZzm9jclbqxfk2cwsKYfaZ0XuaEhdMcE9qDeSEDeU4mAtwht37wA_DY8PXqJjVEd_dlIYjWB4yilQ7Wiw1JZF");'>
        </div>
        <div class="mt-8 text-white">
          <p class="font-bold text-lg">FitnessPro Gym</p>
          <p class="text-gray-400 mt-2">123 Main Street, Anytown, USA</p>
          <p class="text-gray-400 mt-1">Phone: (555) 123-4567</p>
          <p class="text-gray-400 mt-1">Email: info@fitnesspro.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LocationComponent',
})
</script>

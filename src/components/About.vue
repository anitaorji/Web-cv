<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProfile } from '../services/api'

interface Profile {
  name: 'Anita Orji'
  // photo: string
  summary: string
}

const profile = ref<Profile | null>(null)

onMounted(async () => {
  profile.value = await getProfile()
})
</script>

<template>
    <section 
  id="introduction"
  v-if="profile" class="text-center px-16 py-32 mt-8 mx-2 mb-10 md:mx-10 rounded-lg">
  <h2 class="text-3xl font-semibold mb-2 text-black ">
    Hello, I’m {{profile.name}} 👋
  </h2>
  <h3 class="text-xl text-black-600 mb-4 animate-[fadeInScale_0.8s_ease-out_forwards]">
    Software Developer
  </h3>
  <p class="max-w-2xl mt-12 mx-auto text-black-400 animate-fade-in-delay">
    <!-- I’m a developer passionate about turning ideas into functional and
    elegant software. Constantly learning, improving, and exploring new
    technologies to build impactful solutions. -->
  {{ profile.summary }}
  </p>
</section>
</template>

<style scoped>
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProjects } from '../services/api'

interface Project {
  id: number
  title: string
  description: string
  tech: string
  link: string
}

const projects = ref<Project[]>([])

onMounted(async () => {
  projects.value = await getProjects()
})
</script>

<template>
<section id="projects"  class="py-44 bg-gray-900 text-center text-white ">
      <h2 class="text-2xl font-semibold mb-4">Projects</h2>
      <p class="max-w-xl mx-auto text-gray-600">
        Here are some projects I’ve built to sharpen my skills and bring ideas
        to life.
      </p>

      <div v-for="proj in projects" :key="proj.id"class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto px-6">
        <div class="bg-gray-600 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 class="font-semibold text-black-00">{{proj.title}}</h4>
          <p class="text-black-00 text-sm mt-2">
            {{proj.description}}
          </p>
          <p class="text-sm italic">{{ proj.tech }}</p>
        </div>

        <!-- <div class="bg-gray-600 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 class="font-semibold text-black-0">Portfolio Website</h4>
          <p class="text-black-00 text-sm mt-2">
            Personal portfolio built using HTML, Tailwind, and JavaScript.
          </p>
        </div>

        <div class="bg-gray-600 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 class="font-semibold text-black-00">Staff Directory System API</h4>
          <p class="text-black-00 text-sm mt-2">
            A RESTful Web API built with C# and ASP.NET Core that manages staff records with full CRUD functionality, following Clean Architecture principles for scalability and maintainability.
            </p>
        </div> -->
        </div> 
    </section>
</template>

<style scoped>
</style>
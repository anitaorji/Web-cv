<script setup lang="ts">
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import { ref, onMounted } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.ts";

const profile = ref<any>(null);

onMounted(async () => {
  try {
    const docRef = doc(db, "profile", "main"); // "main" is document ID
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      profile.value = docSnap.data();
    } else {
      console.log("No profile found");
    }
  } catch (err) {
    console.error("Error fetching profile:", err);
  }
});
</script>


<template>
  <ThemeToggle />
  <div>
    <Header />
    
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
  <div class="p-6">
    <h1 class="text-3xl font-bold">{{ profile?.name }}</h1>
    <p class="text-gray-500 dark:text-gray-300">{{ profile?.title }}</p>
    <p class="mt-4">{{ profile?.bio }}</p>
    <p class="mt-2 text-sm">{{ profile?.email }}</p>
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { useRoute } from "vue-router";
import { ref, watchEffect, onMounted } from "vue";
import { GameStore } from "./stores/gameData";


const store = GameStore();

const route = useRoute();

const navigation = ref(null);

watchEffect(() => {
  if (route.name === "play_game") {
    navigation.value = true;
    return;
  }
  navigation.value = false;
  store.setName()
});
</script>

<template>
  <Header v-if="!navigation" />

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.2rem;

  font-weight: normal;
}
</style>

<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { GameStore } from "../stores/gameData";

const store = GameStore();
const router = useRouter();
const name = ref("");
const error = ref(false);
function login() {
  if (name.value.length >= 3) {
    console.log(name.value);
    store.changeName(name.value)
    router.push({name:'play_game'})
    return;
  }
  error.value = true;
}
</script>

<template>
  <div class="account">
    <form>
      <h1>Enter Your Name To Start</h1>
      <input
        type="text"
        class="username"
        placeholder="Enter your name"
        v-model="name"
      />
      <p v-show="error">Please enter a name to start the game</p>
      <button @click.prevent="login">Start Game</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.account {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 60vh;
  form {
    // width:350px;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 10px;
      color: #fff;
    }
    .username {
      padding: 14px;
      border-radius: 4px;
      border: none;
      outline: none;
    }
    p {
      color: rgb(223, 71, 89);
      margin-top: 10px;
    }
    button {
      text-align: center;
      border: none;
      border-radius: 4px;
      padding: 14px;
      background-color: rgb(126, 27, 23);
      color: #fff;
      margin-top: 10px;
      cursor: pointer;
    }
  }
}
</style>
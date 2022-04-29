<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { GameStore } from "../stores/gameData";

const store = GameStore();
</script>
<template>
  <header>
    <div class="links">
      <RouterLink :to="{ name:'character' }" class="link">Characters</RouterLink>
      <RouterLink :to="{ name:'play_game' }" class="link">Play game</RouterLink>
    </div>
    <div class="account">
      <RouterLink :to="{ name:'account' }" class="login a" v-if="store.isLogin">Login</RouterLink>
      <span class="login" v-if="!store.isLogin">Hello {{ store.playerName }}</span>
    </div>
  </header>
</template>


<style lang="scss" scoped>
header {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 25%);
  border-radius: 40px;
  .links {
    display: flex;
    align-items: center;
    .link {
      color: #fff;
      padding: 10px;
      margin-right: 15px;
      transition: 0.3s;
      &:hover {
        border-radius: 22px;
        background-color: #555;
      }
    }
  }
  .account {
    .login {
      color: #fff;
      padding: 10px;
      margin-right: 15px;
      transition: 0.3s;
      &.a:hover {
        border-radius: 22px;
        background-color: #555;
      }
    }
  }
}
</style>
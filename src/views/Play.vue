<script setup>
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { GameStore } from "../stores/gameData";

const store = GameStore();
const basePlayerAtack = [8, 7, 10, 4, 5, 6, 5, 3, 4, 5, 7, 4, 6, 4, 5, 6];
const playerAtack = ref(null);
const baseEnemyAtack = [
  12, 12, 13, 9, 8, 8, 7, 5, 7, 6, 9, 6, 7, 4, 3, 8, 7, 10, 12, 14, 11, 5, 7, 8,
  4, 5,
];
const enemyAtack = ref(null);
const heal = 10;
const healCount = ref(3);
const resetGame = ref(false);
const ready = ref(false);

function atack() {
  // enemy damage

  playerAtack.value =
    basePlayerAtack[Math.floor(Math.random() * basePlayerAtack.length)];
  store.enemyHealth = store.enemyHealth - playerAtack.value;
  console.log(playerAtack.value);
  // player damage
  enemyAtack.value =
    baseEnemyAtack[Math.floor(Math.random() * baseEnemyAtack.length)];
  store.playerHealth = store.playerHealth - enemyAtack.value;
  console.log(enemyAtack.value);
  if (
    store.enemyHealth - playerAtack.value >= 0 &&
    store.playerHealth - enemyAtack.value >= 0
  ) {
  } else if (store.enemyHealth <= 0) {
    alert("Congratz! You Won");
    store.enemyHealth = 0;
    store.playerHealth = 0;
    resetGame.value = true;
  } else if (store.playerHealth <= 0) {
    alert("Oh so sad! You lost :(");
    store.playerHealth = 0;
    store.enemyHealth = 0;
    resetGame.value = true;
  }
}
function heal_player() {
  if (store.playerHealth + heal <= 100) {
    if (healCount.value > 0) {
      healCount.value = healCount.value - 1;

      store.playerHealth = store.playerHealth + heal;
      console.log();
    }
  }
}
function reset_game() {
  store.$reset();
  healCount.value = 3;
  resetGame.value = false;
}
</script>

<template>
  <div class="game" v-if="ready" :class="{ show: ready }">
    <div class="timer">
      <img src="../assets/icons8-infinity-64.png" alt="" />
    </div>

    <div class="hp-bar">
      <div class="player-hp">
        <img src="../assets/logo.svg" alt="" />
        <div class="hp-name">
          <span>{{ store.playerName }}</span>
          <div class="health">
            <div
              :style="{ width: store.playerHealth + '%' }"
              :class="{
                warning: store.playerHealth <= 50,
                danger: store.playerHealth <= 30,
              }"
            >
              {{ store.playerHealth }}%
            </div>
            <div
              style="
                position: absolute;
                top: 0;
                background-color: rgba(0, 0, 0, 0.2);
              "
            ></div>
          </div>
        </div>
      </div>

      <div class="enemy-hp">
        <img src="../assets/logo.svg" alt="" width="90px" />
        <div class="hp-name">
          <span>Bad Guy</span>
          <div class="health">
            <div :style="{ width: store.enemyHealth + '%' }">
              {{ store.enemyHealth }}%
            </div>
            <div
              style="
                position: absolute;
                top: 0;
                background-color: rgba(0, 0, 0, 0.2);
              "
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="warrior">
      <div class="player-warrior">
        <img src="../assets/ZeQb.gif" alt="" />
      </div>

      <div class="enemy-warrior">
        <img src="../assets/Gpm.gif" alt="" />
      </div>
    </div>

    <div class="ability">
      <div class="icon" @click="atack" v-if="!resetGame">
        <img src="../assets/icons8-sword-34.png" alt="" />
      </div>
      <div class="icon" v-if="!resetGame">
        <img src="../assets/icons8-heart-34.png" alt="" @click="heal_player" />
        <span class="life-coute">{{ healCount }}</span>
      </div>
      <div class="icon">
        <RouterLink :to="{ name: 'home' }" @click="reset_game"
          >Give up</RouterLink
        >
      </div>
      <div class="icon" v-if="resetGame" @click="reset_game">
        <span>reset Game</span>
      </div>
    </div>
  </div>
  <div class="ready" v-if="!ready">
    <div>
      <h1>Are You Ready</h1>
      <button @click="ready = true">Im ready</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s linear, opacity 0.3s linear;
  .timer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .hp-bar {
    display: flex;
    justify-content: space-between;
    color: #000;
    .player-hp {
      display: flex;
      align-items: center;
      img {
        width: 90px;
      }
      .hp-name {
        .health {
          min-width: 425px;
          div {
            text-align: center;
            width: 100%;
            height: 30px;
            background-color: #449444;
            border-radius: 4px;
            color: #fff;
            &:first-child {
              z-index: 1;
            }
            &.warning {
              background-color: #fffb00ce;
              color: #fff;
            }
            &.danger {
              background-color: #df4759;
              color: #fff;
            }
          }
          margin-top: 20px;
        }
        margin-left: 17px;
        span {
          margin-right: 17px;
          margin-top: 20px;
          color: #fff;
        }
      }
    }
    .enemy-hp {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      img {
        width: 90px;
      }
      .hp-name {
        .health {
          min-width: 425px;
          div {
            text-align: center;
            width: 100%;
            height: 30px;
            background-color: #449444;
            border-radius: 4px;
            color: #fff;
            &:first-child {
              z-index: 1;
            }
          }
          margin-top: 20px;
          margin-right: 17px;
        }
        text-align: right;
        span {
          margin-right: 17px;
          color: #fff;
        }
      }
    }
  }
  .warrior {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    .player-warrior {
      img {
        width: 250px;
      }
    }
    .enemy-warrior {
      img {
        width: 250px;
        transform: scaleX(-1);
      }
    }
  }
  .ability {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      min-width: 135px;
      padding: 14px;
      background-color: rgb(126, 27, 23);
      margin-right: 15px;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      img {
        width: 25px;
      }
      a {
        color: #fff;
      }
      font-size: 15px;
      &:hover {
        background-color: #66a7d8;
        color: #000;
        .life-coute {
          top: -15px;
          left: 1px;
        }
      }
      .life-coute {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 23px;
        background-color: #fff;
        border-radius: 50%;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s;
      }
    }
    margin-top: 50px;
  }
}
.ready {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96vh;
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    width: 300px;

    button {
      background-color: #449444;
      border: none;
      outline: none;
      padding: 10px;
      border-radius: 3px;
      color: #fff;
      margin-top: 15px;
      font-size: 20px;
      font-weight: 100;
      cursor: pointer;
      transition: .3s;
      &:hover {
        background-color: #66a7d8;
      }
    }
  }
}

.show {
  visibility: visible;
  opacity: 1;
}
</style>
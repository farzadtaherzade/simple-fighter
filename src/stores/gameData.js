import { defineStore } from 'pinia'

export const GameStore = defineStore({
  id: 'game data',
  state: () => ({
    playerName:'',
    playerHealth : 100,
    enemyHealth : 100,
    showHeader:true,
    isLogin:false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },
    changeName(name) {
      this.playerName = name
      localStorage.setItem("player name", name);
      this.isLogin = true
    },
    setName() {
      let player_name = localStorage.getItem("player name");
      if (player_name && player_name.length >= 3) {
        this.playerName = player_name
        this.isLogin = false
      }else {
        this.isLogin = true
        this.playerName = 'Player'
      }
    }
  }
})

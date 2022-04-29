<script setup>

</script>

<template>
  <div class="characters">
      <div class="character">
          <h1>Ninja</h1>
          <img src="../assets/ZeQb.gif" alt="gih">
      </div>
  </div>
</template>

<style lang="scss" scoped>
.characters {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 31px auto;
    .character {
        cursor: pointer;
        text-align: center;
        padding: 30px 70px;
        margin-right: 20px;
        margin-top: 20px;
        background-color: rgba($color: #000000, $alpha: .2);
        border-radius: 20px;
        h1 {
            margin-bottom: 8px;
        }
        img {
            width: 100%;
        }
    }
}
</style>
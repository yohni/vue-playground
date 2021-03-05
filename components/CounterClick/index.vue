<template>
  <div class="counter">
    <button class="counter__minus" :disabled="count < 2" @click="count -= 1">
      -
    </button>
    <div class="counter__content">{{ count }}</div>
    <button class="counter__plus" @click="count += 1">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
}
</script>

<style lang="stylus" scoped>
.counter
  min-width 131px
  overflow hidden
  border-radius 10px
  height 60px
  display flex
  justify-content space-between
  border 2px solid #2D4957

  &__minus
    background #2D4957
    width 27%
    color #FFF
    font-size 40px
    display flex
    align-items center
    justify-content center
    cursor pointer
    transition all 0.2s

    &:hover
      opacity 0.8

  &__plus
    background #2D4957
    width 27%
    color #FFF
    font-size 40px
    display flex
    align-items center
    justify-content center
    cursor pointer
    transition all 0.2s

    &:hover
      opacity 0.8

  &__content
    font-size 24px
    display flex
    align-items center
</style>

<template>
  <div class="variant d-flex justify-content-center">
    <div v-for="item in items" :key="item.value" class="variant__item mx-2 p-2">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'selected'],
}
</script>

<style lang="stylus" scoped>
.variant
  &__item
    font-size 18px
    border 1px solid #707070
    border-radius 5px
    color #707070
    opacity 0.5
    transition all 0.25s
    cursor pointer

    &:hover
      opacity 0.8

    &__selected
      opacity 1
</style>

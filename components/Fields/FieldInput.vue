<template>
  <input
    v-model="model"
    :type="type"
    class="field h-16"
    :class="error && 'field__error'"
  />
</template>

<script>
export default {
  props: ['type', 'value', 'error'],
  computed: {
    model: {
      get() {
        return this.value
      },
      set($event) {
        return this.$emit('model', $event)
      },
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.field
  min-width 264px
  font-size 13px
  color blackText
  padding 24px 19px 21px
  border #fff solid 1px
  transition all 0.2s

  &__error
    border-color red

  &::placeholder
    letter-spacing 3.25px

  &:focus
  &:active
    outline none
    border greyKilimanjaro solid 1px
</style>

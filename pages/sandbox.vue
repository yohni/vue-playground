<template>
  <div
    :class="`hakki ${isClicked ? 'hakki__clicked' : ''}`"
    @click="updateClicked"
  >
    Hakki
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    }
  },
  methods: {
    updateClicked() {
      this.isClicked = !this.isClicked
    },
  },
}
</script>

<style lang="stylus" scoped>
.hakki
  background red
  color white

  &__clicked
    background blue
</style>

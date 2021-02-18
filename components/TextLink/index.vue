<template>
  <div class="text">
    <div class="text_ctx">
      <slot />
    </div>
    <!-- <div class="text__line"></div> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.text
  text-align center
  letter-spacing 3.25px
  opacity 1
  padding-right 10px
  padding-left 10px
  position relative
  font-size 13px

  // &:before
  //   content ' '
  //   position absolute
  //   margin-left auto
  //   margin-right auto
  //   left 0
  //   right 0
  //   text-align center
  //   max-width 130px
  //   width 100%
  //   height 12px
  //   bottom -6px
  //   background #D9DEF1
  //   z-index 10

  &__ctx
    z-index 11
</style>

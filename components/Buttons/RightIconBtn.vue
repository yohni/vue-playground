<template>
  <button :type="type" class="rbtn">
    <div class="rbtn__text" :class="align === 'center' && 'w-100 text-center'">
      <slot />
    </div>
    <img src="~/assets/icons/right-arrow.svg" alt="icon" class="rbtn__icon" />
  </button>
</template>

<script>
export default {
  props: ['type', 'align'],
}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.rbtn
  display flex
  align-items center
  background greyDark 0% 0% no-repeat
  box-shadow 0px 1px 6px greyKilimanjaro
  padding 20px
  color whiteMustard
  position relative
  font-size 13px
  letter-spacing 3.25px
  transition all 0.25s

  &:hover
    background blackText


  &__icon
    width 17px
    height 17px
    position absolute
    right 10px
</style>

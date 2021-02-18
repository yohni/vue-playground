<template>
  <h3 class="heading">
    <slot />
  </h3>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.heading
  text-align center
  letter-spacing -0.21px
  color blackMamba
  font-size 24px
  font-weight 500
</style>

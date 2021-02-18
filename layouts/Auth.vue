<template>
  <div class="auth d-flex flex-column flex-md-row align-items-center">
    <div
      class="auth__logo d-flex justify-content-center align-items-center col-12 col-md-6"
    >
      <img src="~/assets/Logo.png" alt="" class="auth__logo__img" />
    </div>
    <div
      class="auth__container flex-grow d-flex justify-content-center align-items-center col-12 col-md-6"
    >
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '../styles/imports';
.auth
  background skinPrimary
  min-height 100vh

  &__logo
    &__img
      max-width 70%
</style>

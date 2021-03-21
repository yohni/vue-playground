<template>
  <b-container>
    <div>Hallo</div>
    <right-icon-btn>{{ name }}</right-icon-btn>
  </b-container>
</template>

<script>
import RightIconBtn from '~/components/Buttons/RightIconBtn.vue'
export default {
  components: {
    RightIconBtn,
  },
  data() {
    return {
      name: 'HalloButton',
    }
  },
}
</script>

<style lang="stylus" scoped>
.underconstruct
  text-align right !important
</style>

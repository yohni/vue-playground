<template>
  <div class="product">
    <b-img
      thumbnail
      :src="
        src ||
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9VVVUwMDDt7e2xsbFqamrh4eEAAACnp6ebm5u+vr6Li4v8/Pw1NTWTk5N8fHyFhYWhoaFaWlr09PRBQUFkZGTY2NjR0dHn5+dHR0dNTU3FxcUuLi60tLRubm6Ojo4SEhIcHBxCQkLFQ9IRAAACBElEQVR4nO3Y63KaQBiAYZBTOCOIYKDS9P4vsqCxLKdYmGbqx7zPDzKyuzP7joIGTQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGsEG/zvPa9hnOrDanUqqNFzt6zK7X+9j++zrdCi8IXcCn+YK3SrxBU65tvfMp3uJiOvcMWCkMJXQ+GE7MKzVzz9sSK68Jq78aV8skByodu0h0IfzyiHzZILf96O6XDzpqNfHE85Ibnw43aMC3XYv7aH7HLsz0gufO+2HZwyZdSP73/1PlFyYVkXRpm/KYOPQDVRcqFWXtO0Usb6QCVRdOFIEquvHok7KhwGtpfpPXE/hePAR+JuCqeBn4l7KfRnAu/XovTC7Hw2tKXAW6LwwuMvywqbxcA20TyJLkzidvtBEibL83PRz2niz7Llt7CbK7gw/vPWfZUo+DqMlc/mF4lyC+PBxbeQGARBLbUwGd1dholBZntRcn0/HFKp1+E4sE80bDO56hfL9Qq7+9dR6Kc0mvl+aJLA9uI8zY+FrTyBE1roTwfKytGtqJg8ehNaOD5bRCfLtbOZ+bsoPPuhX83P1sQWulHvwwldt2n8eZHMe2nlKapq8HKiWyWucDUKX4l3fD5nSlKhXesbhLNfJC8qMzaQFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL7fb9+XHzHtcCnjAAAAAElFTkSuQmCC'
      "
      alt="Gambar"
      class="product__img"
    />
    <div class="product__content">
      <div class="product__content__name text-center mb-1 text-truncate">
        {{ name }}
      </div>
      <div class="product__content__price text-center">{{ price }}</div>
    </div>
    <img class="product__icon" src="~/assets/icons/ic_cart.svg" alt="" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['src', 'name', 'price', 'hot'],
}
</script>

<style lang="stylus" scoped>
.product
  position relative
  padding 24px 12px
  border 3px solid #F6F7F8
  border-radius 4px
  max-width 183px
  height 272px
  margin 0 auto

  &__img
    width 100%
    height 157px
    max-width 157px
    object-fit contain

  &__content
    margin-top 18px

    &__name
      line-height 12px
      font-size 16px
      font-family 'futura-pt'
      font-weight 600
      letter-spacing 0.35px
      color #000000

    &__price
      font-size 14px
      letter-spacing 0.25px
      color #4AB4A2

  &__icon
    position absolute
    right 12px
    bottom 12px
    width 18px
    height 18px
</style>

<template>
  <div class="art-card">
    <b-img
      class="art-card__img"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9VVVUwMDDt7e2xsbFqamrh4eEAAACnp6ebm5u+vr6Li4v8/Pw1NTWTk5N8fHyFhYWhoaFaWlr09PRBQUFkZGTY2NjR0dHn5+dHR0dNTU3FxcUuLi60tLRubm6Ojo4SEhIcHBxCQkLFQ9IRAAACBElEQVR4nO3Y63KaQBiAYZBTOCOIYKDS9P4vsqCxLKdYmGbqx7zPDzKyuzP7joIGTQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGsEG/zvPa9hnOrDanUqqNFzt6zK7X+9j++zrdCi8IXcCn+YK3SrxBU65tvfMp3uJiOvcMWCkMJXQ+GE7MKzVzz9sSK68Jq78aV8skByodu0h0IfzyiHzZILf96O6XDzpqNfHE85Ibnw43aMC3XYv7aH7HLsz0gufO+2HZwyZdSP73/1PlFyYVkXRpm/KYOPQDVRcqFWXtO0Usb6QCVRdOFIEquvHok7KhwGtpfpPXE/hePAR+JuCqeBn4l7KfRnAu/XovTC7Hw2tKXAW6LwwuMvywqbxcA20TyJLkzidvtBEibL83PRz2niz7Llt7CbK7gw/vPWfZUo+DqMlc/mF4lyC+PBxbeQGARBLbUwGd1dholBZntRcn0/HFKp1+E4sE80bDO56hfL9Qq7+9dR6Kc0mvl+aJLA9uI8zY+FrTyBE1roTwfKytGtqJg8ehNaOD5bRCfLtbOZ+bsoPPuhX83P1sQWulHvwwldt2n8eZHMe2nlKapq8HKiWyWucDUKX4l3fD5nSlKhXesbhLNfJC8qMzaQFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL7fb9+XHzHtcCnjAAAAAElFTkSuQmCC"
      alt=""
    />
    <div class="art-card__content p-2">
      <div class="art-card__content__title mb-1">
        Snack Ini Biasa Dihidangkan di Turki Saat Sarapan
      </div>
      <div class="art-card__content__des">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea ...
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.art-card
  display flex
  align-items center
  border-radius 10px
  box-shadow 0px 1px 6px #00000061
  background #FFFFFF
  overflow hidden
  margin-bottom 18px
  margin-left auto
  margin-right auto
  cursor pointer
  transition all 0.25s

  &:hover
    box-shadow 0px 1px 6px #00000032

  &__img
    width 150px
    height 150px

  &__content
    &__title
      line-height 26px
      font-size 22px
      font-weight 900
      font-style italic

    &__des
      font-size 12px
      line-height 16px
</style>

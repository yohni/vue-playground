<template>
  <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>
  <b-dropdown
    v-else
    class="dropdownku px-2"
    no-caret
    right
    toggle-class="text-decoration-none"
    variant="link"
  >
    <template #button-content>
      <div class="usercard usercard__bordered d-flex align-items-center">
        <Avatar username="Yohni" :size="24" alt="" class="usercard__img mr-2" />
        <div class="usercard__text">Yohni</div>
      </div>
    </template>
    <b-dropdown-item class="usercard__extended">
      <nuxt-link to="/me">
        <div class="usercard__extended__item my-2">Profil</div>
      </nuxt-link>
    </b-dropdown-item>
    <b-dropdown-item class="usercard__extended">
      <nuxt-link to="/favorite">
        <div class="usercard__extended__item my-2">Favorit</div>
      </nuxt-link>
    </b-dropdown-item>
    <b-dropdown-item @click="logout()" class="usercard__extended my-2">
      <div class="usercard__extended__item text-danger">Logout</div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar,
  },
  data() {
    return {
      isLoading: false,
      userData: null,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          this.$cookies.get('__vmctHarimau').access_token
        }`,
      },
    }
  },
  created() {
    // this.fetchUser()
  },
  methods: {
    async fetchUser() {
      try {
        const resp = await this.$axios.$get('/api/auth/me')
        this.userData = resp.data
      } catch (error) {
        this.$toast.error('Gagal mendapatkan data user')
      }
    },
    logout() {
      this.isLoading = true
      setTimeout(() => {
        this.$cookies.remove('__vmctHarimau')
        this.isLoading = false
        window.location.reload(true)
      }, 2000)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';

.usercard
  display flex
  max-height 35px
  background none

  &__img
    padding 0

  &__text
    font-size 14px
    line-height 19px
    color blackBlur

.dropdownku
  border-left 2px solid blackBlur

  .btn-secondary
    background none
</style>

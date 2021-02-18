<template>
  <div>
    <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>
    <div v-else class="login">
      <div class="login__container container">
        <div class="login__container__mail mail">
          <Heading class="mail__heading">Masuk dengan email</Heading>
          <form @submit.stop.prevent="onSubmit()" class="mail__form">
            <div class="container w-100">
              <div class="row">
                <Field
                  class="col-12 col-md-6 mb-1"
                  type="email"
                  placeholder="EMAIL"
                  :value="$v.form.email.$model"
                  :error="$v.form.email.$dirty && $v.form.email.$error"
                  @model="$v.form.email.$model = $event"
                />
                <Field
                  class="col-12 col-md-6 mb-1"
                  type="password"
                  placeholder="PASSWORD"
                  :value="$v.form.password.$model"
                  :error="$v.form.password.$dirty && $v.form.password.$error"
                  @model="$v.form.password.$model = $event"
                />
              </div>
            </div>
            <Button
              type="submit"
              align="center"
              class="form__submit w-full mt-1 h-16 mb-5 w-100"
              >MASUK</Button
            >
          </form>
          <nuxt-link to="/forgotpassword">
            <TextLink class="mb-4">LUPA KATA KUNCI?</TextLink>
          </nuxt-link>
          <Heading class="mb-2">Belum punya akun?</Heading>
          <nuxt-link to="/register">
            <TextLink class="mb-4">DAFTAR</TextLink>
          </nuxt-link>
        </div>
      </div>
    </div>
    <b-modal
      ref="modal-status"
      size="sm"
      class="login__modal"
      title="Status"
      hide-header
      hide-footer
    >
      <div class="d-flex flex-column align-items-center justify-content-center">
        <img
          style="width: 124px"
          v-if="isSuccess"
          src="~/assets/success.png"
          alt=""
        />
        <img style="width: 124px" v-else src="~/assets/failed.png" alt="" />
        <Heading class="mt-2">
          {{ isSuccess ? 'Berhasil Masuk!' : 'Gagal Masuk!' }}
        </Heading>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import Field from '@/components/Fields/FieldInput'
import Button from '@/components/Buttons/RightIconBtn'
import TextLink from '@/components/TextLink'
import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    Heading,
    Field,
    Button,
    TextLink,
  },
  layout: 'Auth',
  data() {
    return {
      isSuccess: true,
      isLoading: false,
      form: {
        email: '',
        password: '',
      },
    }
  },
  validations: {
    form: {
      email: {
        email,
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch()
      if (!this.$v.form.$invalid) {
        this.isLoading = true
        try {
          const resp = await this.$axios.$post('/api/auth/login', this.form)
          console.log(resp)
          this.isLoading = false
          this.isSuccess = true
          this.$refs['modal-status'].show()
        } catch (error) {
          this.isLoading = false
          this.isSuccess = false
          this.$refs['modal-status'].show()
        }
      } else {
        this.$toast.error('Ada yang salah dalam pengisian form').goAway(3000)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.login
  &__container
    &__mail
    .mail
      &__heading
        margin-bottom 56px
</style>

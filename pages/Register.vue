<template>
  <div>
    <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>
    <div v-else class="register">
      <div class="register__container container">
        <div class="register__container__mail mail">
          <Heading class="mail__heading">Daftar dengan email</Heading>
          <form class="mail__form" @submit.stop.prevent="onSubmit">
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
                  type="text"
                  placeholder="NAMA"
                  :value="$v.form.name.$model"
                  :error="$v.form.name.$dirty && $v.form.name.$error"
                  @model="$v.form.name.$model = $event"
                />
                <Field
                  class="col-12 col-md-6 mb-1"
                  type="password"
                  placeholder="PASSWORD"
                  :value="$v.form.password.$model"
                  :error="$v.form.password.$dirty && $v.form.password.$error"
                  @model="$v.form.password.$model = $event"
                />
                <Field
                  class="col-12 col-md-6 mb-1"
                  type="password"
                  placeholder="KONFIRMASI PASSWORD"
                  :value="$v.form.confirm_password.$model"
                  :error="
                    $v.form.confirm_password.$dirty &&
                    $v.form.confirm_password.$error
                  "
                  @model="$v.form.confirm_password.$model = $event"
                />
                <Gender
                  class="col-12 col-md-6 mb-1"
                  @model="$v.form.gender.$model = $event"
                />
                <Button
                  type="submit"
                  align="left"
                  class="form__submit w-full col-12 col-md-6 h-16 mb-1"
                  >DAFTAR</Button
                >
              </div>
            </div>
          </form>
          <Heading class="mb-2 mt-4">Sudah memiliki akun?</Heading>
          <nuxt-link to="/login">
            <TextLink class="mb-4">MASUK</TextLink>
          </nuxt-link>
        </div>
      </div>
    </div>
    <b-modal
      ref="modal-status"
      size="sm"
      class="register__modal"
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
          {{ isSuccess ? 'Berhasil Daftar!' : 'Gagal Daftar!' }}
        </Heading>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Heading from '@/components/Headings/Heading'
import Field from '@/components/Fields/FieldInput'
import Gender from '@/components/Fields/FieldGender'
import Button from '@/components/Buttons/RightIconBtn'
import TextLink from '@/components/TextLink'
import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    Heading,
    Field,
    Button,
    TextLink,
    Gender,
  },
  layout: 'Auth',
  data() {
    return {
      isSuccess: true,
      isLoading: false,
      form: {
        email: '',
        name: '',
        password: '',
        confirm_password: '',
        gender: 'p',
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      name: {
        required,
      },
      password: {
        required,
      },
      confirm_password: {
        required,
      },
      gender: {
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
          const resp = await this.$axios.$post('/api/auth/register', this.form)
          console.log(resp)
          this.isSuccess = true
          this.$refs['modal-status'].show()
          setTimeout(() => {
            this.$router.push('/login')
            this.isLoading = false
          }, 3000)
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
.register
  &__container
    &__mail
    .mail
      &__heading
        margin-bottom 56px
</style>

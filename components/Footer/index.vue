<template>
  <footer class="footer pb-4">
    <b-container>
      <b-row>
        <b-col md="3" sm="12">
          <img class="footer__logo mt-2" src="~/assets/Logo.png" alt="" />
        </b-col>
        <b-col md="9" sm="12">
          <b-container>
            <b-row>
              <b-col md="3" sm="12">
                <div class="footer__list">
                  <div class="footer__list__title">Layanan</div>
                  <div class="footer__list__item"><a href="/">Bantuan</a></div>
                  <div class="footer__list__item">
                    <a href="/">Konfirmasi Transfer</a>
                  </div>
                  <div class="footer__list__item">
                    <a href="/">Lacak Pengiriman</a>
                  </div>
                  <div class="footer__list__item">
                    <a href="/">Status Pengiriman</a>
                  </div>
                  <div class="footer__list__item">
                    <a href="/">Hubungi Kami</a>
                  </div>
                </div>
              </b-col>
              <b-col md="3" sm="12">
                <div class="footer__list">
                  <div class="footer__list__title">Tentang Kami</div>
                  <div class="footer__list__item"><a href="/">About Us</a></div>
                  <div class="footer__list__item">
                    <a href="/">Karir</a>
                  </div>
                  <div class="footer__list__item">
                    <a href="/">Persyaratan & Ketentuan</a>
                  </div>
                  <div class="footer__list__item">
                    <a href="/">Kebijakan Privasi</a>
                  </div>
                </div>
              </b-col>
              <b-col md="6" sm="12">
                <div class="footer__list">
                  <div class="footer__list__title">Alamat</div>
                  <div class="footer__list__address">
                    Jl. Telekomunikasi Jl. Terusan Buah Batu, Sukapura, Kec.
                    Dayeuhkolot, Kota Bandung, Jawa Barat 40257 <br />
                    Call: 0821-3115-1080 <br />
                    Email: support@vmcafe.id
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row class="align-items-md-end">
              <b-col md="6 mb-4">
                <div class="footer__list">
                  <div class="footer__list__title">Temukan Kami</div>
                  <div class="footer__list__media">
                    <a
                      href="/"
                      target="blank"
                      class="footer__list__media__item"
                    >
                      <img src="~/assets/icons/ic_fb.svg" alt="" />
                    </a>
                    <a
                      href="/"
                      target="blank"
                      class="footer__list__media__item"
                    >
                      <img src="~/assets/icons/ic_twt.svg" alt="" />
                    </a>
                    <a
                      href="/"
                      target="blank"
                      class="footer__list__media__item"
                    >
                      <img src="~/assets/icons/ic_ig.svg" alt="" />
                    </a>
                    <a
                      href="/"
                      target="blank"
                      class="footer__list__media__item"
                    >
                      <img src="~/assets/icons/ic_linkedin.svg" alt="" />
                    </a>
                  </div>
                </div>
              </b-col>
              <b-col>
                <div class="footer__list mt-3">
                  <div class="footer__list__title">Ingin Dapat Info Promo?</div>
                  <div class="footer__list__address">
                    Ingin mendapatkan informasi terbaru mengenai VMC, promo,
                    produk baru dan artikel? Cukup berlangganan newsletter kami
                    dengan email kamu.
                  </div>
                  <div class="footer__subs mt-4">
                    <b-input-group>
                      <b-form-input
                        type="email"
                        placeholder="someone@example.com"
                      ></b-form-input>
                      <b-input-group-append>
                        <b-button
                          type="button"
                          style="background: #2d4957"
                          class="px-4 font-weight-bold"
                          >Submit</b-button
                        >
                      </b-input-group-append>
                    </b-input-group>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '../../styles/imports';
.footer
  background skinPrimary
  &__logo
    width 100%

  &__list
    margin-top 54px

    &__title
      font-size 18px
      color #22262A
      font-weight 600
      font-family 'Proxima Nova', futura-pt
      margin-bottom 5px

    &__item
      font-size 18px
      opacity 0.67
      color #000000
      margin-bottom 5px

    &__address
      font-size 18px
      opacity 0.67
      color #000000
      margin-bottom 5px
      line-height 20px

    &__media
      margin-top 12px

      &__item
        margin 0 4px
        img
          width 18px
          height 18px
</style>

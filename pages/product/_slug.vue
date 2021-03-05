<template>
  <b-container class="detail">
    <b-row>
      <b-col md="5" sm="12">
        <b-img
          class="detail__img mx-auto mx-md-0"
          src="https://maizo.com.au/imgs/product/m0258-sempio-gim-jaban-seasoned-seaweed-snack-50g.jpg"
          alt="Gambar"
        />
        <div class="detail__imgs mx-auto mx-md-0">
          <b-row>
            <b-col v-for="item in [1, 2, 3, 4]" :key="item" cols="3">
              <b-img
                thumbnail
                class="detail__imgs__item"
                src="https://maizo.com.au/imgs/product/m0258-sempio-gim-jaban-seasoned-seaweed-snack-50g.jpg"
                alt="gambar"
              />
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="7" sm="12" class="pt-5">
        <h1 class="detail__title text-center h1 font-weight-medium mb-4">
          Fruity Nastar
        </h1>
        <Variant class="mb-5" :items="variants" :selected="selectedVariant" />
        <b-row>
          <b-col md="9" sm="12">
            <div
              class="detail__description border-top border-bottom border-dark p-2 mb-3"
            >
              Kue nastar manis nan lembut berbentuk buah dengan isian selai
              nanas yang menyegarkan.
            </div>
          </b-col>
          <b-col md="3" sm="12">
            <div class="nettoOrStock p-3 mb-3">
              <div class="nettoOrStock__label mb-1 pb-1">Netto</div>
              <div class="nettoOrStock__value font-italic font-weight-bold">
                100 g
              </div>
            </div>
            <div class="nettoOrStock p-3">
              <div class="nettoOrStock__label mb-1 pb-1">Stok</div>
              <div class="nettoOrStock__value font-italic font-weight-bold">
                100
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="detail__price text-center font-weight-bold mb-4">
          Rp 20.000
        </div>
        <b-row>
          <b-col md="3" sm="12">
            <Counter class="mb-2" />
          </b-col>
          <b-col md="6" sm="6">
            <b-button type="button" class="detail__button w-100 mb-2"
              >BELI LANGSUNG</b-button
            >
          </b-col>
          <b-col md="3" sm="6">
            <div class="d-flex flex-row align-items">
              <b-button
                style="width: 72px"
                type="button"
                class="detail__button__outline"
              >
                <img src="~/assets/icons/ic_cart.svg" alt="" />
              </b-button>
              <b-button type="button" class="detail__button__outline ml-2">
                <img src="~/assets/icons/ic_heart.svg" alt="" />
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <div class="detail__s2 mt-5">
      <div class="detail__s2__label mb-3">RINCIAN</div>
      <div class="detail__s2__desc p-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
        illo rem obcaecati exercitationem pariatur commodi quam vero aspernatur
        similique illum, cum fugiat voluptates, blanditiis quaerat modi! Fugiat
        ad quo neque. lorem
      </div>
    </div>

    <div class="detail__slide mb-4">
      <div class="detail__slide__label mt-5 mb-2">Produk Serupa</div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in [1, 2, 3, 4, 5, 6, 7]" :key="item">
          <ProductCard name="Sumpia" price="120000" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="detail__slide mb-4">
      <div class="detail__slide__label mt-5 mb-2">Barangkali suka</div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in [1, 2, 3, 4, 5, 6, 7]" :key="item">
          <ProductCard name="Sumpia" price="120000" />
        </swiper-slide>
      </swiper>
    </div>
  </b-container>
</template>

<script>
import Variant from '@/components/Variant'
import Counter from '@/components/CounterClick'
import ProductCard from '@/components/Cards/ProductCard'

export default {
  components: {
    Variant,
    ProductCard,
    Counter,
  },
  layout: 'Main',
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        freeMode: true,
        breakpoints: {
          1024: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 2,
          },
        },
      },
      variants: [
        {
          label: 'Small',
          value: 1,
        },
        {
          label: 'Medium',
          value: 2,
        },
        {
          label: 'Large',
          value: 3,
        },
      ],
      selectedVariant: 1,
    }
  },
}
</script>

<style lang="stylus" scoped>
.detail
  &__img
    max-width 300px

  &__imgs
    max-width 300px
    &__item
      width 80px
      height 60px
      object-fit cover
      cursor pointer
      opacity 0.5
      transition all 0.25s

      &:hover
        opacity 1

  &__title
    letter-spacing -0.37px
    font-weight 500

  &__description
    font-size 18px
    line-height 40px
    letter-spacing 4px
    text-transform uppercase
    color #2D4957

  &__price
    font-size 35px
    line-height 52px
    letter-spacing 7px
    color #2D4957

  &__button
    height 60px
    background #2D4957
    border-radius 10px
    letter-spacing 3.5px
    color #FFFFFF
    font-size 14px

    &__outline
      height 60px
      min-width 60px
      background #FFF
      border 1px solid #2D4957
      border-radius 10px
      display flex
      align-items center
      justify-content center

  &__s2
    &__label
      letter-spacing 7.5px
      color #000000
      opacity 0.75
      font-size 30px

    &__desc
      font-size 19px
      line-height 40px
      letter-spacing 4.75px
      color #000000
      border 1px solid #000

  &__slide
    &__label
      font-weight 500
      letter-spacing 4.5px
      text-transform uppercase
      font-size 18px

.nettoOrStock
  background #FCF5ED
  border-radius 20px 0 0 20px
  text-align center

  &__label
    font-size 16px
    font-weight 500
    letter-spacing 4px
    color #2D4957
    border-bottom 1px solid #2D4957
    text-transform uppercase

  &__value
    font-size 19px
    font-weight 500
    letter-spacing 4.75px
    color #2D4957
</style>

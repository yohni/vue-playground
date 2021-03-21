<template>
  <div class="home">
    <b-carousel
      id="carousel-banner"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="item in [1, 2, 3, 4]" :key="item">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="require(`~/assets/banner${item}.jpg`)"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <b-container>
      <TabFilter
        class="my-4"
        :options="filters"
        :selected-option="selectedFilter"
        @click="setFilter"
      />
      <div class="product-list">
        <client-only>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in dataSource" :key="item">
              <ProductCard :name="item.name" :price="item.price" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </client-only>
      </div>
      <!-- <div class="article-top">
        <client-only>
          <swiper class="swiper" :options="swiperOption2">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
      </div> -->
      <div class="article mb-5">
        <div class="article__heading py-4 pl-2">ARTIKEL TERBARU</div>
        <b-row class="article__content px-5">
          <b-col v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" sm="12" md="6">
            <ArticleCard />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import TabFilter from '@/components/TabFilter'
import ProductCard from '@/components/Cards/ProductCard'
import ArticleCard from '@/components/Cards/ArticleCard'

export default {
  components: {
    TabFilter,
    ProductCard,
    Swiper,
    SwiperSlide,
    ArticleCard,
  },
  layout: 'Main',
  data() {
    return {
      dataSource: null,
      activeCat: null,
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
          },
        },
      },
      swiperOption2: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      sliding: null,
      slide: 0,
      filters: [
        {
          id: 0,
          label: 'all',
          value: 0,
        },
        {
          id: 1,
          label: 'Salt',
          value: 1,
        },
        {
          id: 2,
          label: 'Sweet',
          value: 2,
        },
        {
          id: 3,
          label: 'Bundle',
          value: 3,
        },
      ],
      selectedFilter: 0,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const resp = await this.$axios.$get(`/api/product`)
        this.dataSource = resp.data
      } catch (error) {
        console.log(error)
      }
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    setFilter($event) {
      this.selectedFilter = $event
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../styles/imports'
.product-list
  .swiper
    height: 644px;
    margin-left: 124px;
    margin-right: 124px;
    @media (max-width: 1023px)
      margin-left: auto;
      margin-right: auto;
      height: 300px;
    .swiper-slide
      height: 288px;
.article
  background url('~/assets/bg.svg') no-repeat
  background-size contain
  @media (max-width 1024px)
      background skinPrimary

  &__heading
    color #fff
    font-weight 700
    background url('~/assets/bg2.svg') no-repeat

    @media (max-width 1024px)
      background #2D4957
      max-width 200px
      border-radius 0 30px 30px 0

  &__content
    padding-top 60px
    padding-bottom 100px
</style>

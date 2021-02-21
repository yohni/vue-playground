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
    <TabFilter
      class="my-4"
      :options="filters"
      :selectedOption="selectedFilter"
      @click="setFilter"
    />
  </div>
</template>

<script>
import TabFilter from '@/components/TabFilter'
export default {
  layout: 'Main',
  components: {
    TabFilter,
  },
  data() {
    return {
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
  methods: {
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

<style></style>

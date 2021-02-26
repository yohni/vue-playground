<template>
  <div class="filter w-100 container d-flex justify-content-center">
    <div class="border-bottom border-secondary pb-2">
      <b-badge
        v-for="option in options"
        :key="option.id"
        class="mx-2"
        :variant="selectedOption === option.value ? 'info' : 'transparent'"
        @click="$emit('click', option.value)"
        style="font-size: 14px; cursor: pointer"
      >
        {{ option.label }}
      </b-badge>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'selectedOption'],
}
</script>

<style></style>

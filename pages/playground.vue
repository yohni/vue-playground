<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <b-badge
        v-for="item in [1, 2, 3]"
        :key="item"
        class="mx-2"
        :variant="state === item ? 'success' : 'secondary'"
        @click="state = item"
        >Kondisi {{ item }}</b-badge
      >
      <!-- <b-badge
        class="mx-2"
        :variant="state === 2 ? 'success' : 'secondary'"
        @click="state = 2"
        >Kondisi 2</b-badge
      >
      <b-badge
        class="mx-2"
        :variant="state === 3 ? 'success' : 'secondary'"
        @click="state = 3"
        >Kondisi 3</b-badge
      > -->
    </div>
    <div class="panel">
      <div v-if="state === 1">
        <form>
          <button type="button" @click="isEdit = !isEdit">
            {{ isEdit ? 'Simpan' : 'Ubah' }}
          </button>
          <input type="text" placeholder="name" :disabled="!isEdit" />
        </form>
      </div>
      <div v-else-if="state === 2">Isi 2</div>
      <div v-else>Isi 3</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 1,
      isEdit: false,
    }
  },
}
</script>

<style></style>

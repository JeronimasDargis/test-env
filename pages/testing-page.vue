<template>
  <section class="mx-20 mt-20">
    <h2>Testing page</h2>
    <div class="m-10">
      <div
        v-for="(item, id) in 4"
        @click="expanded = id"
        data-test="test-item"
        :key="id"
        class="space-y-3 border border-grey cursor-pointer"
      >
        <h2>Expandable item {{ id }}</h2>
        <div v-if="expanded === id" data-test="test-item-title">
          content inside
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    expanded: null,
  }),
}
</script>

<style></style>

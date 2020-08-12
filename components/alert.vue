<template>
  <div>
    <div
      class="alert alert-danger"
      role="alert"
      v-for="massage in data"
      :key="massage"
    >
      {{ massage || "" }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style></style>

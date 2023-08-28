<template>
  <button class="h-[80px] w-auto mb-1 bg-amber-50 rounded-2xl border-amber-50 text-black">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'SideButton',
  props: {
    label: String,
    icon: String,
  },
};
</script>

<style scoped></style>

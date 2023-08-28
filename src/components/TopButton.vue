<template>
  <button class="top-btn group">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="3.2em"
      height="3.2em"
      class="top-btn-icon"
    >
      <title>border-all</title>
      <path :d="icon" />
    </svg>
    <span class="top-btn-txt">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'TopButton',
  props: {
    label: String,
    icon: String,
    isActive: Boolean,
  },
};
</script>

<style scoped>
.top-btn {
  @apply flex flex-col items-center justify-center mx-3 duration-300;
}
.top-btn-txt {
  @apply mx-2 font-bold text-lg text-amber-50 hidden group-active:block group-hover:block;
}

.top-btn-icon {
  @apply group-hover:fill-[#ddae62] fill-[#9b896b] duration-300;
}
.active {
    @apply fill-[#ddae62] block
}
</style>

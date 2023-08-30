<template>
  <button :class="`side-btn group ${isActive ? 'active':''}`" @click="setActive">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2.5em" height="2.5em"
    class="side-btn-icon"><title>border-all</title><path :d="icon" /></svg>
    <span :class="`side-btn-txt  ${isActive ? 'active':''}`">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'SideButton',
  props: {
    label: String,
    icon: String,
    isActive: Boolean,
  },
  data: () => ({}),
  methods: {
    setActive() {
      this.$emit('change-side', this.label);
    },
  },
};
</script>

<style scoped>
.side-btn {
  @apply h-[80px] w-auto mb-1 bg-amber-50 rounded-2xl bg-opacity-0 mb-2
  border-2 border-solid border-amber-50 border-opacity-50 hover:border-opacity-100
text-black flex flex-row items-center justify-center;
  @apply hover:bg-opacity-100 active:bg-opacity-100 duration-300;
}
.side-btn-txt {
  @apply mx-2 font-bold text-lg text-amber-950 hidden group-hover:block group-active:block;
}

.side-btn.active {
  @apply bg-opacity-100 border-opacity-100;
}
.side-btn-txt.active {
  @apply block;
}

.side-btn-icon {
  @apply fill-[#ddae62];
}
</style>

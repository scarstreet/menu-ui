<template>
  <div class="bg-black bg-opacity-30 rounded-2xl w-[100%]
  h-[4.63vh] mb-[2.77vh] flex flex-row
  items-center px-[0.5208vw] justify-between">
  <div :class="canCraft ? '': 'opacity-0'">
    <div class="command">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="fill-[#ddae62] bg-amber-50 p-[.15vw] rounded-lg w-[1.5vw]"><title>keyboard-space</title><path d="M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z" /></svg>
      <div v-if="canCraft" class="text-sm text-amber-50 hover:text-[#ddae62]">Craft</div>
    </div>
  </div>
  <div>
  <div :class="canCraft ? '': 'opacity-0'">
    <div class="command">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="fill-[#ddae62] bg-amber-50 p-[.1vw] rounded-lg w-[1.5vw]"><title>keyboard-space</title><path d="M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z" /></svg>
      <div :class="canCraft ? '': 'opacity-0'"
      class="text-sm text-[#ddae62]">Hold</div>
      <div :class="canCraft ? '': 'opacity-0'"
      class="text-sm text-amber-50 whitespace-nowrap">Craft More</div>
      </div>
    </div>
  </div>
  <div class="command">
    <div v-if="isShowing" class="bg-amber-50 w-[1.5vw] aspect-square p-[.15vw] rounded-lg flex
    text-sm justify-center items-center text-[#ddae62]">F</div>
    <div v-if="isShowing" class="text-sm text-amber-50">Pin</div>
  </div>
  <div class="command">
    <div v-if="isShowing" class="bg-amber-50 w-[1.5vw]
    aspect-square p-[.15vw] rounded-lg text-sm flex
    justify-center items-center text-[#ddae62]">esc</div>
    <div v-if="isShowing" class="text-sm text-amber-50">Back</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CtrlBoard',
  props: { select: Array, item: Object, canCraft: Boolean },
  computed: {
    isShowing() {
      return this.select[0] === 'craft' && this.item.name !== 'na';
    },
  },
};
</script>

<style scoped>
.command {
  @apply flex flex-row items-center space-x-2 shrink;
}
</style>

<template>
  <div class="bg-black bg-opacity-30 rounded-2xl w-[100%] h-[4.63vh] mb-[2.77vh] flex flex-row
  items-center px-[0.5208vw] space-x-3">
  <div v-if="canCraft">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="fill-[#ddae62] bg-amber-50 p-[.208vw] rounded-lg w-[1.67vw]"><title>keyboard-space</title><path d="M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z" /></svg>
  </div>
  <div v-if="canCraft" class="text-amber-50 hover:text-[#ddae62]">Craft</div>
  <div v-if="canCraft" class="-scale-x-100">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="fill-[#ddae62] bg-amber-50 p-[.208vw] rounded-lg w-[1.67vw]"><title>keyboard-space</title><path d="M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z" /></svg>
  </div>
  <div v-if="canCraft" class="text-[#ddae62]">Hold</div>
  <div v-if="canCraft" class="text-amber-50">Craft More</div>
  <div v-if="isShowing" class="bg-amber-50 w-[1.67vw] aspect-square p-[.208vw] rounded-lg flex
  justify-center items-center text-[#ddae62]">F</div>
  <div v-if="isShowing" class="text-amber-50">Pin</div>
  <div v-if="isShowing" class="bg-amber-50 w-[1.67vw]
  aspect-square p-[.208vw] rounded-lg text-base flex
  justify-center items-center text-[#ddae62]">esc</div>
  <div v-if="isShowing" class="text-amber-50">Back</div>
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

<style>

</style>

<template>
  <div class="w-[100%] grow pl-[40px] pr-[50px] pt-[10px] pb-[80px] h-[100%]">
    <div class="w-[100%] bg-white bg-opacity-10 rounded-3xl p-[15px] flex flex-col">
      <div class="text-amber-50 flex-row flex items-end pb-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" class="fill-[#ddae62]">
          <title>border-all</title>
          <path
            d="M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,
            2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,
            4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,20H6V16H8V18H9V16H18V20M18,
            15H6V9A2,2 0 0,1 8,7H16A2,2 0 0,1 18,9V15Z"
          />
        </svg>
        <span class="ml-1">
          Backpack
        </span>
      </div>
      <div class="the-grid">
        <div v-for="(i,idx) in example" :key="'inventory'+idx" class="grid-object"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackPack',
  props: { Items: Array },
  data: () => ({
    example: [
      1, 2, 3, 4, 5, 5, 56, 2, 6, 7, 3, 3, 1, 2, 3, 4, 5, 5, 56, 2,
      6, 7, 3, 3, 1, 2, 3, 4, 5, 5, 56, 2, 6, 7, 3, 3, 1, 2, 3, 4,
    ],
  }),
};
</script>

<style scoped>
.the-grid {
    @apply grid grid-flow-row-dense grid-cols-10 gap-2 overflow-y-scroll pr-[20px];
}
.grid-object {
    @apply bg-white col-span-1 aspect-square rounded-2xl bg-opacity-10;
}
.grid-object.item {
  @apply bg-opacity-30;
}

.grid-object.selected {
  @apply border-4 border-solid border-white border-opacity-50;
}
.grid-object.locked {
  @apply rounded-full scale-50;
}
</style>

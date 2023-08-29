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
        <div v-for="(i,idx) in inventory" :key="'inventory'+idx" class="grid-object flex
        items-center justify-center">
        <img :src="i.image" alt="" class="w-[50px] h-[50px] object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackPack',
  props: { Items: Array },
  computed: {},
  data: () => ({
    space: 40,
    locked: 10,
    inventory: [
      {
        // eslint-disable-next-line global-require
        image: require('@/assets/2.png'), name: 'Golden Apple', amount: 28, desc: 'A radiant apple imbued with magical energy.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/3.png'), name: 'Peas', amount: 23, desc: 'A handful of plump and nutritious peas.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/6.png'), name: 'Wood', amount: 500, desc: 'Timber ready for crafting and building.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/7.png'), name: 'Egg', amount: 34, desc: 'A delicate, fresh chicken egg.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/8.png'), name: 'Shovel', amount: 1, desc: 'Sturdy tool for digging and landscaping.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/10.png'), name: 'Leather Boots', amount: 1, desc: 'Comfortable boots made from supple leather.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/12.png'), name: 'Beet', amount: 6, desc: 'A hearty and earthy root vegetable.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/13.png'), name: 'Garden Trimmer', amount: 1, desc: 'Precision tool for pruning plants.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/15.png'), name: 'Sickle', amount: 1, desc: 'Curved blade for efficient crop harvesting.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/16.png'), name: 'Carrot', amount: 12, desc: 'A crisp and vibrant orange vegetable.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/17.png'), name: 'Tomato', amount: 4, desc: 'Juicy and ripe red tomato.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/18.png'), name: 'Cheese', amount: 99, desc: 'A savory wedge of fine cheese.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/20.png'), name: 'Pitch Fork', amount: 1, desc: 'Multi-pronged tool for lifting hay and soil.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/22.png'), name: 'Pumpkin', amount: 10, desc: 'Large, ripe pumpkin with a festive aura.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/23.png'), name: 'Wheat', amount: 24, desc: 'Stalks of golden wheat, essential for baking.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/24.png'), name: 'Strawberry', amount: 1, desc: 'Plump and sweet red strawberry.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/25.png'), name: 'Milk', amount: 16, desc: "Fresh, creamy cow's milk in a wooden bucket.",
      },
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

<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="backpack-contents">
    <div class="backpack-content-wrapper">
      <div class="backpack-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="2em"
          height="2em"
          class="fill-[#ddae62]"
        >
          <title>border-all</title>
          <path
            d="M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,
            2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,
            4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,20H6V16H8V18H9V16H18V20M18,
            15H6V9A2,2 0 0,1 8,7H16A2,2 0 0,1 18,9V15Z"
          />
        </svg>
        <span class="ml-1"> Backpack </span>
      </div>
      <div class="the-grid pl-[1.04vw]">
        <button
          v-for="(i, idx) in cInventory"
          :key="'inventory' + idx"
          :class="`grid-object
          ${i.name==='na' || i.name==='locked'?'':'item'}
          ${i.name === 'locked'? 'locked':''}
          ${i.selected ? 'selected' : ''}`"
          @click="changeSelect(['backpack',idx])"
        >
          <img v-if="i.name !== 'na' && i.name !== 'locked'"
          :src="i.image" alt="" class="w-[2.6vw] h-[4.63vh] object-contain" />
          <div v-if="i.amount > 1" :class="`object-amount
          ${i.selected ? 'translate-x-[.364vw]' : ''}`">
            {{ i.amount }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackPack',
  props: { inventory: Array, select: Array },
  methods: {
    changeSelect(i) {
      this.$emit('change-select', i);
    },
    isMulti(item) {
      if (item.amount > 1) {
        return 'multi';
      } return '';
    },
    isSelected(idx) {
      return idx === this.selected ? 'selected' : '';
    },
  },
  computed: {
    cInventory() {
      let inv = this.inventory;
      inv = inv.filter((x) => x.amount > 0);
      let i = inv.length;
      for (i; i < this.space - this.locked; i += 1) {
        inv.push({
          // eslint-disable-next-line global-require
          name: 'na', image: require('@/assets/w1.png'), req: [], desc: '', selected: false, amount: 0,
        });
      }
      for (i; i < this.space; i += 1) {
        inv.push({
          // eslint-disable-next-line global-require
          name: 'locked', image: require('@/assets/w1.png'), req: [], desc: '', selected: false, amount: 0,
        });
      }
      for (let j = 0; j < this.space; j += 1) {
        inv[j].selected = j === this.select[1] && this.select[0] === 'backpack';
        if (inv[j].selected) {
          this.$emit('set-backpack', inv[j]);
        }
      }
      return inv;
    },
  },
  data: () => ({
    space: 40,
    locked: 10,
    selected: -1,
  }),
};
</script>

<style scoped>
.the-grid {
  @apply grid grid-flow-row-dense grid-cols-10 grid-rows-4 gap-2 overflow-y-hidden pr-[1.04vw];
}
.grid-object {
  @apply bg-white col-span-1 py-[1em] rounded-2xl
  bg-opacity-10 flex flex-col items-center justify-center;
}
.grid-object.item {
  @apply bg-opacity-50;
}

.grid-object.selected {
  @apply border-8 border-solid border-white;
}
.grid-object.locked {
  @apply rounded-full aspect-square scale-[.20];
}
.object-amount {
  @apply bg-[#eaceaf] rounded-md
    self-end w-[2vw] text-center text-sm absolute
    translate-y-[2.685vh];
}
.backpack-contents {
  @apply w-[100%] grow pl-[2vw] pr-[4.63vh] pt-[.926vh] pb-[7.4vh] h-[100%];
}
.backpack-content-wrapper {
  @apply w-[100%] h-[37.59vh] overflow-hidden bg-white bg-opacity-10
    rounded-3xl p-[0.781vw] flex flex-col;
}
.backpack-title {
  @apply text-amber-50 pl-[1.04vw] flex-row flex items-end pb-3;
}
</style>

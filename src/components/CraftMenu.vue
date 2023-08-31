<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable global-require -->
<!-- eslint-disable import/no-dynamic-require -->
<!-- eslint-disable global-require -->
<template>
  <div class="w-max-[50vw] h-[37.5925vh] overflow-y-scroll overflow-x-hidden grid-cont"
  ref="craftGrid" id="craftGrid">
    <div class=" the-grid h-[53.7963vh] text-center">
      <button v-for="(i, idx) in cCrafts" :key="'craftable' + idx" :class="`grid-object group
      self-center text-center
      ${i.selected ? 'selected ' : ' '}`"
      @click="changeSelect(['craft',idx])"
      :ref="'craftChild'+idx">
      <div :class=" `bg-white rounded-3xl bg-opacity-10 w-[90%] h-[90%] ml-[5%]
      ${i.selected ? 'inner-selected ' : ' '}
      ${isOk(i) ?' craftable': i.name !== 'na' ? ' known ' : ' '}`">
        <div v-if="i.name !== 'na'"
          class="select-none flex flex-col absolute w-[5.7291vw] justify-center items-center z-20
          translate-y-[8.333vh] opacity-0 duration-200 group-hover:opacity-100"
          style="pointer-events: none;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.04vw" viewBox="0 0 24 24" class="fill-amber-50 translate-y-[0.463vh]"><title>triangle</title><path d="M1,21H23L12,2" /></svg>
            <div class="bg-amber-50 z-30 rounded-xl
            py-[.74vh] px-[2em] flex flex-col items-center
            justify-center text-amber-950 text-sm"
            style="white-space: nowrap;">
              {{ i.name }}
              <div class="flex flex-row space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.04vw" class="fill-[#ddae62]">
                  <title>bag-personal-outline</title>
                  <path d="M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,
                  4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,
                  2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,
                  4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,20H6V16H8V18H9V16H18V20M18,
                  15H6V9A2,2 0 0,1 8,7H16A2,2 0 0,1 18,9V15Z" />
                </svg>
                <div class="text-amber-950">{{ i.have }}</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.04vw" class="fill-[#ddae62]">
                  <title>hammer-wrench</title>
                  <path d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78
                  15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86
                  19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11
                  9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12
                  3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06
                  7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61
                  3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21
                  8.55 19.45 10.1 17.5 10.1Z" />
                </svg>
                <div :class="i.canMake > 0 ? 'text-amber-950': 'text-red-500'">{{ i.canMake }}</div>
              </div>
            </div>
          </div>
          <div :class="`select-none flex justify-end w-[100%]
          rotate-45 -translate-y-[2.3148vh] translate-x-5
          ${i.pinned?'':'opacity-0'}`"
          style="pointer-events: none;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="2em"
              style="stroke: #ffffff; stroke-width: 2px; stroke-linejoin: round"
              class="fill-[#ddae62]"
            >
              <title>pin</title>
              <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
            </svg>
          </div>
          <div class="select-none w-[100%] flex justify-center items-center"
          style="pointer-events: none;">
            <img
            :src="i.image" :class="`w-[4.16vw] h-[7.4vh] object-contain
            -translate-y-[1.6em] scale-[.80]
            ${i.name === 'na' ? 'opacity-10' : ''}`" alt="" />
          </div>
          <div :class="`select-none flex justify-start
          items-end
          ${i.selected ? '-translate-y-[2.95em] -translate-x-[0.26041vw]'
          : '-translate-y-[2.65em]'}
          ${isOk(i) ?'':'opacity-0'}`"
          style="pointer-events: none;">
            <div class="bg-white rounded-lg p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.2em"
                class="fill-[#9b896b]"
              >
                <title>pin</title>
                <path
                  d="
                  M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78
                  15.3M17.5 10.1C17.11 10.1 16.69
                  10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78
                  10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95
                  2.41 10.83
                  2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38
                  9.63L14.2 7.75C14.06 7.42 14 7 14
                  6.63C14 4.66 15.56 3.11 17.5 3.11C18.09
                  3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58
                  5.03C20.86 5.5 21 6 21 6.63C21
                  8.55 19.45 10.1 17.5 10.1Z
                  "
                />
              </svg>
            </div>
          </div>
      </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CraftMenu',
  props: {
    backpack: Array, mode: String, select: Array, craftable: Array,
  },
  methods: {
    changeSelect(i) {
      if (i[1] === this.select[1]) {
        this.$emit('craft-pls');
      } else {
        this.$emit('change-select', i);
      }
    },
    isOk(item) {
      let isOk = true;
      if (item.name === 'na') return false;
      item.req.forEach((r) => {
        this.backpack.forEach((b) => {
          if (r.item === b.name && r.amount > b.amount) {
            isOk = false;
          }
        });
      });
      return isOk;
    },
    isSlc(idx) {
      if (idx === this.select[1] && this.select[0] === 'craft') {
        console.log(idx === this.select[1], this.select[0] === 'craft');
        console.log(`${idx} === ${this.select[1]}, ${this.select[0]} === ${'craft'}`);
      }
      return idx === this.select[1] && this.select[0] === 'craft';
    },
    amountCraftable(item) {
      let amount = 0;
      const { req } = item;
      const mat = [];
      req.forEach((x) => {
        const idx = this.backpack.findIndex((xx) => xx.name === x.item);
        mat.push({ name: x.item, amount: this.backpack[idx].amount });
      });
      while (mat.findIndex((x) => x.amount >= 0) !== -1) {
        req.forEach((x, idx) => {
          mat[idx].amount -= x.amount;
        });
        if (mat.findIndex((x) => x.amount < 0) !== -1) break;
        amount += 1;
      }
      return amount;
    },
  },
  computed: {
    cCrafts() {
      let arr = [];
      if (this.mode === 'All')arr = this.craftable;
      else {
        arr = this.craftable.filter((x) => x.categ === this.mode);
      }
      for (let i = arr.length; i < this.total; i += 1) {
        arr.push({
          // eslint-disable-next-line import/no-dynamic-require, global-require, prefer-template
          name: 'na', image: require('@/assets/w' + ((i % 4) + 1) + '.png'), pinned: false, req: [], desc: '', selected: false,
        });
      }
      let hasSelected = false;
      for (let i = 0; i < 40; i += 1) {
        const index = this.backpack.findIndex((x) => x.name === arr[i].name);
        if (index !== -1) {
          arr[i].have = this.backpack[index].amount;
        } else {
          arr[i].have = 0;
        }
        arr[i].canMake = this.amountCraftable(arr[i]);
        arr[i].selected = i === this.select[1] && this.select[0] === 'craft';
        if (arr[i].selected) {
          const parentContainer = document.getElementById('craftGrid');
          if (parentContainer) {
            parentContainer.scrollTop = (
              Math.floor(i / 8)) * 100; // Set the desired scroll position in pixels
          }
          hasSelected = true;
          this.$emit('set-craft', arr[i]);
        }
      }
      if (!hasSelected) {
        const parentContainer = document.getElementById('craftGrid');
        if (parentContainer) {
          parentContainer.scrollTop = 0; // Set the desired scroll position in pixels
        }
      }
      console.log(arr);
      return arr;
    },
  },
  created() {
    this.$on('toggle-pin', () => { console.log('AAAAAAAAAAAAAAAAAA'); });
  },
  data: () => ({
    total: 40,
    methods: {
      cover(url) {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        return require(url);
      },
    },
  }),
};
</script>

<style scoped>
.the-grid {
  @apply grid grid-flow-row-dense grid-cols-8 grid-rows-5 gap-1 pr-[1.04vw];
}
.grid-object {
  @apply col-span-1 h-[10vh] justify-center items-center;
  overflow: hidden;
}
.grid-object.selected {
  background: radial-gradient(circle, rgba(252,70,107,0) 90%, rgba(218,174,98,1) 90%);
}
.inner-selected {
  @apply border-[.3125vw] border-solid border-white border-opacity-100;
}
.craftable {
  @apply bg-opacity-80;
}
.known {
  @apply bg-opacity-50;
}

.grid-cont::-webkit-scrollbar {
  width: .74vh; /* Width of the scrollbar */
  background-color: transparent; /* Make the scrollbar itself transparent */
}

/* Style the scrollbar thumb (draggable part) */
.grid-cont::-webkit-scrollbar-track {
  background-color: transparent; /* Make the thumb transparent */
}

.grid-cont::-webkit-scrollbar-corner {
  background-color: transparent; /* Make the thumb transparent */
}

/* Style the scrollbar track to have a background color */
.grid-cont::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1); /* Color of the track */
  border-radius: .208vw;
}
</style>

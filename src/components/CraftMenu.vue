<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable global-require -->
<!-- eslint-disable import/no-dynamic-require -->
<!-- eslint-disable global-require -->
<template>
  <div class="w-[100%] h-[406px] overflow-y-scroll overflow-x-hidden grid-cont">
    <div class="the-grid h-[581px] overflow-y-hidden">
      <button v-for="(i, idx) in cCrafts" :key="'craftable' + idx" :class="`grid-object
      ${isOk(i) ?' craftable': i.name !== 'na' ? ' known ' : ' '}
      ${i.selected ? 'selected ' : ' '}`"
      @click="changeSelect(['craft',idx])">
        <div :class="`flex justify-end w-[100%] rotate-45 -translate-y-[25px] translate-x-5
        ${i.pinned?'':'opacity-0'}`">
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
        <div class="w-[100%] flex justify-center items-center">
          <img
          :src="i.image" :class="`w-[80px] h-[80px] object-contain -translate-y-[20px]
          ${i.name === 'na' ? 'opacity-10' : ''}`" alt="" />
        </div>
        <div :class="`flex justify-start items-end -translate-y-[35px] ${isOk(i) ?'':'opacity-0'}`">
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
                M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69
                10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78
                10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95
                2.41 10.83
                2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14
                6.63C14 4.66 15.56 3.11 17.5 3.11C18.09
                3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21
                8.55 19.45 10.1 17.5 10.1Z
                "
              />
            </svg>
          </div>
        </div>
        <div v-if="i.selected" class="fill-[#ddae62]">
          <div class="relative -translate-x-[4px]">
            <svg width="30" viewBox="0 0 400 400" class="-translate-y-[150px] translate-x-[100px]">
                <polygon points="0 0, 200 0, 200 200" />
            </svg>
            <svg width="30" viewBox="0 0 400 400"
            class="-translate-y-[195px] -translate-x-[5px] -rotate-90">
                <polygon points="0 0, 200 0, 200 200" />
            </svg>
          </div>
          <div class="relative rotate-180 -translate-y-[308px] translate-x-[4px]">
            <svg width="30" viewBox="0 0 400 400" class="-translate-y-[150px] translate-x-[100px]">
                <polygon points="0 0, 200 0, 200 200" />
            </svg>
            <svg width="30" viewBox="0 0 400 400"
            class="-translate-y-[195px] -translate-x-[5px] -rotate-90">
                <polygon points="0 0, 200 0, 200 200" />
            </svg>
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
      this.$emit('change-select', i);
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
      for (let i = 0; i < 40; i += 1) {
        arr[i].selected = i === this.select[1] && this.select[0] === 'craft';
        if (arr[i].selected) this.$emit('set-craft', arr[i]);
      }
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
  @apply grid grid-flow-row-dense grid-cols-8 gap-2 pr-[20px];
}
.grid-object {
  @apply bg-white col-span-1 aspect-square rounded-3xl bg-opacity-10 h-[110px];
}
.selected {
  @apply border-[6px] border-solid border-white border-opacity-100;
}
.craftable {
  @apply bg-opacity-80;
}
.known {
  @apply bg-opacity-50;
}

.grid-cont::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
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
  border-radius: 4px;
}
</style>

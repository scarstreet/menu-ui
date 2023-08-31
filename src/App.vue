<template>
  <div id="app" class="all">
    <div class="top-bar z-10">
      <div class="top-left">
        <StatusBars />
      </div>
      <div class="top-mid">
        <p
          class="w-[30px] rounded-lg
          bg-white text-center font-extrabold text-white bg-opacity-10 text-opacity-20"
        >
          Q
        </p>
        <TopButton v-for="i in cTopBtns" :key="i.label" :label="i.label"
        :icon="i.icon" :isActive="i.isActive" @change-top="changeTop" />
        <p
          class="w-[30px] rounded-lg
          bg-white text-center font-extrabold text-white bg-opacity-10 text-opacity-20"
        >
          E
        </p>
      </div>
      <div class="top-right">
        <div class="flex flex-col justify-center items-end" style="white-space: nowrap;">
          <div class="text-xl text-[#9b896b]">1st Year</div>
          <div class="text-xl text-amber-50">Spring 5</div>
        </div>
        <div class="flex flex-row items-center">
          <img src="@/assets/coin.png" alt="" class="object-contain w-[80px]">
          <div class="bg-white bg-opacity-20 py-[8px]
          pl-[30px] pr-[20px] rounded-xl h-[40px] text-amber-50
          -translate-x-[40px] justify-center"><span>840</span></div>
        </div>
      </div>
    </div>
    <div class="content z-10">
      <div class="side-bar">
        <SideButton v-for="btn in cSideBtns" :key="btn.label"
        :label="btn.label" :icon="btn.icon" :isActive="btn.isActive"  @change-side="changeSide" />
      </div>
      <div class="crafting">
        <div class="flex-1 h-[486px] pt-[50px] pl-[40px] pr-[20px]">
          <CraftMenu :backpack="inventory" :mode="activeSide" :select="selected"
          @set-craft="setCraftSelect"/>
        </div>
        <div class="flex-1">
          <BackPack :inventory="inventory" :select="selected" @set-backpack="setCraftSelect" />
        </div>
      </div>
      <div class="desc">
        <DescCard :item="currentItem" :inventory="inventory" :mode="selected[0]" />
        <CtrlBoard :select="selected" :item="currentItem" />
      </div>
    </div>
    <div class="background overflow-hidden"></div>
  </div>
</template>

<script>
import BackPack from './components/BackPack.vue';
import CraftMenu from './components/CraftMenu.vue';
import CtrlBoard from './components/CtrlBoard.vue';
import DescCard from './components/DescCard.vue';
import SideButton from './components/SideButton.vue';
import StatusBars from './components/StatusBars.vue';
import TopButton from './components/TopButton.vue';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SideButton, StatusBars, TopButton, CraftMenu, BackPack, DescCard, CtrlBoard,
  },
  methods: {
    changeSide(i) {
      this.activeSide = i;
    },
    changeTop(i) {
      console.log(i);
      this.activeTop = i;
    },
    navSide(axis, dir) {
      if (axis === 'y' && this.selected[1] + dir >= 0 && this.selected[1] + dir < this.sideBtns.length) {
        this.selected[1] += dir;
        this.activeSide = this.sideBtns[this.selected[1]].label;
      } if (axis === 'x') {
        this.selected = ['craft', -1];
      }
    },
    navTop(dir) {
      if (this.activeTopId + dir >= 0 && this.activeTopId + dir < this.topBtns.length) {
        this.activeTopId += dir;
        this.activeTop = this.topBtns[this.activeTopId].label;
      }
    },
    navCraft(axis, dir) {
      if (
        axis === 'x'
        && dir === -1
        && this.selected[1] % 8 === 0) {
        // When go left on the leftmost col, return to side
        this.selected = ['side', this.sideBtns.findIndex((x) => x.label === this.activeSide)];
      } else if (
        axis === 'x'
        && dir + this.selected[1] < 40
        && dir + this.selected[1] >= 0) {
        this.selected = ['craft', this.selected[1] + dir];
      } else if (
        axis === 'y'
        && dir * 8 + this.selected[1] < 40
        && dir * 8 + this.selected[1] >= 0) {
        this.selected = ['craft', this.selected[1] + dir * 8];
      } else if (
        axis === 'y'
        && dir === 1
        && this.selected[1] + 8 >= 40) {
        this.selected = ['backpack', -10];
      }
    },
    navBackpack(axis, dir) {
      if (
        axis === 'x'
        && dir === -1
        && this.selected[1] % 10 === 0) {
        // When go left on the leftmost col, return to side
        this.selected = ['side', this.sideBtns.findIndex((x) => x.label === this.activeSide)];
      } else if (
        axis === 'x'
        && dir + this.selected[1] < 40
        && dir + this.selected[1] >= 0) {
        this.selected = ['backpack', this.selected[1] + dir];
      } else if (
        axis === 'y'
        && dir === -1
        && this.selected[1] < 10) {
        this.selected = ['craft', 32];
      } else if (
        axis === 'y'
        && dir * 10 + this.selected[1] < 40
        && dir * 10 + this.selected[1] >= 0) {
        this.selected = ['backpack', this.selected[1] + dir * 10];
      }
    },
    setCraftSelect(item) {
      this.currentItem = item;
      if (item.name === 'na') {
        this.currentItem = this.selected[0] === 'craft' ? {
          // eslint-disable-next-line global-require
          name: 'na', image: require('@/assets/w1.png'), pinned: false, req: [], desc: '', selected: false,
        } : {
          // eslint-disable-next-line global-require
          name: 'na', image: require('@/assets/w1.png'), req: [], desc: '', selected: false, amount: 0,
        };
      }
    },
  },
  computed: {
    cSideBtns() {
      const arr = [];
      this.sideBtns.forEach((x) => {
        const o = x;
        o.isActive = this.activeSide === o.label;
        arr.push(o);
      });
      return arr;
    },
    cTopBtns() {
      const arr = [];
      this.topBtns.forEach((x) => {
        const o = x;
        o.isActive = this.activeTop === o.label;
        arr.push(o);
      });
      return arr;
    },
  },
  created() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 's') {
        if (this.selected[0] === 'side') {
          this.navSide('y', 1);
        }
        if (this.selected[0] === 'craft') {
          this.navCraft('y', 1);
        }
        if (this.selected[0] === 'backpack') {
          this.navBackpack('y', 1);
        }
      }
      if (event.key === 'ArrowUp' || event.key === 'w') {
        if (this.selected[0] === 'side') {
          this.navSide('y', -1);
        }
        if (this.selected[0] === 'craft') {
          this.navCraft('y', -1);
        }
        if (this.selected[0] === 'backpack') {
          this.navBackpack('y', -1);
        }
      }
      if (event.key === 'ArrowLeft' || event.key === 'a') {
        if (this.selected[0] === 'craft') {
          this.navCraft('x', -1);
        }
        if (this.selected[0] === 'backpack') {
          this.navBackpack('x', -1);
        }
      }
      if (event.key === 'ArrowRight' || event.key === 'd') {
        if (this.selected[0] === 'side') {
          this.navSide('x', 1);
        }
        if (this.selected[0] === 'craft') {
          this.navCraft('x', 1);
        }
        if (this.selected[0] === 'backpack') {
          this.navBackpack('x', 1);
        }
      }
      if (event.key === 'q') {
        this.navTop(-1);
      }
      if (event.key === 'e') {
        this.navTop(1);
      }
      if (event.key === 'f' && this.selected[0] === 'craft' && this.currentItem.name !== 'na') {
        this.$emit('toggle-pin');
      }
      console.log(this.selected);
    });
  },
  data: () => ({
    selected: ['side', 0],
    activeSide: 'All',
    activeTop: 'Crafting',
    activeTopId: 3,
    currentItem: {
      // eslint-disable-next-line global-require
      name: 'na', image: require('@/assets/w1.png'), pinned: false, req: [], desc: '', selected: false,
    },
    sideBtns: [
      {
        label: 'All',
        icon: 'M19,11H13V5H19M19,19H13V13H19M11,11H5V5H11M11,19H5V13H11M3,21H21V3H3V21Z',
      },
      {
        label: 'Crops',
        icon: 'M12 20H2V18H7.75C7 15.19 4.81 13 2 12.26C2.64 12.1 3.31 12 4 12C8.42 12 12 15.58 12 20M22 12.26C21.36 12.1 20.69 12 20 12C17.07 12 14.5 13.58 13.12 15.93C13.41 16.59 13.65 17.28 13.79 18C13.92 18.65 14 19.32 14 20H22V18H16.24C17 15.19 19.19 13 22 12.26M15.64 11C16.42 8.93 17.87 7.18 19.73 6C15.44 6.16 12 9.67 12 14V14C12.95 12.75 14.2 11.72 15.64 11M11.42 8.85C10.58 6.66 8.88 4.89 6.7 4C8.14 5.86 9 8.18 9 10.71C9 10.92 8.97 11.12 8.96 11.32C9.39 11.56 9.79 11.84 10.18 12.14C10.39 10.96 10.83 9.85 11.42 8.85Z',
      },
      {
        label: 'Plants',
        icon: 'M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z',
      },
      {
        label: 'Tonics',
        icon: 'M13 4H11L10 2H14L13 4M19 13V22H5V13C5 10.24 7.24 8 10 8V6H9V5H15V6H14V8C16.76 8 19 10.24 19 13M17 13C17 11.35 15.65 10 14 10H10C8.35 10 7 11.35 7 13V20H17V13M15 16H13V18H11V16H9V14H11V12H13V14H15V16Z',
      },
      {
        label: 'Furniture',
        icon: 'M19 9V7C19 5.35 17.65 4 16 4H8C6.35 4 5 5.35 5 7V9C3.35 9 2 10.35 2 12V17C2 18.65 3.35 20 5 20V22H7V20H17V22H19V20C20.65 20 22 18.65 22 17V12C22 10.35 20.65 9 19 9M7 7C7 6.45 7.45 6 8 6H16C16.55 6 17 6.45 17 7V9.78C16.39 10.33 16 11.12 16 12V14H8V12C8 11.12 7.61 10.33 7 9.78V7M20 17C20 17.55 19.55 18 19 18H5C4.45 18 4 17.55 4 17V12C4 11.45 4.45 11 5 11S6 11.45 6 12V16H18V12C18 11.45 18.45 11 19 11S20 11.45 20 12V17Z',
      },
      {
        label: 'Food',
        icon: 'M20,10C18.58,7.57 15.5,6.69 13,8V3H11V8C8.5,6.69 5.42,7.57 4,10C2,13 7,22 9,22C11,22 11,21 12,21C13,21 13,22 15,22C17,22 22,13 20,10M18.25,13.38C17.63,15.85 16.41,18.12 14.7,20C14.5,20 14.27,19.9 14.1,19.75C12.87,18.76 11.13,18.76 9.9,19.75C9.73,19.9 9.5,20 9.3,20C7.59,18.13 6.36,15.85 5.75,13.39C5.5,12.66 5.45,11.87 5.66,11.12C6.24,10.09 7.32,9.43 8.5,9.4C9.06,9.41 9.61,9.54 10.11,9.79L11,10.24H13L13.89,9.79C14.39,9.54 14.94,9.41 15.5,9.4C16.68,9.43 17.76,10.08 18.34,11.11C18.55,11.86 18.5,12.65 18.25,13.38M11,5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5Z',
      },
      {
        label: 'Scrolls',
        icon: 'M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H20V5A1,1 0 0,0 19,4A1,1 0 0,0 18,5V9L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H13A2,2 0 0,0 15,20M9,6H14V8H9V6M9,10H14V12H9V10M9,14H14V16H9V14Z',
      },
    ],
    topBtns: [
      {
        label: 'Bases',
        icon: 'M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z',
      },
      {
        label: 'Diary',
        icon: 'M6 20H11V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V10.3C19.78 10.42 19.57 10.56 19.39 10.74L18 12.13V4H13V12L10.5 9.75L8 12V4H6V20M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z',
      },
      {
        label: 'Quests',
        icon: 'M14 10H3V12H14V10M14 6H3V8H14V6M3 16H10V14H3V16M21.5 11.5L23 13L16 20L11.5 15.5L13 14L16 17L21.5 11.5Z',
      },
      {
        label: 'Crafting',
        icon: 'M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z',
      },
      {
        label: 'Inventory',
        icon: 'M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,20H6V16H8V18H9V16H18V20M18,15H6V9A2,2 0 0,1 8,7H16A2,2 0 0,1 18,9V15Z',
      },
      {
        label: 'Map',
        icon: 'M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z',
      },
      {
        label: 'Relationships',
        icon: 'M5,15L4.4,14.5C2.4,12.6 1,11.4 1,9.9C1,8.7 2,7.7 3.2,7.7C3.9,7.7 4.6,8 5,8.5C5.4,8 6.1,7.7 6.8,7.7C8,7.7 9,8.6 9,9.9C9,11.4 7.6,12.6 5.6,14.5L5,15M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M21.1,18.1H8.9V17C8.9,16.36 12,14.9 15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1Z',
      },
      {
        label: 'Achievements',
        icon: 'M12 8L15 13.2L18 10.5L17.3 14H6.7L6 10.5L9 13.2L12 8M12 4L8.5 10L3 5L5 16H19L21 5L15.5 10L12 4M19 18H5V19C5 19.6 5.4 20 6 20H18C18.6 20 19 19.6 19 19V18Z',
      },
    ],
    inventory: [
      {
        // eslint-disable-next-line global-require
        image: require('@/assets/2.png'),
        name: 'Golden Apple',
        categ: 'Food',
        amount: 28,
        desc: 'A radiant apple imbued with magical energy.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/3.png'),
        name: 'Peas',
        categ: 'Food',
        amount: 23,
        desc: 'A handful of plump and nutritious peas.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/6.png'),
        name: 'Wood',
        categ: 'Furniture',
        amount: 500,
        desc: 'Timber ready for crafting and building.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/7.png'),
        name: 'Egg',
        categ: 'Food',
        amount: 34,
        desc: 'A delicate, fresh chicken egg.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/8.png'),
        name: 'Shovel',
        categ: 'Furniture',
        amount: 1,
        desc: 'Sturdy tool for digging and landscaping.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/10.png'),
        name: 'Leather Boots',
        categ: 'Furniture',
        amount: 1,
        desc: 'Comfortable boots made from supple leather.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/12.png'),
        name: 'Beet',
        categ: 'Food',
        amount: 6,
        desc: 'A hearty and earthy root vegetable.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/13.png'),
        name: 'Garden Trimmer',
        categ: 'Furniture',
        amount: 1,
        desc: 'Precision tool for pruning plants.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/15.png'),
        name: 'Sickle',
        categ: 'Furniture',
        amount: 1,
        desc: 'Curved blade for efficient crop harvesting.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/16.png'),
        name: 'Carrot',
        categ: 'Food',
        amount: 12,
        desc: 'A crisp and vibrant orange vegetable.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/17.png'),
        name: 'Tomato',
        categ: 'Food',
        amount: 4,
        desc: 'Juicy and ripe red tomato.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/18.png'),
        name: 'Cheese',
        categ: 'Food',
        amount: 99,
        desc: 'A savory wedge of fine cheese.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/20.png'),
        name: 'Pitch Fork',
        categ: 'Furniture',
        amount: 1,
        desc: 'Multi-pronged tool for lifting hay and soil.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/22.png'),
        name: 'Pumpkin',
        categ: 'Food',
        amount: 10,
        desc: 'Large, ripe pumpkin with a festive aura.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/23.png'),
        name: 'Wheat',
        categ: 'Food',
        amount: 24,
        desc: 'Stalks of golden wheat, essential for baking.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/24.png'),
        name: 'Strawberry',
        categ: 'Food',
        amount: 1,
        desc: 'Plump and sweet red strawberry.',
      },
      {
        //  eslint-disable-next-line global-require
        image: require('@/assets/25.png'),
        name: 'Milk',
        categ: 'Food',
        amount: 16,
        desc: "Fresh, creamy cow's milk in a wooden bucket.",
      },
    ],
  }),
};
</script>

<style>
.all {
  @apply w-[100vw] h-[100%] p-0 m-0 flex-col flex overflow-hidden;
}
.background {
  @apply fixed w-[100vw] h-[100vh] z-0;
  background: url("https://w0.peakpx.com/wallpaper/504/322/HD-wallpaper-anime-landscape-farm.jpg")
    no-repeat;
  background-size: cover;
  filter: blur(10px);
  transform: scale(1.1);
}
.top-bar {
  @apply bg-black bg-opacity-70 w-[100vw] h-[10vh] flex-row flex;
}
.content {
  @apply bg-black bg-opacity-60 w-[100vw] h-auto grow flex-row flex;
}
.side-bar {
  @apply bg-black bg-opacity-10 h-auto w-[300px] flex-col flex pl-[60px] pt-[50px] pr-[30px];
}
.crafting {
  @apply h-[972.4px] w-auto flex-col flex;
}
.desc {
  @apply h-auto w-[500px] flex-col flex mr-[30px];
}
.top-left {
  @apply flex  h-auto w-[300px] flex-col items-center justify-center ml-[30px];
}
.top-mid {
  @apply flex  h-auto grow w-auto flex-row items-center justify-center;
}
.top-right {
  @apply flex  h-auto w-[400px] flex-row items-center justify-end mr-[60px];
}
</style>

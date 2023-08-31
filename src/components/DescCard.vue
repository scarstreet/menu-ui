<template>
  <div class="bg-amber-50 rounded-3xl h-auto grow mr-[40px] mt-[50px] mb-[30px]
        flex flex-col p-[60px] pb-[30px] items-center">
          <img :src="item.name !== 'na' ? item.image : require('@/assets/w1.png')"
          class="w-[200px] h-[200px] object-contain" alt="" />
          <div class="w-[100%] text-2xl text-amber-950 first-letter:capitalize">
            {{ item.name !== 'na' ? item.name : ''}}
          </div>
          <div class="w-[100%] text-xl mb-3 text-[#ddae62]">
            {{ item.name !== 'na' ? item.categ : ''}}
          </div>
          <div v-if="item.name !== 'na'"
          class="border-t-2 border-solid border-[#9b896b] border-opacity-20 w-[100%]"></div>
          <div class="w-[100%] my-3 text-[#9b896b] overflow-clip">
            {{ item.name !== 'na' ? item.desc.substring(0,150) : '' }}
            {{ item.desc.length > 150 ? '...' : '' }}
          </div>
          <div v-if="item.name !== 'na' && mode === 'craft'"
          class="flex flex-row w-[100%] justify-start mb-4">
            <div class="flex flex-row items-end">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-[#ddae62] w-[30px]"><title>cube</title><path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z" /></svg>
            <div class="ml-2 mr-1 text-amber-950">{{ item.rewards.cube }}</div>
            <div class="text-[#9b896b]">Cube</div>
          </div>
          <div class="flex flex-row items-end ml-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-[#ddae62] w-[30px]"><title>cube</title><path d="M2 19.63L13.43 8.2L12.72 7.5L14.14 6.07L12 3.89C13.2 2.7 15.09 2.7 16.27 3.89L19.87 7.5L18.45 8.91H21.29L22 9.62L18.45 13.21L17.74 12.5V9.62L16.27 11.04L15.56 10.33L4.13 21.76L2 19.63Z" /></svg>
            <div class="ml-2 mr-1 text-amber-950">{{ item.rewards.hammer }}</div>
            <div class="text-[#9b896b]">Hammer</div>
          </div>
          </div>
          <div v-if="item.name !== 'na' && mode === 'craft'"
          class="border-t-2 border-solid border-[#9b896b] border-opacity-20 w-[100%]"></div>
          <div v-if="item.name !== 'na' && mode === 'craft'">
            <div v-for="(i,idx) in mat" :key="'tesuto'+idx"
            :class="`flex-row flex w-[350px] h-[40px]
            items-center ${idx<3?'border-b-2':''} border-solid border-opacity-20
            border-[#9b896b] py-[30px]`">
              <img :src="i.image" class="object-contain w-[30px] h-[30px]" alt="" />
              <div class="ml-3 text-[#9b896b]">{{ i.item }}</div>
              <div class="grow"></div>
              <div :class="`${i.have >= i.amount ?
                'text-amber-950' : 'text-red-500'}`">{{ i.have }}</div>
              <div class="text-[#9b896b]">/{{ i.amount }}</div>
            </div>
            <div v-for="i in 4 - mat.length" :key="'leftover'+i+'from'+item.name"
            class="border-t-2 border-solid border-[#9b896b] border-opacity-20 w-[100%]
            flex flex-row py-[15px]">
              <div class="w-[20px] h-[20px] rounded-md bg-[#9b896b] bg-opacity-20"></div>
              <div class="ml-3 w-[130px] h-[20px] rounded-md bg-[#9b896b] bg-opacity-20"></div>
              <div class="grow"></div>
              <div class="w-[40px] h-[20px] rounded-md bg-[#9b896b] bg-opacity-20"></div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'DescCard',
  props: {
    item: Object,
    mode: String,
    inventory: Array,
  },
  computed: {
    mat() {
      const mat = this.item.req;
      for (let i = 0; i < mat.length; i += 1) {
        mat[i].amount = this.item.req[i].amount;
        mat[i].item = this.item.req[i].item;
        mat[i].have = this.inventory[this.inventory.findIndex(
          (x) => x.name === mat[i].item,
        )].amount;
        mat[i].image = this.inventory[this.inventory.findIndex(
          (x) => x.name === mat[i].item,
        )].image;
      }
      console.log(mat);
      return mat;
    },
  },
};
</script>

<style>
.no-img {
    @apply w-[30px] h-[30px] rounded-md bg-[#9b896b];
}
.no-name {
    @apply w-[130px] h-[30px] rounded-md bg-[#9b896b];
}
.no-material {
    @apply w-[60px] h-[30px] rounded-md bg-[#9b896b];
}
</style>

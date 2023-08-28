<template>
  <div class="w-[100%] h-auto grow pl-[40px] pr-[50px] pt-[10px] pb-[80px]">
    <div class="w-[100%] h-[100%] bg-white bg-opacity-10 rounded-3xl p-[15px] flex flex-col">
      <div class="flex-row text-amber-50">
        Backpack
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackPack',
  props: { Items: Array },
  data: () => ({
    example: [1, 2, 3, 4, 5, 5, 56, 2, 6, 7, 3, 3],
  }),
};
</script>

<style></style>

<template>
  <div
    class="w-[100%]
    h-[50%] pt-[50px] pl-[40px] pr-[20px] pb-[30px]"
  >
  <div class="the-grid" style="scrpos">
    <div
    v-for="(i, idx) in example"
    :key="'craftable' + idx"
    class=" grid-object"
    ></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CraftMenu',
  props: { Recipes: Object },
  data: () => ({
    example: [
      1, 2, 3, 4, 5, 5, 56, 2, 6, 7, 3, 3, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 2, 1, 2, 3, 4, 5, 5,
      56, 2, 6, 7, 3, 3, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 2,
    ],
  }),
};
</script>

<style scoped>
.the-grid {
    @apply grid grid-flow-row-dense grid-cols-8 gap-2 overflow-y-scroll h-[100%] pr-[20px];
}
.grid-object {
    @apply bg-white col-span-1 aspect-square rounded-3xl bg-opacity-10;
}
::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
  background-color: transparent; /* Make the scrollbar itself transparent */
}

/* Style the scrollbar thumb (draggable part) */
::-webkit-scrollbar-track {
  background-color: transparent; /* Make the thumb transparent */
}

/* Style the scrollbar track to have a background color */
::-webkit-scrollbar-thumb {
  background-color: rgba(255,255,255,.1); /* Color of the track */
  border-radius: 4px;
}
</style>

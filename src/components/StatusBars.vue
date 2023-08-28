<template>
  <div>
    <div class="flex-row flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" class="mr-2">
        <title>lightning-bolt</title>
        <path d="M11 15H6L13 1V9H18L11 23V15Z" class="fill-white" />
      </svg>
      <div class="w-[130px] h-[20px] border border-white rounded-2xl overflow-hidden mr-3">
        <div class="bg-emerald-500 w-[60%] h-[30px]"></div>
      </div>
      <div class="text-sm ml-2 text-amber-50">252</div>
      <div class="text-sm ml-1 text-[#9b896b]">/420</div>
    </div>
    <div class="flex-row flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" class="mr-2">
        <title>lightning-bolt</title>
        <path
          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,
          3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41
          22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          class="fill-white"
        />
      </svg>
      <div class="w-[130px] h-[12px] border border-white rounded-2xl overflow-hidden mr-3">
        <div class="bg-[#adbd45] w-[100%] h-[20px]"></div>
      </div>
      <div class="text-sm ml-2 text-amber-50">400</div>
      <div class="text-sm ml-1 text-[#9b896b]">/400</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusBars',
};
</script>

<style></style>

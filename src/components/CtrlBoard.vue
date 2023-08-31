<template>
  <div class="bg-black bg-opacity-30 rounded-2xl w-[100%] h-[50px] mb-[30px] flex flex-row
  items-center px-[10px] space-x-3">
  <div v-if="isShowing">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="32px" viewBox="0 0 356.572 356.572"
        xml:space="preserve" class="fill-[#ddae62] bg-amber-50 p-[4px] rounded-lg">
        <g>
            <path d="M181.563,0C120.762,0,59.215,30.525,59.215,88.873V237.5c0,65.658,
            53.412,119.071,119.071,119.071
            c65.658,0,119.07-53.413,119.07-119.071V88.873C297.356,27.809,237.336,0,
            181.563,0z M274.945,237.5
            c0,53.303-43.362,96.657-96.659,96.657c-53.299,
            0-96.657-43.354-96.657-96.657v-69.513c20.014,
            6.055,57.685,15.215,102.221,15.215
            c28.515,0,59.831-3.809,91.095-14.567V237.5z M274.945,
            144.794c-81.683,31.233-168.353,7.716-193.316-0.364V88.873
            c0-43.168,51.489-66.46,99.934-66.46c46.481,
            0,93.382,20.547,93.382,66.46V144.794z M190.893,48.389v81.248
            c0,6.187-5.023,11.208-11.206,11.208c-6.185,
            0-11.207-5.021-11.207-11.208V48.389c0-6.186,5.021-11.207,11.207-11.207
            C185.869,37.182,190.893,42.203,190.893,48.389z M154.938,
            40.068V143.73c-15.879,2.802-62.566-10.271-62.566-10.271
            C80.233,41.004,154.938,40.068,154.938,40.068z"/>
        </g>
    </svg>
  </div>
  <div v-if="isShowing" class="text-amber-50">Craft</div>
  <div v-if="isShowing" class="-scale-x-100">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="32px" viewBox="0 0 356.572 356.572"
        xml:space="preserve" class="fill-[#ddae62] bg-amber-50 p-[4px] rounded-lg">
        <g>
            <path d="M181.563,0C120.762,0,59.215,30.525,59.215,88.873V237.5c0,65.658,
            53.412,119.071,119.071,119.071
            c65.658,0,119.07-53.413,119.07-119.071V88.873C297.356,27.809,237.336,0,
            181.563,0z M274.945,237.5
            c0,53.303-43.362,96.657-96.659,96.657c-53.299,
            0-96.657-43.354-96.657-96.657v-69.513c20.014,
            6.055,57.685,15.215,102.221,15.215
            c28.515,0,59.831-3.809,91.095-14.567V237.5z M274.945,
            144.794c-81.683,31.233-168.353,7.716-193.316-0.364V88.873
            c0-43.168,51.489-66.46,99.934-66.46c46.481,
            0,93.382,20.547,93.382,66.46V144.794z M190.893,48.389v81.248
            c0,6.187-5.023,11.208-11.206,11.208c-6.185,
            0-11.207-5.021-11.207-11.208V48.389c0-6.186,5.021-11.207,11.207-11.207
            C185.869,37.182,190.893,42.203,190.893,48.389z M154.938,
            40.068V143.73c-15.879,2.802-62.566-10.271-62.566-10.271
            C80.233,41.004,154.938,40.068,154.938,40.068z"/>
        </g>
    </svg>
  </div>
  <div v-if="isShowing" class="text-[#ddae62]">Hold</div>
  <div v-if="isShowing" class="text-amber-50">Craft More</div>
  <div v-if="isShowing" class="bg-amber-50 w-[32px] h-[32px] p-[4px] rounded-lg flex
  justify-center items-center text-[#ddae62]">F</div>
  <div v-if="isShowing" class="text-amber-50">Pin</div>
  <div v-if="isShowing" class="bg-amber-50 w-[32px] h-[32px] p-[4px] rounded-lg text-base flex
  justify-center items-center text-[#ddae62]">esc</div>
  <div v-if="isShowing" class="text-amber-50">Back</div>
  </div>
</template>

<script>
export default {
  name: 'CtrlBoard',
  props: { select: Array, item: Object },
  computed: {
    isShowing() {
      return this.select[0] === 'craft' && this.item.name !== 'na';
    },
  },
};
</script>

<style>

</style>

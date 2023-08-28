<template>
  <div id="app" class="all">
    <div class="top-bar z-10">
      <div class="top-left"></div>
      <div class="top-mid"></div>
      <div class="top-right"></div>
    </div>
    <div class="content z-10">
      <div class="side-bar">
        <SideButton label="All" icon='fa-regular fa-square'/>
      </div>
      <div class="backpack">a</div>
      <div class="desc">a</div>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
import SideButton from './components/SideButton.vue';

export default {
  name: 'App',
  components: { SideButton },
};
</script>

<style>
.all {
  @apply w-[100vw] h-[100vh] p-0 m-0 flex-col flex;
}
.background {
  @apply fixed w-[100vw] h-[100vh] z-0;
  background: url('https://w0.peakpx.com/wallpaper/504/322/HD-wallpaper-anime-landscape-farm.jpg') no-repeat;
  background-size: cover;
  filter: blur(10px);
  transform: scale(1.1);
}
.top-bar {
  @apply bg-black bg-opacity-60 w-[100vw] h-[100px] flex-row flex;
}
.content {
  @apply bg-black bg-opacity-40 w-[100vw] h-auto grow flex-row flex;
}
.side-bar {
  @apply bg-black bg-opacity-20 h-auto w-[350px] flex-col flex pl-[80px] pt-[50px] pr-[30px];
}
.backpack {
  @apply h-auto w-auto grow flex-col;
}
.desc {
  @apply h-auto w-[550px] flex-col;
}
.top-left {
  @apply flex  h-auto w-[300px] flex-col;
}
.top-mid {
  @apply flex  h-auto grow w-auto flex-col;
}
.top-right {
  @apply flex  h-auto w-[250px];
}
</style>

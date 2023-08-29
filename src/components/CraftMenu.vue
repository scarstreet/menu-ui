<!-- eslint-disable global-require -->
<!-- eslint-disable import/no-dynamic-require -->
<!-- eslint-disable global-require -->
<template>
  <div class="w-[100%] h-[406px] overflow-y-scroll grid-cont">
    <div class="the-grid">
      <div v-for="(i, idx) in craftable" :key="'craftable' + idx" class="grid-object">
        <div class="flex justify-end w-[100%] rotate-45 -translate-y-8 translate-x-5">
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
          <img :src="i.image" class="w-[50px] h-[50px] object-contain" alt="" />
        </div>
        <div class="flex justify-start items-end">
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
      </div>
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
    craftable: [
      {
        // eslint-disable-next-line global-require
        image: require('@/assets/11.png'),
        name: 'Healing Herb Salve',
        categ: 'Tonics',
        req: [
          { item: 'Golden Apple', amount: 5 },
          { item: 'Peas', amount: 16 },
          { item: 'Carrot', amount: 12 },
        ],
        desc: 'This soothing salve is crafted from common herbs. When applied, it accelerates natural healing processes, restoring a portion of health over time.',
      },
      {
        // eslint-disable-next-line global-require
        image: require('@/assets/21.png'),
        name: 'Enchanted Growth Potion',
        categ: 'Tonics',
        req: [
          { item: 'Milk', amount: 16 },
          { item: 'Golden Apple', amount: 10 },
        ],
        desc: 'Brewed with magical ingredients, this potion stimulates plant growth. When sprinkled on crops or plants, they flourish rapidly, yielding bountiful harvests.',
      },
      {
        // eslint-disable-next-line global-require
        image: require('../assets/26.png'),
        name: 'Emberleaf Fern',
        categ: 'Plants',
        req: [
          { item: 'Golden Apple', amount: 1 },
          { item: 'Pumpkin', amount: 1 },
        ],
        desc: "The Emberleaf Fern is a hardy plant found in the hottest regions of the world. Its fronds are adorned with fiery red edges, and when carefully harvested, they can be infused into armor and weapons, granting them a temporary resistance to fire-based attacks. Warriors and adventurers often seek out this plant to forge equipment that's well-suited for battling fire-breathing foes.",
      },
      {
        // eslint-disable-next-line global-require
        image: require('../assets/27.png'),
        name: 'Elven Wisdom Bread',
        categ: 'Food',
        req: [
          { item: 'Wheat', amount: 9 },
          { item: 'Golden Apple', amount: 1 },
          { item: 'Milk', amount: 9 },
        ],
        desc: 'Crafted using ancient elven recipes, this bread imparts wisdom to those who consume it. Partaking in its flavors enhances intelligence and problem-solving skills, making it a favorite among scholars and strategists.',
      },
      {
        // eslint-disable-next-line global-require
        image: require('../assets/spell-scroll.svg'),
        name: "Scribe's Scroll of Knowledge",
        categ: 'Scrolls',
        req: [
          { item: 'Wood', amount: 6 },
          { item: 'Golden Apple', amount: 3 },
        ],
        desc: 'Inscribed with intricate symbols, this scroll contains condensed wisdom and forgotten lore. When read, it imparts knowledge on various topics, from history to arcane arts, making it an invaluable resource for inquisitive minds.',
      },
      {
        // eslint-disable-next-line global-require
        image: require('../assets/14.png'),
        name: 'Starlight Blossom',
        categ: 'Plants',
        req: [
          { item: 'Peas', amount: 40 },
          { item: 'Golden Apple', amount: 3 },
        ],
        desc: 'The elusive Starlight Blossom is a radiant flower that only blooms under the light of a full moon. Its petals shimmer with a soft, ethereal glow, and when harvested, they can be used as a key ingredient in crafting potent potions that enhance magical abilities.',
      },
      {
        // eslint-disable-next-line global-require
        image: require('../assets/5.png'),
        name: 'Elemental Seeder',
        categ: 'Crops',
        req: [
          { item: 'Shovel', amount: 1 },
          { item: 'Golden Apple', amount: 40 },
        ],
        desc: 'This mystical device, when activated with the right materials, allows you to plant elemental-infused crops. These crops harness the power of fire, ice, or lightning, granting unique magical properties when harvested.',
      },
      {
        // eslint-disable-next-line global-require
        image: require('../assets/21.png'),
        name: 'Nectar of Vitality',
        categ: 'Tonics',
        req: [{ item: 'Golden Apple', amount: 100 }],
        desc: 'Distilled from the nectar of ancient plants, this tonic revitalizes the body and mind. It temporarily boosts strength, agility, and focus, making it a favored choice among adventurers facing formidable challenges.',
      },
      {
        // eslint-disable-next-line global-require
        image: require('../assets/9.png'),
        name: 'Arcane Reading Chair',
        categ: 'Furniture',
        req: [
          { item: 'Golden Apple', amount: 50 },
          { item: 'Wood', amount: 120 },
        ],
        desc: 'This meticulously crafted chair is designed for scholars and magic users. Its enchantments provide comfort during long study sessions and grant a clearer connection to magical energies, enhancing the speed of spell research.',
      },
      {
        // eslint-disable-next-line global-require
        image: require('../assets/19.png'),
        name: 'Feast of the Forest',
        categ: 'Food',
        req: [
          { item: 'Peas', amount: 20 },
          { item: 'Golden Apple', amount: 5 },
          { item: 'Beet', amount: 16 },
        ],
        desc: "Culinary mastery meets nature's bounty in this feast. Prepared using ingredients sourced from the depths of the forest, consuming it replenishes health, grants temporary stamina, and fosters a strong connection with the natural world.",
      },
    ],
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
  @apply bg-white col-span-1 aspect-square rounded-3xl bg-opacity-10;
}
.grid-object.selected {
  @apply border-4 border-solid border-white border-opacity-50;
}
.grid-object.craftable {
  @apply bg-opacity-40;
}
.grid-object.known {
  @apply bg-opacity-20;
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

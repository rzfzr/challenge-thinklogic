<template>
  <div class="flex flex-col max-w-6xl mx-auto lg:flex-row lg:items-start lg:space-x-12">
    <div class="lg:w-1/3">
      <div class="h-[262px] flex-col justify-center items-start gap-10 inline-flex">
        <div class="self-stretch h-[174px] flex-col justify-center items-start gap-3 flex">
          <div class="text-center text-[#002855] text-xl font-semibold font-['Inter'] leading-[30px]">Sectors</div>
          <div class="self-stretch text-[#231f20] text-[40px] font-semibold font-['Barlow'] leading-[44px]">Our Products
            are for start-ups and big data-centers.</div>
        </div>
        <div class="inline-flex items-center justify-center h-12 rounded-lg">
          <button
            class="self-stretch px-5 bg-[#00a0df] rounded shadow border-2 border-[#00a0df] justify-center items-center gap-1.5 flex">
            <div class="text-white text-base font-semibold font-['Inter'] leading-normal">View Products</div>
          </button>
        </div>
      </div>
    </div>

    <div class="lg:w-2/3 lg:pl-[32px]">
      <TabNav @tab-selected="selectedTab = $event" :tabs="tabs" :selectedTab="selectedTab" />
      <TabContent :selectedTab="selectedTab" :content="tabContent" />
    </div>
  </div>
</template>
<script>
import TabNavigator from './TabNavigator.vue'
import TabContent from './TabContent.vue'

export default {
  components: {
    TabNav: TabNavigator,
    TabContent,
  },
  data() {
    return {
      selectedTab: 'Data Centers',
      tabs: ['Data Centers', 'Industrial', 'Power Management', 'Wireless Enclosures'],
      tabContent: {
        'Data Centers': {
          title: 'Data Center & Enterprise Solutions',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula commodo pharetra. Praesent pharetra velit massa, ac vehicula lorem sollicitudin nec. Maecenas ligula nisl, pretium sed eleifend at, gravida eu dui. Praesent vestibulum velit id congue congue. ',
          imageUrl: 'src/assets/images/data-centers.png'
        },
        'Industrial': {
          title: 'Industrial Solutions',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula commodo pharetra. Praesent pharetra velit massa, ac vehicula lorem sollicitudin nec. Maecenas ligula nisl, pretium sed eleifend at, gravida eu dui. Praesent vestibulum velit id congue congue. ',
          imageUrl: 'src/assets/images/industrial-solutions.png'
        },
        'Power Management': {
          title: 'Power Management',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula commodo pharetra. Praesent pharetra velit massa, ac vehicula lorem sollicitudin nec. Maecenas ligula nisl, pretium sed eleifend at, gravida eu dui. Praesent vestibulum velit id congue congue. ',
          imageUrl: 'src/assets/images/power-management.png'
        },
        'Wireless Enclosures': {
          title: 'Wireless Enclosures',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula commodo pharetra. Praesent pharetra velit massa, ac vehicula lorem sollicitudin nec. Maecenas ligula nisl, pretium sed eleifend at, gravida eu dui. Praesent vestibulum velit id congue congue. ',
          imageUrl: 'src/assets/images/wireless-enclosures.png'
        },
      }
    }
  }
}
</script>

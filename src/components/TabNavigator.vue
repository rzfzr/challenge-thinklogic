<template>
    <div class="flex space-x-4 overflow-x-auto border-b-2 border-gray-300 lg:pt-[0px] pt-[40px]">
        <div id="scroll-container"
            class="overflow-hidden flex-grow  border-b border-[#93a4ba] justify-between items-center inline-flex">
            <div v-for="tab in tabs" :key="tab" @click="$emit('tab-selected', tab)"
                :class="[tab === selectedTab ? 'self-stretch  border-b-2 border-[#231f20] justify-start items-start gap-2 flex' : '']"
                class="whitespace-nowrap">
                <button @click="$emit('tab-selected', tab)"
                    :class="['py-2 px-4 font-sans', tab === selectedTab ? 'text-[#002855] text-xl font-semibold  leading-[30px]' : 'text-[#231f20] text-xl font-normal  leading-[30px]']"
                    class="whitespace-nowrap">
                    <h3>
                        {{ tab }}
                    </h3>
                </button>
            </div>
        </div>
        <button @click="scrollTabs('right')"
            class="absolute right-0 flex items-center justify-center w-8 h-8 p-1 bg-white border border-gray-300 rounded-full shadow-md sm:visible md:hidden lg:hidden">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="chevron-right">
                    <path id="Icon" d="M7.5 15L12.5 10L7.5 5" stroke="#002855" stroke-width="1.67"
                        stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        tabs: Array,
        selectedTab: String
    },
    methods: {
        scrollTabs(direction) {
            const tabContainer = this.$el.querySelector('#scroll-container')
            const scrollAmount = 150
            if (direction === 'right') {
                tabContainer.scrollLeft += scrollAmount
            }
        },
    },
}
</script>
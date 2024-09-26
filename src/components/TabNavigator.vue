<template>
    <div class="flex space-x-4 overflow-x-auto border-b-2 border-gray-300 lg:pt-[0px] pt-[40px]">
        <div class="flex-grow  border-b border-[#93a4ba] justify-between items-center inline-flex">
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
    </div>
</template>

<script>
export default {
    props: {
        tabs: Array,
        selectedTab: String
    }
}
</script>
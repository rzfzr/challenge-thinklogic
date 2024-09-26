<template>
    <div class="flex flex-col mt-6 md:flex-row">
        <div class="md:w-1/2">
            <h4 class=" text-black text-2xl font-semibold font-display leading-[28.80px]">{{
                content[selectedTab].title }}</h4>
            <p class="text-neutral-700 text-base font-normal font-['Inter'] leading-normal">{{
                content[selectedTab].description }}</p>
            <a href="#" class="flex items-center text-[#002855] text-base  font-semibold font-sans leading-normal">Learn
                more
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="ml-[6px] align-middle"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="chevron-right">
                        <path id="Icon" d="M7.5 15L12.5 10L7.5 5" stroke="#002855" stroke-width="1.67"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            </a>
        </div>
        <div class="mt-4 md:w-1/2 md:mt-0">
            <img :src="content[selectedTab].imageUrl" alt="Image" class="w-full rounded-lg" />
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    props: {
        selectedTab: String,
        content: Object
    }
}
</script>
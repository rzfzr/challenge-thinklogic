<template>

</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      selectedTab: 'Data Centers',
      tabs: ['Data Centers', 'Industrial', 'Power Management', 'Wireless Enclosures'],
      tabContent: {
        'Data Centers': {
          title: 'Data Center & Enterprise Solutions',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula commodo pharetra. Praesent pharetra velit massa, ac vehicula lorem sollicitudin nec. Maecenas ligula nisl, pretium sed eleifend at, gravida eu dui. Praesent vestibulum velit id congue congue. ',
          imageUrl: 'src/assets/data-centers.png'
        },
        'Industrial': {
          title: 'Industrial Solutions',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula commodo pharetra. Praesent pharetra velit massa, ac vehicula lorem sollicitudin nec. Maecenas ligula nisl, pretium sed eleifend at, gravida eu dui. Praesent vestibulum velit id congue congue. ',
          imageUrl: 'src/assets/industrial-solutions.png'
        },
        'Power Management': {
          title: 'Industrial Solutions',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula commodo pharetra. Praesent pharetra velit massa, ac vehicula lorem sollicitudin nec. Maecenas ligula nisl, pretium sed eleifend at, gravida eu dui. Praesent vestibulum velit id congue congue. ',
          imageUrl: 'src/assets/power-management.png'
        },
        'Wireless Enclosures': {
          title: 'Wireless Enclosures',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula commodo pharetra. Praesent pharetra velit massa, ac vehicula lorem sollicitudin nec. Maecenas ligula nisl, pretium sed eleifend at, gravida eu dui. Praesent vestibulum velit id congue congue. ',
          imageUrl: 'src/assets/wireless-enclosures.png'
        },
      }
    }
  }
}
</script>

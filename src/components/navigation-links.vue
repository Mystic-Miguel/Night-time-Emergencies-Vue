<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName"
    ><span class="navigation-links-text">{{ text }}</span
    ><span class="navigation-links-text1">{{ text1 }}</span
    ><span class="navigation-links-text2">{{ text2 }}</span
    ><span class="navigation-links-text3">{{ text3 }}</span
    ><span class="navigation-links-text4">{{ text4 }}</span></nav
  >
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    text4: {
      type: String,
      default: 'Contact Us',
    },
    text1: {
      type: String,
      default: 'Services',
    },
    rootClassName: String,
    text3: {
      type: String,
      default: 'FAQ',
    },
    text: {
      type: String,
      default: 'About Us',
    },
    text2: {
      type: String,
      default: 'Gallery',
    },
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links-text1 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text2 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text3 {
  margin-left: var(--dl-space-space-twounits);
}
.navigation-links-text4 {
  margin-left: var(--dl-space-space-twounits);
}








@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-text {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text3 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-text4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>

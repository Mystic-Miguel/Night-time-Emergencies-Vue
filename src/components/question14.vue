<template>
  <div class="question14-container"
    ><span class="question14-text heading3">{{ question }}</span
    ><span class="bodySmall">{{ answer }}</span></div
  >
</template>

<script>
export default {
  name: 'Question14',
  props: {
    answer: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
    },
    question: {
      type: String,
      default: 'What types of cars do you sell?',
    },
  },
}
</script>

<style scoped>
.question14-container {
  gap: var(--dl-space-space-unit);
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.question14-text {
  font-weight: 700;
}
</style>

<style scoped>
@import "../style/chat.css";
</style>

<template>
  <div class="chatapp">
    <thread-section />
    <message-section />
  </div>
</template>

<script>
import ThreadSection from '@/components/chat/ThreadSection'
import MessageSection from '@/components/chat/MessageSection'

export default {
  name: 'Chat',
  components: {
    ThreadSection,
    MessageSection
  },
  title() {
    return 'Koa Vue SSR| Chat'
  }
}
</script>

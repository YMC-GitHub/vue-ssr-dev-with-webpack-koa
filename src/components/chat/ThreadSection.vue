<template>
  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount">Unread threads: {{ unreadCount }}</span>
    </div>
    <ul class="thread-list">
      <thread
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currentThread.id"
        @switch-thread="switchThread"
      />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Thread from './Thread'


export default {
  name: 'ThreadSection',
  components: { Thread },
  computed: mapGetters('chat', ['threads', 'currentThread', 'unreadCount']),
  methods: mapActions('chat', ['switchThread'])
}
</script>

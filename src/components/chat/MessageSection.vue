<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{ thread.name }}</h3>
    <ul class="message-list" ref="list">
      <message v-for="message in messages" :key="message.id" :message="message" />
    </ul>
    <textarea class="message-composer" v-model="text" @keyup.enter="sendMessage" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Message from './Message'

export default {
  name: 'MessageSection',
  components: { Message },
  data() {
    return {
      text: ''
    }
  },
  async asyncData({ store, route }) {
    // await dispatch("chat/getAllMessages");
  },
  created() {
    this.getMassage()
  },
  computed: mapGetters('chat', {
    thread: 'currentThread',
    messages: 'sortedMessages'
  }),
  watch: {
    'thread.lastMessage': function () {
      this.$nextTick(() => {
        const ul = this.$refs.list
        ul.scrollTop = ul.scrollHeight
      })
    }
  },
  methods: mapActions({
    sendMessage(dispatch) {
      const { text, thread } = this
      if (text.trim()) {
        dispatch('chat/sendMessage', {
          text,
          thread
        })
        this.text = ''
      }
    },
    getMassage(dispatch) {
      dispatch('chat/getAllMessages')
    }
  })
}
</script>

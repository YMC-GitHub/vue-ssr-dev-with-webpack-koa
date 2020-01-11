const currentThread = state => (state.currentThreadID ? state.threads[state.currentThreadID] : {})
export default {
  threads: state => state.threads,
  currentThread,
  /**
   * 获取当前消息
   */
  currentMessages: (state) => {
    const thread = currentThread(state)
    return thread.messages ? thread.messages.map(id => state.messages[id]) : []
  },
  /**
   * 获取未读消息数量
   */
  unreadCount: ({ threads }) =>
    Object.keys(threads).reduce((count, id) =>
      (threads[id].lastMessage.isRead ? count : count + 1), 0),
  /**
   * 返回排序消息
   */
  sortedMessages: (state, getters) => {
    const messages = getters.currentMessages
    return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
  }
}

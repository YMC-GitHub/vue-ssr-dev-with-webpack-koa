import * as api from '@/api/chat'

export default {
  /**
   * 获取消息列表
   */
  getAllMessages: ({ commit }) => {
    api.getAllMessages((messages) => {
      commit('receiveAll', messages)
    })
  },
  /**
   * 发送消息
   */
  sendMessage: ({ commit }, payload) => {
    api.createMessage(payload, (message) => {
      commit('receiveMessage', message)
    })
  },
  switchThread: ({ commit }, payload) => {
    commit('switchThread', payload)
  }
}

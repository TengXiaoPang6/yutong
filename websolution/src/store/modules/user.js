import { getToken, setToken, removeToken } from '@/utils/auth'
import service from '@/api/LoginService'
import Cookies from "js-cookie";

const user = {
  state: {
    userId: Cookies.get('userId'),
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    language: Cookies.get('language') || 'zh-cn',
    theme: Cookies.get('theme') || 'default',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => { // roles must be array
      state.roles = roles
    },
    SET_USERID: (state, userId) => { // userID must be string
      state.userId = userId
      Cookies.set('userId', userId)
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
      // TODO set language
    },
    SET_THEME: (state, theme) => {
      state.theme = theme
      Cookies.set('theme', theme)
      // TODO set theme
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        service.loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.authCode)
          setToken(data.authCode)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户权限
    getUserAuths({ commit, state }) {
      return new Promise((resolve, reject) => {
        service.getUserAuths(state.token).then(response => {
          if (!response.data || !response.data.auths) {
            reject('error')
          }
          const data = response.data
          commit('SET_ROLES', data.auths.split(','))
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    getUserAccountInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        service.getUserAccountInfo(state.token).then(response => {
          if (!response.data) {
            reject('error')
          }
          const data = response.data
          commit('SET_USERID', data.userId)
          commit('SET_NAME', data.userRealName)
          commit('SET_AVATAR', data.avatar)
          commit('SET_LANGUAGE', data.lang)
          commit('SET_THEME', data.theme)
          commit('SET_INTRODUCTION', data.defaultHome)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        service.logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_USERID', '')
          removeToken()
          resolve()
        }).catch(error => {
          console.log(error)
        })
        // TODO resolve放在外面 加快登出速度，我们不关心logout的结果
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_USERID', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        service.getUserAuths(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.auths.split(','))
          resolve()
        })
      })
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setTheme({ commit }, theme) {
      commit('SET_THEME', theme)
    }
  }
}

export default user

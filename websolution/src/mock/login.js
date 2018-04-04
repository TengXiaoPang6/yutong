const userMap = {
  admin: {
    data: {
      roles: ['admin'],
      token: 'admin',
      introduction: '系统管理员',
      avatar: '',
      name: '管理员'
    },
    code: 1
  }
}

export default {
  loginByUsername: config => {
    return userMap['admin']
  },
  getUserAccountInfo: config => {
    if (userMap['admin']) {
      return userMap['admin']
    } else {
      return false
    }
  },
  logout: () => {
    return { msg: 'success', code: 1 }
  }
}

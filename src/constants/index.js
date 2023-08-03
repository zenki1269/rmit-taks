
export const typeLocal = {
  ACCOUNTS: 'ACCOUNTS',
  ACCOUNT_LOGIN: 'ACCOUNT_LOGIN',
  MOVIE_LIST: 'MOVIE_LIST',
  LIST_COMMENT: 'LIST_COMMENT'
}

export const messageAuth = {
  REGISTER_SUCCESS: 'Bạn đã đăng ký tài khoản thành công',
  REGISTER_EXITS: 'Email đã được đăng ký',
  LOGIN_SUCCESS: 'Bạn đã đăng nhập tài khoản thành công',
  LOGIN_ERROR: 'THông tin tài khoản hoặc mật khẩu không đúng'
}

export const isEmptyObject = (obj) => {
  return JSON.stringify(obj) === '{}'
}
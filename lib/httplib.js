function getAuthData() {
  const auth = this.$cookie.get('__vmctHarimau')
  const authObj = auth ? JSON.parse(auth).auth : null
  const ts = Math.round(new Date().getTime() / 1000)
  if (authObj && ts < authObj.expired_at) {
    return authObj
  }
  return null
}

function getAuthToken() {
  const auth = getAuthData()
  if (auth) {
    return auth.access_token
  }
  return ''
}

export const atAxios = axios.create({
  baseURL: 'http://api.vmcafe.id',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAuthToken()}`,
  },
})

export function getToken() {
  return getAuthData()
}

export function clearToken() {
  this.$cookie.delete('__vmctHarimau')
}

class Cookie {
  set(key, value) {
    document.cookie = `${key}=${value}`
  }

  get(key) {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(`${key}=`))
      .split('=')[1];
  }
}

export const CookieModule = new Cookie()

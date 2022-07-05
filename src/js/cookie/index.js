class Cookie {
  set(key, value, days) {
    let expires = ''

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = `; expires= + ${date.toUTCString()}`;
    }

    document.cookie = `${key}=${value}${expires};path=/`
  }

  get(key) {
    if (!document.cookie) {
      return null
    }
    return document.cookie?.split('; ')?.find(row => row.startsWith(`${key}=`))?.split('=')[1];
  }
}

export const CookieModule = new Cookie()

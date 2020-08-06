export const setCookie = (key, value) => {
  const MS_IN_HOUR = 3600 * 1000;
  const now = new Date();
  let time = now.getTime();
  time += MS_IN_HOUR;
  now.setTime(time);

  document.cookie = key + value + '; expires=' + now.toUTCString();
};

export const getCookie = (key) => {
  const name = key + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const removeCookie = (key) => {
  document.cookie = key + '=; Max-Age=0';
};

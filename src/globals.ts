/**
 * Use this file to register any variables or functions that should be available globally
 * ideally you should make it available via the window object
 * as well as the Vue prototype for access throughout the app
 * (register globals with care, only when it makes since to be accessible app wide)
 */

// I recommend you to change the key 🧠

// Vue.prototype.decryptData = (token) => {
//   var base64Url = token.split('.')[1];
//   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   var jsonPayload = decodeURIComponent(
//     window
//       .atob(base64)
//       .split('')
//       .map(function (c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join('')
//   );

//   return JSON.parse(jsonPayload);
// };

// Vue.prototype.$cookies = {
//   get: (name) => {
//     if (document.cookie.split(';').filter((item) => item.includes(name)).length) {
//       if (document.cookie.split('; ').find((row) => row.startsWith(name))) {
//         return document.cookie
//           .split('; ')
//           .find((row) => row.startsWith(name))
//           .split('=')[1];
//       }
//     }
//     return '';
//   },
//   set: (name, value, days, options) => {
//     var expires = '';
//     if (days) {
//       var date = new Date();
//       date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//       expires = '; expires=' + date.toUTCString();
//     }
//     let cookie = name + '=' + (value || '') + expires + '; path=/';

//     if (options) {
//       if (options.domain) {
//         cookie += '; domain=' + options.domain;
//       }
//       if (options.secure) {
//         cookie += '; secure';
//       }
//       if (options.httpOnly) {
//         cookie += '; HttpOnly';
//       }
//       if (options.sameSite) {
//         cookie += '; SameSite=' + options.sameSite;
//       }
//     }

//     document.cookie = cookie;
//   },
//   delete: (name, options = {}) => {
//     let extra = '';
//     if (options.domain) {
//       extra += 'domain=' + options.domain;
//     }
//     document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;' + extra;
//   },
// };


// Cookie Manager is writted by Lautaro Umpierrez && it do all actions manipulating the localStorage.
class CookieManager {
  removeCookie(cookieName){
    return new Promise((resolve, reject)=>{
      if(window.localStorage.getItem(cookieName)){
        window.localStorage.removeItem(cookieName);
        resolve();
      }else{
        reject(`The cookie with the name {${cookieName}} dont exists or anything`);
      }
    });
  }
  getCookie(cookieName){
    return new Promise((resolve,reject)=>{
      let cookie = JSON.parse(window.localStorage.getItem(cookieName));
      if(window.localStorage.getItem(cookieName !== null)){
        if(cookie.expirationTime <= Date.now()){
          window.localStorage.removeItem(cookieName);
          reject('The cookie are expired');
        }else{
          resolve(cookie.data);
        }
      }else{
        reject('The Cookie Name Dont working');
      }
    });
  }
  setCookie(cookieName, cookieData, expirationTime= (Date.now() + 1000*60*60*24*30)){
    return new Promise((resolve,reject)=>{
      if(cookieName !== null && cookieData !== null)
      {
        let cookie = {
          expirationTime,
          data: cookieData
        };
        window.localStorage.setItem(cookieName, JSON.stringify(cookieData));
        resolve({created: true});
      }else{
        reject('{cookieName} && {cookieData} is necessary for use the setCookie method setCookie("cookieName", {//cookie data})')
      }
    });
  }
}

export default CookieManager;

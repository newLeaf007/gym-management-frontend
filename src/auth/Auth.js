//islogIn=>
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

//is admin
export const isAdmin = () => {
  let data = JSON.parse(localStorage.getItem("data"))?.member?.roles[0]?.name;
  if (new String(data).valueOf() == new String("ADMIN_USER").valueOf())
    return true;
  else return false;
};

//doLogin =>data=>set to localstorage

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//do Logout => remove from localstorage

export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

//get current user
export const getCurrentUser = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data"))?.member;
  } else return undefined;
};


//get token 
export const getToken = () =>{
    if(isLoggedIn()){
        console.log(JSON.parse(localStorage.getItem("data"))?.token);
        return JSON.parse(localStorage.getItem("data"))?.token;
    }else return undefined;
}

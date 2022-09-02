//islogIn=>
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data == null) {
    return false;
  } else {
    return true;
  }
};


//is admin
export const isAdmin=()=>{
    let data = localStorage.getItem("data")?.member?.roles[0]?.name;
    console.log(data)
    if(new String(data).valueOf() == new String("ADMIN_USER").valueOf()) return true;
    else return false;
}

//doLogin =>data=>set to localstorage

export const doLogin = (data,next) => {
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

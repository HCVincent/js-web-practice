const loginform = document.querySelector("#loginform");
loginform.onsubmit = async function (evt) {
  loginwarning.style.display = "none";
  evt.preventDefault();

  console.log(username.value, password.value);

  let res = await fetch(
    `http://localhost:3000/users?username=${username.value}&password=${password.value}`
  ).then((res) => res.json());

  console.log(res[0]);
  if (res.length > 0) {
    localStorage.setItem(
      "token",
      JSON.stringify({ ...res[0], password: "******" })
    );
    location.href = "/admin/views/home/index.html";
  } else {
    //失败
    console.log("失败");
    loginwarning.style.display = "block";
  }
};

import { auth, storage, db } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

//create account  ==> createUserwithemailandpassword
//upload image    ==> ref , uploadbytes , getdownloadurl
//set complete data into firestore  ==> setdoc , doc

const firstName = document.querySelector("#firstname");
const secondName = document.querySelector("#secondname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const register_form = document.querySelector("#register_form");
const register_btn = document.querySelector("#register_btn");

register_form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.target);

  const firstname = e.target[0].value;
  const secondname = e.target[1].value;
  const email = e.target[2].value;
  const password = e.target[3].value;

  //create account
  register_btn.disabled = true;
  register_btn.innerText = "Loading...";
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log("user=>", user.user.uid);
      // upload user image

      if (user) {
        window.location = "login.html";
      }
    })
    .catch((err) => {
      alert(err), (register_btn.disabled = false);
      register_btn.innerText = "Submit";
    });
});

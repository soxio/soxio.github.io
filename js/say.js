/* global CONFIG */

/**
 * 显示一句话
 * @param {string} content
 * @param {string} author
 * @param {string} from
 */
function say(content, author, from) {
  console.log(content, author, from);
  document.querySelector("#say-content").innerText = content;
  if (author) {
    document.querySelector("#say-author").innerText = author;
  }
  if (from) {
    document.querySelector("#say-from").innerText = "「" + from + "」";
  }
}

window.addEventListener("load", function () {
  let xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn?c=i');
  xhr.send();
  xhr.responseType = 'json';
  xhr.onload = function () {
    if (xhr.response) {
      say(xhr.response.hitokoto, xhr.response.from_who, xhr.response.from);
    } else {
      say('不经一番寒彻骨，怎得梅花扑鼻香。', '黄櫱禅师');
    }
  }

});

// 播放器
window.addEventListener("load", function () {


  console.log('执行了');
  let apContainer = document.createElement("div");
  apContainer.id = "aplayer";
  document.body.append(apContainer);
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    loop: 'all',
    audio: [
      {
        name: "Komorebi",
        artist: "m-taku",
        url: "https://cdn.jsdelivr.net/gh/soxio/imglib/Komorebi.mp3",
        cover: "https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-0.jpg",
      },
    ],
  });

});



/**
 * 获取在线 API
 */
/* function fetchApiToSay() {
  if (CONFIG.say.api) {
    fetch(CONFIG.say.api)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            if (CONFIG.say.hitokoto) {
              say(data.hitokoto, data.from_who, data.from);
            } else {
              let sentence = data[Math.floor(Math.random() * data.length)];
              if (sentence.content) {
                say(sentence.content, sentence.author, sentence.from);
              } else {
                say(sentence);
              }
            }
          });
        } else {
          throw new Error(
            CONFIG.say.api + ", HTTP error, status = " + res.status
          );
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
}


window.addEventListener("DOMContentLoaded", fetchApiToSay);
window.addEventListener("pjax:success", () => {
  Yun.utils.isHome() ? fetchApiToSay() : null;
}); */


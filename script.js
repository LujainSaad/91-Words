const posts = {
  1: {
    name: "لجين آل درع",
    text: " أدعو الله أن يظل علم بلادي عاليًا مرفرفًا على الدّوام، فعيدنا اليوم يعكس لنا ماضٍ أصيل ويُظهر لنا مستقبلًا زاهرًا",
    major: "علوم الحاسب",
  },
  2: {
    name: "رنيم شلوان",
    text: "دام عزِّك ياوطن، للفخر، للمجد، للعلياء نرفع بهمة راياتك الخضراء، ومعك طموحنا يُعانق السَّماء.",
    major: "علوم الحاسب",
  },
  3: {
    name: "خلود الشهري",
    text: "وما لعينيك الا الحب يا وطني وما لخديك إلا اللثم والقُبل ",
    major: "نظم معلومات",
  },
  4: {
    name: "امل الشديدي",
    text: "٩١ عاماً لشعبٍ وارض وملك ، كل عام وانت تعانق السماء مجداً",
    major: "نظم معلومات",
  },
  5: {
    name: "أثير آل فايع",
    text: "اللهم اجعل أيام المملكة كلها فرح ونصر وسلام💚💚",
    major: "علوم الحاسب",
  },
  6: {
    name: "سارة هاني ابو غزالة",
    text: "اللهم أدم علينا الأمن و الأمان",
    major: "نظم المعلومات",
  },
  7: {
    name: "",
    text: "",
    major: "",
  },
  8: {
    name: "",
    text: "",
    major: "",
  },
  9: {
    name: "",
    text: "",
    major: "",
  },
  10: {
    name: "",
    text: "",
    major: "",
  },
  11: {
    name: "",
    text: "",
    major: "",
  },
  12: {
    name: "",
    text: "",
    major: "",
  },
  13: {
    name: "",
    text: "",
    major: "",
  },
  14: {
    name: "",
    text: "",
    major: "",
  },
  15: {
    name: "",
    text: "",
    major: "",
  },
  16: {
    name: "",
    text: "",
    major: "",
  },
  17: {
    name: "",
    text: "",
    major: "",
  },
  18: {
    name: "",
    text: "",
    major: "",
  },
  19: {
    name: "",
    text: "",
    major: "",
  },
  20: {
    name: "",
    text: "",
    major: "",
  },
  21: {
    name: "",
    text: "",
    major: "",
  },
  22: {
    name: "",
    text: "",
    major: "",
  },
  23: {
    name: "",
    text: "",
    major: "",
  },
  24: {
    name: "",
    text: "",
    major: "",
  },
  25: {
    name: "",
    text: "",
    major: "",
  },
  26: {
    name: "",
    text: "",
    major: "",
  },
  27: {
    name: "",
    text: "",
    major: "",
  },
  28: {
    name: "",
    text: "",
    major: "",
  },
};

/////////////
let n = document.querySelectorAll(".icons_icon").length;
let Name = document.querySelector(".popup_name");
let Tx = document.querySelector(".popup_text");
let Major = document.querySelector(".popup_major");

for (let i = 0; i < n; i++) {
  document
    .querySelectorAll(".icons_icon")
    [i].addEventListener("click", function () {
      Name.innerHTML = "    " + posts[i + 1].name;
      Tx.innerHTML = "    " + posts[i + 1].text;
      Major.innerHTML = "    " + posts[i + 1].major;
    });
}

document
  .querySelectorAll(".popup_close")
  [i].addEventListener("click", function () {
    Name.innerHTML = "";
    Tx.innerHTML = "";
    Major.innerHTML = "";
  });
/*
for (let i = 1; i <= 30; i++) {
  let img = url(`images/icon-${i+1}.jpeg`);
  document.querySelectorAll(".icons_icon")[i].style.backgroundImage = "img";
}*/

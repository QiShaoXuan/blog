// 自动打卡，打开门户网站，复制代码至 console，不可关闭

const timeReminder = ({ time, around = 0, callback = null }) => {
  if (!time) {
    return;
  }
  const targetTime = new Date(time).getTime();
  const currentTime = new Date().getTime();
  if (targetTime < currentTime) {
    return;
  }
  const t = randomNum(
    targetTime - currentTime - around,
    targetTime - currentTime + around
  );

  console.log(`将于 ${timestampToTime(currentTime + t)} 执行`);

  setTimeout(() => {
    callback && callback();
  }, t);
};

function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      return 0;
  }
}
function timestampToTime(timestamp = Date.parse(new Date()), isMs = true) {
  const date = new Date(timestamp * (isMs ? 1 : 1000));
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
const getDate = time => {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth() +
    1}/${date.getDate()} ${time}`;
};

timeReminder({
  time: getDate("21:00"), // 打卡时间
  around: 30 * 60 * 1000, // 在打卡时间的阈值，time +- around
  callback: () => {
    // 执行页面的打卡函数或直接点击按钮
    try {
      window.checkIn();
    } catch (e) {
      document
        .querySelector("#clockLink")
        .querySelector("button")
        .click();
    }
    // window.close();
  }
});

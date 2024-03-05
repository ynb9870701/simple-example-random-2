import dayjs from 'dayjs';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 日期检测 检测当前日期是否在 date 之后
function isAfter(currentTime, compareTime) {
  // 使用 Day.js 解析时间
  const current = dayjs(currentTime);
  const compare = dayjs(compareTime);
  
  // 判断当前时间是否在比较时间之后
  return current.isAfter(compare);
}

module.exports = { random, isAfter }
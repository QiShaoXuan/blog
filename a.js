const str = ''

const arr = []
for (let i = 20; i < 29; i++) {
  const num = i + 1 < 10 ? `0${i + 1}` : i + 1

  const url = `http://storage.360buyimg.com/douya/spring-cms/image0${num}.png`

  arr.push(`<img src="${url}"/>`)
  arr.push(`"descImg": "${url}",`)
  arr.push('')

}


console.log('arr', arr.join(`\n`));

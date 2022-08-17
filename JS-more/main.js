function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('A')
    }, 1000)
  })
}
function b() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('B')
    }, 1000)
  })
}
function c() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('C')
    }, 1000)
  })
}

;(async () => {
  const arr = [a, b, c]
  for (let i = 0; i < arr.length; i += 1) {
    console.log(await arr[i]())
  }
})()



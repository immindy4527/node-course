// new Promise(executor);
// // new 的時候要傳入 executor --> executor 也只是一個函式

// function executor(resovle, reject){
// resolve是成功，reject是失敗
// }

// then 方法執行完會另外產生一個新的 promise 結果

let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer, cb) {
  return new Promise((resolve, reject) => {
    // 做非同步工作
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
    }, timer);
  });
};

//刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)
let doBrushPromise = doWork("刷牙", 3000);
// console.log(doBrushPromise); // => Promise {<pending>}
doBrushPromise
.then((result) => {
  // 這邊就接到刷牙成功的結果
  console.log(result);

  let doEatPromise = doWork("吃早餐", 5000);
  return doEatPromise;
})
.then((result)=>{
    // 這邊就接到吃早餐成功的結果
console.log(result);

let doHWPromise = doWork('寫功課', 3000);
return doHWPromise;
})
.then((result) => {
    console.log(result);
});


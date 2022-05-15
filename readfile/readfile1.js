// const fs = require('fs');

// fs.readFile('test11111.txt', 'utf-8', (err, data) => {
//   if (err) {
//     // 錯誤了
//     console.log('喔喔喔，發生錯誤了');
//     console.error(err);
//   } else {
//     // 因為沒有 err，所以是正確的
//     console.log(data);
//   }
// });

// Promise寫法
const fs = require('fs')
let p = new Promise((resolve, reject) => {
  fs.readFile('txxt.txt','utf-8', (err, data) => {
    if (err) {
      // 錯誤
      reject(err);
    }else{
      //否則正確
      resolve(data);
    }
  })
});


p.then((result) => {
  console.log(`讀取成功: ${result}`)
}).catch((error) => {
  console.error(`讀取失敗: `, error);
});
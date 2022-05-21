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

(async () => {
    // 用try包起來
    try {
        let Brush = await doWork('text.txt')
        console.log('刷牙', Brush);
        let Eat = await doWork('text.txt')
        console.log('吃早餐', Eat);
    }catch(e) {
        console.err(e);
    }
})
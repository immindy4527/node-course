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
        let result = await getReadfilePromise('text.txt')
        console.log('promise版本的readfile', result);
    }catch(e) {
        
    }
})
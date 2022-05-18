const axios = require('axios');
const fs = require('fs');

fs.readFile('stock.txt', 'utf-8', (err, stockNo) => {
    if (err){
        console.error('read file error', err);
    }else{
        console.log('read stock no. from file:', stockNo);
        // https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220518&stockNo=2330&_=1652884833594
        axios
        .get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
            params: {
                response: 'json',
                date: '20220518',
                stockNo: stockNo
            }
        })
        .then((response) =>{
            console.log(response.data);
        })
        .catch((e) =>{
            console.error(e);
        });
    }
});
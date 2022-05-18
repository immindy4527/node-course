const axios = require('axios');

// https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220518&stockNo=2330
axios
.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
    params: {
        response: 'json',
        date: '20220518',
        stockNo: '2330'
    }
})
.then((response) => {
    console.log(response.data)
})
.catch((e) => {
    console.error(e);
});
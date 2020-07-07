const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bs27qjnrh5rc90r53chg" // Replace this
const finnhubClient = new finnhub.DefaultApi()

//

const socket = new WebSocket('wss://ws.finnhub.io?token=bs27qjnrh5rc90r53chg');

export default {
    stockTest() {
        finnhubClient.aggregateIndicator("AAPL", "D", (error, data, response) => {
            console.log(data)
        });
    },
    connection() {
        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
            socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
            socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
        });
        
    },
    listen() {
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });
    },
    unsubscribe(symbol) {
        socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
    }

}
const express = require('express')
const app = express()

const cors = require('cors')

const config = require('./config')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URL)
.then( () => console.log('몽고디비 연결 성공'))
.catch( (error) => console.log(`${error} 이 발생하였습니다.`))

const port = 5300

const corsOption = {
    origin : 'http://localhost:3000' ,
    credentials : true ,
}

app.use(cors(corsOption))

app.get('/', (req, res) => {
    res.send('test Server')
})
app.use((req, res, next) => {
    res.status(404).send('페이지를 찾을 수 없습니다.')
})
app.use((req, res, err, next) => {
    console.error(err.stack)
})
app.listen(port , () => {
    console.log(`서버 ${port}번 포트 설정`)
})
const express = require('express');
const bp = require('body-parser');
const path = require('path')
const app = express();
app.use(bp.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
const port = 3000;
const eheh = require('./dbData');

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/javascript', express.static(path.join(__dirname, 'javascript')));

app.get('/anasayfa', eheh.degerler)






app.listen(port, () => console.log(`Port Çalışıyor :  ${port}!`));

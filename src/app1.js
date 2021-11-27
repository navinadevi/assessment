require("./db/mongoose.js");
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const multer = require('multer');
const csv = require('csvtojson');

const app = express();

const routes = require('./routes');
const { resolve } = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname,'public')));

var storageEngine = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});

var upload = multer({storage : storageEngine});

app.post('/api/upload', upload.single('csv'), (req, res) => {
    console.log(req.file);
    res.send("file uploaded successfully");
    csv()
    .fromFile(req.file.path)
    .then((jsonObj)=>{
        console.log(jsonObj);
        
        dummy.insertMany(jsonObj,(err,data) => {
            if(err){
                console.log(err);
            }else{
                res.json({
                    'success' : "uploaded successfully",
                    'data' : data
                })
            }
        })
    })
})

routes.apiRoutes(app);

app.listen(3070, function() {
    console.log("The server runs at port : 3070");
})
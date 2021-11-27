require("./db/mongoose.js");
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
var csv = require('csvtojson');

// var Converter = require("csvtojson").Converter;

// var converter = new Converter({});

const app = express();

const routes = require('./routes');
const { resolve } = require("path");

const CsvModel = require("./models/csv.js");
const User = require('./models/user');
const Account = require('./models/account');
const Agent = require('./models/agent');
const Carrier = require('./models/carrier');
const Lob = require('./models/lob');
const Policy = require("./models/policy.js");

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'public')));

function userCollection(userArr) {
    return new Promise((resolve, reject) => {
        User.insertMany(userArr, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve("User collection uploaded successfully");
            }
        })
    })
}

function accountCollection(accountArr) {
    return new Promise((resolve, reject) => {
        Account.insertMany(accountArr, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve("Account collection uploaded successfully");
            }
        })
    })
}

function agentCollection(agentArr) {
    return new Promise((resolve, reject) => {
        Agent.insertMany(agentArr, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve("Agent collection uploaded successfully");
            }
        })
    })
}

function carrierCollection(carrierArr) {
    return new Promise((resolve, reject) => {
        Carrier.insertMany(carrierArr, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve("carrier collection uploaded successfully");
            }
        })
    })
}

function lobCollection(lobArr) {
    return new Promise((resolve, reject) => {
        Lob.insertMany(lobArr, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve("Lob collection uploaded successfully");
            }
        })
    })
}

function policyCollection(policyArr) {
    return new Promise((resolve, reject) => {
        Policy.insertMany(policyArr, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve("Policy collection uploaded successfully");
            }
        })
    })
}


app.post('/api/upload', (req, res) => {
    csv()
        .fromFile('./dumpdata/data-sheet.csv')
        .then(function (jsonArrayObj) {
            //console.log(jsonArrayObj); 
            //res.send(jsonArrayObj);
            let userArr = [];
            let accountArr = [];
            let agentArr = [];
            let carrierArr = [];
            let lobArr = [];
            let policyArr = [];
            let userObj = {};
            let accountObj = {};
            let agentObj = {};
            let carrierObj = {};
            let lobObj = {};
            let policyObj = {};

            for (var i = 0; i < jsonArrayObj.length; i++) {

                let userCheck = userArr.find((item) => {
                    return item.email == jsonArrayObj[i].email;
                });
                if (!userCheck) {
                    userObj.firstname = jsonArrayObj[i].firstname;
                    userObj.email = jsonArrayObj[i].email;
                    userObj.dob = jsonArrayObj[i].dob;
                    userObj.phone = jsonArrayObj[i].phone;
                    userObj.address = jsonArrayObj[i].address;
                    userObj.state = jsonArrayObj[i].state;
                    userObj.city = jsonArrayObj[i].city;
                    userObj.zip = jsonArrayObj[i].zip;
                    userArr.push(userObj);
                }

                let accountCheck = accountArr.find((item) => {
                    return item.account_name == jsonArrayObj[i].account_name;
                });

                if (!accountCheck) {
                    accountObj.account_name = jsonArrayObj[i].account_name;
                    accountObj.account_type = jsonArrayObj[i].account_type;
                    accountArr.push(accountObj);
                }

                let agentCheck = agentArr.find((item) => {
                    return item.agent == jsonArrayObj[i].agent;
                });

                if (!agentCheck) {
                    agentObj.agent = jsonArrayObj[i].agent;
                    agentArr.push(agentObj);
                }

                let carrierCheck = carrierArr.find((item) => {
                    return item.csr == jsonArrayObj[i].csr;
                });

                if(!carrierCheck){
                    carrierObj.csr = jsonArrayObj[i].csr;
                    carrierArr.push(carrierObj);
                }

                let lobCheck = lobArr.find((item) => {
                    return item.producer == jsonArrayObj[i].producer;
                });

                if(!lobCheck){
                    lobObj.producer = jsonArrayObj[i].producer;
                    lobObj.company_name = jsonArrayObj[i].company_name;
                    lobObj.category_name = jsonArrayObj[i].category_name;
                    lobArr.push(lobObj);
                }

                let policyCheck = policyArr.find((item) => {
                    return item.policy_number == jsonArrayObj[i].policy_number;
                })

                if(!policyCheck){
                    policyObj.policy_number = jsonArrayObj[i].policy_number;
                    policyObj.policy_mode = jsonArrayObj[i].policy_mode;
                    policyObj.policy_type = jsonArrayObj[i].policy_type;
                    policyObj.policy_amount = jsonArrayObj[i].policy_amount;
                    policyObj.policy_start_date = jsonArrayObj[i].policy_start_date;
                    policyObj.policy_end_date = jsonArrayObj[i].policy_end_date;
                    policyArr.push(policyObj);
                }
            }
            
            Promise.all([userCollection(userArr), accountCollection(accountArr), agentCollection(agentArr),carrierCollection(carrierArr), lobCollection(lobArr), policyCollection(policyArr)]).then((values) => {
                console.log(values);
            }).catch((err) => {
                console.log(err);
            })
            res.send("uploaded");
        })
})

routes.apiRoutes(app);

app.listen(3070, function () {
    console.log("The server runs at port : 3070");
})

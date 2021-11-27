const apiRoutes = function(app){
    //api routes
    app.use("/api/user",require("./api/user"));
    app.use("/api/account",require("./api/account"));
    app.use("/api/policy",require("./api/policy"));
}

module.exports = {
    apiRoutes
}
const res = require("express/lib/response");

class NewsController{
    
    index(req, res){
        res.render('news');
    }
    show(req, res){
        res.send('BAT NGO CHUA');
    }
}

module.exports = new NewsController;


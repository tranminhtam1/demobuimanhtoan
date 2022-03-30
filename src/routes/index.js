 const newsRouter  = require('./news');
 const SiteRouter  = require('./site');

function route(app){
    // app.get('/', (req, res) => {  
    //     res.render('home'); 
    //   });
    //   app.get('/search', (req, res) => {  
    //     res.render('search'); 
    //   });


    
    app.use('/news',newsRouter); 
    app.use('/', SiteRouter); 
}

module.exports = route;
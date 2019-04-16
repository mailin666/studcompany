const express = require("express")
var Sequelize=require("sequelize");

var cors = require('cors');
var axios=require("axios");
var app = express();
app.use(cors())

app.use('/', express.static('public'))
app.use(express.json());       
app.use(express.urlencoded()); 

var sequelize=new Sequelize('Joc2', 'root','',{ 
     dialect:'mysql',
     host:'localhost'
 });

sequelize.authenticate().then(function(){console.log('Succes');}).catch(function(){console.log('Eroare');})


var Utilizatori = sequelize.define('users', {
     username: {
                type:Sequelize.STRING,
                 unique:{
                    msg:'This username already exists'
                },
                 allowNull: false
                
        },
    email: { 
              type:Sequelize.STRING,
              allowNull:false,
              validate: {
                isEmail:{
                    msg: 'Email address is not valid'}}
            },
    parola: {
                type:Sequelize.STRING,
                allowNull: false,
                validate:{
                      len:{
                        args:[5,15],
                        msg:'Password must have between 5 and 15 characters'
                         },
                      notEmpty:true,
               }
    },
    gen: Sequelize.STRING,
    tara: Sequelize.STRING,
    nivel: Sequelize.STRING,
    bani: Sequelize.INTEGER,
    energie: Sequelize.INTEGER
    
});

var Magazin=sequelize.define('actes', {
    username: {
                type:Sequelize.STRING,
                 allowNull: false
                
        },
    a1: Sequelize.INTEGER,
    a2: Sequelize.INTEGER,
    a3: Sequelize.INTEGER,
    a4: Sequelize.INTEGER,
    a5: Sequelize.INTEGER,
    a6: Sequelize.INTEGER,
    a7: Sequelize.INTEGER,
    a8: Sequelize.INTEGER,
    a9: Sequelize.INTEGER,
    a10: Sequelize.INTEGER,
    a11: Sequelize.INTEGER,
    a12: Sequelize.INTEGER
});

app.get('/utilizatori', function(request, response) {
     Utilizatori.findAll().then(function(utilizatori){
         if(utilizatori){
              response.status(201).send(utilizatori)
        }else{
              response.status(404).send('Eroare la regasire!')
        }
    })
})

app.get('/magazin', function(request, response) {
     Magazin.findAll().then(function(magazin){
         if(magazin){
              response.status(201).send(magazin)
        }else{
              response.status(404).send('Eroare la regasire!')
        }
    })
})

app.get('/magazinGet/:username', function(request, response) {
    Magazin.findOne({where: {username:request.params.username}}).then(function(users) {
        if(users) {
            response.status(201).send(users)
        }else{
            response.status(404).send("Nu exista users cu id-ul specificat!")
        }
    })
})

app.post('/magazin',(request,response)=>{
    Magazin.create(request.body).then((user)=>{
        response.status(201).json(user)
    }).catch((err)=>{
        console.log(err)
    })
});


app.put('/magazinPut/:username',async function(request,response){
    try {
        let inregistrare=await Magazin.findOne({where: {username:request.params.username }});
            
        if(inregistrare){
           await  inregistrare.update(request.body);
            response.status(200).json(inregistrare);
        }
        else {
            response.status(404).send("The name was not found");
        }
        
    } catch(error){
        response.status(500).send(error.message);
    }
  
});

app.get('/verificare/:username', function(request, response) {
    Utilizatori.findOne({where: {username:request.params.username}}).then(function(users) {
        if(!users) {
            response.status(201).send("ok")
        }else{
            response.status(404).send("Username-ul deja exista! Va rugam incercati altul.")
        }
    })
})

app.get('/verificareMail/:email', function(request, response) {
    Utilizatori.findOne({where: {email:request.params.email}}).then(function(users) {
        if(!users) {
            response.status(201).send("ok")
        }else{
            response.status(404).send("Exista deja un cont pe aceasta adresa de email.")
        }
    })
})

app.get('/utilizatori/:username', function(request, response) {
    Utilizatori.findOne({where: {username:request.params.username}}).then(function(users) {
        if(users) {
            response.status(201).send(users)
        }else{
            response.status(404).send("Nu exista users cu id-ul specificat!")
        }
    })
})

app.get('/administrator.html/users/:tara', function(request, response) {
     Utilizatori.findAll({where: {tara:request.params.tara}}).then(function(utilizatori){
         if(utilizatori){
            
              response.status(201).send(utilizatori)
        }else{
              response.status(404).send('Eroare la regasire!')
        }
    })
})

app.post('/users',(request,response)=>{
    Utilizatori.create(request.body).then((user)=>{
        response.status(201).json(user)
    }).catch((err)=>{
        console.log(err)
    })
})


app.listen(8080);

module.exports = app;
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const path = require('path')
const app = express()
var corsOptions = {
  origin : "http://localhost:4200"
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
require('./dotenv')
//myClasses
const Utilisateur = require('./classes/Utilisateur')
const WsRenderer = require('./classes/WsRenderer')
// Replace process.env.DB_URL with your actual connection string
const connectionString = process.env.DB_URL;
MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(client => {
  console.log('Connected to Database')
  const db = client.db('eKalyMaster')
  const quotesCollection = db.collection('quotes')

  // ========================
  // Middlewares
  // ========================
  app.set('view engine', 'ejs')
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(express.static('public'))

  // ========================
  // Routes
  // ========================
  app.get('/', (req, res) => {
    db.collection('quotes').find().toArray()
      .then(quotes => {
        res.render('index.ejs', { quotes: quotes })
      })
      .catch(/* ... */)
  })
  //quotes
  app.get('/quotes', (req, res) => {
    db.collection('quotes').find().toArray()
      .then(quotes => {
        res.json(quotes)
      })
      .catch(/* ... */)
  })

  app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
  })

  app.put('/quotes', (req, res) => {
    quotesCollection.findOneAndUpdate(
      { name: 'Yoda' },
      {
        $set: {
          name: req.body.name,
          quote: req.body.quote
        }
      },
      {
        upsert: true
      }
    )
      .then(result => res.json('Success'))
      .catch(error => console.error(error))
  })

  app.delete('/quotes', (req, res) => {
    quotesCollection.deleteOne(
      { name: req.body.name }
    )
      .then(result => {
        if (result.deletedCount === 0) {
          return res.json('No quote to delete')
        }
        res.json('Deleted Darth Vadar\'s quote')
      })
      .catch(error => console.error(error))
  })
  //type_utilisateurs
  app.get('/type_utilisateur', (req, res) => {
    db.collection('type_utilisateur').find().toArray()
      .then(utilisateurs => {
        res.json(utilisateurs)
      })
      .catch(/* ... */)
  })
  //users
  app.get('/utilisateurs', (req, res) => {
    db.collection('utilisateurs').find().toArray()
      .then(utilisateurs => {
        res.json(utilisateurs)
      })
      .catch(/* ... */)
  })
  //login
  app.post('/login', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    var testLogin = utilisateur.testLogin(db)
    testLogin.then(function (auth) {
      var wsRenderer
      if (auth != null) {
        wsRenderer = new WsRenderer("Login success", 200, {
          token: auth.auth_utilisateur[0].token,
          id_type_u: auth.id_type_u
        })
      }
      else {
        wsRenderer = new WsRenderer("Login failed", 400)
      }
      res.json(wsRenderer.jsonReturn())
    })
  })
  //clients
  app.get('/clients', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    resultat = utilisateur.findUser(db, req.body, "client").then(function (users) {
      var jsonReturn = new WsRenderer("Liste des clients ekaly", 200, users)
      res.json(jsonReturn.jsonReturn())
    })
      .catch(function (error) {
        var jsonReturn = new WsRenderer("Erreur requete liste des clients ekaly", 500)
        res.json(jsonReturn.jsonReturn())
      })
  })
  app.post('/clients', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    utilisateur.insertUser(req, res, db, "client");
  })
  //livreurs
  app.get('/livreurs', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    resultat = utilisateur.findUser(db, req.body, "livreur").then(function (users) {
      var jsonReturn = new WsRenderer("Liste des livreurs ekaly", 200, users)
      res.json(jsonReturn.jsonReturn())
    })
    .catch(function (error) {
      var jsonReturn = new WsRenderer("Erreur requete liste des livreurs ekaly", 500)
      res.json(jsonReturn.jsonReturn())
    })
  })
  app.post('/livreurs', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    utilisateur.insertUser(req, res, db, "livreur");
  })
  //restos
  app.get('/restos', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    resultat = utilisateur.findUser(db, req.body, "resto").then(function (users) {
      var jsonReturn = new WsRenderer("Liste des livreurs ekaly", 200, users)
      res.json(jsonReturn.jsonReturn())
    })
      .catch(function (error) {
        var jsonReturn = new WsRenderer("Erreur requete liste des restaurants ekaly", 500)
        res.json(jsonReturn.jsonReturn())
      })
  })
  app.post('/restos', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    utilisateur.insertUser(req, res, db, "resto");
  })
  //admin
  app.post('/admin', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    utilisateur.insertUser(req, res, db, "admin");
  })
//ending routes
})

//Listen
const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? 7500 : 3000
app.listen(port, (req, res) => {
  console.log('RUNNING');
})

const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const path = require('path')
const app = express()
const _id_client = "624605e5302389a762d5fcff";
var corsOptions = {
  origin : "http://localhost:4200"
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
require('./dotenv')
const Utilisateur = require('./classes/Utilisateur')
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

  })
  //clients
  app.get('/clients', (req, res) => {
    db.collection('utilisateurs').find({ id_type_u: _id_client }).toArray()
      .then(utilisateurs => {
        res.json(utilisateurs)
      })
      .catch(/* ... */)
  })
  app.post('/clients', (req, res) => {
    var utilisateur = new Utilisateur()
    utilisateur.construct_data(req.body)
    utilisateur.insertClient(req, res, db);
  })
//ending routes
})

//Listen
const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? 7500 : 3000
app.listen(port, (req, res) => {
  console.log('RUNNING');
})

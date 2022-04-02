var md5 = require('md5');
const Constantes = require('./Constantes');
const {ObjectId} = require('mongodb');
let Utilisateur = class {
  constructor(_id, nom, adresse, supprime, id_type_u, email, mdp) {
  //constructor() {
  }
  construct_data(data) {
    this.nom = data.nom;
    this.adresse = data.adresse;
    this.mdp = data.mdp;
    this.email = data.email;
    this.id_type_u = data.id_type_u
  }

  //login test
  testLogin(db) {
    var authCollection = db.collection('user_complet')
    console.log(this.id_type_u)
    const auth = authCollection.findOne({
      id_type_u: ObjectId(this.id_type_u),
      "auth_utilisateur.email": this.email,
      "auth_utilisateur.mdp" : this.cryptMdp(this.mdp)
    })
    
    if (auth != null) {
      return auth
    }
    else {
      return null
    }
  }
  
  saltedMdp(mdp) {
    return "MyPassword" + mdp +"RussiaMadagascar"
  }
  cryptMdp(mdp) {
    return md5(this.saltedMdp(mdp))
  }

  saltedToken() {
    return "MyPasswordMyEmail" + this.email + this.mdp + Date.now() + "salted"
  }
  createToken() {
    var defaultPassword = this.saltedToken()
    return md5(defaultPassword)
  }

  //inserer
  insertClient(req, res, db) {
    var userCollection = db.collection('utilisateurs');
    var authCollection = db.collection('auth_utilisateur');
    var userBody = {
      nom: this.nom,
      adresse: this.adresse,
      supprime: false,
      id_type_u: ObjectId(Constantes.typeClient())
    }
    var token= this.createToken()
    userCollection.insertOne(userBody).then(result => {
      this._id = result.insertedId
      var cryptedMdp = this.cryptMdp(this.mdp)
      var authBody = {
        mdp: cryptedMdp,
        email: this.email,
        token: token,
        date_token: Date.now(),
        id_user: ObjectId(this._id)
      }
      authCollection.insertOne(authBody).then(result => {
        console.log("Auth inserted");
      }).catch(error => console.error(error))
    }).catch(error => console.error(error))
    res.json({
      meta: {
        msg: 'User created',
        status: 200
      }
    });
  }

  //inserer
  insertAdmin(req, res, db) {
    var userCollection = db.collection('utilisateurs');
    var authCollection = db.collection('auth_utilisateur');
    var userBody = {
      nom: this.nom,
      adresse: this.adresse,
      supprime: false,
      id_type_u: ObjectId(Constantes.typeAdmin())
    }
    var token = this.createToken()
    userCollection.insertOne(userBody).then(result => {
      this._id = result.insertedId
      var cryptedMdp = this.cryptMdp(this.mdp)
      var authBody = {
        mdp: cryptedMdp,
        email: this.email,
        token: token,
        date_token: new Date(),
        id_user: ObjectId(this._id)
      }
      authCollection.insertOne(authBody).then(result => {
        console.log("Auth inserted");
      }).catch(error => console.error(error))
    }).catch(error => console.error(error))
    res.json({
      meta: {
        msg: 'User created',
        status: 200
      }
    });
  }
}
module.exports = Utilisateur;


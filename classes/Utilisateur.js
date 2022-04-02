var md5 = require('md5');
const Constantes = require('./Constantes');
let Utilisateur = class {
  constructor(_id, nom, adresse, supprime, id_type_u, email, mdp) {
  //constructor() {
  }
  construct_data(data) {
    this.nom = data.nom;
    this.adresse = data.adresse;
    this.mdp = data.mdp;
    this.email = data.email;
  }
  //login test
  testLogin(req, res, db) {
    authCollection = client.db.collection('auth_utilisateur');
    var utilisateur = autoCollection.find({
      mdp: this.cryptMdp(this.mdp),
      email : this.email
    })
    return utilisateur.token
  }
  saltedMdp(mdp) {
    return "MyPassword" + mdp + Date.now()+"Russia"
  }
  cryptMdp(mdp) {
    return md5(this.saltedMdp())
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
      id_type_u: Constantes.typeClient()
    }
    var token= this.createToken()
    userCollection.insertOne(userBody).then(result => {
      this._id = result.insertedId
      var authBody = {
        mdp: this.cryptMdp(this.mdp),
        email: this.email,
        token: token,
        date_token: Date.now(),
        id_user: this._id.toString()
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


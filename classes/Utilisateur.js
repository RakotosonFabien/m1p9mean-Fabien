const { Http2ServerResponse } = require('http2');
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
      mdp: this.mdp,
      email : this.email
    })
    return utilisateur.token
  }

  //inserer
  insertClient(req, res, db) {
    var userCollection = db.collection('utilisateurs');
    var authCollection = db.collection('auth_utilisateur');
    var userBody = {
      nom: this.nom,
      adresse: this.adresse,
      supprime: false,
      id_type_u: Constantes.id_type_u
    }
    var authBody = {
      mdp: this.mdp,
      email : this.email
    }
    userCollection.insertOne(userBody).then(result => {
      console.log("User inserted");
      res.json({
        meta: {
          msg: 'User created',
          status : 200
        }
      });
    }).catch(error => console.error(error))
    authCollection.insertOne(authBody).then(result => {
      console.log("Auth inserted");
    }).catch(error => console.error(error))
  }

}
module.exports = Utilisateur;


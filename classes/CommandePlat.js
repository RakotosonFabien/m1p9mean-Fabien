const Constantes = require('./Constantes');
const { ObjectId } = require('mongodb');
let CommandePlat = class {
  constructor(_id, id_plat, id_commande, quantite, montant, montant_revient) {
    this._id = _id;
    this.id_plat = id_plat;
    this.id_commande = id_commande;
    this.quantite = quantite;
    this.montant = montant;
    this.montant_revient = montant_revient;
  }
  insererCommande(data) {
    if (data.id_commande == null) {
      data.id_commande = creerNouveauCommande(data)
    }
  }
  creerNouveauCommande(data) {
    
  }
}
module.exports = CommandePlat;


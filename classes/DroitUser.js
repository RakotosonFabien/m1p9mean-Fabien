var md5 = require('md5');
const Constantes = require('./Constantes');
let DroitUser = class {
  constructor(commandePlat) {
    this.commandePlat = commandePlat
    //constructor() {
  }
  static getDroitUser(user) {
    console.log(user.id_type_u.toString())
    switch (user.id_type_u.toString()) {
      case Constantes.typeAdmin():
        return new DroitUser(false)
        break
      case Constantes.typeResto():
        return new DroitUser(false)
        break
      case Constantes.typeClient():
        return new DroitUser(true)
        break
      case Constantes.typeLivreur():
        return new DroitUser(false)
        break
      
      default:
        return new DroitUser(false)
        break
    }
  }
}
module.exports = DroitUser;


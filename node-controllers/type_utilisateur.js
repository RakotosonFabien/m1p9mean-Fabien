//type_utilisateurs
app.get('/type_utilisateur', (req, res) => {
  db.collection('type_utilisateur').find().toArray()
    .then(utilisateurs => {
      res.json(utilisateurs)
    })
    .catch(/* ... */)
})

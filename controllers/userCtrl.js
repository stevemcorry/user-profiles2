var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req,res) {
    var trueUser = users.filter(function(value) {
      return(value.name === req.body.name && value.password === req.body.password);
    });
    if(trueUser[0]){
      req.session.currentUser = trueUser[0];
      res.send({ userFound: true });
    } else { res.send({userFound: false}); }
  }
};

function authenticate(req, res, next) {
    if (req.session.user && req.session.user.email) {
      return  next()
    } else {
        res.redirect("/singIn")
    }
}

module.exports = authenticate
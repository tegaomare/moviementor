//need auth for if user is not logged in, and then redirect them to homepage
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login')
    } else {
        next();
    }
};

module.exports = withAuth;
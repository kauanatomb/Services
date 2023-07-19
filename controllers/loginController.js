// To Register Page
const registerView = (req, res) => {
	res.render("register", {
	} );
}
// To Login Page 
const loginView = (req, res) => {
	res.render("login", {
	} );
}
module.exports =  {
	registerView,
	loginView
};
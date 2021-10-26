// dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/loginapp?retryWrites=true';
dbPassword = 'mongodb://localhost/loginapp';

module.exports = {
    mongoURI: dbPassword
};
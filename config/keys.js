if(process.env.NODE_ENV === "production"){
    module.exports = require("./prod");
} else {
    module.exports= require("./dev");
}





// module.exports ={
//     googleClientID: '574471941488-9fs4acjk795a9qf7uit48gp3jtfv0b80.apps.googleusercontent.com',
//     googleClientSecret: 'mmOTKBpt1754tfqslJ7nEjlS',
//     mongoURI: 'mongodb://benjaminjoyce:simpsons9711@ds125892.mlab.com:25892/emaily-dev',
//     cookieKey: 'hsadasdfjkljhu'
// };

// // export not working syntax error when importing???
// // export const googleClientID = '574471941488-9fs4acjk795a9qf7uit48gp3jtfv0b80.apps.googleusercontent.com';
// // export const googleClientSecret = 'mmOTKBpt1754tfqslJ7nEjlS';
    

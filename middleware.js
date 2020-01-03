const isLoggedIn = true;
const jwt = require('express-jwt')

//dummy auth middleware

exports.authenticated = jwt ({secret: 'my-secret-key'}) 
// => {
//     if (isLoggedIn)
//         next ()
//     else (
//         res.send ({
//             message:"You are Unauthenticted"
//         })
//     )
// }



const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    console.log("inside Jwt Middleware!!");
    
    // Check if the "authorization" header exists
    if (req.headers.authorization) {
        const token = req.headers["authorization"].split(" ")[1]
        if (token){
            console.log(token);
            // Steps to verify token
            try {
                const jwtResponse = jwt.verify(token,process.env.JWT_SECRET)
                console.log(jwtResponse)
                req.payload = jwtResponse.userId
                next();
            } catch (err) {
                res.status(401).json("Authorization failed... Please login!!!");
            }
        } else {
            res.status(406).json("Please provide a token");
        }
   
    }
}

module.exports = jwtMiddleware

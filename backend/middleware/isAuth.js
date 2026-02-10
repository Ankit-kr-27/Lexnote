import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        let token = req.cookies.token
        if(!token){
            return res.status(401).json({message: "Unauthorized"})
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(401).json({message: "user dont have valid token"})
        }
        req.userId = verifyToken.userId
        next()

    } catch (error) {
        return res.status(500).json({message: "is auth error"})
    }
}

export default isAuth
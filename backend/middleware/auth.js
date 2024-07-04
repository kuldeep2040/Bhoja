import jwt from 'jsonwebtoken'

const authMiddleware = (req, res,next) => {
  const {token} = req.headers;
  if (!token){
    return res.json({success:false,message: 'Token not found'})
  }
  try {
    const token_decode = jwt.verify(token, process.env.SECRET_KEY);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    return res.json({success:false,message: 'Token invalid'})
    
  }

}

export default authMiddleware
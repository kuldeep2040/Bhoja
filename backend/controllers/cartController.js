import userModel from '../models/userModel.js'

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1; 
    } else {
      cartData[req.body.itemId] += 1; 
    }
    await userModel.findOneAndUpdate(
      { _id: req.body.userId },
      { $set: { cartData: cartData } },
      { new: true }
    );
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.json({ success: false, message: "Error Occurred" });
  }
};


const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, {cartData});
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.error("Error removing from cart:", error); // Log the error
    res.json({ success: false, message: "Error Occurred" }); // Return a 500 status code
  }
};


const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({ success: true, message: "Cart fetched", cartData });
  } catch (error) {
    console.error("Error getting cart data:", error);
    res.json({ success: false, message: "Error Occurred" });
  }
}

export {addToCart,removeFromCart, getCart}
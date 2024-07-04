import foodModel from "../models/foodModel.js";
import fs from "fs"

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category
  })
  try {
    await food.save();
    // res.status(200).json(food)
    res.json({ success: true, message: "Photo Done" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" })
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.json({ success: true, data: foods })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" })
  }

}
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id)
    fs.unlink(`uploads/${food.image}`,()=>{
      
    })
    await foodModel.findByIdAndDelete(req.body.id)
    if (!food) {
      return res.status(404).json({ error: "Food not found" });
    }
    res.json({ success: true, message: "Food deleted successfully" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" })
  }

}
export { addFood, listFood, removeFood }

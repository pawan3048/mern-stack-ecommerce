import userModel from "../Model/user.Model.js";

export default class userClass {

  static userApi = async (req, res) => {
    const result = await userModel.find();
    console.log(req.body);
    res.json(result);
  };
  
  static createUser = async (req, res) => {
    
    const { name, category, price } = req.body;
    const {filename} = req.file;
    console.log(name)

    const document = new userModel({
      name,
      category,
      price,
      image: filename,
    });
    const result = await document.save();
    console.log(result)
    res.json(result);
  };

  static userRegister = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(re.body)
  
    const newUser = new User({ name, email, password });
    const ans = await newUser.save();
    console.log(newUser)
  
    res.json({ message: 'User registered successfully' });
  }

}

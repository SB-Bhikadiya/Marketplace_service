const { UserModel, AuthorSaleModel } = require("../model");
const jwt = require("jsonwebtoken");

exports.getUser = async (req, res) => {
  try {
    if (req.query.author) {
      const author = await UserModel.findOne({
        wallet: { $regex: new RegExp("^" + req.query.author + "$", "i") },
      });
      return res.send(author);
    }
    if (req.query.wallet) {
      const user = await UserModel.findOne({
        wallet: { $regex: new RegExp("^" + req.query.wallet + "$", "i") },
      });
      if (user) {
        // Generate JWT token
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
          expiresIn: "7d", // Token expiration time
        });
        return res.send({ user, token });
      } else {
        return res.send({ message: "User not found with wallet address" });
      }
    }
    const users = await UserModel.find().populate("author_sale");
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};

exports.postUser = async (req, res) => {
  const { email, password, wallet, username, avatar } = req.body;
  try {
    if (req.query.from && req.query.to) {
      var getuser = await UserModel.findOne({wallet:req.query.to});
      if (getuser.followers.includes(req.query.from)) {
        getuser.followers.remove(req.query.from);
      } else {
        getuser.followers.push(req.query.from);
      }

      await UserModel.findOneAndUpdate({wallet: req.query.to}, getuser);
      var data = await UserModel.findOne({wallet: req.query.to});
      return res.send(data);
    }
    // Check if email already exists

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    // Create a new user
    const newUser = new UserModel({
      username,
      email,
      password,
      wallet,
      avatar,
    });
    const author = await newUser.save();
    const author_sale = await AuthorSaleModel.create({
      address: wallet,
      sales: 0,
      volume: 0,
      daily_sales: 0,
      weekly_sales: 0,
      floor_price: 0,
      owners: 0,
      assets: 0,
      author: author._id,
    });
    author.author_sale = author_sale;
    await author.save();

    return res.json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
      expiresIn: "7d", // Token expiration time
    });

    // Successful login
    res.json({ message: "Login successful", token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

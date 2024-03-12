const { UserModel } = require("../model");

exports.getUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ wallet: req.query.wallet });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
};

exports.postUser = async (req, res) => {
    const { email, password, address } = req.body;
    console.log(email, password);
    try {
        if (req.query.follow) {
            var getuser = await UserModel.findById(req.query.follow);
            if (getuser.followers.includes(req.body.user)) {
                getuser.followers.remove(req.body.user);
            } else {
                getuser.followers.push(req.body.user);
            }

            await UserModel.findByIdAndUpdate(req.query.follow, getuser)
            var data = await UserModel.findById(req.query.follow);
            return res.send(data)
        }
        // Check if email already exists

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        // Create a new user
        const newUser = new UserModel({
            email,
            password,
            address
        });
        await newUser.save();
        return res.json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        if (error.code === 11000 && error.keyPattern && error.keyPattern.address === 1) {
            return res.status(400).json({ error: 'Address already exists' });
        }
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

        // Successful login
        res.json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


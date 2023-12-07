const express = require("express");
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, avatar, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        const newUser = new UserModel({
          username,
          avatar,
          email,
          password: hash,
        });
        await newUser.save();
        res.status(200).json({
          status: "success",
          message: "User Registered Succesfully",
        });
      }
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", message: "Not able to register the user" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res
            .status(200)
            .json({ status: "success", message: "Wrong Credentials" });
        } else {
          jwt.sign(
            { username: user.username, userId: user._id },
            "masai",
            (err, token) => {
              res.status(200).json({ status: "success", token });
            }
          );
        }
      });
    } else {
      res
        .status(200)
        .json({ status: "success", message: "User Not Registered" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", message: "Not able to register the user" });
  }
});

module.exports = { userRouter };

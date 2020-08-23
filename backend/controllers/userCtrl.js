const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
//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;
//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;
// const sendgridTransport = require("nodemailer-sendgrid-transport");

// let transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key: "vU6cVdOxRtyKHBxoXVQEAQ",
//     },
//   })
// );

const userCtrl = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password, password2 } = req.body;

      const user = await Users.findOne({ email: email });
      if (user)
        return res.status(400).json({ msg: "The email already exists" });

      if (!username || !email || !password || !password2) {
        return res.status(400).json({ msg: "Please fill in all fields " });
      }
      if (username.length < 5) {
        return res.status(400).json({ msg: " Name min 5 Chr" });
      }

      //Check password match
      if (password !== password2) {
        return res.status(400).json({ msg: "Password do not match" });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Password Should be at lest 6 chr" });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        username,
        email,
        password: passwordHash,
        password2: passwordHash,
      });
      await newUser.save();
      res.json({ msg: "You are now registered and can sign in" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

      //if login success create token
      const payload = { id: user._id, name: user.username };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res.json({ token });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  //Reset Password
  resetPassword: async (req, res) => {
    Users.findOne({ email: req.body.email }).then((user) => {
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
          user: "testweb632@gmail.com",
          pass: "lipy145611@",
        },
      });

      let currentDateTime = new Date();
      let mailOptions = {
        from: "testweb632@gmail.com",
        to: "req.body.email",
        subject: `Reset Password`,
        html: `<h2>Welcome</h2>
      <h3> Hello ${user.name}</h3>
      Click on below
      <a href = "http:localhost:5000/change-password" ${currentDateTime} ${user.email}> Click on this link</a>
      `,
      };

      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          Users.updateOne(
            { email: user.email },
            {
              token: currentDateTime,
            },
            function (err, res) {
              return res.status(200).json({ msg: " Email has been sent" });
            }
          );
        }

        transporter.close();
      });
    });
  },

  // resetPassword: async (req, res) => {
  //   crypto.randomBytes(32, (err, buffer) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     const token = buffer.toString("hex");
  //     Users.findOne({ email: req.body.email }).then((user) => {
  //       let transporter = nodemailer.createTransport({
  //         port: 465,
  //         auth: {
  //           user: "testweb632@gmail.com",
  //           pass: "lipy145611@",
  //         },
  //       });
  //       if (!user) {
  //         return res.status(422).json({ err: "User does not exists" });
  //       }
  //       user.resetToken = token;
  //       user.expireToken = Date.now() + 3600000;
  //       user.save().then((result) => {
  //         transporter.sendMail({
  //           to: user.email,
  //           from: "no-replay@insta.com",
  //           subject: `Reset Password`,
  //           html: `<h2>You requested for reset password reset</h2>
  //     <h3> Hello ${user.name}</h3>
  //     <h5> Click in this <a href = "http:localhost:3000/reset/${token}">link</a> to reset password</h5>

  //     `,
  //         });
  //         return res.json({ message: "check your email" });
  //       });
  //     });
  //   });
  // },

  verifiedToken: (req, res) => {
    try {
      const token = req.header("Authorization");
      if (!token) return res.send(false);

      jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
        if (err) return res.send(false);
        const user = await Users.findById(verified.id);
        if (!user) return res.send(false);

        return res.send(true);
      });
    } catch (errors) {
      return res.status(500).json({ msg: errors.message });
    }
  },
};

module.exports = userCtrl;

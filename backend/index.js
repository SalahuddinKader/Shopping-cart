if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
//require("dotenv").config();
const mongoose = require("mongoose");
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const { uuid } = require("uuidv4");
const cors = require("cors");
const express = require("express");
const userRouter = require("./router/userRouter");
const nodemailer = require("nodemailer");

const stripe = require("stripe")(stripeSecretKey);

const app = express();
//middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/users", userRouter);
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page Not Founded",
  });
});

//STRIPE PAYMENT
app.post("/payment", (req, res) => {
  const { products, token, total } = req.body;

  const idempotencykey = uuid();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create({
        amount: total * 100,
        currency: "gbp",
        customer: customer.id,
        receipt_email: token.email,
        shipping: {
          name: token.card.name,

          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      });
      {
        idempotencykey;
      }
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

//NODEMAILER
app.post("/api/forma", (req, res) => {
  let data = req.body;

  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "testweb632@gmail.com",
      pass: "lipy145611@",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "testweb632@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
    
    <h3>Informations</h3>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Lastname: ${data.lastname}</li>
      <li>Email: ${data.email}</li>
      <li>Mobile: ${data.mobile}</li>
    
    </ul> 
    <h3>Message</h3> 
    <p>${data.message}</p>  
    
    `,
  };

  smtpTransport.sendMail(mailOptions, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      return res.status(200).json({ msg: " Message has been sent" });
    }

    smtpTransport.close();
  });
});

//listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Connect to MongoDB
const URI = process.env.MONGO_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB ....");
  }
);

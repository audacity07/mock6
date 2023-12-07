const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./db");
const { auth } = require("./middleware/auth.middleware");
const { userRouter } = require("./routes/user.routes");
const { blogRouter } = require("./routes/blog.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Connected to DB`);
  } catch (error) {
    console.log(error);
  }
  console.log(`Server running at PORT ${process.env.PORT}`);
});

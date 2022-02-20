const express = require("express");
require("./services/passport"); // we just want to execute the passport.js file

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

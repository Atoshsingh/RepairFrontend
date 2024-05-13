const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("files"));

// Enable CORS for all routes
app.use(cors());

// Define your route for handling the /login request
// app.get("/login", (req, res) => {
//     res.sendFile(path.join(__dirname+"/home.html")); // Send JSON response
// });

// Start the server
const PORT = 3001; // Choose a port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

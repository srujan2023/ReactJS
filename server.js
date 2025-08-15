const express = require('express')
const app = express();
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
dotenv.config();


const PORT = process.env.PORT;

connectDB()

app.use(cors())

app.use(express.json())

app.get('/',(req,res) =>{
    res.json({Message:"Server is running"})
})



app.use('/api/auth',require('./routes/authRoutes'))

app.use('/api/blog/articles',require('./routes/articleRoutes'))
app.use('/api/uploads',require('./routes/uploadRoutes'))

//Image Route
app.use('/uploads',express.static(path.join(__dirname,'uploads')))



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
let express = require('express');
let mongoose = require('mongoose');
const EnquiryRouter = require('./Route/EnquiryRoute');
let cors = require('cors');
require('dotenv').config();



let app = express();
app.use(express.json());  
app.use(cors());



//routes
app.use('/Enquiry',EnquiryRouter)

// Connect to MongoDB
mongoose.connect(process.env.FormURL)
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch(err => console.log(err));



app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
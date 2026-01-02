let express = require('express');
const { EnquiryInsert ,EnquiryView, EnquiryDelete, EnquirysingleRow,EnquiryUpdate} = require('../Controller/EnquiryController');
let EnquiryRouter = express.Router();

EnquiryRouter.post('/insert',EnquiryInsert)
EnquiryRouter.post('/view', EnquiryView);
EnquiryRouter.delete('/delete/:id',EnquiryDelete)
EnquiryRouter.get('/single/:id',EnquirysingleRow)
EnquiryRouter.put('/Update/:id',EnquiryUpdate)


module.exports = EnquiryRouter;
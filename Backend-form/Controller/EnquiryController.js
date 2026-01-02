const EnquiryModel = require('../Model/EnquiryModel')
let EnquiryInsert = (req, res) => {

        let { name, email, PhoneNumber, message } = req.body;
        let Enquiry = new EnquiryModel({
            name,
            email,
            PhoneNumber,
            message
        });   
        Enquiry.save()
            .then(() => {
                res.send('Enquiry saved')})
                .catch((err)=>{
                    res.send("emquiry error",{error:err})
                })
            }

    let EnquiryView = async (req,res) =>{
        let Enquiry=await EnquiryModel.find()
        res.send({status:1,Enquiry})
    }

    let EnquiryDelete = async (req,res)=>{
        let Id= req.params.id
        let Enquiry= await EnquiryModel.findByIdAndDelete(Id)
        res.send("delete successfully",{id:Id})
    }

     let EnquirysingleRow= async (req,res)=>{
        let Id=req.params.id
        let Enquiry= await EnquiryModel.findById(Id)
        res.send({status:1,Enquiry})
    }      

    let EnquiryUpdate = async (req,res)=>{
        let EnquiryId= req.params.id;
        let {name,email,PhoneNumber,message}=req.body
        let updateObj={
           name,
           email,
           PhoneNumber,
           message
        }
        let updateRes =await EnquiryModel.updateOne({_id:EnquiryId},updateObj)
        res.send({status:1,message:"Enquiry updated Successfully",updateRes})
    }
module.exports = { EnquiryInsert,EnquiryView,EnquiryDelete,EnquirysingleRow,EnquiryUpdate };
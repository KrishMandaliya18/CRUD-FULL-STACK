import React from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'


const EnquiryList = ({data,getAllEnquiry,setFormData}) => {
     
    let deleterow=(id)=>
         axios.delete(`http://localhost:3000/Enquiry/delete/${id}`)
         .then((res)=>{
            toast.success("Enquiry Deleted")
            getAllEnquiry()
        })
        
    let editrow =(id)=>{
        axios(`http://localhost:3000/Enquiry/single/${id}`)
        .then((res)=>{
            let data =res.data
            setFormData(data.Enquiry)
        })
    }
   
    
  return (
      <div className='mr-5 bg-gray-200 p-4'>
                <h2 className='text-[20px] font-bold mb-3'>Equiry List</h2>
                <div className='overflow-x-auto px-5'>

                    <table className='bg-white min-w-full'>
                       <thead>
                            <tr>
                            <th className='border px-4 py-2'>Sr no.</th>
                                <th className='border px-4 py-2'>Name</th>
                                <th className='border px-4 py-2'>Email</th>
                                <th className='border px-4 py-2'>Phone Number</th>
                                <th className='border px-4 py-2'>Message</th>
                                <th className='border px-4 py-2'>Edit</th>
                                <th className='border px-4 py-2'>Delete</th>
                            </tr>
                        </thead>
                        
                      <tbody>
                     
                     {
                        data.length>=1 ?
                        data.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td className='border px-4 py-2 text-center'>{index+1}</td>
                                    <td className='border px-4 py-2 text-center'>{item.name}</td>
                                    <td className='border px-4 py-2 text-center'>{item.email}</td>
                                    <td className='border px-4 py-2 text-center'>{item.PhoneNumber}</td>
                                    <td className='border px-4 py-2 text-center'>{item.message}</td>
                                    <td className='border px-4 py-2 text-center'>
                                        <button onClick={()=>editrow(item._id)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded'>Edit</button>
                                    </td>
                                    <td className='border px-4 py-2 text-center'>
                                        <button onClick={()=>deleterow(item._id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td className='border px-4 py-2 text-center' colSpan={7}>No Enquiry Found</td>
                        </tr>
                     }

                        </tbody>  
                        
                    </table>
                </div>
            </div>
  )
}

export default EnquiryList
import React, { useState, useEffect } from "react";
import axios from "axios";
import EnquiryList from "./EnquiryList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  let [enquiryList, setEnquiryList] = useState([]);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    PhoneNumber: "",
    message: "",
  });

  let saveEnquiry = (e) => {
    e.preventDefault();

    if (formData._id) {
      axios
        .put(`http://localhost:3000/Enquiry/Update/${formData._id}`, formData)

        .then((res) => {
          toast.success("Enquiry Saved");
          setFormData({
            name: "",
            email: "",
            PhoneNumber: "",
            message: "",
            _id: "",
          });
          getAllEnquiry();
        });
    } else {
        axios
          .post(`http://localhost:3000/Enquiry/insert`, formData)
          .then((res) => {
            console.log(res.data);
            toast.success("Enquiry Saved");
            setFormData({
              name: "",
              email: "",
              PhoneNumber: "",
              message: "",
              _id: "",
            });
            getAllEnquiry();
          });
      }
    };

  let getAllEnquiry = () => {
    axios.post(`http://localhost:3000/Enquiry/view`).then((res) => {
      console.log(res.data);
      setEnquiryList(res.data.Enquiry);
    });
  };

  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };

    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  useEffect(() => {
    getAllEnquiry();
  }, []);

  return (
    <div>
      <ToastContainer position="top-center" />
      <h1 className="text-[40px] text-center py-5 font-bold">User Enquiry</h1>
      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="ml-5 bg-gray-200 p-4 ">
          <h2 className="text-[24px] font-semibold mb-4">Enquiry Form</h2>
          <form onSubmit={saveEnquiry}>
            <div>
              <label className="block mb-2 font-medium" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full p-2 border text-black border-gray-300 hover:border-black rounded-md mb-3"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={getValue}
                name="name"
                placeholder="Enter your name"
                required
              />
              <br />

              <label className="block mb-2 font-medium" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full p-2 border text-black border-gray-300 hover:border-black rounded-md mb-3"
                type="email"
                name="email"
                value={formData.email}
                onChange={getValue}
                autoComplete="email"
                placeholder="Enter your email"
                required
              />
              <br />

              <label className="block mb-2 font-medium" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <br />
              <input
                className="w-full p-2 border text-black border-gray-300 hover:border-black rounded-md mb-3"
                type="phone"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={getValue}
                placeholder="Enter your number"
                maxLength={10}
                required
              />

              <label className="block mb-2 font-medium" htmlFor="message">
                Message:
              </label>
              <textarea
                className="w-full p-2 border text-black border-gray-300 hover:border-black rounded-md mb-3"
                name="message"
                value={formData.message}
                onChange={getValue}
                placeholder="Enter your message"
                required
              ></textarea>
              <br />

              <button
                className="w-full justify-center font-semibold bg-blue-400 hover:bg-blue-600"
                type="submit"
              >
                {formData._id ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>

        <EnquiryList
          data={enquiryList}
          getAllEnquiry={getAllEnquiry}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};
export default App;

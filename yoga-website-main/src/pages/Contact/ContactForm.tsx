import { useState, ChangeEvent } from "react";
import Input from "../UI/Input";"

export default function JobApply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    summary: ""
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 3000) {
      // Handle file
      console.log("File selected:", file);
    } else {
      alert("Please upload a file with size up to 3 KB.");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className="text-2xl md:text-3xl text-center mt-8">Application</h2>
      <form className="px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 mx-5">
          {/* Existing input fields */}
          <Input type="text" placeholder="Enter your name" name="name" onChange={handleChange} value={formData.name} />
          <Input type="email" placeholder="Enter your email" name="email" onChange={handleChange} value={formData.email} />
          <Input type="date" name="dob" placeholder="Enter your DOB" onChange={handleChange} value={formData.dob} />
          <div className="flex flex-col gap-4">
            <label htmlFor="gender" className="text-sm font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="">Choose</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <Input type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} />
          <div className="flex flex-col gap-4">
            <label htmlFor="summary" className="text-sm font-medium">
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              cols={10}
              rows={5}
              className="bg-gray-50 border border-gray-300 rounded-xl p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
              value={formData.summary}
            ></textarea>
          </div>
          {/* New input field for uploading resume */}
          <div className="flex flex-col gap-4">
            <label htmlFor="resume" className="text-sm font-medium">
              Upload Resume (Max 3 KB)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx" // Restrict file types
              className="bg-gray-50 border border-gray-300 rounded-xl p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleFileChange} // Handle file change event
            />
          </div>
        </div>
        <div className="flex justify-end mt-6 mr-10">
          <button
            type="submit"
            className="bg-blue-400 px-4 py-2 rounded-full inline-block hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

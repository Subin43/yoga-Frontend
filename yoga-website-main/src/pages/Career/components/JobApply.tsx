import { useState, ChangeEvent } from "react";
import Input from "../../UI/Input";

export default function JobApply() {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 3000) {
      // Handle file
      console.log("File selected:", file);
    } else {
      alert("Please upload a file with size up to 3 KB.");
    }
  };

  return (
    <>
      <h2 className="text-2xl md:text-3xl text-center mt-8">Application</h2>
      <form className="px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 mx-5">
          {/* Existing input fields */}
          {/* Input components go here */}
          <div className="flex flex-col gap-4">
            <label htmlFor="resume" className="text-sm font-medium">
              Upload Resume (Max 3 KB)
            </label>
            <input
              type="file"
              id="resume"
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

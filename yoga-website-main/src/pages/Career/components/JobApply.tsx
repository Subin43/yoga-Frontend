import Input from "../../UI/Input";

export default function JobApply() {
  return (
    <>
      <h2 className="text-2xl md:text-3xl text-center mt-8">Application</h2>
      <form className="px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4">
          <Input
            type="text"
            placeholder="Enter your name"
            label="Name*"
            name="name"
          />
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email*"
            name="email"
          />
          <Input type="date" label="DOB" name="dob" placeholder="Enter your email" />
          <div className="flex flex-col gap-4">
            <label htmlFor="gender" className="text-sm font-medium">
              Gender
            </label>
            <select
              id="gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required
              name="gender" // added name attribute for form submission
            >
              <option disabled hidden>Choose</option> // removed selected attribute
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <Input
            type="tel" // changed type to 'tel' for phone number input
            label="Phone"
            placeholder="Phone Number"
            name="phoneNumber"
          />
          <div className="flex flex-col gap-4">
            <label htmlFor="summary" className="text-sm font-medium">
              Summary
            </label>
            <textarea
              id="summary"
              cols={10}
              rows={5}
              className="bg-gray-50 border border-gray-300 rounded-xl p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              name="summary" // added name attribute for form submission
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-6">
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

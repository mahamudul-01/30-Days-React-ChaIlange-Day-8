import { useState } from "react";

const SimpleForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nameValue=e.target.name.value;
    const emailValue=e.target.email.value;
    const messageValue=e.target.message.value;
    setName(nameValue);
    setEmail(emailValue);
    setMessage(messageValue);
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }

  const handleNameChange = (e) => {
   console.log(e.target.value);
  }

  const handleEmailChange = (e) => {
    console.log(e.target.value);
  }

    const handleMessageChange = (e) => {
    console.log(e.target.value);
    }
    
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
          onChange={
            handleNameChange
          }
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={handleEmailChange}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            onChange={handleMessageChange}
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your message"
            rows="4"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;

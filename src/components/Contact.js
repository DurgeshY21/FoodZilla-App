import React , { useState } from 'react'

 const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g. send an email to the company)
    console.log("Form submitted!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-[700px] p-10  mt-5 mb-5 mx-auto gap-8 rounded-md bg-orange-300 border border-orange-400 h-[600px] flex flex-col justify-center items-center">
      <h1 className='font-semibold text-5xl '>Contact Us</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-lg w-full text-center'>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='border  p-2 mb-5 rounded-md '
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='border  p-2 mb-5 rounded-md '
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className='border p-2 mb-5 rounded-md  '
        />
        <button type="submit "  className='border w-3/12 self-center  text-center p-2 mb-5 rounded-md border-orange-600 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-sans'>Send</button>
      </form>
    </div>
  );
};
export default Contact;
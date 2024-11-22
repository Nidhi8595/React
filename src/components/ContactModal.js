import React, { useState } from 'react';

const ContactModal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Message:', message);
    alert("Response Sent");
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[600px] bg-purple-100 rounded-2xl p-5">

        <div className="text-end">
          <button
            className="text-4xl font-semibold text-black-900 h-10 text-center rounded-lg bg-red-500 w-10 hover:scale-105"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-center">Contact Us</h3>
          <input
            type="text"
            className="p-2 rounded-md w-full text-purple-800"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            rows="6"
            className="p-2 rounded-md w-full text-purple-800"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="text-xl p-2 rounded-lg bg-black text-white hover:bg-purple-900 hover:scale-105 duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;


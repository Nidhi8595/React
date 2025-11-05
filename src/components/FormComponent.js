import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const FormComponent = () => {
  const { setLoggedInUser } = useContext(UserContext) || {}; // safety check
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (setLoggedInUser) {
      setLoggedInUser(name);
    }

    navigate('/');
  };

  return (
    <div>
      <form
        className="form1 flex flex-col p-4 bg-purple-200 mt-20 gap-2 mb-10 mx-auto h-96 w-[550px] rounded-xl justify-center text-start text-black text-lg align-middle"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between p-1.5 h-12">
          Name :-
          <input
            className="ml-1 w-3/4 pl-3 p-0.5 rounded-lg text-base text-purple-800"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-between p-1.5 h-12">
          Mail :-
          <input
            className="ml-1 w-3/4 pl-3 p-0.5 rounded-lg text-base text-purple-800"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-between p-1.5 h-12">
          Password :-
          <input
            className="ml-1 w-3/4 pl-3 p-0.5 rounded-lg text-base text-purple-800"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="text-center mx-auto mt-3 w-28 h-12 text-white cursor-pointer text-xl border-2 bg-black hover:bg-purple-600 rounded-xl hover:scale-105 hover:border-transparent hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;

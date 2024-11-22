import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const FormComponent = ({ closeModal }) => {
    const { setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false); 

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoggedInUser(name);
        navigate('/');
        closeModal();
    };

    return (
        <div className="fixed flex inset-0 justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="h-auto w-[550px] ">
                
                <div className="text-end mr-2">
                    <button
                        className="closingButton text-4xl font-semibold text-black-900 h-10 text-center rounded-lg bg-red-500 w-10 hover:scale-105"
                        onClick={closeModal}
                    >
                        &times;
                    </button>
                </div>

                
                <div className="form1 flex flex-col p-5 bg-purple-100 gap-2 mx-auto  rounded-xl justify-center text-black text-lg align-middle text-center">
                    <h2 className="text-2xl font-semibold">
                    {isSigningUp ? 'Register' : 'Login'}
                       
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between p-1.5 h-12">
                            Name / Mail :-
                            <input
                                className="ml-1 w-3/4 pl-3 p-0.5 rounded-lg text-base text-purple-800"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                        
                        {isSigningUp && (
                            <div className="flex justify-between p-1.5 h-12">
                                Confirm Password :-
                                <input
                                    className="ml-1 w-3/4 pl-3 p-0.5 rounded-lg text-base text-purple-800"
                                    type="password"
                                    required
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="text-center mx-auto mt-3 w-28 h-12 text-white cursor-pointer text-xl border-2 bg-black hover:bg-purple-900 rounded-xl hover:scale-105 hover:border-transparent"
                        >
                          {isSigningUp ? 'Sign Up' : 'Sign In'}   
                        </button>
                    </form>

                    {!isSigningUp && (
                        <div className="mx-auto text-base">
                            Don't have an account?{' '}
                            <button
                                className="text-center mx-auto p-1 mt-3 w-24 h-10 cursor-pointer text-lg border-2 bg-purple-300 rounded-xl hover:scale-105"
                                onClick={() => setIsSigningUp(true)}
                            >
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormComponent;


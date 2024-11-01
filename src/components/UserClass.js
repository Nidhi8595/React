import React from 'react';

import { MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      'https://api.github.com/users/Nidhi8595'
    );

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    const { name, location, avatar_url, email, } = this.state.userInfo;

    {/* <button
          onClick={() => {
            // * NEVER UPDATE STATE VARIABLES DIRECTLY
            // this.state.count = this.state.count + 1;

            // * USE setState() method instead

            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}

    return (
      <div className="user-card p-2.5 bg-white mb-8 mx-auto h-96 w-2/6 text-center">
        <img className="p-0.5 mb-4 my-2 w-40 h-40 ml-36 rounded-full"src={avatar_url} alt={name} />
        <h2 className='text-2xl mt-2.5'>{name}</h2>
        <h3 className='mt-2.5 opacity-70 text-lg'>{location}</h3>
        <div className="contactCard flex justify-center align-middle gap-2 text-base opacity-70 p-0.5">
          <b className='mt-9 p-1'>Contact :- </b>
          <div>
            <a className='p-1 text-3xl' href="mailto:neelakshikadyan@gmail.com"> <MdMail /></a>
            {/* {email} */}
          </div>

          <div>

            <a  className='p-1 text-3xl' href=" https://www.linkedin.com/in/neelakshi-2b3725321/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;


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
      <div className="user-card">
        <img src={avatar_url} alt={name} />
        <h2>{name}</h2>
        <h3>{location}</h3>
        <div class="contactCard">
          <b>Contact : </b>
          <div>
            <a href="mailto:neelakshikadyan@gmail.com"> <MdMail /></a>
            {/* {email} */}
          </div>

          <div>

            <a href=" https://www.linkedin.com/in/neelakshi-2b3725321/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;


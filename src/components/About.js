import React from 'react';
import { Component } from 'react';

import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="about-page mt-12">
        <UserClass name={'First'} location={'Badvel class'} />
      </div>
    );
  }
}

export default About;
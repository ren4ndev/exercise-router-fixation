import { render } from '@testing-library/react';
import React from 'react';

class Users extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { owner } = this.props;
    return (
      <div>
        <h2> Users </h2>
        <p> Hi {owner}, owner of {id}, this is my awesome Users component </p>
      </div>
    )
  }
  
}

export default Users;
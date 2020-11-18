import React from 'react';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props;
    return (
      <div>
        {(username === 'joao' && password === '1234') ? <p>Welcome {username}! </p> : <p>Access Denied</p>} 
      </div>
    );
  }
}

export default StrictAccess;
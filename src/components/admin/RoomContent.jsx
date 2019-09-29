import React from 'react';
import RoomAddress from './room_content/RoomAddress';

export default class RoomContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        className="room-content"
        id="room-content"
      >
        <RoomAddress />
      </div>
    )
  }
}
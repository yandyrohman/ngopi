import React from 'react';
import RoomControl from './room_container/RoomControl';
import RoomList from './room_container/RoomList';

export default class RoomContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        className="room-container"
        id="room-container"
      >
        <RoomControl />
        <RoomList />
      </div>
    )
  }
}
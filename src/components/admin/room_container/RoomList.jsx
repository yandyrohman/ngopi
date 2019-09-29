import React from 'react';
import Room from './room_list/Room';

export default class RoomList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="room-list">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    )
  }
}
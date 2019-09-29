import React from 'react';
import '../css/admin.css';
import RoomContainer from '../components/admin/RoomContainer';
import RoomContent from '../components/admin/RoomContent';

export default class Admin extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div className="root">
        <RoomContainer />
        <RoomContent />
      </div>
    );
  }
}
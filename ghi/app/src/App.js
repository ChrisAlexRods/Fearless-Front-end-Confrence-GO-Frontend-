import Nav from './Nav';
import React from 'react';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';


function App(props) {
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
      <LocationForm />
        {/* <AttendeesList attendees ={props.attendees} /> */}
      </div>
    </React.Fragment>
  );
}

export default App;

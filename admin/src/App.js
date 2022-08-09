import Navbar from "./components/navbar/Navbar";
import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Sidebar/>
        other pages
      </div>
    </div>
  );
}

export default App;

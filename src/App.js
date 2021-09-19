import Main from 'components/Main';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React, { useState } from 'react';

function App() {
  const [toogleSidebar, setToggleSidebar] = useState(false);
  const handleClickHamburger = () => {
    setToggleSidebar(!toogleSidebar);
  };
  return (
    <div className="App">
      <Navbar toggleSidebar={handleClickHamburger} />
      <Sidebar open={toogleSidebar} toggleSidebar={handleClickHamburger} />
      <Main />
    </div>
  );
}

export default App;

import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const styles = {
    container: {
      width: "100%",
      display: "flex"
    }
  }

  return (
    <div style={styles.container}>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;

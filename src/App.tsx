import React from "react";
import User from "./User";
import Button from "./Button";

const App = () => {
  const style= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '100%',
    height: '100vh'
  }
  return (

    <div style={style} >
      <Button
        label="Submit Your Application"
        disabled={false}
        onClick={() => console.log("Button clicked!")}
      />
    </div>
  );
};

export default App;

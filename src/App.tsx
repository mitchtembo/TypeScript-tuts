import React from "react";
import User from "./User";
import Button from "./Button";
import Admin from "./components/Admin";

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
      {/* <Button
        label="Submit Your Application"
        disabled={false}
        onClick={() => console.log("Button clicked!")}
      /> */}
      <Admin role={"user"} name={"John Doe"} id={123} email={"johndoe@example.com"} />
    </div>
  );
};

export default App;

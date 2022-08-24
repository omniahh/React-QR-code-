import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
const style = { display: "flex", justifyContent: "center" };
const App = (props) => {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        constraints={{ facingMode: "environment" }}
        onResult={(result, error) => {
          if (result) {
            setData(result?.text);
          }

          if (error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <h3 style={style}>{data}</h3>
    </>
  );
};
export default App;

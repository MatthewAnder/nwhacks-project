import "./App.css";

import Map from "./components/Map/Map";
import Navbar from "./components/Navbar";
import { valueContext as ValueContext } from "./components/context";

import {useState, useMemo} from 'react';

function App() {
  const [values, setValues] = useState({});
  const ctxValue = useMemo(() => {
    return {
      values,
      setValues,
    };
  }, [values, setValues]);

  return (
    <>
      <ValueContext.Provider value={ctxValue}>
        <Map />
        <div className="form">
          <Navbar />
        </div>
      </ValueContext.Provider>
    </>
  );
}

export default App;

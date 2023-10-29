import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);

  const [checkNumber, setCheckNumber] = useState(false);

  const [checkCharacter, setCheckCharacter] = useState(false);

  const [password, setPassword] = useState("");

  //useRef() hook
  const passwordRef = useRef(null);

  //useCallback takes function as first parameter and required dependencies as second parameter
  //useCallback memorize/cache the value of the variable we put inside its dependency array
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (checkNumber) str += "0123456789";
    if (checkCharacter) str += "~!@#$%^&*()_-+={[}];:,<.>/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, checkNumber, checkCharacter, setPassword]); //for optimization we are adding reference of setPassword

  //useEffect runs the functions in the first parameter every time there is some change in the value of variable in the dependency array
  useEffect(() => {
    passwordGenerator();
  }, [length, checkNumber, checkCharacter, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //we can copy the password without this but this will show that the password is selected by highlighting
    //passwordRef.current?.setSelectionRange(0,3);//this will select from 0-3
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-800">
        <h1 className="text-white text-center my-3">
          Random Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
            id="copy-btn"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor=pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={checkNumber}
              id="numberInput"
              onChange={() => {
                setCheckNumber((prev) => !prev);
              }}
            />
            <label>Allow Numbers?</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={checkCharacter}
              id="characterInput"
              onChange={() => {
                setCheckCharacter((prev) => !prev);
              }}
            />
            <label>Allow Characters?</label>
          </div>
        </div>
      </div>
      <h1 className="developed-by">Developed By Bickey</h1>
    </>
  );
}

export default App;

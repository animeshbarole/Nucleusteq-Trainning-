import { useRef } from "react";
import "./App.css";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [slider, setSlider] = useState(10);
  const [characters, setCharacters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [password, setPassword] = useState("");

  const passwordReference = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";

    if (characters) str += "&*$%#@!~";

    for (let i = 1; i <= slider; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);
  }, [characters, numbers, password, slider]);

  const copyPasswordtoClipBoard = useCallback(() => {
    passwordReference.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [slider, characters, numbers, setPassword]);

  return (
    <>
      <div className="h-screen w-full">
        <h1 className="text-4xl text-center text-white ">PassWord Generator</h1>

        <div className="w-1/2 h-auto px-4 py-2 bg-gray-200 rounded-md ">
          <div>
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="outline-none  w-full pt-1 px-3"
              readOnly
              ref={passwordReference}
            ></input>{" "}
            <button
              className="bg-blue-500 rounded-md"
              onClick={copyPasswordtoClipBoard}
            >
              {" "}
              Copy
            </button>
          </div>

          <div>
            <input
              onChange={(e) => {
                setSlider(e.target.value);
              }}
              type="range"
              min={1}
              max={100}
              defaultValue={slider}
              className="cursor-pointer"
            />

            <span>Length : ({slider})</span>
            <input
              type="checkbox"
              defaultChecked={numbers}
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            ></input>
            <span>Numbers</span>
            <input
              type="checkbox"
              defaultChecked={characters}
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            ></input>
            <span>Characters</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

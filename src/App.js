import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const addItem = () => {
    //Kia karna hai: input se value le kar list me add karwana
    //Zarorat: 1) Input ki value (text), 2) list
    if (!text) {
      alert("Oye text daal!");
      return;
    }

    const tempList = [...list];
    tempList.push(text);
    setList(tempList);

    resetState();
  };

  const deleteItem = (index) => {
    //Purpose: Jis item pe click ho, wo list se delete hojae
    //Required: 1) item 2) list
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);

    resetState();
  };

  const editItem = (index) => {
    //Purpose: 1) jis item pe click hua wo input me jae
    //2) Change add button into update
    setText(list[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const updateItem = () => {
    //1) Update ka button add me change hojae
    //2) input value khali karwani hogi
    //3) item ko update karwana hai
    // item kese milega? Index ke through

    const tempList = [...list];
    tempList[editIndex] = text;
    setList(tempList);

    setEditMode(false);
    resetState();
  };

  const resetState = () => {
    setText("");
    setEditMode(false);
  };

  return (
    <div className="App">
      <header className="App-header'">
        <h2>TODO LIST</h2>

        <input
          placeholder="Enter item name"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        {editMode ? (
          <button onClick={updateItem}>Update</button>
        ) : (
          <button onClick={addItem}>Add</button>
        )}

        <ul>
          {list.map((item, index) => {
            return (
              <li>
                {item}
                <button onClick={() => deleteItem(index)}>Delete</button>
                <button onClick={() => editItem(index)}>Edit</button>
              </li>
            );
          })}
        </ul>

        <br />
      </header>
    </div>
  );
}

export default App;

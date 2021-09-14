import React, { useRef, useEffect, useState } from "react";




let  data = [
  {
    defaultItem: "join perscholas",
    isChecked: true,
  },
  {
    defaultItem: "graduate perscholas",
    isChecked: true,
  },
  {
    defaultItem: " get a job as a developer",
    isChecked: true,
  },
]


localStorage.setItem(
  'firstItme',
  "join perscholas",
  );

  localStorage.setItem(
    'secondItme',
    " get a job as a developer",
    );


    localStorage.setItem(
      'thirdItme',
      "graduate perscholas"
      );








 


function App() {
  const [itmes, setItems] = useState([
    {
      defaultItem: localStorage.getItem('firstItme'),
      isChecked: true,
    },
    {
      defaultItem: localStorage.getItem('secondItme'),
      isChecked: true,
    },
    {
      defaultItem:localStorage.getItem('thirdItme'),
      isChecked: true,
    },
  ]);



  let addItemRef = useRef();

  useEffect(() => {
    addItemRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = [
      {
        addItem: addItemRef.current.value,
        isChecked: false,
      },
    ];

    setItems((prevState) => prevState.concat(formData));
    addItemRef.current.value = "";

    console.log(itmes);
  };



  const handleRemove = (id)=> setItems((prevState) => prevState.filter((_, index) => index !== id));




  console.log(itmes)
  return (
    <React.Fragment>
      <h1>My Todo List</h1>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="addItem">Add Item:</label>
          <input type="text" ref={addItemRef} required />
          <button className="addTodoBtn" style={{ backgroundColor: "green" }}>
            Add Todo
          </button>
        </form>
      </div>
      <div>
        <ol>
          {itmes.map((item, idx) => (
            <li key={idx} className={item.isChecked ? "done" : "boxCheck"}>
             
              {item.defaultItem}
              {item.addItem}
              <br/>
              <button
                className="removeBtn"
                onClick={() => handleRemove (idx) }
                style={{ backgroundColor: "red" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    </React.Fragment>
  );
}

export default App;

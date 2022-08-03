import './App.css';
import React from "react";

function App() {
  const [categories, setCategories] = React.useState([]);

  function addCategory(e) {
    e.preventDefault();

    fetch('/addcategory', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pagetitle: 'TEST', description: 'TEST', alias : 'test', parent : 2, class_key : "msCategory",published : 1, template : 1 })
    })
        .then(response => response.json())
  }


  React.useEffect(() => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => setCategories(data));
  }, []);

  return (
    <div className="App">
      {categories.map(category => (
          <div>{category.pagetitle}</div>
      ))}

        <form action="addcategory" method="POST">
          <div className="form-group">
            <label htmlFor="pagetitle">Pagetitle</label>
            <input type="text" id="pagetitle"  name="pagetitle" />
          </div>
          <button type="submit">Add category</button>
        </form>

    </div>
  );
}

export default App;

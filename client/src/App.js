import './App.css';
import React from "react";

function App() {
  const [categories, setCategories] = React.useState([]);

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
    </div>
  );
}

export default App;

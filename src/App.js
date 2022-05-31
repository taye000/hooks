import { useEffect, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <DependentEffect />
    </div>
  );
}

// function ThisWorks() {
//   // myNumber is the variable itself
//   // setMyNumber is a function that lets us update the value
//   // useState("mike") initializes the React Hook
//   // with the starting value of mike
//   const [myNumber, setMyNumber] = useState("mike");

//   function increment() {
//     setMyNumber(myNumber + "y");
//   }

//   return (
//     <div>
//       <p>{myNumber}</p>
//       <button onClick={increment}>Increment!</button>
//     </div>
//   );
// }

// function StateInput() {
//   // myName is the variable
//   // setMyName is the updater function
//   // Create a state variable with initial value
//   // being an empty string ""
//   const [myName, setMyName] = useState("");

//   function handleOnChange(text) {
//     setMyName(text);
//   }
//   return (
//     <div>
//       <input type="text" onChange={(e) => handleOnChange(e.target.value)} />
//       <p>My name is, {myName}</p>
//     </div>
//   );
// }

// function StateArray() {
//   const [fruits, setFruits] = useState([]);
//   const [currentFruit, setCurrentFruit] = useState("");

//   function updateCurrentFruit(text){
//     setCurrentFruit(text);
//   }

//   function addFruitToArray() {
//     // The spread operator `...fruits` adds all elements
//     // from the `fruits` array to the `newFruits` array
//     // and then we add the `currentFruit` to the array as well
//     const newFruits = [...fruits, currentFruit];
//     setFruits(newFruits);
//   }
//   return (
//     <div>
//       <input type="text" onChange={(e) => updateCurrentFruit(e.target.value)} />
//       <button onClick={addFruitToArray}>Add fruit</button>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function LoadDataFromServer() {
//   //set state variable to store the data from the server
//   const [data, setData] = useState("");
//   //create a state variable to maintain loading state
//   const [loading, setLoading] = useState(false);

//   async function loadData() {
//     //set loading to true until api call returns a response
//     setLoading(true);

//     //imaginary function that performs an api call to load
//     const data = await apiCall();
//     setData(data);

//     //we have data, set loading to false
//     setLoading(false);
//   }
//   // loadData is the function that is run
//   // An empty dependency array means this code is run once when the page loads
//   useEffect(() => {
//     loadData();
//   }, []);
//   // Display `"Loading..."` while `loading` is `true`,
//   // otherwise display `data`
//   return <div>{loading ? "Loading..." : data}</div>;
// }
// async function apiCall() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("ABCDEF"), 5000);
//   });
// }

function DependentEffect() {
  const names = ["mike", "james", "yvonne", "jack"];
  const [recommendations, setRecommendations] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // If user is not searching for anything, don't show any recomendations
    if (searchText.length === 0) {
      setRecommendations([]);
    } else if (searchText.length > 0) {
      const newRecs = names.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
      setRecommendations(newRecs);
    }
  }, [searchText]);

  return (
    <div>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}

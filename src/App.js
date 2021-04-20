import "./App.css";
import Profile from "../src/Profile/Profile.js"

function App() {
  const name = "Kahoula";
  const lastname = "Amri Mili";
  const bio = "Khaoula Amri Mili, 31 years old from Jemmel Master in information systems engineering, GOMYCODE candidate ";
  const profession = "computer trainer";
  const alertMe=()=> {
    alert(`hello ${name}`)
  }
  return (
  <div className="App">

<Profile name={name} lastname={lastname} bio={bio}  alertMe={alertMe} ><img  src ="ProfilePhoto1.jpg" alt="user_photo" /> </Profile>

  </div>);
}

export default App;

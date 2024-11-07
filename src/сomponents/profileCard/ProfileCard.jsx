import lisaImg from "../../assets/Lisa.jpg";
import "./profileCard.css";

function ProfileCard() {
  const person = {
    firstName: "Lisa",
    lastName: "Simpson",
    occupation: "school girl",
    hobby: [
      "playing saxophone",
      "study",
      "reading",
      "chess game",
      "vegetarianism",
    ],
  };

  const nameOfCartoon = "Simpsons";

  function formatFictiveCharacter(name) {
    return name.firstName + " " + name.lastName;
  }

  function getOccupationOfFictiveCharacter(occupationOfPerson) {
    return occupationOfPerson.occupation;
  }
  function getHobbyOfFictiveCharacter(hobbyofPerson) {
    return hobbyofPerson.hobby.join(", ");
  }

  return (
    <div className="profile-card">
      <img className="main-photo" src={lisaImg} alt="lisa" />

      <h1 className="main-title">
        Hello, I am {formatFictiveCharacter(person)}!
      </h1>
      <p className="list-item">
        {" "}
        I am one of the characters from the cartoon {nameOfCartoon}
      </p>
      <p className="list-item">
        I am {getOccupationOfFictiveCharacter(person)}
      </p>
      <p className="list-item">
        My hobbies are {getHobbyOfFictiveCharacter(person)}
      </p>
      <p className="list-item">Nice to meet you!</p>
    </div>
  );
}

export default ProfileCard;

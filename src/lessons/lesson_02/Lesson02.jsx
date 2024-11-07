// bvgjhтируем картинку в переменной указав полный путь
import reactImg from "../../assets/react.jpg";
import MyButton from "../../сomponents/myButton/MyButton";
import ProfileCard from "../../сomponents/profileCard/ProfileCard";
// подключение css файла из текущей папки
import "./lesson02.css";


// APP это функция, которая создает верстку, функция называется
// с большой буквы и возвращает верстку и будет экспортироваться
// название компонента пишем как назание файла
function Lesson02() {
  // переменную можна создавать  c версткой и положить в нее тег <li>
  const element = <li>I am element in variable</li>;
  // или мы можем создать переменную со строкой для тега в верстке
  const text = "Next for JSX tag";
  const company = "Facebook";

  // обьект с данными о пользователе
  const user = {
    firstName: "Brendan",
    lastName: "Eich",
  };

  // функция обрабатывающая данные обьекта
  function formatUser(name) {
    return name.firstName + " " + name.lastName;
  }

  //   переменная от значения которой зависит отображение данных
  // на странице в тернарном операторе
  const isLoggedIn = false;

  return (
    <div className="lesson-container">
      <h3>Lesson 02</h3>
      <p>React JSX components</p>
      {/* для отображения такой переменной пишем ее в 
      {} */}
      <img className="react-img" src={reactImg} alt="reactImg" />

      <ul>
        <li>Simple text</li>
        {element}
        <li>{text}</li>
        <li>React was created by {company}</li>
        <li>{formatUser(user)} is creator of JS</li>
        {/*  пример использования тернарного оператора внутри тега */}
        <li>User {isLoggedIn ? "is" : "is NOT "} in the system</li>
      </ul>
      {/* импорт компонента кнопки */}
      <MyButton />
      <ProfileCard/>
    </div>
  );
}

// не забываем сделать export для связи с другими компонентами
export default Lesson02;

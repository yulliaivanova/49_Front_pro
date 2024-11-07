import "./loginForm.css"
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

function LoginForm (){
    return(
       <form className="login-form">
        <MyInput type={"text"} label={"Type your login"} placeholder={'login'}/>
        <MyInput type={"email"} label={"Type your e-mail"} placeholder={'e-mail'}/>
        <MyInput type={"password"} label={"Type your password"} placeholder={'password'}/>
        <MyButton type={"submit"} text={"submit"} isDanger={false}/>
       </form>
    )
}
export default LoginForm;
import classes from "../styles/Illustrator.module.css"
// import Signupimg from "../assests/images/signup.svg"

export default function Illustration({children}) {
  return (
    <div className={classes.illustration}>
      {/* <img src={`${src}`} alt={alt}/> */}
      {children}
    </div>
  );
}

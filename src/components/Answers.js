import { Fragment } from "react/cjs/react.development";
import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
              key={index}
            />
          ) : (
            <Checkbox
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              text={option.title}
              defaultchecked={option.checked}
              onChange={(e) => handleChange(e, index)}
              key={index}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

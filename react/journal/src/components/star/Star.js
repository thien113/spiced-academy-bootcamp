import { ReactComponent as StarEmpty } from "./star.svg";
import { ReactComponent as StarFilled } from "./star-filled.svg";

export default function Star({ starType, id, handleChange }) {
  console.log("star component all values:", starType);
  if (!{ starType }) {
    return (
      <StarEmpty
        onClick={() => {
          handleChange(id);
        }}
      />
    );
  } else {
    return (
      <StarFilled
        onClick={() => {
          handleChange(id);
        }}
      />
    );
  }
}

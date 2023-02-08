import Tabs from "../tabs/Tabs";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import "./EntrySection.css";

export default function EntrySection() {
  return (
    <section>
      <Tabs />
      <article>
        <h4>FEB 27, 2028</h4>
        <div className="title">
          <h2>
            <strong>"That's life in the city"</strong>
          </h2>
          <StarFilled />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <hr />
      </article>
      <article>
        <h4>FEB 26, 2028</h4>
        <div className="title">
          <h2>
            <strong>"That's life in the city"</strong>
          </h2>
          <Star />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>
      <hr />
      <article>
        <h4>FEB 25, 2028</h4>
        <div className="title">
          <h2>
            <strong>"That's life in the city"</strong>
          </h2>
          <Star />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>
    </section>
  );
}

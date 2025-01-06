import { Nav } from "./Nav/Nav";
import { Title } from "./Title/Title";
import "../../styles/Header.css";

export const Header = () => {
  return (
    <div id="header">
      <div id="title">
        <Title />
      </div>
      <div id="nav">
        <Nav />
      </div>
    </div>
  );
};

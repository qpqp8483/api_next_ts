import { Menu } from "semantic-ui-react";

const Gnb = () => {
  let activeItem;

  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"} /*onClick={goLink}*/
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        /*onClick={goLink}*/
      />
      <Menu.Item
        name="contact us"
        active={activeItem === "contact"}
        /*onClick={goLink}*/
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        /*onClick={goLink}*/
      />
    </Menu>
  );
};

export default Gnb;

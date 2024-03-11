const Navbar = ({ navValue }) => {
  return (
    <>
      <ul style={{ display: "flex", gap: "8rem" }}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">{navValue ? navValue : "person"}</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

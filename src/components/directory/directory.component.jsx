import MenuItem from "../menuItem/menuItem.component";
import "./directory.styles.scss";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

export default function Directory() {
  // It gives the state to the selector by default
  const sections = useSelector(selectDirectorySections);

  return (
    <>
      <div className="introduction">
        <h1>Welcome to E-Era Store</h1>
        <p>Where shoping conecpts been redefined ...</p>
      </div>
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    </>
  );
}

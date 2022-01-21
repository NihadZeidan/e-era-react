import MenuItem from "../menuItem/menuItem.component";
import "./directory.styles.scss";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

export default function Directory() {
  // It gives the state to the selector by default
  const sections = useSelector(selectDirectorySections);
  const user = useSelector((state) => selectCurrentUser(state));

  return (
    <>
      <div className="introduction">
        <h1>Welcome {user ? user.displayName : null} </h1>
        <p>E-Era Store, Where shoping conecpts been redefined ...</p>
      </div>
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    </>
  );
}

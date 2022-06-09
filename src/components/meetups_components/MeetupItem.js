import classes from "./MeetupItem.module.css";
import Card from "../Card";

function MeetupItem(props) {
  return (
    <Card>
      <li>
        <div className={classes.image}>
          <img className="rounded-lg" src={props.image} alt="Loading..."></img>
        </div>
        <div className={classes.content}>
          <h3 className="text-xl font-bold">{props.title}</h3>
          <address className="py-1 text-green-700">{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.action}>
          <button>Add Favorite</button>
        </div>
      </li>
    </Card>
  );
}
export default MeetupItem;

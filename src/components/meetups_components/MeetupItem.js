import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img className="rounded-lg" src={props.image}></img>
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
  );
}
export default MeetupItem;

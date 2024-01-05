import { IncomingIcon } from "./icons/incoming";
import { MoreIcon } from "./icons/more";
import "./Card.css";
import moment from "moment";
import { useLocation } from "react-router-dom";

// const { pathname } = location;

// console.log(Location, 'Location')
// console.log(Params, 'Params')
export const Card = ({ item, handleArchive }) => {
  const location = useLocation();
  return (
    <div className="cardd">
      <div className="card__header">
        <IncomingIcon className="card__icon" />
        <div className="card__header-text">
          <p className="card__title">{item.from}</p>
          <p className="card__description">{item.from}</p>
        </div>
        {/* {count > 1 ? <div className="card__chip">2</div> : null} */}
      </div>
      {/* location.pathname */}

      {location.pathname === "/archived" ? (
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => handleArchive(item.id)}
        >
          Un Archived
        </button>
      ) : null}

      <div className="card__footer">
        <MoreIcon className="card__icon card__icon--gray" />
        {/* <p className="card__time">{item.from}</p> */}
        <p className="card__am">
          {" "}
          {moment(item?.createdAt).format("HH:mm")}
        </p>{" "}
        <br />
        <p className="card__am">
          {" "}
          {moment(item?.createdAt).format("MMMM, DD, YYYY")}
        </p>
      </div>
    </div>
  );
};

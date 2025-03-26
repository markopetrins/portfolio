
import myImg from "../../Assets/avatar.svg";

function TiltAvatar() {
  return (
    <div className="myAvtar">
      <Tilt>
        <img src={myImg} className="img-fluid" alt="avatar" />
      </Tilt>
    </div>
  );
}

export default TiltAvatar;
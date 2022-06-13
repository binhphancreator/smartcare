export default function AuthLayout(props) {
  return (
    <>
      <div className="auth-layout">
        <div className="auth-layout-left">
          <img
            draggable="false"
            src={require("../assets/images/shield_light.png")}
            alt=""
          />
        </div>
        <div className="auth-layout-right">{props.children}</div>
      </div>
    </>
  );
}

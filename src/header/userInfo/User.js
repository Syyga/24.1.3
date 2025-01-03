import "./User.css";

function User() {
  const userinfo = "가승연";
  return (
    <>
      <div className="user">
        <div className="user-info">
          <span>{userinfo}</span>님
        </div>
        <div>
          <div className="login-button">로그인</div>
        </div>
      </div>
    </>
  );
}

export default User;

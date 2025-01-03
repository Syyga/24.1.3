import "./User.css";

function User() {
  const userinfo = "가승연";
  return (
    <>
      <div className="user">
        <div>{userinfo}님</div>
        <div>
          <div className="login-button">로그인</div>
        </div>
      </div>
    </>
  );
}

export default User;

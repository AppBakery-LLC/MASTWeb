
function HeaderTop(props) {
  let appState = props.appState;
  console.log("HeaderTop", appState);
  return appState ? (
    <div className="header-top-area black-bg">
      <div className="">
        <div className="row" style={{ marginRight: "0px" }}>
          <div className="col-xl-8 col-lg-9 col-md-7 col-10 d-flex align-items-center">
            <div className="header-top-wrapper" style={{ paddingLeft: "25px" }}>
              <div className="header-info">
                <span className="mail-header-icon">
                  <i className="far fa-clock" />{" "}
                  {appState.appmiscdetails &&
                  appState.appmiscdetails.operationaltimings
                    ? appState.appmiscdetails.operationaltimings.join(", ")
                    : ""}
                </span>
                <span className="mail-header-icon">
                  <i className="far fa-envelope-open" />{" "}
                  {appState.appcontact && appState.appcontact.emails
                    ? appState.appcontact.emails.map((a) => a.email).join(", ")
                    : ""}
                </span>
                <span className="mail-header-icon">
                  <i className="far fa-phone" />{" "}
                  {appState.appcontact && appState.appcontact.phonenumbers
                    ? appState.appcontact.phonenumbers.filter((a) => a.id !== 2).map(b=> b.phnumber).join(", ")
                    : ""}
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-3 col-md-5 col-2">
            <div className="header-top-right" style={{ paddingRight: "25px" }}>
              {appState.appmiscdetails &&
              appState.appmiscdetails.showloginbutton ? (
                <div className="header-login f-right">
                  <a href="/">
                    <i className="far fa-user" /> Login
                  </a>
                </div>
              ) : (
                <></>
              )}

              <div className="header-icon f-right d-none d-md-block">
                {appState.appsociallinks ? (
                  appState.appsociallinks.map((item, i) => (
                    <a href={item.sociallink}>
                      <i className={item.iconurl} />
                    </a>
                  ))
                ) : (
                  <></>
                )}
                {/* <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-google-plus-g" /></a>
                            <a href="#"><i className="fab fa-dribbble" /></a>
                            <a href="#"><i className="fab fa-linkedin" /></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default HeaderTop;

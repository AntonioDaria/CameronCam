import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import FlashMessage from "react-flash-message";
import "./styles/login.css";

library.add(fab);

export default class Login extends Component {
  state = {
    login: false,
    register: false
  };

  login = () => {
    this.setState({ login: !this.state.login, register: false });
  };

  register = () => {
    this.setState({ login: false, register: !this.state.register });
  };

  icons = () => {
    const {
      handleFacebookSubmit,
      handleTwitterSubmit,
      handleGoogleSubmit
    } = this.props;
    return (
      <div className="auth--icons">
        <FontAwesomeIcon
          onClick={handleGoogleSubmit}
          icon={["fab", "google"]}
          size="lg"
          className="auth--button"
        />
        <FontAwesomeIcon
          onClick={handleFacebookSubmit}
          icon={["fab", "facebook"]}
          size="lg"
          className="auth--button"
        />
        <FontAwesomeIcon
          onClick={handleTwitterSubmit}
          icon={["fab", "twitter"]}
          size="lg"
          className="auth--button"
        />
        <br />
        <p>--- OR ---</p>
      </div>
    );
  };

  render() {
    const {
      currentUser,
      handleSignout,
      email,
      password,
      handleRegisterSubmit,
      handleLoginSubmit,
      handleInputChange,
      error
    } = this.props;

    const { login, register } = this.state;
    let renderLogin;

    if (currentUser) {
      renderLogin = (
        <button className="logout--button" onClick={handleSignout}>
          Logout
        </button>
      );
    } else {
      renderLogin = (
        <div className="auth-buttons">
          <button className="buttons login-button" onClick={this.login}>
            Login
          </button>
          <button className="buttons register-button" onClick={this.register}>
            Register
          </button>
          {/* Handles Registration */}
          {register && (
            <>
              {this.icons()}
              <form onSubmit={handleRegisterSubmit} className="register--form">
                <label htmlFor="email">What is your email?</label>
                <input
                  type="text"
                  name="email"
                  className="input__fields"
                  placeholder="Email"
                  value={email}
                  autoComplete="true"
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Choose a password</label>
                <input
                  type="password"
                  name="password"
                  className="input__fields"
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                />
                <button className="submit--button buttons" type="submit">
                  Register
                </button>
                <div className="privacy-link">
                  <a href="https://privacypolicygenerator.info/live.php?token=360T7XqfTtxk0SONceTCBfdC4v2iLmWk">link to privacy policy</a>
                </div>
                {error && (
                  <FlashMessage duration={5000} persistOnHover={true}>
                    <p
                      style={{
                        color: "#C02F1D",
                        border: "2px solid #C02F1D",
                        width: "50%",
                        borderRadius: "2%",
                        fontWeight: "bold",
                        padding: "2% 0",
                        margin: "0 auto"
                      }}
                    >
                      {error.message}
                    </p>
                  </FlashMessage>
                )}
              </form>
            </>
          )}
          {/* Handles Login Form */}
          {login && (
            <>
              {this.icons()}
              <form onSubmit={handleLoginSubmit} className="login--form">
                <label htmlFor="email">What is your email?</label>
                <input
                  type="text"
                  name="email"
                  className="input__fields"
                  placeholder="Email"
                  value={email}
                  autoComplete="true"
                  onChange={handleInputChange}
                />
                <label htmlFor="email">What is your password?</label>
                <input
                  type="password"
                  name="password"
                  className="input__fields"
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                />
                <button className="submit--button buttons" type="submit">
                  Login
                </button>
                <div className="privacy-link">
                  <a href="https://privacypolicygenerator.info/live.php?token=360T7XqfTtxk0SONceTCBfdC4v2iLmWk">link to privacy policy</a>
                </div>
                {error && (
                  <FlashMessage duration={5000} persistOnHover={true}>
                    <p style={{ color: "red" }}>{error.message}</p>
                  </FlashMessage>
                )}
              </form>
            </>
          )}
        </div>
      );
    }

    return <div className="logout--body">{renderLogin}</div>;
  }
}

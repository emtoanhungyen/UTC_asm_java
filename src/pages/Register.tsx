import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../routers/path";

type Props = {};

const Register = (props: Props) => {
  return (
    <div>
      <>
        <div className="container text-center py-5">
          <h3 className="mb-0">Sign up</h3>
        </div>
        <main>
          <div className="container">
            {/*Grid row*/}
            <div className="row d-flex justify-content-center">
              {/*Grid column*/}
              <div className="col-md-6">
                {/*Section: Content*/}
                <section className="mt-4 mb-5">
                  <form action="#!">
                    <div className="form-row">
                      <div className="col">
                        <div className="md-form md-outline mt-0">
                          <input
                            type="text"
                            id="materialRegisterFormFirstName"
                            className="form-control"
                          />
                          <label htmlFor="materialRegisterFormFirstName">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="md-form md-outline mt-0">
                          <input
                            type="email"
                            id="materialRegisterFormLastName"
                            className="form-control"
                          />
                          <label htmlFor="materialRegisterFormLastName">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="md-form md-outline mt-0">
                      <input
                        type="email"
                        id="defaultForm-email2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="defaultForm-email2"
                      >
                        Your email
                      </label>
                    </div>
                    <div className="md-form md-outline mt-0">
                      <input
                        type="password"
                        id="defaultForm-pass2"
                        className="form-control"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="defaultForm-pass2"
                      >
                        Your password
                      </label>
                      <small
                        id="materialRegisterFormPasswordHelpBlock"
                        className="form-text text-muted mb-4"
                      >
                        At least 8 characters and 1 digit
                      </small>
                    </div>
                  </form>
                  <div className="text-center pb-2">
                    <div className="form-check pl-0 mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input filled-in"
                        id="new1"
                      />
                      <label
                        className="form-check-label small text-uppercase card-link-secondary"
                        htmlFor="new1"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>
                  </div>
                  <div className="text-center mb-2">
                    <Link to={PATH.HOME}>
                      <button
                        type="submit"
                        className="btn btn-warning mb-4 waves-effect waves-light mr-3"
                      >
                        Back Home
                      </button>
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary mb-4 waves-effect waves-light"
                    >
                      Sign Up
                    </button>
                    <p>or sign up with:</p>
                    <a
                      type="button"
                      className="btn-floating btn-fb btn-sm mr-1 waves-effect waves-light"
                      href="https://www.facebook.com/"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      type="button"
                      className="btn-floating btn-tw btn-sm mr-1 waves-effect waves-light"
                      href="https://www.twitter.com/"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      type="button"
                      className="btn-floating btn-li btn-sm mr-1 waves-effect waves-light"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      type="button"
                      className="btn-floating btn-git btn-sm waves-effect waves-light"
                    >
                      <i className="fab fa-github" />
                    </a>
                    <hr className="mt-4" />
                    <p>
                      By clicking
                      <em>Sign up</em> you agree to our
                      <a href="">terms of service</a>
                    </p>
                  </div>
                </section>
                {/*Section: Content*/}
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
        </main>
      </>
    </div>
  );
};

export default Register;

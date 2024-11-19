import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../routers/path";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { IUser } from "../redux/auth/authSlice";
import { login } from "../redux/auth/action";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state: RootState) => state.auth);
  const { handleSubmit, register } = useForm<IUser>();

  const onSubmit = handleSubmit((data: IUser) => {
    try {
      dispatch(login(data));
      navigate("/");
    } catch (error) {
      toast.error("Errors");
    }
  });

  return (
    <div>
      <div className="container text-center py-5">
        <h3 className="mb-0">Sign in</h3>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <section className="mb-5">
              <form onSubmit={onSubmit}>
                <div className="md-form md-outline">
                  <input
                    type="text"
                    id="defaultForm-email1"
                    className="form-control"
                    {...register("username")}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-email1"
                  >
                    Username
                  </label>
                </div>
                <div className="md-form md-outline">
                  <input
                    type="password"
                    id="defaultForm-pass1"
                    className="form-control"
                    {...register("password")}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-pass1"
                  >
                    Password
                  </label>
                </div>

                {error && <p className="text-danger">{error}</p>}

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="form-check pl-0 mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="new"
                    />
                    <label
                      className="form-check-label small text-uppercase card-link-secondary"
                      htmlFor="new"
                    >
                      Remember me
                    </label>
                  </div>
                  <p>
                    <a href="">Forgot password?</a>
                  </p>
                </div>
                <div className="text-center pb-2">
                  <Link to={PATH.HOME}>
                    <button
                      type="button"
                      className="btn btn-warning mb-4 waves-effect waves-light mr-3"
                    >
                      Back Home
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary mb-4 waves-effect waves-light"
                  >
                    Sign in
                  </button>
                  <p>
                    Not a member? <Link to={PATH.REGISTER}>Register</Link>
                  </p>
                  <p>or sign in with:</p>
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
                    href="https://www.Twitter.com/"
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
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

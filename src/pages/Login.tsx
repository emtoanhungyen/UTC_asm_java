import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../routers/path";
import { useSelector } from "react-redux";
import { loginUser } from "../features/auth/authActions";
import { RootState, useAppDispatch } from "../store/store";
import { LoginRequest } from "../features/auth/authTypes";

type Props = {};

const Login = (props: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); // Hook for programmatic navigation
    const { error } = useSelector((state: RootState) => state.auth);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const loginData: LoginRequest = { username, password };

        // Dispatch the login action
        try {
            const result = await dispatch(loginUser(loginData)).unwrap(); // Wait for the dispatch to complete

            // Assuming the result has a structure that contains the needed data
            const { status, payload, errors, metadata } = result;

            if (status === "OK") {
                // Extract the authToken from payload
                const { authToken } = payload;

                // Save the authToken to localStorage
                if (authToken) {
                    localStorage.setItem("token", authToken);
                }

                console.log("Login successful:", payload);

                // Redirect to home on successful login
                navigate(PATH.HOME);
            } else {
                // Handle potential errors from the result
                console.error("Login failed:", errors);
                // Optionally, display an error message
            }
        } catch (err) {
            console.error('Login failed:', err);
            // Handle errors if needed (already handled by Redux)
        }
    };




    return (
        <div>
            <div className="container text-center py-5">
                <h3 className="mb-0">Sign in</h3>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <section className="mb-5">
                            <form onSubmit={handleSubmit}>
                                <div className="md-form md-outline">
                                    <input
                                        type="text" // Change type to text for username
                                        id="defaultForm-email1"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} // Update state on change
                                        required
                                    />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-email1"
                                    >
                                        Your email
                                    </label>
                                </div>
                                <div className="md-form md-outline">
                                    <input
                                        type="password"
                                        id="defaultForm-pass1"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                                        required
                                    />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-pass1"
                                    >
                                        Your password
                                    </label>
                                </div>

                                {/* Display error message if exists */}
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
                                            type="button" // Changed to button to prevent form submission
                                            className="btn btn-warning mb-4 waves-effect waves-light mr-3"
                                        >
                                            Back Home
                                        </button>
                                    </Link>
                                    <button
                                        type="submit" // Submit button
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

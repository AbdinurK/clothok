import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../store/actions/authActions";

const Login = (props) =>  {

    const [state, setState] = useState({
        email: "",
        password: "",
        errors: {}
    });


    useEffect(() => {
        props.history.push("/products");
    }, [props.auth.isAuthenticated, props.history]);

    useEffect(() => {
        setState({
            errors: props.errors
        });
    }, [props.errors]);

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard");
        }
    }, [props.auth.isAuthenticated, props.history]);

    const onChange = e => {
        setState({ [e.target.id]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = state;
        const userData = {
            email,
            password
        };
        props.loginUser(userData);
    };

    return (
        <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to
                        home
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4>
                            <b>Login</b> below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={state.email}
                                error={state.errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                    invalid: state.errors.email
                                })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">
                                    {state.errors.email}
                                </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={state.password}
                                error={state.errors.password}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid: state.errors.password
                                })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">
                                    {state.errors.password}
                                </span>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);

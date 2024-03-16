import React from "react";

function RightBanner() {
    return (
        <div className="section">

            <h1>Sign In</h1>

            <form className="form">

                <div className="signin_type_btns">
                    <button className="signin_type active">Customer</button>
                    <button className="signin_type">Dealer</button>
                </div>

                <div className="form_control">
                    <input
                        className="input"
                        type="email"
                        placeholder="Email ID *"
                        required
                    />
                </div>

                <div className="form_control">
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>

                <a className="forgot_password_link" href="/forget_password">
                    Forgot Password?
                </a>

                <button className="form_button" type="submit">
                    Sign In
                </button>

            </form>

        </div>
    );
}

export default RightBanner;

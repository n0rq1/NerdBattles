import React from 'react';
import { useRouter } from "next/navigation";

function InitModal({ email, username, password, onEmailChange, onUsernameChange, onPasswordChange,onNextPress }) {
    const router = useRouter();
    return (
        <div className="login-page">
            <div className="login-container">
                <input
                    className="input-field input-field-top"
                    placeholder="Email..."
                    value={email}
                    onChange={onEmailChange}
                />
                <input
                    className="input-field"
                    placeholder="Username..."
                    type="username"
                    value={username}
                    onChange={onUsernameChange}
                />
                <input 
                    className="input-field"
                    placeholder="Password..."
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                />
                <button
                    className="login-text login-button mt-3"
                    onClick={onNextPress}
                >
                    Next
                </button>
                <a className="login-text">Already have an account?</a>
                <a className="login-signup" onClick={() => router.push("/login")}>Sign In!</a>
            </div>
        </div>
    );
}

export default InitModal;

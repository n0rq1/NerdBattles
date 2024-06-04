import React, { useState } from 'react';

function ConfirmModal({ email, username, signUp }) {
    const [leetcodeLink, setLC] = useState('');
    const [githubLink, setGH] = useState('');
    const [linkedinLink, setLI] = useState('');

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="mt-10 font-bold"> Additional Information </h2>
                <input
                    className="input-field mt-10"
                    placeholder="LinkedIn Profile (Optional)..."
                    value={linkedinLink}
                    onChange={(e) => setLI(e.target.value)}
                />
                <input
                    className="input-field mt-10"
                    placeholder="GitHub Profile (Optional)..."
                    value={githubLink}
                    onChange={(e) => setGH(e.target.value)}
                />
                <input
                    className="input-field mt-10"
                    placeholder="LeetCode Profile (Optional)..."
                    value={leetcodeLink}
                    onChange={(e) => setLC(e.target.value)}
                />
                <button
                    className="login-text login-button mt-3"
                    onClick={signUp}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ConfirmModal;

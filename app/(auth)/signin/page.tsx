import React from 'react';
import styles from './page.module.css';

const { formGroup, input, inputButton, header, headerText, form,oauth, oauthButton, or } = styles;

export default function SignIn() {
    return (
        <>
            <h1 className={header}>Sign in to Continue <a href='/signup' className={headerText}>or Sign up</a></h1>
            <form className={form}>
                <div className={formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className={input} />
                </div>
                <div className={formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className={input} />
                </div>
                <div className={formGroup}>
                    <input type="submit" value="Sign In" className={`${input} ${inputButton}`} />
                </div>
            </form>
            <span className={or}>OR</span>
            <div className={oauth}>
                <button className={inputButton + " " + oauthButton }>Sign in with Google</button>
                <button className={inputButton +" "+ oauthButton}>Sign in with facebook</button>
            </div>
        </>
    );
}


const AuthScreen = ({ mode, onModeChange, credentials, onCredentialsChange, onSubmit, infoText }) => {
  const updateField = (field) => (event) => {
    onCredentialsChange({ ...credentials, [field]: event.target.value });
  };

  return (
    <div className="appShell">
      <div className="cardy">
        <h2>School Equipment Lending</h2>
        <div style={{ marginBottom: 12 }}>
          <button className={mode === "login" ? "" : "inactive"} onClick={() => onModeChange("login")}>
            Log In
          </button>
          <button className={mode === "signup" ? "" : "inactive"} onClick={() => onModeChange("signup")}>
            Quick Signup
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <label>Username</label>
          <input value={credentials.username} onChange={updateField("username")} placeholder="username" />
          <label>Password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={updateField("password")}
            placeholder="passcode"
          />
          {mode === "signup" && (
            <>
              <label>Display Name</label>
              <input value={credentials.displayName} onChange={updateField("displayName")} />
            </>
          )}
          <button type="submit" style={{ marginTop: 10 }}>
            {mode === "signup" ? "Create Account" : "Sign In"}
          </button>
        </form>
        {infoText && <p className="tiny">{infoText}</p>}
      </div>
    </div>
  );
};

export default AuthScreen;

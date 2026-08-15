import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Eye, EyeOff, Phone } from "lucide-react";

const styles = `
  .ally-login-body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: #ffffff;
    color: #1a1a1a;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  .ally-login-header {
    background: #5e0c7a;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .ally-login-logo {
    color: #ffffff;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .ally-help-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .ally-phone-icon {
    text-align: right;
    padding: 16px 20px 0;
  }

  .ally-phone-icon svg {
    width: 24px;
    height: 24px;
    fill: #0073b9;
    cursor: pointer;
  }

  .ally-container {
    padding: 20px 24px;
    max-width: 480px;
    margin: 0 auto;
  }

  .ally-login-h1 {
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 32px;
    letter-spacing: -0.5px;
  }

  .ally-form-group {
    margin-bottom: 28px;
  }

  .ally-label {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 8px;
  }

  .ally-input-wrapper {
    position: relative;
  }

  .ally-input {
    width: 100%;
    padding: 12px 12px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #9e9e9e;
    background: #f5f5f5;
    outline: none;
    transition: border-color 0.2s;
    padding-right: 40px;
  }

  .ally-input:focus {
    border-bottom-color: #5e0c7a;
    background: #fafafa;
  }

  .ally-toggle-password {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    color: #757575;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ally-toggle-password svg {
    width: 22px;
    height: 22px;
  }

  .ally-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .ally-btn-login {
    background: #00847f;
    color: #ffffff;
    border: none;
    padding: 14px 36px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .ally-btn-login:hover {
    background: #006b67;
  }

  .ally-btn-login:active {
    transform: scale(0.98);
  }

  .ally-btn-login:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .ally-checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .ally-checkbox-wrapper input[type="checkbox"] {
    width: 22px;
    height: 22px;
    accent-color: #5e0c7a;
    cursor: pointer;
  }

  .ally-checkbox-wrapper span {
    font-size: 15px;
    color: #1a1a1a;
  }

  .ally-links {
    margin-top: 8px;
  }

  .ally-links p {
    font-size: 16px;
    color: #1a1a1a;
    line-height: 1.8;
  }

  .ally-links a {
    color: #0073b9;
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  .ally-links a:hover {
    color: #005a94;
  }

  @media (min-width: 768px) {
    .ally-container {
      padding: 40px;
    }

    .ally-login-h1 {
      font-size: 48px;
    }
  }
`;

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [saveUsername, setSaveUsername] = useState(false);

  useEffect(() => {
    // Load saved username
    const savedUsername = localStorage.getItem("ally_saved_username");
    if (savedUsername) {
      setUsername(savedUsername);
      setSaveUsername(true);
    }

    // Add styles to document
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Save username if checked
    if (saveUsername) {
      localStorage.setItem("ally_saved_username", username);
    } else {
      localStorage.removeItem("ally_saved_username");
    }

    // Set auth state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", username);

    // Navigate to main app
    navigate({ to: "/" });
  };

  const handleSaveUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaveUsername(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem("ally_saved_username");
    } else if (username) {
      localStorage.setItem("ally_saved_username", username);
    }
  };

  return (
    <div className="ally-login-body">
      {/* Header */}
      <header className="ally-login-header">
        <div className="ally-login-logo">ally</div>
        <div className="ally-help-icon" title="Help">
          ?
        </div>
      </header>

      {/* Phone Icon */}
      <div className="ally-phone-icon">
        <Phone color="#0073b9" />
      </div>

      {/* Main Content */}
      <main className="ally-container">
        <h1 className="ally-login-h1">Log in.</h1>

        <form onSubmit={handleLogin} autoComplete="off">
          <div className="ally-form-group">
            <label htmlFor="username" className="ally-label">
              Username
            </label>
            <div className="ally-input-wrapper">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="ally-input"
                autoComplete="username"
              />
            </div>
          </div>

          <div className="ally-form-group">
            <label htmlFor="password" className="ally-label">
              Password
            </label>
            <div className="ally-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ally-input"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="ally-toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
          </div>

          <div className="ally-actions">
            <button type="submit" className="ally-btn-login">
              Log In
            </button>
            <label className="ally-checkbox-wrapper">
              <input
                type="checkbox"
                id="saveUsername"
                checked={saveUsername}
                onChange={handleSaveUsernameChange}
              />
              <span>Save username</span>
            </label>
          </div>
        </form>

        <div className="ally-links">
          <p>
            Forgot <a>username</a> or <a>password</a>?
          </p>
          <p>
            <a>Set up username and password</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Ally Bank - Log In" },
      {
        name: "description",
        content: "Sign in to your Ally Bank account",
      },
    ],
  }),
  component: LoginPage,
});

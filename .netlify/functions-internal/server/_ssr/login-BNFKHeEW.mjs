import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Phone, m as EyeOff, p as Eye } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BNFKHeEW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles = `
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
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [saveUsername, setSaveUsername] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const savedUsername = localStorage.getItem("ally_saved_username");
		if (savedUsername) {
			setUsername(savedUsername);
			setSaveUsername(true);
		}
		const styleElement = document.createElement("style");
		styleElement.textContent = styles;
		document.head.appendChild(styleElement);
		return () => {
			document.head.removeChild(styleElement);
		};
	}, []);
	const handleLogin = (e) => {
		e.preventDefault();
		if (!username || !password) {
			alert("Please enter both username and password.");
			return;
		}
		if (saveUsername) localStorage.setItem("ally_saved_username", username);
		else localStorage.removeItem("ally_saved_username");
		localStorage.setItem("isLoggedIn", "true");
		localStorage.setItem("userEmail", username);
		navigate({ to: "/" });
	};
	const handleSaveUsernameChange = (e) => {
		setSaveUsername(e.target.checked);
		if (!e.target.checked) localStorage.removeItem("ally_saved_username");
		else if (username) localStorage.setItem("ally_saved_username", username);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ally-login-body",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "ally-login-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ally-login-logo",
					children: "ally"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ally-help-icon",
					title: "Help",
					children: "?"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ally-phone-icon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { color: "#0073b9" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "ally-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "ally-login-h1",
						children: "Log in."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleLogin,
						autoComplete: "off",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ally-form-group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "username",
									className: "ally-label",
									children: "Username"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ally-input-wrapper",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										id: "username",
										value: username,
										onChange: (e) => setUsername(e.target.value),
										className: "ally-input",
										autoComplete: "username"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ally-form-group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "password",
									className: "ally-label",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ally-input-wrapper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: showPassword ? "text" : "password",
										id: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "ally-input",
										autoComplete: "current-password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "ally-toggle-password",
										onClick: () => setShowPassword(!showPassword),
										"aria-label": showPassword ? "Hide password" : "Show password",
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 22 })
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ally-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "ally-btn-login",
									children: "Log In"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "ally-checkbox-wrapper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										id: "saveUsername",
										checked: saveUsername,
										onChange: handleSaveUsernameChange
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save username" })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ally-links",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Forgot ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { children: "username" }),
							" or ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { children: "password" }),
							"?"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { children: "Set up username and password" }) })]
					})
				]
			})
		]
	});
}
//#endregion
export { LoginPage as component };

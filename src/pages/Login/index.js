import "./style.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {!isAuthenticated ? (
          <button
            onClick={() => {
              debugger;
              loginWithRedirect();
            }}
          >
            Log In
          </button>
        ) : (
          <>
            <button
              onClick={() =>
                logout({ returnTo: window.location.origin + "/home" })
              }
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import "./style.css";

// export default function LoginPage() {
//   const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [isCorrectPassword, setIsCorrectPassword] = useState(false);
//   const isLoggedIn = localStorage.getItem("access") === "true";

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (password === "root" && username === "Admin") {
//   //     setIsCorrectPassword(true);
//   //   } else {
//   //     alert("incorrect password or username!");
//   //   }
//   // };

//   // if (isCorrectPassword) {
//   //   localStorage.setItem("access", "true");
//   //   // debugger;
//   //   // return <Navigate to="/home" />;
//   // }
//   // if (isLoggedIn || isCorrectPassword) {
//   //   return <Navigate to="/home" />;
//   // }
//   debugger;
//   return (
//     <div className="login-container">
//       <form
//         className="login-box"
//         // onSubmit={handleSubmit}
//       >
//         <h2>Login</h2>
//         <input
//           value={username}
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           value={password}
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {!isAuthenticated ? (
//           <button onClick={() => loginWithRedirect()}>Log In</button>
//         ) : (
//           <>
//             <button
//               onClick={() => logout({ returnTo: window.location.origin_ })}
//             >
//               Log Out
//             </button>
//           </>
//         )}
//         {/* <input
//           value={username}
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           value={password}
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button> */}
//       </form>
//     </div>
//   );
// }

// // export default LoginPage;

// import { useAuth0 } from "@auth0/auth0-react";

// const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

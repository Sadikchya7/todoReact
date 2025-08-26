// import "./style.css";

// export default function LoginPage() {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>

//         {!isAuthenticated ? (
//           <button
//             onClick={() => {
//               debugger;
//               loginWithRedirect();
//             }}
//           >
//             Log In
//           </button>
//         ) : (
//           <>
//             <button
//               onClick={() =>
//                 logout({ returnTo: window.location.origin + "/home" })
//               }
//             >
//               Log Out
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { Navigate } from "react-router-dom";

import "./style.css";
// const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    if (user) {
      debugger;

      return <Navigate to="/home" />;
    }

    return () => unsubscribe();
  }, []);

  const handleEmailLogin = () => {
    const emailLogin = email;
    const passwordLogin = password;

    signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
  };

  const handleGoogleLogin = () => {
    debugger;
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // .then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   // The signed-in user info.
    //   const user = result.user;
    //   // IdP data available using getAdditionalUserInfo(result)
    //   // ...
    // })
    // .catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorMessage);
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {user ? (
          <Navigate to="/home" />
        ) : (
          <>
            <form>
              <input
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </form>
            <button
              className="email-login"
              type="submit"
              onClick={handleEmailLogin}
            >
              Login
            </button>
          </>
        )}
        <h4>Or</h4>
        <button className="google-login" onClick={handleGoogleLogin}>
          Log In with Google
        </button>
      </div>
      {/* <div className="google-login"></div> */}
    </div>
  );
}

{
  /* {!user ? (
          <>
            <button onClick={handleEmailLogin}>Log In with Email</button>
            <br></br>
            <br></br>
            <button onClick={handleGoogleLogin}>Log In with Google</button>
          </>
        ) : (
          <>
           < <button onClick={handleLogout}>Log Out</button>>
          </>
        )} */
}
{
  /* <button onClick={handleEmailLogin}>Log In with Email</button> */
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

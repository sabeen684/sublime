// import { ReactNode, useEffect, useRef } from "react";
// import { useRouter } from "next/router";
// import { useAppDispatch, useAppSelector } from "@/redux/store";
// import { healthCheck } from "@/redux/thunks/authThunk";
// import { PERSIST_KEY } from "@/lib/config";
// import { AuthState, rehydrateAuth } from "@/redux/slice/authSlice";

// interface AuthProps {
//   children: ReactNode;
// }

// const Auth: React.FC<AuthProps> = ({ children }) => {
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const authSelector = useAppSelector((state) => state.auth);

//   useEffect(() => {
//     if (router.asPath.indexOf("[") > -1) return;

//     if (authSelector.token && authSelector.isLoggedIn) {
//       dispatch(
//         healthCheck({
//           token: authSelector.token,
//         })
//       );
//     } else {
//       router.push(`/?redirect=${encodeURIComponent(router.asPath)}`);
//     }
//   }, [authSelector.token, dispatch, router]);

//   addEventListener("storage", (e: StorageEvent) => {
//     if (e.key && e.key.indexOf(PERSIST_KEY) < 0) return;

//     const auth: AuthState | null = e.newValue
//       ? JSON.parse(JSON.parse(e.newValue).auth)
//       : null;

//     if (auth) dispatch(rehydrateAuth(auth));
//   });

//   if (!authSelector.token || !authSelector.isLoggedIn) {
//     router.push(`/?redirect=${encodeURIComponent(router.asPath)}`);
//     return null;
//   } else return children;
// };

// export default Auth;

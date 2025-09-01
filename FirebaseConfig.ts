// FirebaseConfig.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  type Auth,
} from "firebase/auth";
import { Platform } from "react-native";

// ✅ Your config (consider appspot.com bucket)
const firebaseConfig = {
  apiKey: "AIzaSyBubIjdSvqPIO4sDFFajQZBgBdWrolFvTs",
  authDomain: "ai-workout-app-e42f9.firebaseapp.com",
  projectId: "ai-workout-app-e42f9",
  storageBucket: "ai-workout-app-e42f9.appspot.com", // <- typical format
  messagingSenderId: "635379329203",
  appId: "1:635379329203:web:69703975982d8ad21d68c6",
  measurementId: "G-KR1EL6PCRP",
};

// Initialize app once (safe across Fast Refresh / SSR)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Cross-platform Auth singleton
let _auth: Auth;
if (Platform.OS === "web") {
  // Web/SSR: use getAuth (no React Native persistence)
  _auth = getAuth(app);
} else {
  // Native: initialize with RN persistence (and be safe on Fast Refresh)
  try {
    _auth = getAuth(app);
  } catch {
    _auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  }
}
export const auth = _auth;

// ✅ Optional: load Analytics ONLY on client web (avoid `window` on server)
export let analytics: any | undefined;
if (Platform.OS === "web" && typeof window !== "undefined") {
  (async () => {
    const { getAnalytics, isSupported } = await import("firebase/analytics");
    if (await isSupported()) {
      analytics = getAnalytics(app);
    }
  })();
}

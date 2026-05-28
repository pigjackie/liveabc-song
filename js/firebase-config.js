import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyCWcNX_urPo8HOV42pL_ngHs7a9T60tGWY",
  authDomain:        "liveabc-song.firebaseapp.com",
  projectId:         "liveabc-song",
  storageBucket:     "liveabc-song.firebasestorage.app",
  messagingSenderId: "545222080412",
  appId:             "1:545222080412:web:1c3a34e4b88053ebb97a59"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);

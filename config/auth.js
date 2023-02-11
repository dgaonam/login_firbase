import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import  app  from "./firebase";

const auth = getAuth(app);

const userCreate =   async (email, password) => {
const resultado = await createUserWithEmailAndPassword(auth, email, password)
  return resultado.user.uid;  
};

const login = async (email,password)=>{
    const resultado = await signInWithEmailAndPassword(auth, email, password)
    console.log(resultado);
    return resultado;
};

const sessionState = ()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        alert("Session expired");
      }
    });
};


export {auth,userCreate,login,onAuthStateChanged }
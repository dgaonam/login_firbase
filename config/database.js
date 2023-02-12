import { getDatabase,ref,set } from "firebase/database";
import  app from "./firebase";
const  writeUserData=  (document, id, user, email, firstName, lastName) => {
    const dbCurso = getDatabase();
    console.log(id);
    try {
       set(ref(dbCurso, document + '/' + id), {
        username: user,
        email: email,
        firstName: firstName,
        lastName: lastName
      });
      alert("Se registro de forma correcta");
    } catch (e) {
      console.log(e);
    }
  }

  const  writeContacData=  (document, id, userId, email, firstName, lastName,phone) => {
    const dbCurso = getDatabase();
    console.log(id);
    try {
       set(ref(dbCurso, document + '/' + id), {
        userId: userId,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone
      });
      alert("Se registro de forma correcta");
    } catch (e) {
      console.log(e);
    }
  }
export { writeUserData,writeContacData };
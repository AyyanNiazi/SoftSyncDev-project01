import firebase from 'firebase';
import Rebase from 're-base'

const config = {
  apiKey: "AIzaSyB3OPzCaVXpMnwpylFeLI4Z98iRRL27mPw",
  authDomain: "project01-8cd06.firebaseapp.com",
  databaseURL: "https://project01-8cd06.firebaseio.com",
  projectId: "project01-8cd06",
  storageBucket: "",
  messagingSenderId: "1026172209592"
};
const Firebase = firebase.initializeApp(config);
const base = Rebase.createClass(Firebase.database())



export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const storage = firebase.storage();
export {base}
export default Firebase;







//                  name="password" type="email" ref={(input) => {this.emailPassword = passsword}}

//  <input
                 
//                  className="btn btn-primary"
//                   type="submit" value="Log In"
//                   />       
//       // 
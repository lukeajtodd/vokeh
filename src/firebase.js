import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const auth = firebase.auth();
const currentUser = auth.currentUser;

const db = firebase.firestore();
const users = db.collection('users');
const posts = db.collection('posts');
const comments = db.collection('comments');
const likes = db.collection('likes');

export default db;
export { auth, currentUser, db, users, posts, comments, likes };

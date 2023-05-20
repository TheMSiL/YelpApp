import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyCyn50Fm6aE0As73B2WyqVCDFVmOmfuLhs',
	authDomain: 'yelpapp-1fe6f.firebaseapp.com',
	projectId: 'yelpapp-1fe6f',
	storageBucket: 'yelpapp-1fe6f.appspot.com',
	messagingSenderId: '993243074474',
	appId: '1:993243074474:web:6e0cf65278ca6c354465d3',
});

export const auth = getAuth(app);

export default app;

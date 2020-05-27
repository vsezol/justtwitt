import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBU2Ka_DIeRI7xrhGqBMN4dD3EdW3Ko0rM',
  authDomain: 'justtwitt-a5e19.firebaseapp.com',
  databaseURL: 'https://justtwitt-a5e19.firebaseio.com',
  projectId: 'justtwitt-a5e19',
  storageBucket: 'justtwitt-a5e19.appspot.com',
  messagingSenderId: '1021811529481',
  appId: '1:1021811529481:web:0150e430568926332825d8',
  measurementId: 'G-P2825843LQ'
}

firebase.initializeApp(firebaseConfig)
export default firebase.database()
// const databaseRef = firebase.database().ref()
// export const commentsRef = databaseRef.child('todos')

jest.mock('@firebase/app', () => ({
  auth: () => ({
    signInWithEmailAndPassword: (email, password) => new Promise((resolve, reject) => {
      if (email === 'hello' || password === '1234') {
        resolve({ name: 'user' });
      }
      reject(Error('sign in error'));
    }),
    createUserWithEmailAndPassword: (email, password) => new Promise((resolve, reject) => {
      if (email === 'text' || password === 'password') {
        resolve({ name: 'user' });
      }
      reject(Error('sign up error'));
    }),
    currentUser: { uid: '555' }
  }),
  database: () => ({
    ref: () => ({
      push: () => new Promise((resolve) => resolve()),
      on: (eventType, callback) => callback({ val: () => 'value' }),
      set: () => new Promise((resolve) => resolve()),
      remove: () => new Promise((resolve) => resolve()),
    })
  })
}));

jest.mock('@firebase/auth', () => {});

jest.mock('@firebase/database', () => {});

jest.mock('react-native-router-flux', () => ({
  Actions: {
    main: jest.fn().mockReturnValue(true),
  }
}));


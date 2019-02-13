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
  }),
}));

jest.mock('@firebase/auth', () => {});

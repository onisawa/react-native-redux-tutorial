jest.mock('@firebase/app', () => ({
  auth: () => ({
    signInWithEmailAndPassword: () => {}
  }),
}));

jest.mock('@firebase/auth', () => {});

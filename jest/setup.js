jest.mock('@firebase/app', () => ({
  auth: () => ({
    signInWithEmailAndPassword: () => new Promise(() => {})
  }),
}));

jest.mock('@firebase/auth', () => {});

jest.mock('react-native-router-flux', () => ({
  Actions: () => {}
}));

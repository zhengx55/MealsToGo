import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = async (email, password) => {
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = async (email, password) => {
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password);
};

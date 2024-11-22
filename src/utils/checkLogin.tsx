export const checkLogin = (token: string | null) => {
  if (token) return true;
  return false;
};

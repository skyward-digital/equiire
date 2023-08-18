export const resetPassword = async (data: {
  email: string;
  password: string;
  confirmationCode: string;
}) => {
  const res = await fetch('/api/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.ok
    ? { success: true }
    : { success: false, message: 'Password not reset' };
};

export const forgotPassword = async (data: { email: string }) => {
  const res = await fetch('/api/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.ok
    ? { success: true }
    : { success: false, message: 'Email not found' };
};

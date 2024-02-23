import { auth } from '@/auth';

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

// If you want to fetch the Role in Server component
export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};

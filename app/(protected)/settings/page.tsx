'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/use-current-user';
import { logout } from '@/actions/logout';

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <Button type="submit" variant="destructive" onClick={onClick}>
        Sign out
      </Button>
    </div>
  );
};

export default SettingsPage;

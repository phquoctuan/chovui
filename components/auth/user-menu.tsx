"use client";

import { authClient } from "@/lib/auth-client";

export function UserMenu() {
  const {
    data: session,
    isPending,
  } = authClient.useSession();

  if (isPending) {
    return (
      <div className="text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="text-sm text-muted-foreground">
        Not signed in
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="text-sm">
        {session.user.username ?? session.user.email}
      </div>

      <button
        type="button"
        onClick={async () => {
          await authClient.signOut();
        }}
        className="text-sm underline"
      >
        Sign out
      </button>
    </div>
  );
}
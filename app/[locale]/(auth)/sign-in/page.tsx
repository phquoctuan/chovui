import { SignInForm } from "@/components/forms/sign-in-form";

export default async function SignInPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md items-center px-4">
      <div className="w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">
            Sign in
          </h1>

          <p className="text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </div>

        <SignInForm
          // callbackURL="/account/profile"
          showPasswordToggle
        />
      </div>
    </div>
  );
}
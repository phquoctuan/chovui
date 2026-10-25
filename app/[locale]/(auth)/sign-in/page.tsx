import { SignInForm } from "@/components/forms/sign-in-form";

type SignInPageProps = {
  searchParams: Promise<{
    callbackUrl?: string | string[];
  }>;
};
export default async function SignInPage({
  searchParams,
}: SignInPageProps) {
  const params = await searchParams;
  const callbackUrl = typeof params.callbackUrl === "string"
        ? params.callbackUrl
        : undefined;
  return (
    // <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md items-center px-4">
    <main className="flex-1 container mx-auto w-full max-w-md items-center px-4 py-4">
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
          callbackURL={callbackUrl}
          showPasswordToggle
        />
      </div>
    </main>
  );
}
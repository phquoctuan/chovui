"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { authClient } from "@/lib/auth-client";

// import { LastUsedIndicator } from "../last-used-indicator";

const signInSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, "Username or email is required."),

  password: z
    .string()
    .min(1, "Password is required."),

  rememberMe: z.boolean(),
});

type SignInFormValues = z.infer<typeof signInSchema>;

interface SignInFormProps {
  onSuccess?: () => void;
  callbackURL?: string;
  showPasswordToggle?: boolean;
  params?: URLSearchParams;
}

export function SignInForm({
  onSuccess,
  callbackURL = "",
  showPasswordToggle = false,
  params,
}: SignInFormProps) {
  const [loading, startTransition] = useTransition();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),

    defaultValues: {
      identifier: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: SignInFormValues) => {
    startTransition(async () => {
      const identifier = data.identifier.trim();

      if (identifier.includes("@")) {
        await authClient.signIn.email(
          {
            email: identifier,
            password: data.password,
            rememberMe: data.rememberMe,
            callbackURL,
          },
          {
            query: params
              ? Object.fromEntries(params.entries())
              : undefined,

            onSuccess() {
              toast.success("Successfully signed in");
              onSuccess?.();
            },

            onError(context) {
              toast.error(context.error.message);
            },
          },
        );

        return;
      }

      await authClient.signIn.username(
        {
          username: identifier,
          password: data.password,
          rememberMe: data.rememberMe,
          callbackURL,
        },
        {
          query: params
            ? Object.fromEntries(params.entries())
            : undefined,

          onSuccess() {
            toast.success("Successfully signed in");
            onSuccess?.();
          },

          onError(context) {
            toast.error(context.error.message);
          },
        },
      );
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-2"
    >
      <FieldGroup>
        {/* Username / Email */}
        <Controller
          name="identifier"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="sign-in-identifier">
                Username or Email
              </FieldLabel>

              <Input
                {...field}
                id="sign-in-identifier"
                type="text"
                placeholder="Username or email"
                aria-invalid={fieldState.invalid}
                autoComplete="username"
              />

              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center">
                <FieldLabel htmlFor="sign-in-password">
                  Password
                </FieldLabel>

                <Link
                  href="/forget-password"
                  className="ml-auto inline-block text-sm text-foreground underline"
                >
                  Forgot your password?
                </Link>
              </div>

              {showPasswordToggle ? (
                <PasswordInput
                  {...field}
                  id="sign-in-password"
                  placeholder="Password"
                  aria-invalid={fieldState.invalid}
                  autoComplete="current-password"
                />
              ) : (
                <Input
                  {...field}
                  id="sign-in-password"
                  type="password"
                  placeholder="Password"
                  aria-invalid={fieldState.invalid}
                  autoComplete="current-password"
                />
              )}

              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        {/* Remember me */}
        <Controller
          name="rememberMe"
          control={form.control}
          render={({ field }) => (
            <Field orientation="horizontal">
              <Checkbox
                id="sign-in-remember"
                checked={field.value}
                onCheckedChange={field.onChange}
              />

              <FieldLabel
                htmlFor="sign-in-remember"
                className="font-normal"
              >
                Remember me
              </FieldLabel>
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        type="submit"
        className="relative w-full"
        disabled={loading}
      >
        {loading ? (
          <Loader2
            size={16}
            className="animate-spin"
          />
        ) : (
          "Login"
        )}

        {/* {isMounted &&
          authClient.isLastUsedLoginMethod("email") && (
            <LastUsedIndicator />
          )} */}
      </Button>
    </form>
  );
}
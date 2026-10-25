import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import {
  admin,
  username,
} from "better-auth/plugins";

import { db } from "../db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  user: {
    changeEmail: {
      enabled: true,
      updateEmailWithoutVerification: false,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  // Bổ sung thêm session additionalFields ở đây:
  session: {
    additionalFields: {
      // await authClient.updateSession({countryId: countryId});
      countryId: {
        type: "number",
        required: false,
        defaultValue: null,
        input: true, // cho phép client gửi lên trực tiếp hay qua hàm updateSession
      },
      regionId: {
        type: "number",
        required: false,
        defaultValue: null,
        input: true, // cho phép client gửi lên trực tiếp hay qua hàm updateSession
      },
    },
  },
  plugins: [
    username(),
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
});
//pnpm exec auth generate --adapter drizzle --dialect postgresql --output db/schema/auth.ts
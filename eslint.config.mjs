import next from "eslint-config-next";

// eslint-config-next v16 ships ready-to-use flat configs (core-web-vitals +
// typescript) as its default export, so we spread it directly instead of going
// through the legacy FlatCompat shim (which can't serialize its config objects).
const eslintConfig = [
  ...next,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;

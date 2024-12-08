import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.tsx"],
  customFetch: "myFetch",
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};
export default config;

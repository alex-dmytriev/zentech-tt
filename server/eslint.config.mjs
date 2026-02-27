import tseslint from 'typescript-eslint';

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: import.meta.dirname,
    },
  },
});

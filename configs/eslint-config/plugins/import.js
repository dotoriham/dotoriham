module.exports = {
  rules: [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling"],
        "index",
      ],
      pathGroups: [
        {
          pattern: "react",
          group: "builtin",
          position: "before",
        },
      ],
      pathGroupsExcludedImportTypes: ["react"],
      alphabetize: {
        order: "asc",
        caseInsensitive: false,
      },
      "newlines-between": "always",
    },
  ],
};

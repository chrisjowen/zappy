let lookups = [
  {
    id: "ProjectLookup",
    resourceId: "ListProjects",
    output: {
      list: "$response.body.issue",
      key: "$item.id",
      value: "$item.name",
    },
  },
];

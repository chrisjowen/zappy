let actions = [
  {
    id: "CreateIssueAction",
    resourceId: "CreateIssue",
    inputs: [
      {
        label: "Project",
        populates: "$path.params.id",
        type: "DropDown",
        lookupId: "ProjectLookup"
      },
      {
        label: "Issue Name",
        populates: "$body.name",
        type: "TextBox",
      },
      {
        label: "Issue Description",
        populates: "$body.description",
        type: "TextArea",
      },
    ]
  }
];
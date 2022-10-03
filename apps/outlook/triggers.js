let triggers = [
  {
    id: "EmailRecieved",
    resourceId: "FetchEmails",
    type: "PUSH",
    inputs: [
      {
        label: "Mailbox",
        populates: "$mailbox",
        type: "TextBox"
      }
    ],
    outputs: {
      from: {
        type: "String",
        exp: "$mail.from",
      },
      email: {
        type: "String",
        exp: "$mail.body.text",
      },
    }
  }
];
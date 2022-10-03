let actions = [
  {
    id: "SendMessageAction",
    resourceId: "SendMessage",
    inputs: [
      {
        label: "Message",
        type: "String",
        populates: "$path.message",
      },
      {
        label: "Recipient",
        type: "String",
        populates: "$path.recipient",
      },
    ]
  }
];
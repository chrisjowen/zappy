let pipeline = {
  user: "xxxxx",
  trigger: {
    id: "Outlook/EmailRecieved/123123",
    credentials: "Outlook/SmtpOutlookCredentials/723123",
    arguments: {
      "$mailbox": "christopher.owen@xxx.com",
    },
  },
  actions: [
    {
      id: "Jira/CreateIssue/112313",
      credentials: "Jira/JiraOauth/346346",
      arguments: {
        "$path.project_name": "CHRIS123",
        "$body.description": "This came from email body: {{$ctx.trigger.EmailRecieved123123.from}}",
        "$auth.token": "This came from email body: {{$ctx.trigger.EmailRecieved123123.email}}",
      },
    },
    {
      id: "Symphony/SendChatMessage/1412421",
      credentials: "Symphony/SymphonyBasicAuth/34634126",
      arguments: {
        "$body.recipient": "{{$ctx.trigger.EmailRecieved123123.to}}",
        "$body.bot": "Email sent from {{$ctx.trigger.EmailRecieved123123.from}} creating in issue number {{$ctx.actions.CreateIssue112313.issueId}}",
      },
    },
  ],
};
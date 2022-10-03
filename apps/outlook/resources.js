let sources = [

  {
    id: "FetchEmails",
    spec: {
      type: "EMAIL/SMTP",
      mailbox: "{{$mailbox}}"
    },
    authType: "SmtpCredentials",
  },
];
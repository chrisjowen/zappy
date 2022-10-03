let sources = [
  {
    id: "SendMessage",
    spec: {
      type: "HTTP/REST/JSON",
      verb: "POST",
      url: "http://bot.asdsad",
      template: {
        headers: {
          authentication: "Basic {{$auth.token}}}",
        },
        path: {
          uri: "send/",
        },
        body: {
          type: "application/json",
          template:
            "{ 'message' : '{{$body.name}}', 'recipient' : '{{$body.recipient}}',}",
        },
      },
    },
    authType: "SymphonyBasicAuth",
  },
  
];
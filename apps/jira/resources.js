let sources = [
  {
    id: "CreateIssue",
    authType: "JiraOauth",
    spec: {
      type: "HTTP/REST/JSON",
      verb: "POST",
      url: "http://jira.com/api/issues/:project",
      template: {
        headers: {
          authentication: "Bearer {{$auth.token}}}",
        },
        path: {
          uri: "issues/{{$path.project_name}}",
        },
        body: {
          type: "application/json",
          template:
            "{ 'name' : '{{$body.name}}', description: '{{$body.description}}'}",
        },
      },
      meta: {
        swaggerUrl: "http://jira.com/api/swagger.json",
        endpointId: "Create Issue"
      }
    },
    outputs: [
      {
        extractor: "Swagger"
      }
    ]
  },
  {
    id: "GetProjects",
    spec: {
      type: "HTTP/REST/JSON",
      verb: "GET",
      url: "http://jira.com/api/projects",
    },
    authType: "JiraOauth",
  },
];
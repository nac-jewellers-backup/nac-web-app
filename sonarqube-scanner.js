const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "https://scanner.automatly.io",
    token: "sqp_7c6525167766ca7709600b4b642b776e4c38e0fc",
    options: {
      "sonar.projectKey": "NAC-jewellers-UI",
      "sonar.sources": "src",
    },
  },
  () => process.exit()
);

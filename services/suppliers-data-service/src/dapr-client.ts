import { DaprClient } from "@dapr/dapr";

const daprHost = process.env.DAPR_HOST || "localhost";
const daprPort = process.env.DAPR_PORT || "3500"; // Replace with your Dapr HTTP port

const client = new DaprClient({
  daprHost,
  daprPort,
});

export default client;

import { IncomingMessage, ServerResponse } from "http";
import { handleEndpoints } from "./utils/handle-endpoints/handle-endpoints.js";

// Custom Type guard, Not necesary just educational purpose

type ACCEPTABLE_METHODS = "GET" | "get";
const isMethodAcceptable = (
  method: string | undefined
): method is ACCEPTABLE_METHODS => {
  if (method) return method.toUpperCase() === "GET";
  return false;
};


export const processRequests: (req: IncomingMessage,res: ServerResponse) => Promise<ServerResponse<IncomingMessage>> 
= async (  req: IncomingMessage, res: ServerResponse) => {
  // Server only answers to GET methods
  const { method }: { method?: string | undefined } = req;

  if (isMethodAcceptable(method)) {
    // Get the endpoint
    const { url }: { url?: string | undefined } = req;

    if (url) {
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      const webPage = await handleEndpoints(url)
      return res.end(webPage);
    }
  }

  return res.end('Not valid method')
};

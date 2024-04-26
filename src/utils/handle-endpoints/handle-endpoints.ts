import { getWebPageContent } from "../get-web-page-content/get-web-page-content.js";

// Promise with the resolved data of the html file
type handleEndpoint = (url:string) => Promise<string>

const indexEnpointHandler: handleEndpoint = (url:string) => {
    return getWebPageContent("index.html");
}

const aboutEnpointHandler: handleEndpoint = (url:string) => {
    return getWebPageContent("about.html");
}

const contactEnpointHandler: handleEndpoint = (url:string) => {
    return getWebPageContent("contact-me.html");
}

const notFoundEnpointHandler: handleEndpoint = (url:string) => {
    return getWebPageContent("404.html");
}

// Return and endpoint handler depending on the url
const endpointHandlerFactory: (url:string) => handleEndpoint = (url) => {
    const endpointMapper: Record<string, handleEndpoint> = {
        "/" : indexEnpointHandler,
        "/about": aboutEnpointHandler,
        "/contact-me": contactEnpointHandler,
    }
    if(url in endpointMapper) return endpointMapper[url]
    return notFoundEnpointHandler
}


// OCP 
export const handleEndpoints: (url: string) => Promise<string> = (url) => {
    return endpointHandlerFactory(url)(url)
};

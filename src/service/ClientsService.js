import http from "./HttpService";
import config from "../config/config.json";

// export const getClients = () => http.get(config.clientsPath);

export function getClients() {
    return http.get(config.clientsPath);
};

export const getClient = clientId => http.get(config.clientsPath + "/" + clientId);
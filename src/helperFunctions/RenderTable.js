import _ from "lodash";

export const RenderTable = (client, column) => _.get(client, column.path);
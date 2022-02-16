import _ from "lodash";
import {Paginate} from "./Paginate";
import {filteredClients} from "./FilteredClients";

export const getPageData = (clients, pageSize, currentPage, sortColumn, searchQuery) => {
    const clientsFiltered = filteredClients(clients, searchQuery);

    const allClients = _.orderBy(clientsFiltered, [sortColumn.path], [sortColumn.order]);

    const clientPaginate = Paginate(allClients, pageSize, currentPage);

    return ({ length: clientsFiltered.length, clientPaginate });
}

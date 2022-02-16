import _ from "lodash";

export let Paginate = (clients, pageSize, currentPage) => {
    const startIndex = (currentPage - 1) * pageSize;
    return _(clients)
        .slice(startIndex)
        .take(pageSize)
        .value();
};
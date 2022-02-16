export let filteredClients = (allClients, searchQuery) => {
    let clients = allClients;

    if (searchQuery) clients = allClients.filter(m => m.name.toLowerCase().startsWith(searchQuery.toLowerCase()));

    return clients;
};
export let filteredClients = (allClients, searchQuery) => {
    let clients = allClients;

    if (searchQuery) clients = allClients.filter(m => m.sender.toLowerCase().startsWith(searchQuery.toLowerCase()));

    return clients;
};
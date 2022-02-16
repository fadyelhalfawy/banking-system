import {Component} from "react";
import SearchBoxForm from "../components/SearchBox";
import ClientTable from "../clientTable/ClientTable";
import Pagination from "../components/Pagination";
import {getPageData} from "../helperFunctions/GetPageData";
import {getClients} from "../service/ClientsService";

export default class Clients extends Component {
    state = {
        clients: [],
        searchQuery: "",
        pageSize: 5,
        currentPage: 1,
        sortColumn: { path: "name", order: 'asc'}
    };

    async componentDidMount() {
        const {data: clients} = await getClients();
        this.setState({ clients });
    };

    render() {
        const {clients, searchQuery, currentPage, pageSize, sortColumn} = this.state;
        const { length, clientPaginate } = getPageData(clients, pageSize, currentPage, sortColumn, searchQuery);
        return(
            <div>
                <SearchBoxForm
                    value={searchQuery}
                    onChange={this.handleSearch}
                />
                <ClientTable
                    clients={clientPaginate}
                    onSort={this.handleSort}
                    sortColumn={sortColumn}
                />

                <Pagination
                    pageSize={pageSize}
                    length={length}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
        )
    }

    handlePageChange = page => this.setState({currentPage: page} );

    handleSearch = query => this.setState({ searchQuery: query, currentPage: 1 });

    handleSort = path => {
      const sortColumn = { ...this.state.sortColumn };
      if (sortColumn.path === path)
          sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';

      this.setState({ sortColumn });
    };

};
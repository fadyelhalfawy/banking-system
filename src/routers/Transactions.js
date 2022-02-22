import {getPageData} from "../helperFunctions/GetPageData";
import SearchBoxForm from "../components/SearchBox";
import Pagination from "../components/Pagination";
import {Component} from "react";
import TransTable from "../transTable/TransTable";
import {getAllTransactions} from "../service/TransactionsService";

export default class Transactions extends Component {
        state = {
            trans: [],
            searchQuery: "",
            pageSize: 5,
            currentPage: 1,
            sortColumn: {path: "sender", order: 'asc'},
            data: {
                name: "",
                receiver: "",
                money: ""
            }
        };

        async componentDidMount() {
            const {data: trans} = await getAllTransactions();
            this.setState({trans});
        };

    render() {
        const {trans, searchQuery, currentPage, pageSize, sortColumn} = this.state;
        const {length, dataPaginate} = getPageData(trans, pageSize, currentPage, sortColumn, searchQuery, 1);
        return (
            <div>
                <SearchBoxForm
                    value={searchQuery}
                    onChange={this.handleSearch}
                />
                <TransTable
                    trans={dataPaginate}
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

    handlePageChange = page => this.setState({currentPage: page});

    handleSearch = query => this.setState({searchQuery: query, currentPage: 1});

    handleSort = path => {
        const sortColumn = {...this.state.sortColumn};
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';

        this.setState({sortColumn});
    };
};
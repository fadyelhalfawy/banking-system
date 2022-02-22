import {Component} from "react";
import {DisplayTable} from "./DisplayTable";

export default class ClientTable extends Component {
    render() {
        const { clients, onSort, sortColumn } = this.props;

        return(
            <DisplayTable
                data={clients}
                columns={this.columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />
        );
    };

    columns = [
        { path: "name", label: "Name"},
        { path: "email", label: "Email"},
        { path: "phone", label: "Money"}
    ];
}
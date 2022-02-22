import {Component} from "react";
import {DisplayTable} from "../clientTable/DisplayTable";


export default class TransTable extends Component {
    render() {
        const { trans, onSort, sortColumn } = this.props;

        return(
            <DisplayTable
                data={trans}
                columns={this.columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />
        );
    };

    columns = [
        { path: "sender", label: "Sender"},
        { path: "receiver", label: "Receiver"},
        { path: "amount", label: "Money"}
    ];
}
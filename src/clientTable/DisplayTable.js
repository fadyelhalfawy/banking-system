import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export const DisplayTable = ({ clients, columns, onSort, sortColumn }) => {

    return(
        <table className="table table-dark">
            <TableHeader
                columns={columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />

            <TableBody
                clients={clients}
                columns={columns}
            />
        </table>
    );
}
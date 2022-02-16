import {Component} from "react";
import {RenderTable} from "../helperFunctions/RenderTable";

export default class TableBody extends Component {

    render() {
        const { clients, columns } = this.props;

        return(
            <tbody>
            {clients.map((client, index) => (
                <tr key={client._id}>
                    <td>{index + 1}</td>
                    {columns.map(column =>
                        <td key={column.path}>
                            { RenderTable(client, column) }
                        </td>
                    )}
                </tr>
            ))}
            </tbody>
        );
    };
}

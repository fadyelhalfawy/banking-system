import {Component} from "react";
import Joi from "joi-browser";
import classes from "../modules/about-us.module.css";
import SearchBoxForm from "../components/SearchBox";
import ClientTable from "../clientTable/ClientTable";
import Pagination from "../components/Pagination";
import {getPageData} from "../helperFunctions/GetPageData";
import {getClients} from "../service/ClientsService";
import {SelectGenderForm} from "../components/SelectGenderForm";
import InputForm from "../components/InputForm";

export default class Clients extends Component {
    state = {
        clients: [],
        searchQuery: "",
        pageSize: 5,
        currentPage: 1,
        sortColumn: {path: "name", order: 'asc'},
        data: {money: ""},
        errors: {}
    };

    schema = {
        money: Joi.number().required().label("Money")
    };

    async componentDidMount() {
        const {data: clients} = await getClients();
        this.setState({clients});
    };

    render() {
        const {clients, searchQuery, currentPage, pageSize, sortColumn, data, errors} = this.state;
        const {length, clientPaginate} = getPageData(clients, pageSize, currentPage, sortColumn, searchQuery);
        const {history} = this.props;
        return (
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

                <SelectGenderForm
                    id={"Client-1"}
                    label={"Sender"}
                    clients={clientPaginate}
                />

                <SelectGenderForm
                    id={"Client-2"}
                    label={"Receiver"}
                    clients={clientPaginate}
                />

                <InputForm
                    name={"money"}
                    type={"text"}
                    value={data["money"]}
                    onChange={this.handleChange}
                    label={<label className={classes.select}>Money</label>}
                    placeholder={"Write the amount"}
                    error={errors["money"]}
                />

                <button
                    className={"btn btn-outline-success btn-space"}
                    disabled={this.validate()}
                    onClick={() => this.handleClickButton(history, "/transactions")}>
                    {"Send Money"}
                </button>

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

    validate() {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {};

        for (let item of error.details) errors[item.path[0]] = item.message;

        return errors;
    };

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null
    };

    handleChange = ({currentTarget: target}) => {
        const {data, errors} = this.state;
        const getErrors = {...errors};
        const errorMessage = this.validateProperty(target);
        if (errorMessage) getErrors[target.name] = errorMessage;
        else delete getErrors[target.name];

        const getData = {...data};
        getData[target.name] = target.value;
        this.setState({data: getData, errors: getErrors});
    };

    handleClickButton = (history, path) => history.push(path);
}
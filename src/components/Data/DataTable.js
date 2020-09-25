import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

class DataTable extends Component {

    state = {
        sales: this.props.sales,
        sortedBy: "weekEnding",
        isSortOrderAsc: true, 
        headings: {
            weekEnding: "week ending",
            retailSales: "retail sales",
            wholesaleSales: "wholesale sales",
            unitsSold: "units sold",
            retailerMargin: "retailerMargin"
        }
    }

    renderTableHeader = () => {
        let header = Object.keys(this.props.sales[0]);
        return header.map((key, idx) => {
            return  <th onClick={(e) => this.sortTable(key)} key={idx}>
                        {this.state.headings[key].toUpperCase()} &nbsp;
                        {this.state.isSortOrderAsc && this.state.sortedBy === key
                            ? <FontAwesomeIcon className="icon-style" icon={faCaretDown} />
                            : <FontAwesomeIcon className="icon-style" icon={faCaretUp} />}
                    </th>
        });
    }

    sortTable(key) {
        let newSales = null;
        let newSortOrder = null;

        if(key === this.state.sortedBy && this.state.isSortOrderAsc === true){
            newSales = this.state.sales.sort((b, a) => parseInt(String(a[key]).replace(/[^0-9\.]/g, ''), 10) - parseInt(String(b[key]).replace(/[^0-9\.]/g, ''), 10));
            newSortOrder = false;
        } else {
            newSales = this.state.sales.sort((a, b) => parseInt(String(a[key]).replace(/[^0-9\.]/g, ''), 10) - parseInt(String(b[key]).replace(/[^0-9\.]/g, ''), 10));
            newSortOrder = true;
        }

        this.setState({
            sales: newSales,
            sortedBy: key,
            isSortOrderAsc: newSortOrder
        })
    }

    renderTable = () =>{
        return this.state.sales.map((week, idx) => {

            const { weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin } = week;
 
            const formatter = new Intl.NumberFormat('en-US', 
            { 
                style: 'currency', 
                currency: 'USD', 
                currencyDisplay: 'narrowSymbol' 
            })

            return (
                <tr key={idx}>
                    <td>{weekEnding}</td>
                    <td>{formatter.format(retailSales)}</td>
                    <td>{formatter.format(wholesaleSales)}</td>
                    <td>{unitsSold}</td>
                    <td>{formatter.format(retailerMargin)}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="data-table card-style">
                <table>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default DataTable;

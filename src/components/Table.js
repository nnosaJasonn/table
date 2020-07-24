import React, {useState} from 'react';
import Header from './Header';
import Row from './Row';


export default ({rows, columns, sortBy, sortType}) => {
    const [sortState, setSortState] = useState({
        sortBy: sortBy,
        sortType: sortType,
        sortDirection: true
    })

    const changeSort = (name, type) => {
        let dir = sortState.sortDirection;
        let by = sortState.sortBy;
        let sType = sortState.sortType
        if(name === sortState.sortBy) {
            setSortState({
                sortBy: by,
                sortType: sType,
                sortDirection: !dir
            })
        }
        else {
            setSortState({
                sortBy: name,
                sortType: type,
                sortDirection: true
            })
        }
    }
    
    const datify = (d) => {
        return new Date(d)
    }

    const sortByDate = (rows, direction, field) => {
        let lower = direction === true ? -1 : 1;
        let higher = direction === true ? 1 : -1;
        return rows.sort((a, b) => {
            if (datify(a[field]) < datify(b[field])) {
                return lower;
            }
            if (datify(a[field]) > datify(b[field])) {
                return higher;
            }
            return 0;
        })
    }

    const sortByStandard = (rows, direction, field) => {
        let lower = direction === true ? -1 : 1;
        let higher = direction === true ? 1 : -1;
        return rows.sort((a,b) => {
            if(a[field] < b[field]) {
                return lower;
            }
            if(a[field] > b[field]) {
                return higher;
            }
            return 0;
        })
    }

    const sortByNumber = (rows, direction, field) => {
        let lower = direction === true ? -1 : 1;
        let higher = direction === true ? 1 : -1;
        return rows.sort((a,b) => {
            if(parseInt(a[field]) < parseInt(b[field])) {
                return lower;
            }
            if(parseInt(a[field]) > parseInt(b[field])) {
                return higher;
            }
            return 0;
        })
    }

    const checkBool = (bool) => {
        return bool === 'Open';
    }

    const sortByBool = (rows, direction, field) => {
        let lower = direction === true ? -1 : 1;
        let higher = direction === true ? 1 : -1;
        return rows.sort((a,b) => {
            return (checkBool(a[field]) === checkBool(b[field])) ? 0 : checkBool(a[field]) ? lower : higher;
        })
    }

    const setColumnOrder =()=> {
        return columns.map((col) => {
            return col.name;
        })
    }
    let columnOrder = setColumnOrder();
    
    const sortData = () => {
        let data;
        let type = sortState.sortType;
        let direction = sortState.sortDirection;
        let sortBy = sortState.sortBy;
        if (type === 'date') {
            data = sortByDate(rows, direction, sortBy)
        }
        else if ( type === 'text') {
            data = sortByStandard(rows, direction,sortBy);
        }
        else if (type === 'number') {
            data = sortByNumber(rows, direction, sortBy);
        }
        else if (type === 'boolean') {
            data = sortByBool(rows, direction, sortBy);
        }
        else {
            data = rows;
        }
        return data.map((d, i) => {
            return <Row key={i} columnOrder={columnOrder} data={d}/>
        })
    }

    let sortedData = sortData();



        return (
            <div className="">
                <table  className="table table-responsive">
                    <Header sortBy={sortState.sortBy} direction={sortState.sortDirection} sort={changeSort} columns={columns}/>
                    <tbody>
                        {sortedData}
                    </tbody>
                </table>
            </div>
        )
    }
    

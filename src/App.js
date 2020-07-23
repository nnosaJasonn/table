import React, {useState} from 'react';
import './App.css'
import Header from './components/Header';
import Row from './components/Row';
const columns = [
    {
        label: 'Id',
        name: 'Id',
        type: 'id',
        sortable: 'false',
    },
    {
        label: 'External Id',
        name: 'External_Id',
        type: 'id',
        sortable: 'false',
    },
    {
        label: 'Name',
        name: 'Name',
        type: 'text',
        sortable: 'text',
    },
    {
        label: 'Date Created',
        name: 'Date_Created',
        type: 'date',
        sortable: 'date'
    },
    {
        label: 'Status',
        name: 'Status',
        type: 'boolean',
        sortable: 'boolean'
    }
];

const rows = [
    {
        Id: '123',
        External_Id: 'abc',
        Name: 'Bob',
        Date_Created: '07/21/2020',
        Status: 'Open'
    },
    {
        Id: '234',
        External_Id: 'def',
        Name: 'Janis',
        Date_Created: '07/21/2020',
        Status: 'Closed'
    },
    {
        Id: '345',
        External_Id: 'fgh',
        Name: 'Elijah',
        Date_Created: '07/20/2020',
        Status: 'Open'
    },
    {
        Id: '678',
        External_Id: 'hij',
        Name: 'zeke',
        Date_Created: '07/10/2020',
        Status: 'Closed'
    },
    {
        Id: '098',
        External_Id: 'zyx',
        Name: 'Karen',
        Date_Created: '06/21/2020',
        Status: 'Closed'
    },
    {
        Id: '987',
        External_Id: 'wvu',
        Name: 'Moses',
        Date_Created: '07/13/2019',
        Status: 'Closed'
    },
    {
        Id: '876',
        External_Id: 'kjl',
        Name: 'Byrd',
        Date_Created: '06/30/2020',
        Status: 'Open'
    },
    {
        Id: '765',
        External_Id: 'lji',
        Name: 'Buggy Bug',
        Date_Created: '07/07/2020',
        Status: 'Closed'
    }
]

export default () => {
    const [sortState, setSortState] = useState({
        sortBy: 'Date_Created',
        sortType: 'date',
        sortDirection: true
    })

    const changeSort = (name, type) => {
        console.log('name -> ' + name)
        console.log('type -> ' + type);
        console.log(sortState.sortDirection);
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
    
    const sortData = () => {
        let data;
        let type = sortState.sortType;
        let direction = sortState.sortDirection;
        let sortBy = sortState.sortBy;
        if (type === 'date') {
            data = sortByDate(rows, direction, sortBy)
        }
        else if ( type === 'text' || type === 'number') {
            data = sortByStandard(rows, direction,sortBy);
        }
        else if (type === 'boolean') {
            data = sortByBool(rows, direction, sortBy);
        }
        else {
            data = rows;
        }
        return data.map((d) => {
            return <Row data={d}/>
        })
    }

    let sortedData = sortData();



        return (
            <div>
                <Header color="green" />
                <table className="fixed_header">
                    <Header sortBy={sortState.sortBy} direction={sortState.sortDirection} sort={changeSort} columns={columns}/>
                    <tbody>
                        {sortedData}
                    </tbody>
                </table>
            </div>
        )
    }
    

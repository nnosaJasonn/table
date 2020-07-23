<h1>Table Component:</h1>

<p>To use, add defined columns, rows, sortby, and sort type as properties to the table component.</p>


<h3>columns</h3>
<p>Column objects must have these attributes: </p>

<ol>
    <li>label -> (string) this is the display value</li>
    <li>name -> (string) this is the name used to match table data to values</li>
    <li>type -> (string) this is the sorting method</li>
    <li>sortable -> (bool) this determines whether a column is sortable</li>
</ol>

supported sort methods: 
    <ul>
        <li>text</li>
        <li>number</li>
        <li>date</li>
        <li>boolean</li>
    </ul>


example columns:

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

<h3>rows</h3>
<p>Define rows as an array of row objects. The table automatically lines row attributes up with columns, but any attributes that are not also in the columns will not appear in the table</p>

e.g.
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
        External_Id: 'wvu',
        Date_Created: '07/13/2019',
        Id: '987',
        Status: 'Closed',
        Name: 'Moses'
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


<h3>sort by</h3>

<p>This is to set the default column to sort by. It should match the name attribute for one of the columns</p>

e.g:

const sortBy = 'Date_Created';

<h3>Sort Type</h3>

<p>This is to set the default sort method. It should match the type attribute of the column chosen in "sort by"</p>
    
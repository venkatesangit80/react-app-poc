import logo from './logo.svg';
import './App.css';
import EmployeeDataGrid from './EmployeeDataGrid'; // Import the component

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

const rows = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 35 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 30 },
    // Add more employee data here
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <EmployeeDataGrid columns={columns} rows={rows} /> {/* Use the component */}
            </header>
        </div>
    );
}

export default App;
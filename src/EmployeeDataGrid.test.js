import { render, fireEvent, screen } from '@testing-library/react';
import EmployeeDataGrid from './EmployeeDataGrid';
import { DataGrid } from '@mui/x-data-grid';

jest.mock('@mui/x-data-grid', () => {
  return {
    __esModule: true,
    DataGrid: ({ rows, columns, onRowClick }) => {
      return (
        <div>
          {rows.map((row, index) => (
            <button key={row.id} onClick={() => onRowClick({ row })}>
              {`${row.firstName} ${row.lastName}`}
            </button>
          ))}
        </div>
      );
    },
  };
});

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

const rows = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 35 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 30 },
];

test('EmployeeDataGrid renders and handles row click', () => {
    render(<EmployeeDataGrid columns={columns} rows={rows} />);

    // Check if the component renders correctly
    rows.forEach((row) => {
        expect(screen.getByText(`${row.firstName} ${row.lastName}`)).toBeInTheDocument();
    });

    // Simulate a click event on the first row
    fireEvent.click(screen.getByText(`${rows[0].firstName} ${rows[0].lastName}`));

    // Check if the name of the clicked row is displayed at the top
    const matchedElements = screen.getAllByText(`${rows[0].firstName} ${rows[0].lastName}`);
    expect(matchedElements.length).toBe(2);
});
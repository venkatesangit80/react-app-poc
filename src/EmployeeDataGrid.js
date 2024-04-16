import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function EmployeeDataGrid({ columns, rows }) {
  const [selectedName, setSelectedName] = React.useState('');

  const handleRowClick = (param) => {
    setSelectedName(`${param.row.firstName} ${param.row.lastName}`);
  };

  return (
      <div style={{ height: 400, width: '100%' }}>
        <h1>{selectedName}</h1>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            onRowClick={handleRowClick}
        />
      </div>
  );
}
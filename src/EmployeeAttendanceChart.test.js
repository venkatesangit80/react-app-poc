import { render, screen } from '@testing-library/react';
import EmployeeAttendanceChart from './EmployeeAttendanceChart';
import HighchartsReact from 'highcharts-react-official';

jest.mock('highcharts-react-official', () => {
  return {
    __esModule: true,
    HighchartsReact: ({ highcharts, options }) => {
      return (
        <div>
          <h1>{options.title.text}</h1>
          {options.xAxis.categories.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>
      );
    },
  };
});

const attendanceData = [
    { name: 'John Doe', attendance: 20 },
    { name: 'Jane Doe', attendance: 18 },
];

test('EmployeeAttendanceChart renders correctly', () => {
    render(<EmployeeAttendanceChart attendanceData={attendanceData} />);

    // Check if the chart title is rendered correctly
    expect(screen.getByText('Employee Attendance')).toBeInTheDocument();

    // Check if the names of the employees are rendered correctly
    attendanceData.forEach((data) => {
        expect(screen.getByText(data.name)).toBeInTheDocument();
    });
});
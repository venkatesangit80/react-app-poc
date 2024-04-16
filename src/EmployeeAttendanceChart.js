import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EmployeeAttendanceChart = ({ attendanceData }) => {
    const options = {
        title: {
            text: 'Employee Attendance'
        },
        xAxis: {
            categories: attendanceData.map(data => data.name)
        },
        yAxis: {
            title: {
                text: 'Days Attended'
            }
        },
        series: [{
            name: 'Attendance',
            data: attendanceData.map(data => data.attendance)
        }]
    };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
};

export default EmployeeAttendanceChart;
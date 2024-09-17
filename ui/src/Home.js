import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeStats = () => {
    const [totalEmployees, setTotalEmployees] = useState(0);
    const [employeesByDepartment, setEmployeesByDepartment] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8080/students/total")
            .then(response => setTotalEmployees(response.data))
            .catch(error => console.error('Error fetching total employees:', error));

        axios.get("http://localhost:8080/students/departments")
            .then(response => setEmployeesByDepartment(response.data))
            .catch(error => console.error('Error fetching employees by department:', error));
    }, []);

    return (
        <div>
            <h1>Employee Statistics</h1>
            <div className="stats">
                <div className="stat-block">
                    <h2>Total Employees</h2>
                    <p>{totalEmployees}</p>
                </div>
                <div className="stat-block">
                    <h2>Employees by Department</h2>
                    <ul>
                        {Object.entries(employeesByDepartment).map(([department, count]) => (
                            <li key={department}>{department}: {count}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EmployeeStats;
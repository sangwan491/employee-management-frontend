import React from 'react';
import EmployeeItem from './EmployeeItem';

const EmployeeList = ({ employees, onUpdate, onDelete }) => {
  return (
    <section className="employee-list">
      {employees.length == 0? (
        <span className="no-employees-found">No employees found. Add a new employee to get started.</span>
      ) : (
        employees.map(employee => (
          <EmployeeItem
            key={employee.id}
            employee={employee}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </section>
  );
};

export default EmployeeList;

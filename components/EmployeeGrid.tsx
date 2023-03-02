import { Employee } from "@/lib/loadEmployees";
import React from "react";
import EmployeeCard from "./EmployeeCard";

import styles from "./EmployeeGrid.module.css";

type Props = {
  employees: Employee[];
};
const EmployeeGrid: React.FC<Props> = ({ employees }) => {
  return (
    <div className={styles.listContainer}>
      {employees.map((employee) => (
        <EmployeeCard key={employee.email} {...{ employee }} />
      ))}
    </div>
  );
};

export default EmployeeGrid;

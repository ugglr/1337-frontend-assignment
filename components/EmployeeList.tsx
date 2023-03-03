import { Employee } from "@/lib/loadEmployees";
import React from "react";
import EmployeeCard from "./EmployeeCard";

type Props = {
  employees: Employee[];
};
const EmployeeList: React.FC<Props> = ({ employees }) => {
  return (
    <div>
      {employees.map((employee, index) => (
        <EmployeeCard
          key={`${employee.email}+${index}`}
          {...{ employee, variant: "horizontal" }}
        />
      ))}
    </div>
  );
};

export default EmployeeList;

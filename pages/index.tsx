import { useMemo, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Employee, loadEmployees } from "@/lib/loadEmployees";

import { EmployeeGrid, EmployeeList } from "@/components";

import styles from "@/styles/Home.module.css";
import ViewToggle from "@/components/ViewToggle";

export type Views = "grid" | "list";
type Cities =
  | "stockholm"
  | "lund"
  | "ljubljana"
  | "helsingborg"
  | "borlange"
  | string;

const checkboxes: Array<{ label: string; value: Cities }> = [
  {
    label: "Stockholm",
    value: "stockholm",
  },
  {
    label: "Lund",
    value: "lund",
  },
  {
    label: "Ljubljana",
    value: "ljubljana",
  },
  {
    label: "Helsingborg",
    value: "helsingborg",
  },
  {
    label: "Borlänge",
    value: "borlange",
  },
];

type Props = {
  employees: Employee[];
};
const HomePage: NextPage<Props> = ({ employees }) => {
  const [currentView, setCurrentView] = useState<Views>("grid");
  const [name, setName] = useState<string>("");
  // All cities checked by default
  const [cities, setCities] = useState<Array<Cities>>([
    "stockholm",
    "lund",
    "ljubljana",
    "helsingborg",
    "borlange",
  ]);

  const handleToggle = (view: Views) => {
    if (currentView !== view) setCurrentView(view);
  };

  const handleFilterCity = (city: Cities) => {
    if (cities.includes(city)) {
      console.log("here?");
      setCities((prevState) => [...prevState].filter((c) => c !== city));
    } else {
      console.log("here??");
      setCities((prevState) => [...prevState, city]);
    }
  };

  const filteredEmployees = useMemo(() => {
    let res;

    const cityFiltered = employees.filter((emp) => {
      return cities.includes(emp.office?.toLowerCase());
    });

    res = cityFiltered.filter((emp) => {
      return emp.name.toLowerCase().includes(name.toLowerCase());
    });

    return res;
  }, [employees, name, cities]);

  return (
    <>
      <Head>
        <title>1337 Employees | Frontend Code assignment</title>
        <meta name="description" content="1337 employees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.filterContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>Search by name:</label>
            <input
              className={styles.input}
              placeholder="Search by name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="search"
            />
          </div>
          <div className={styles.cityFilterContainer}>
            <p className={styles.inputLabel}>Filter by Office:</p>
            <div className={styles.boxesContainer}>
              {checkboxes.map(({ value, label }) => (
                <div key={value}>
                  <label className={styles.checkboxLabel}>{label}</label>
                  <input
                    type="checkbox"
                    checked={cities.includes(value)}
                    onChange={() => handleFilterCity(value)}
                  />
                </div>
              ))}
            </div>
          </div>
          <ViewToggle {...{ currentView, onToggle: handleToggle }} />
        </div>
        {currentView === "list" ? (
          <EmployeeList {...{ employees: filteredEmployees }} />
        ) : (
          <EmployeeGrid {...{ employees: filteredEmployees }} />
        )}
      </main>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const employees = await loadEmployees();

  return {
    props: {
      employees,
    },
  };
};

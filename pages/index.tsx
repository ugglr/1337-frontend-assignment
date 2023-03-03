import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Employee, loadEmployees } from "@/lib/loadEmployees";

import EmployeeGrid from "@/components/EmployeeGrid";
import EmployeeList from "@/components/EmployeeList";

import styles from "@/styles/Home.module.css";
import ViewToggle from "@/components/ViewToggle";

export type Views = "grid" | "list";

type Props = {
  employees: Employee[];
};
const HomePage: NextPage<Props> = ({ employees }) => {
  const [currentView, setCurrentView] = useState<Views>("grid");

  const onToggle = (view: Views) => {
    if (currentView !== view) setCurrentView(view);
  };

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
          <ViewToggle {...{ currentView, onToggle }} />
        </div>
        {currentView === "list" ? (
          <EmployeeList {...{ employees }} />
        ) : (
          <EmployeeGrid {...{ employees }} />
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

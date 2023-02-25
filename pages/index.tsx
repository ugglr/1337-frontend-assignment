import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Employee, loadEmployees } from "@/lib/loadEmployees";
import { NextPage } from "next";

type Props = {
  employees: Employee[];
};
const HomePage: NextPage<Props> = ({ employees }) => {
  return (
    <>
      <Head>
        <title>1337 Employees | Frontend Code assignment</title>
        <meta name="description" content="1337 employees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Assignment</h1>
        {employees.map((emp) => (
          <div key={emp.email}>
            <p>{emp.name}</p>
          </div>
        ))}
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

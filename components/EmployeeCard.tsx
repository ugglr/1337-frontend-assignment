import { Employee } from "@/lib/loadEmployees";
import Image from "next/image";
import React from "react";
import { FiImage, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

import styles from "./EmployeeCard.module.css";

const formatTwitterUrl = (handle: string) => {
  return `https://twitter.com/${handle.replaceAll("@", "")}`;
};

type Props = {
  employee: Employee;
};
const EmployeeCard: React.FC<Props> = ({
  employee: { name, imagePortraitUrl, office, linkedIn, github, twitter },
}) => {
  github && console.log("github: ", github);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {imagePortraitUrl ? (
          <Image
            fill
            style={{
              objectFit: "cover",
            }}
            src={imagePortraitUrl}
            alt={`${name} portrait`}
          />
        ) : (
          <FiImage className={styles.noImageIcon} />
        )}
      </div>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.socialsContainer}>
          {linkedIn && (
            <a
              href={`https://linkedin.com${linkedIn}`}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className={styles.socialIcon} />
            </a>
          )}
          {github && (
            <a
              href={`https://github.com${github}`}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className={styles.socialIcon} />
            </a>
          )}
          {twitter && (
            <a
              href={formatTwitterUrl(twitter)}
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter className={styles.socialIcon} />
            </a>
          )}
        </div>
      </div>
      <div className={styles.body}>{`Office: ${office}`}</div>
    </div>
  );
};

export default EmployeeCard;

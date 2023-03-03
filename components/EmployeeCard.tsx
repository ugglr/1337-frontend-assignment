import { Employee } from "@/lib/loadEmployees";
import Image from "next/image";
import React from "react";
import { FiImage, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

import styles from "./EmployeeCard.module.css";

const formatTwitterUrl = (handle: string) => {
  return `https://twitter.com/${handle.replaceAll("@", "")}`;
};

type SocialIconsProps = {
  linkedIn: string | null;
  github: string | null;
  twitter: string | null;
};
const SocialIcons: React.FC<SocialIconsProps> = ({
  linkedIn,
  github,
  twitter,
}) => (
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
      <a href={`https://github.com${github}`} target="_blank" rel="noreferrer">
        <FiGithub className={styles.socialIcon} />
      </a>
    )}
    {twitter && (
      <a href={formatTwitterUrl(twitter)} target="_blank" rel="noreferrer">
        <FiTwitter className={styles.socialIcon} />
      </a>
    )}
  </div>
);

type Props = {
  variant?: "vertical" | "horizontal";
  employee: Employee;
};
const EmployeeCard: React.FC<Props> = ({
  variant = "default",
  employee: {
    name,
    imagePortraitUrl,
    office,
    linkedIn,
    github,
    twitter,
    mainText,
  },
}) => {
  if (variant === "horizontal") {
    return (
      <div className={styles.horizontalContainer}>
        <div className={styles.leftContainer}>
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
        <div className={styles.rightContainer}>
          <div className={styles.horizontalTitleContainer}>
            <h3 className={styles.horizontalTitle}>{name}</h3>
            <SocialIcons {...{ linkedIn, github, twitter }} />
          </div>
          <div className={styles.body}>
            <p className={styles.horizontalOfficeText}>{`Office: ${office}`}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: `${mainText?.slice(0, 280)}...` ?? "N/A",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
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
        <SocialIcons {...{ linkedIn, github, twitter }} />
      </div>
      <div className={styles.body}>{`Office: ${office}`}</div>
    </div>
  );
};

export default EmployeeCard;

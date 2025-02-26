import React from "react";

import classes from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={classes.contactContainer}>
      <h1 className={classes.contactContainer__h1}>CONTACT</h1>
      <h3 className={classes.contactContainer__h3}>
        I am available for an immediate start and open to any ideas of
        cooperation and to learn new things.
      </h3>

      <ul className={classes.contactContainer__list}>
        <li>
          E-mail:
          <a className={classes.links} href="mailto: patryk.nowak@gmail.com">
            patryk.nowak@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:
          <a
            rel="noreferrer"
            target="_blank"
            className={classes.links}
            href="https://www.linkedin.com/in/patryknowak1990/"
          >
            patryknowak1990
          </a>
        </li>
        <li>
          GitHub:
          <a
            rel="noreferrer"
            target="_blank"
            className={classes.links}
            href="https://github.com/Pat-On"
          >
            Pat-On
          </a>
        </li>
        <li>
          LeetCode:
          <a
            rel="noreferrer"
            target="_blank"
            className={classes.links}
            href="https://leetcode.com/Pat-On/"
          >
            Pat-On
          </a>
        </li>
      </ul>

      {/* <p>google map or something like that pointing Birmingham</p> */}
    </div>
  );
};

export default Contact;

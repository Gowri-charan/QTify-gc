import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
        // "?." operator will give null if the value before ?. is undefined
        <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  className={styles.chip}
                  size="small"
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
        // <div title={`${songs?.length} songs`} placement="top" arrow>
        // <div className={styles.wrapper}>
        //   <div className={styles.card}>
        //     <img src={image} alt="album" />
        //     <div className={styles.banner}>
        //       <div
        //         label={`${follows} Follows`}
        //         className={styles.chip}
        //         size="small"
        //       />
        //     </div>
        //   </div>
        //   <div className={styles.titleWrapper}>
        //     <p>{title}</p>
        //   </div>
        // </div>
      // </div>
      );
    }

    case "song": {
      // const { image, likes, title, songs } = data;
      const { image, likes, title} = data;
      return (
        // no tooltip required here according to figma provided
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="album" loading="lazy" />
            <div className={styles.banner}>
              <div className={styles.pill}>
                <p>{likes} Likes</p>
              </div>
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return <></>;
  }
}

export default Card;

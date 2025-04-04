import styles from "./Accordion.module.css";
import ARROW_ICON from "../../assets/arrow.svg";
import { useState } from "react";
export function Accordion({ items }) {
  const [activeItemIndex, setActiveItem] = useState(0);
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li
            key={item.title}
            onClick={() => {
              setActiveItem(index);
            }}
          >
            <div className={styles.item}>
              <p>{item.title}</p>
              <img
                src={ARROW_ICON}
                className={activeItemIndex === index ? styles.expanded : ""}
              />
            </div>
            {activeItemIndex === index && <p>{item.content}</p>}
          </li>
        );
      })}
    </ul>
  );
}

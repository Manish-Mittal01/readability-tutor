import styles from "./chat.module.css";

export default function Icon({ customStyle, icon, badge, onClick, alt = "" }) {
  return (
    <div style={{ position: "relative" }}>
      <img src={icon} style={{ margin: 12, ...customStyle }} alt={alt} />
      {badge && (
        <p className={styles.speakerIcon} onClick={onClick}>
          {badge}
        </p>
      )}
    </div>
  );
}

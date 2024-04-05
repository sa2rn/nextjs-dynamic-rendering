import styles from './Box.module.css';

export default function Box({ children, style }) {
  return <div className={styles.root} style={style}>{children}</div>;
}

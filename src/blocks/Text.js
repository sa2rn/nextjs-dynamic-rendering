import styles from './Text.module.css';

export default function Text({ style, text }) {
  return <p className={styles.root} style={style}>{text}</p>;
}

import PropTypes from 'prop-types';
import styles from './Box.module.css';

/**
 * Box
 */
export default function Box({ style, children }) {
  return <div className={styles.root} style={style}>{children}</div>;
}

Box.propTypes = {
  /** Inline styles */
  style: PropTypes.shape({
    /** Background color */
    '--bg': PropTypes.string,
    /** Padding */
    '--padding': PropTypes.string,
    /** Margins */
    '--gap': PropTypes.string,
  }),
  children: PropTypes.node,
};

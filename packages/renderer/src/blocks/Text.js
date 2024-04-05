import PropTypes from 'prop-types';
import styles from './Text.module.css';

export default function Text({ style, text }) {
  return <p className={styles.root} style={style}>{text}</p>;
}

Text.propTypes = {
  /**
   * Inline styles
   */
  style: PropTypes.shape({
    /** Font size */
    '--font-size': PropTypes.string,
    /** Font family */
    '--font-family': PropTypes.string,
    /** Font style */
    '--font-style': PropTypes.string,
    /** Text color */
    '--color': PropTypes.string,
    /** Background color */
    '--gap': PropTypes.string,
  }),
  /** Text content */
  text: PropTypes.string,
};

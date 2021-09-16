import SCanvas from '../../Styled/canvas/SCanvas';
import PropTypes from 'prop-types';

const Canvas = ({ children }) => <SCanvas>{children}</SCanvas>;

Canvas.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Canvas;

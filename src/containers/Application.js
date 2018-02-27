import { connect } from 'react-redux';

import withKeyboard from '../hoc/withKeyboard';
import Calc from '../components/Calc';


const calc = withKeyboard(Calc);

const mapStateToProps = ({ calc }) => ({ ...calc });

const mapDispatchToProps = dispatch => {
    return {
        action: (type, value = null) => dispatch({ type, value })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(calc);

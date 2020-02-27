import * as React from 'react';
import {connect} from "react-redux";



const Counter = ({points,snakelength}) => {
    return(
        <div>
          <div>
            Points: {points}
        </div>
            <div>
                Length: {snakelength}
            </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        points: state.counter.points,
        snakelength: state.counter.snakelength
    };
};

export default connect(
    mapStateToProps,
    null
)(Counter);

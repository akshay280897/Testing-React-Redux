import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types'

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {header,desc,temp} = this.props;
        console.log(header);
        if(!header){
            return null;
        }

        return(
            <header className="headerComponent">
            <div className="wrap">
                {header}
            </div>
        <p className="para">{desc}</p>
        </header>
        );
    }
}
// const Header = (props) => {
//     return(
//         <header className="headerComponent">
//             <div className="wrap">
//                 Test WebSite
//             </div>
//             <p className="para">My First Component</p>
//         </header>
        
//     )
// };

Header.propTypes = {
    header:PropTypes.string,
    desc:PropTypes.string,
    temp:PropTypes.arrayOf(PropTypes.shape({
        fName:PropTypes.string,
        lName:PropTypes.string,
        age:PropTypes.number
    }))
}
export default Header;
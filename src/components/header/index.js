import React from 'react';
import './styles.scss'

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {header,desc} = this.props;
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

export default Header;
import  React from 'react'
import PropTypes from'prop-types'
const Profile = (props) => {
    console.log (props);

     const {fullName,profession,bio,children,handleName } = props;
    
    return (
        <div className="card-container">
            <div className="upper-container">
            {children}
             </div >
             <div className="lower-container">
             <h3>{fullName}</h3>
              
             <h4>{profession}</h4>
             <p>{bio}</p>
             <button className="btn" onClick={()=>handleName(fullName)} >click name</button>
             
             </div>
            
        </div>
    )
}
Profile.defaultProps={
    fullName:'assma',
    bio:'img',
    profession:'prof'
    }
Profile.propTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired,
    handleName:PropTypes.func
};

export default Profile


import React  from 'react'
import PropTypes from 'prop-types'


 const Useritems = ({user:{login,avatar_url,html_url }}) => {

        // const {login,avatar_url,html_url} = props.user;
        return (
            <div className='card text-center'>
                <img src={avatar_url} alt="" className='round-img' style={{width:'80px'}}></img>

                <h3>{login}</h3>
                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
                </div>
            </div>
        )
    
}
Useritems.propTypes = {
    user:PropTypes.object.isRequired
};

export default Useritems

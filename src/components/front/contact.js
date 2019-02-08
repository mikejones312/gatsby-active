import React, { Component } from 'react'
import { Link } from 'gatsby'

class Contact extends Component {
	onclickcontact=(e)=>{
        document.getElementById('contactView').classList.add('is-active'); 
    }

    
    render()
     {
        return (
<div className="box bottom-cta has-text-white has-background-grey">
	<div className="container">
		<div className="columns is-vcentered">
			<div className="column is-6 is-offset-2">
				<p>
					Exploring content solutions? Looking to replatform?
				</p>
				
			</div>
			<div className="column">
				<a className="button is-primary"  onClick={this.onclickcontact}>
					<span className="icon">
						<i className="fa fa-comments-o"></i>
					</span>
					<span>Contact Sales</span>
				</a>
			</div>
		</div>
	</div>	
</div>

        )
    }
}

export default Contact



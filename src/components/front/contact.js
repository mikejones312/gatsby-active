import React, { Component } from 'react'
import { Link } from 'gatsby'

class Contact extends Component {
    

    
    render()
     {
        return (
<div class="box bottom-cta has-text-white has-background-grey">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-6 is-offset-2">
				<p>
					Exploring content solutions? Looking to replatform?
				</p>
				
			</div>
			<div class="column">
				<a class="button is-primary" href="javascript:void(0);" onclick="document.querySelector('.quickview').classList.add('is-active');">
					<span class="icon">
						<i class="fa fa-comments-o"></i>
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



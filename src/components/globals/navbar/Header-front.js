import React, { Component } from 'react'
import { Link } from 'gatsby'



class Navbar extends Component {

    onclickcontact=(e)=>{
        document.getElementById('contactView').classList.add('is-active'); 
        // sendEventToGoogle('marketing','click','Contact Button in Header');
    }
    render() {


        return (
            <section className="hero is-info is-medium is-bold">

                <div className="hero-head">
                    <nav className="navbar is-fixed-top is-link">
                        <div className="container">
                            <div className="navbar-brand">
                                <Link className="navbar-item" to="/">
                                   <h1>Logo</h1> 
                                </Link>
                                <span className="navbar-item is-hidden-desktop">
                                    <div className="button is-primary is-small"  onClick={this.onclickcontact}>
                                        <span className="icon">
                                            <i className="fa fa-comments-o"></i>
                                        </span>
                                        <span title="Contact Sales">Contact Sales</span>
                                    </div>
                                </span>
                                <span className="navbar-burger burger" data-target="navbarMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>



                            <div id="navbarMenu" className="navbar-menu">
                                <div className="navbar-start">
                                    <div className="navbar-item has-dropdown is-hoverable is-hidden">
                                        <Link className="navbar-link" to="#">
                                           Gatsby
                </Link>
                                        <div className="navbar-dropdown has-background-info">


                                            <Link className="navbar-item " to="/marketers/">Marketers</Link>



                                            <Link className="navbar-item " to="/developers/">Developers</Link>



                                            <Link className="navbar-item " to="/customers/">Customers</Link>


                                        </div>
                                    </div>

                                    <span className="navbar-item is-hidden">
                                        <Link className="button  is-white is-outlined " to="">

                                            <small title="Open Accounts" className="has-text-normal">Open Accounts</small>
                                        </Link>
                                    </span>


                                    <Link className="navbar-item " to="/marketers/">Marketers</Link>



                                    <Link className="navbar-item " to="/developers/">Developers</Link>



                                    <Link className="navbar-item " to="/customers/">Customers</Link>


                                </div>

                                <div className="navbar-end">



                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <Link className="navbar-link" to="/">
                                            
</Link>
                                        <div id="blogDropdown" className="navbar-dropdown has-background-info">
                                            <div className="is-fluid">
                                                <div className="columns">

                                                    <div className="column">
                                                        <h5 className="title is-6 is-mega-menu-title">Topics</h5>

                                                        <Link className="navbar-item " to="/content-marketing/">
                                                             Marketing
                </Link>

                                                        <Link className="navbar-item " to="/customer-stories/">
                                                             Stories
                </Link>

                                                        <Link className="navbar-item " to="/headless/">
                                                            
                </Link>

                                                        <Link className="navbar-item " to="/internet-of-things/">
                                                            Internet of Things
                </Link>

                                                        <Link className="navbar-item " to="/marketing-technology/">
                                                             Technology
                </Link>

                                                        <Link className="navbar-item " to="/marketing-trends/">
                                                             Trends
                </Link>

                                                        <Link className="navbar-item " to="/social-media/">
                                                             Media
                </Link>

                                                        <Link className="navbar-item " to="/product-announcements/">
                                                            Product Announcements
                </Link>

                                                    </div>
                                                  <h1> Just text </h1>
                                                </div>
                                            </div>

                                            <hr className="navbar-divider" />
                                            <div className="navbar-item">
                                                <div className="navbar-content">
                                                    <div className="level is-mobile">
                                                        <div className="level-left">
                                                            <div className="level-item">
                                                                <h6 className="title is-6"><Link to="/authors/"> Authors</Link></h6>
                                                            </div>
                                                        </div>
                                                        <div className="level-right">
                                                            <div className="level-item">
                                                                <Link className="button is-primary is-small" to="#">
                                                                    <span className="icon is-small">
                                                                        <i className="fa fa-rss"></i>
                                                                    </span>
                                                                    <span>Subscribe</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <Link className="navbar-link" to="#">
                                            Platform
                </Link>
                                        <div className="navbar-dropdown has-background-info">
                                            <Link className="navbar-item" target="_blank" to="#">
                                                <div className="level is-mobile">
                                                    <div className="level-left">
                                                        <div className="level-item">
                                                            <p>
                                                                <i className="fa fa-book has-text-light"></i> <strong>Platform</strong>
                                                                <br />
                                                                <small> Easily Searchable Docs &amp; Specs</small>
                                                            </p></div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link className="navbar-item" target="_blank" to="/">
                                                <div className="level is-mobile">
                                                    <div className="level-left">
                                                        <div className="level-item">
                                                            <p>
                                                                <i className="fa fa-terminal has-text-light"></i> <strong> REPL</strong>
                                                                <br />
                                                                <small> Learn the languadpoints</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link className="navbar-item" target="_blank" to="/">
                                                <div className="level is-mobile">
                                                    <div className="level-left">
                                                        <div className="level-item">
                                                            <p>
                                                                <i className="fa fa-circle has-text-success chat-circle"></i> <strong>Community Chat</strong>
                                                                <br />
                                                                <small> Join chat for help and support</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>



                                    <div className="navbar-item has-dropdown is-hoverable is-hidden">
                         
                                        <div className="navbar-dropdown has-background-info">
                                            <Link className="navbar-item" to="/">
                                                <span className="icon">
                                                    <i className="fa fa-th"></i>
                                                </span>
                                                <span title="Logout">My Instances</span>
                                            </Link>
                                            <Link className="navbar-item" to="/">
                                                <span className="icon">
                                                    <i className="fa fa-sign-out"></i>
                                                </span>
                                                <span title="Logout">Logout</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <span className="navbar-item">
                                        <Link className="button is-white is-outlined" to="">
                                            <span className="icon">
                                                <i className="fa fa-sign-in"></i>
                                            </span>
                                            <small title="Login to " className="has-text-normal">Sign In</small>
                                        </Link>
                                    </span>
                                    <span className="navbar-item">
                                        <div className="button is-primary" to="javascript:void(0);" onClick={this.onclickcontact}>
                                            <span className="icon">
                                                <i className="fa fa-comments-o"></i>
                                            </span>
                                            <span title="Contact Sales">Contact Sales</span>
                                        </div>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </nav>
                </div>


                <div id="Translation">

<h3>The standard Lorem Ipsum passage, used since the 1500s</h3><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p><h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3><p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
<h3>1914 translation by H. Rackham</h3>
<p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
<h3>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
<h3>1914 translation by H. Rackham</h3>
<p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
</div>

<div id="again">

<h3>The standard Lorem Ipsum passage, used since the 1500s</h3><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p><h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3><p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
<h3>1914 translation by H. Rackham</h3>
<p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
<h3>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
<h3>1914 translation by H. Rackham</h3>
<p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
</div>

            </section>

        )
    }
}

export default Navbar



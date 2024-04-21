import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a class="navbar-brand ml-3" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active ml-3">
                            <Link class="nav-link" to='/'>Add User</Link>
                        </li>
                        <li class="nav-item active ml-3 mr-3">
                            <Link class="nav-link" to='/showuser'>Show User</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav

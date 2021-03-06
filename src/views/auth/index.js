import './index.css'

import { MENU_BUILDER } from '../../navigation/builders/menu.builders';

function Login () {;
    var isShowPassword = false

    function submit () {
        window.location.href = MENU_BUILDER[0].path
    }

    return (
        <>
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h2 className="mb-5 mt-2">Login</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-group">
                                                    <input className="form-control py-2 border-right-0 border" type="text" placeholder="Username" />
                                                    <span className="input-group-append">
                                                        <div className="input-group-text bg-transparent">
                                                            <i className="fa fa-user"></i>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <br />                                        

                                        <div className="row">
                                            <div className="input-group col-12">
                                                <input className="form-control py-2 border-right-0 border" type={ isShowPassword ? "text" : "password" } placeholder="Password" />
                                                <span className="input-group-append">
                                                    <button className="btn border-left-0 border" type="button">
                                                        <i className={ isShowPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>

                                        <br />
                                        <br />
                                        
                                        <div className="form-group">
                                            <button type="button" onClick={ submit } className="btn btn-block btn-login">
                                                <i className="fa fa-sign-in"></i> Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
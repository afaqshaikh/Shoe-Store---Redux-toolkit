import "./index.css"
const Footer = () => {
    return (
        <div className="row footer  mt-5 pt-3">
            <div className="container p-4">
                <div className="row">
                    <div className="col-6 text-center">
                        <p className="text-white fw-bold" >Developed By Technical Haji
                            
                        </p>
                    </div>
                    <div className="col-6 text-center">
                        <a
                            title="facebook"
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/technicalhajiofficial"
                        >
                            <i className="fab fa-facebook text-white fs-3 "></i>
                        </a>
                        <a
                            title="github"
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/afaqshaikh"
                        >
                            <i className="fab fa-github text-white fs-3  ps-2"></i>
                        </a>
                        <a
                            title="linkedin"
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/muhammad-afaque-68a830202/"
                        >
                            <i className="fab fa-linkedin text-white fs-3 ps-2"></i>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
import Link from 'next/link'

export default function Navigation () {
    return (
        <>
    <div className="footer__divider"></div>
        <footer className="section-footer"> 
        <div className="footer__content">
            <div className="footer__bio">
            <h3>Thanks for visiting my site.</h3>
            <p>I am J. Nicole Mors, a Designer located in cloudy Portland Oregon. You should know, I have serious weakness for all things cute, including but not limited to: babies, baby animals and my little dog, Gary. Most recently I am learning JavaScript, and buying books I never get around to reading. When I am not designing or coding, I like to run and stay up late learning how to play Alanis Morissette songs on the ukulele. I am currently a Lead Product Designer at <a className="link" href="http://www.airship.com">Airship</a> where I focus on our Design System, Dark Matter.
            </p>
        </div>
        <div className="footer__connect">
        <ul className="footer__connect-list">
                <li>
                    <a className="link" href="">
                        <img alt="github logo" className="footer__connect-icon" src="/images/git.svg" />
                        Github
                    </a>
                </li>
                <li>
                    <a className="link" href="">
                        <img alt="linkedin logo" className="footer__connect-icon" src="/images/linkedin.svg" />
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a className="link" href="">
                        <img alt="dribbble logo" className="footer__connect-icon" src="/images/dribbble.svg" />
                        Dribbble
                    </a>
                </li>
            </ul>
            <p>I love connecting with folks, specially other creatives. <a className="link" href="mailto:nicolemors@gmail.com">Shoot me an email</a> or let's connect on the networks. @nicolemors everywhere.</p>
        </div>
        </div>
        </footer>
        </>
        )
    }
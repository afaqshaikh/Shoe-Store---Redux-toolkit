import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./index.css"
const About = () => {
    return (
        <>
            <Header />
            <div className="row">
                <div className="col home-image ">
                    <h2 className="text-white">About Us</h2>
                </div>
                <div className="container mt-4 p-5">
                    <div className="row">
                        <div className="col">
                            <p>
                            The debut Serena Williams Design Crew (SWDC) collection is releasing in fall 2021. The capsule, which includes apparel, footwear and accessories, was designed by the inaugural SWDC apprenticeship cohort, represented by 10 designers from diverse backgrounds. Below, Serena shares some of the values that guide the program, describes the qualities she sees in the apprentices, 
                            and emphasizes why diversity matters – not only for the future of design, but for the future. Period.
                            </p>
                            <p>
                            Sport might be one of the most diverse communities we have in this world. And the best version of sport is always the one 
                            that’s open to everyone. Sport inspires me, and I hope to inspire others through it too.
                            </p>
                            <p>
                            That’s where I saw the Serena Williams Design Crew making an impact. With Nike, I’m bringing my love for sport and design together, working to build more inclusive, equitable communities in both while inspiring new 
                            generations to fall in love with sport and pursue their dreams.
                            </p>
                            <p>
                            I’ve always surrounded myself with people from different backgrounds, cultures and walks of life. I know the value of diversity in making us better. When you have diversity, you discover new perspectives, which leads to 
                            new ideas and ultimately toward better results.
                            </p>
                            <p>
                            In sport and in design, I always want the best result possible. And it’s the same for Nike. That’s why I’m so proud of our partnership on the Serena Williams Design Crew program
                             and the opportunity for change we’re creating together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
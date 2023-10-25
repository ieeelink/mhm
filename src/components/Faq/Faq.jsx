const Faq = () => {
    return (
        <div className="w-3/4 mx-auto " id="faq">

            <div>
                <br />
                <br />
                <h1 className="text-4xl font-bold">FAQ</h1>
                <br />
            </div>
            <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    1. What is MHM?
                </div>
                <div className="collapse-content">
                    <p>

                        Malabar Hub Meet(MHM) is an annual gathering of all the members of the IEEE Malabar hub. The two-day event allows you to network with peers, learn new skills, expand your technical knowledge, hear from expert speakers, and most importantly, have fun.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">

                    2. Where is MHM’23 held ?

                </div>
                <div className="collapse-content">
                    <p>

                        MHM'23 will take place from the 18th and 19th of November at GCE Kannur.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">

                    3. Will food and accommodation be provided ?

                </div>
                <div className="collapse-content">
                    <p>Yes ,food and accommodation will be provided.</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">


                    4. Is separate registration required for workshops?

                </div>
                <div className="collapse-content">
                    <p>

                        No, only a single MHM registration is needed.</p>
                </div>
            </div>

            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">


                    5. Will the participants get certificates?

                </div>
                <div className="collapse-content">
                    <p>

                        Yes, certificates will be provided to the participants.</p>
                </div>
            </div>

            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">


                    6. Will I be refunded if I decide to cancel my registration?

                </div>
                <div className="collapse-content">
                    <p>

                        Amount will not be refunded under any circumstances.</p>
                </div>
            </div>

            <br />
        </div>
    )
}

export default Faq
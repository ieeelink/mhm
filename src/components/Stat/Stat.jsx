const Stat = () => {
    return (
        <div className="stat" id="stat">
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    </div>
                    <div className="stat-title">Participant Count</div>
                    <div className="stat-value text-primary">180+</div>
                    <div className="stat-desc">Networking opportunity with 250+ participants and volunteers</div>
                </div>

                <div className="stat">
                    <div className="stat-figure">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Workshop Count</div>
                    <div className="stat-value ">3</div>
                    <div className="stat-desc">Interactive & fun filled workshops</div>
                </div>

                <div className="stat">
                    <div className="stat-figure">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>                    </div>
                    <div className="stat-value">5+</div>
                    <div className="stat-title">Speakers</div>
                    <div className="stat-desc text-secondary">Industry Experts & Leaders </div>
                </div>

            </div>
        </div>
    );
};

export default Stat;
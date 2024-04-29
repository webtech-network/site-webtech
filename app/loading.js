
export default function Loading() {
    return (
        <div className="flex items-center   flex-col justify-center h-screen gap-6 bg">
            <div className="border-t-4 border-solid rounded-full border-primary border-opacity-75 h-28 w-28 animate-spin "></div>



            <div className="loading-text text-3xl font-bold text-secondary-dark">
                <span className="letter">C</span><span className="letter">a</span><span className="letter">r</span><span className="letter">r</span><span className="letter">e</span><span className="letter">g</span><span className="letter">a</span><span className="letter">n</span><span className="letter">d</span><span className="letter">o</span>
                <span className="letter">.</span>
                <span className="letter">.</span>
                <span className="letter">.</span>
            </div>


        </div>
    );
}
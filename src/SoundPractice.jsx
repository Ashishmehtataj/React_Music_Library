import { Howl } from "howler"

function SoundPractice() {
    const sound = new Howl({
        src: "/public/Soundd.mp3",
        volume: 0.1,
        loop: true,
    });
    function changebg(color) {
        document.body.style.background = color; // background color change
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="text-center mt-10 p-5 h-28">
                <h1 className="inline-block text-2xl bg-gray-300 p-2 rounded">This is Sound Library in React</h1>
            </div>
            <div className="flex justify-center items-center">
                <button className="text-2xl gap-4 m-6 font-bold border-2 rounded-2xl h-20 w-60 border-amber-400 uppercase" onClick={() => {
                    sound.play(); changebg("yellow");
                }}>Play Sound</button>

            </div>
            <div className="flex justify-center items-center">
                <button className="text-2xl gap-4 m-6 font-bold border-2 rounded-2xl h-20 w-60 border-amber-400 uppercase" onClick={() => {
                    sound.stop();
                    changebg("gray");
                }}>Stop Sound</button>
            </div>
            <div className="flex justify-center items-center">
                <button className="text-2xl gap-4 m-6 font-bold border-2 rounded-2xl h-20 w-60 border-amber-400 uppercase" onClick={() => {
                    sound.pause();
                    changebg("pink");
                }}>Pause Sound</button>

            </div>
        </div>
    )
}
export default SoundPractice;

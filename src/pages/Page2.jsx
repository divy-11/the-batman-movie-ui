import bg from '../assets/bg.avif';

export default function Page2() {
    return (
        <div className="relative h-screen w-full">
            <div
                className="absolute inset-0 bg-cover"
                style={{
                    backgroundImage: `url(${bg})`,
                    filter: 'blur(4px)', 
                }}
            />
            <div className="relative z-5 flex items-center justify-center h-full text-white">
                hey
            </div>
        </div>
    );
}

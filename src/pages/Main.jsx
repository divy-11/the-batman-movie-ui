import bg from '../assets/mainLogo.jpg';
import Sidebar from '../Components/Sidebar';

export default function Main() {
    return (
        <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <Sidebar/>
        </div>
    );
}
import Main from '../components/Main.tsx'
import SideBar from '../components/SideBar.tsx'
export default function HomePage() {
    return (
        <div className="main-container">
            <SideBar />
            <Main />
        </div>
    )
}
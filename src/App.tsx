import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <section className=' bg-gray-50 h-full flex-grow'>
                <AppRoutes />
            </section>
            <Footer />
        </div>
    );
}

export default App;

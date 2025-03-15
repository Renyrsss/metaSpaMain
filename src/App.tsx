import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
    return (
        <>
            <Header />
            <section className=' bg-gray-50 h-full '>
                <AppRoutes />
            </section>
            <Footer />
        </>
    );
}

export default App;

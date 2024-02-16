import Date from "./_components/date/Date";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import Review from "./_components/review/Review";
import ServicesInfo from "./_components/services-info/ServicesInfo";

const Final = () => {
    return (
        <main style={{ paddingBottom: "100px" }}>
            <Header />
            <ServicesInfo />
            <Date />
            <Review />
            <Footer />
        </main>
    );
};

export default Final;

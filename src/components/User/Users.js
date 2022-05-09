import react from "react";
import Card from "../shared/Card";
import { useParams } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Users() {
  const params = useParams();

  return (
    <>
      <Header />

      <Navbar />

      <div className="container">
        <br />
        <br />

        <Card>
          <h1>
            Your login name is: {params.name} your user ID is: {params.id}
          </h1>
        </Card>

        <br />
      </div>
      <Footer />
    </>
  );
}

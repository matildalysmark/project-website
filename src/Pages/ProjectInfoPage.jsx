import '../style/ProjectInfoPage.css';
import { useNavigate } from 'react-router-dom';

export default function ProjectInfoPage() {
    const navigate = useNavigate();

    return (
        <main className="page-container">
            <header className="info-header">
                <h1>Hello! We are Group 1 and Welcome to ITREEA!</h1>
                <p className="subtitle">
                    <em>ITREEA is an internal sustainability dashboard for IKEA that centralizes fragmented supply chain data into one single website!</em>
                </p>
            </header>

            <section className="info-content">
                <h2>What is ITREEA?</h2>
                <p>
                    ITREEA is a platform that maps wood and textile suppliers, displaying their material origins, carbon footprints and capacities to make eco-conscious procurement <strong>much easier!</strong> To prevent decision deadlock caused by conflict, ITREEA aggregates complex environmental and labor data into a single, weighted 0-100 sustainability index score!
                </p>
                <p>
                    ITREEA allows sourcing leaders to instantly identify and replace non-sustainable components, reducing friction and securing a reliable and transparent supply chain!
                </p>
            </section>
            <button type="button" onClick={() => navigate("/app")}>
                TO DEMO
            </button>
            <section>
                <p>
                    made with love by; Elsa, Gabriel, Emma, Matilda, Jacob and Freja.
                </p>
            </section>
        </main>
    );
}

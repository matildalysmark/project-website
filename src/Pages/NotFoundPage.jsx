import { Link } from 'react-router-dom';
import '../style/NotFoundPage.css';

export default function NotFoundPage() {
    return (
        <section className="notFoundPage">
            <h1>Page not found</h1>
            <Link to="/" className="notFoundLink">Go back home</Link>
        </section>
    );
}
import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
    const params = useParams();

    return (
        <section>
            <h2> Quote Detail </h2>
            <h3> { params.quoteId } </h3>
        </section>
    )
}

export default QuoteDetail;
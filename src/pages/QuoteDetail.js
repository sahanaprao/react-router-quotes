import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();

    return (
        <section>
            <h2> Quote Detail </h2>
            <h3> { params.quoteId } </h3>
            <Route path="/quotes/:quoteId/comments">
                <Comments />
            </Route>
        </section>
    )
}

export default QuoteDetail;
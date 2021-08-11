import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_LIST = [
    {id:'q1',author:'Akash', text: 'Learning React if great!'},
    {id:'q2',author:'sahana', text: 'Learning React is fun!'}
]


const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_LIST.find(quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>Quote not found!</p>
    }

    return (
        <section>
            <HighlightedQuote author={quote.author} text={quote.text}/>
            <Route path="/quotes/:quoteId/comments">
                <Comments />
            </Route>
        </section>
    )
}

export default QuoteDetail;
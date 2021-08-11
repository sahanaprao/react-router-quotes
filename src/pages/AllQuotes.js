import QuoteList from '../components/quotes/QuoteList';

const DUMMY_LIST = [
    {id:'q1',author:'Akash', text: 'Learning React if great!'},
    {id:'q2',author:'sahana', text: 'Learning React is fun!'}
]

const AllQuotes = () => {
    return (
        <QuoteList quotes = {DUMMY_LIST}/>
    );
}

export default AllQuotes;
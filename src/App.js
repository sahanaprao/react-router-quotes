import { Route, Switch, Redirect } from 'react-router-dom';

import  AllQuotes  from './pages/AllQuotes';
import  QuoteDetail  from './pages/QuoteDetail';
import  NewQuote  from './pages/NewQuote';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
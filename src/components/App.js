import React from 'react';
// eslint-disable-next-line
import {Router,Route , Link, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'

// const PageOne = () => {
//     return <div>PageOne
//         <Link to="/pagetwo">navigate to page 2</Link>
//     </div>
// }

// const PageTwo= () => {
//     return (
//             <div>
//             <div>PageTwo
//            <button>btn click</button>
//            <Link to="/">navigate to page 1</Link>
//             </div>   
//             </div> 
// )
// }



// client 870369786497-vo8pd6hpnhjt87nm3erjc1t6sssuml0q.apps.googleusercontent.com
// server X7aan_Mc9uEM1wqr4vYwdDPq
const App = () => {
    return (
    <div className="ui container">
   
        <Router history={history}>
        <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={StreamCreate}/>
          <Route path="/streams/edit/:id" exact component={StreamEdit}/>
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow}/>
          </Switch>
          </div>
        </Router>
    </div>
    )

}

export default App;
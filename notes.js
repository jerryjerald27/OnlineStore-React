Online shopping 

Dependencies 

npm install --save bootstrap 
npm install --save react-router-dom


to add google fonts 
go to google fonts , clickona font 
copy its href link and paste it in the index.html in the public folder inside the head tag 

Roboto 
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

css rule 
font-family: 'Roboto', sans-serif;

Oswald
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">

css rule
font-family: 'Oswald', sans-serif;



both in one 
<link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet">


Font icon 
<script src="https://kit.fontawesome.com/51939f9214.js" crossorigin="anonymous"></script>

--------------------
Working with routers 
Import browser router in index.js 
and use browser to enclosethe app 


import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));


Now import router switch in app.js 

import {Switch, Route} from 'react-router-dom'


<Navbar />
<Switch>
 <Route exact path="/" component={ProductList} />
 <Route path="/details" component={Details} />
 <Route path="/cart" component={Cart} />
 <Route component={Default} />
</Switch>


WEput navbaroutsidethe switcher coswe want to be a ble to access it in every component 

------------------
Using styled components 

npm install --save styled-components


import styled from 'styled-components'

Now you cancreate a file called maybe button.js 
and write 
const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

and evertime you need a button like this inside your component 
you can write 
<ButtonContainer></ButtonContainer>




And we can treat this like a component and pass values to it and have different colours and what not 


--------------
Bootstrap variables

if you want to use variables to store common colours and change them easily later on 
you can write a couple bootstrap variables

add this to app.css 
:root {
  --mainBlue: #2a2a72;
  --lightBlue: #009ffd;
  --mainWhite: #f3f3f3;
  --mainDark: #232528;
  --mainYellof: #ffa400;
}

you can even use these colours inside styled components 
eg 
background:var(--lightBlue)


-------------
Now dealing with data 
All the components need access to the data 
so you usally put it in the state of app.js 
but then every time a component needs some data youll need to keep passing props to it throught its parents 
this is called prop drilling .. if the passing gets broken in a parent ,even the children components wont get it 

So we use context API to prevent prop drilling 
So we have one source of truth and it canbe accessed throuought the app 

------------------
in src add a file context.js 

import file in index.js 

and add it enclosing the rest 



ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);


write full notes after
------------------

Using proptypes to verify the data that we receive 

import PropTypes from 'prop-types'


Product.PropTypes = {
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool,
  }).isRequired
};



now if any of these data is a different type than specified wellget an error in the console log



<Router>
    <App />
  </Router>


import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return(0
        <div>
            <h1> Custom render ! chai</h1>
        </div>
    )
}


// global varibale declare kariba dekiba kemti Evaluate expresssion kama karuchi

const  otherUser= "Sibun is a hard worker"

// Custom react code
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1418s',
        target: '_blank',
       
    },
    children: 'Click me to visit Chai Aur Code'
}

// object 
const anotherElement = (
    <a href= "https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1418s" target='_blank'>Cahi aur code</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1418s' ,  target: '_blank'},
    'click me to visit chai aur code',
    otherUser
)


createRoot(document.getElementById('root')).render(
  
    //  < App /> //-> (1)

    // <MyApp /> //-> (2)

    // MyApp()  -> (3)

    // anotherElement //object re convert houchi (4)

     reactElement // 5) react element jete bele create kale aeita pass  kriba
 
)






















// Git command :-
// 1) git add -A
// 2) git commit -m 'commit this'
// 3) git push
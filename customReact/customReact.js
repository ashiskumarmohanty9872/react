const mainContainer= document.querySelector('#root')


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.youtube.com/watch?v=kAOuj6o7Kxs&t=1418s',
        target: '_blank',
       
    },
    children: 'Click me to visit Chai Aur Code'
}

// react element ku dom bhitare add kriba by a method

customRender(reactElement , mainContainer)

function customRender(reactElement, container){

    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement) 
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(let prop in reactElement.props){
        domElement.setAttribute (prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}
import Home from '../HeaderButton/HomeRepository/Home'
import About from '../HeaderButton/About'
import Gallery from '../HeaderButton/GallaryRepository/GallaryCard'
import Donate from '../HeaderButton/Donate'
import Contact from '../HeaderButton/Contact'
const data = [
    {                                   
        id:1,                          
        name:"home",
        path:"/",
        link:<Home />
    },  
    {                                   
        id:1,                          
        name:"About",
        path:"/about",
        link:<About />
    },  
    {                                   
        id:1,                          
        name:"Gallery",
        path:"/gallery",
        link:<Gallery />
    },  
    {                                   
        id:1,                          
        name:"Donate",
        path:"/donate",
        link:<Donate />
    },  
    {                                   
        id:1,                          
        name:"Contact",
        path:"/contact",
        link:<Contact />
    },  
]
export default data;
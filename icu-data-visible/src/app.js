import React, { Component } from 'react';
import store from './store/index';
import 'antd/dist/antd.css';
import LayOut from './Components/layOut'

//组件引入开头一定要大写
//import Slider from './Components/slider'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.getData)
    }
    render() {
        return (
            <div>
                < LayOut />
            </div>
        );
    }
    getData = () => {
        this.setState(store.getState())
    }
}

export default App;




            


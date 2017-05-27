import React from 'react'
import {Provider }from 'react-redux'
import store from './redux/store'
import './App.css';
import Main from './Main'
class App extends React.Component{
    render(){
        return(
            // provider的作用就是将store传入所有它包裹的组件中[组件的子组件也可以]
            // {store}这个地方的store参数 与 mapStateToProps(state)state参数是相同的
            <Provider store={store}>
                <div >
                    <Main/>
                </div>
            </Provider>

        )
    }
}
export default App

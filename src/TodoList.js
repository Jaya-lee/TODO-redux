import React from 'react'
import {connect} from 'react-redux'
import store from './redux/store'

class TodoList extends  React.Component{

    handleClick(id){
        store.dispatch({type:'COMPLETED',id:id})
    }
    render(){
        let listArr = this.props.show.do==='all' ? this.props.lists
        : this.props.show.do==='finish' ? this.props.lists.filter(item => item.select===false ) : this.props.lists.filter(item => item.select===true )
        return(
            <div className="todo-list">
                <div className="container">
                    <ul>
                        {
                            listArr.map(item =>
                                <li className = {item.select ? '' : 'completed'}
                                key={item.id}
                                onClick={this.handleClick.bind(this,item.id)}
                                >{item.text}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps =(state) =>({
    lists:state.lists,
    show:state.show
})
export default connect(mapStateToProps)(TodoList)

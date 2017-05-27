import React from 'react'
import {connect} from 'react-redux'
import store from './redux/store'
class Form extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        if(this.input.value.trim()){
            store.dispatch({type:'SUBMIT',text:this.input.value,id:this.props.lists.length+1})

        }
        e.target.reset()
    }
    render(){
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input className='text' type="text" placeholder="还要做的事情...." ref={input => this.input=input}/>
                    <input className='submit' type='submit' value=''
                    />
                </form>
            </div>
        )
    }
}
const mapStateToProps =(state) =>({
    lists:state.lists
})
export default connect(mapStateToProps)(Form)

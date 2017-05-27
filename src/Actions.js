import React from 'react'
import store from './redux/store'
import {connect} from 'react-redux'

class Actions extends React.Component {
    handleFinish(){
        store.dispatch({type:'FINISH'})
    }
    handleAll(){
        store.dispatch({type:'ALL'})
    }
    handleNone(){
        store.dispatch({type:'UNFINISH'})

    }
    render(){

        return (
                <div className="actions">
                    <div>
                        <div className='list'
                        onClick={this.handleAll.bind(this)} >
                        </div>
                        <span>ALL</span>
                    </div>
                    <div>
                        <div className='unfinish'
                            onClick={this.handleNone.bind(this)} >　
                        </div>
                        <span>要做</span>
                    </div>
                    <div>
                        <div className='finish' onClick={this.handleFinish.bind(this)}>　
                        </div>
                        <span>完成</span>
                    </div>
                </div>
            )
        }
    }
const mapStateToProps =(state) =>({
    lists:state.lists

})
export default connect (mapStateToProps)(Actions)

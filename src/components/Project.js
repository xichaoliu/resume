import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import {INCREASE, DECREASE,} from '../redux/action'
import { connect } from 'react-redux';
import ProjectJson from '../asset/project'
class Project extends Component {
    _onPressInc(){
        this.props.dispatch({type:INCREASE})
    }
    _onPressDec(){
        this.props.dispatch({type:DECREASE})
    }
    render() {
    const i = this.props.counter.count;
     const item= ProjectJson[i];
        return (<div>
                <div>
                    <Button
                        type="primary"
                        disabled={i<=0}
                        onClick={()=>this._onPressDec()}
                    >上一个</Button>&nbsp;&nbsp;&nbsp;
                    <Button
                        type="primary"
                        disabled={i>=ProjectJson.length-1}
                        onClick={()=>this._onPressInc()}
                    >下一个</Button>
                </div>
                <br/>
                <hr/>
                <div style={styles.container}>
                    <div style={styles.title}>
                        <span>项目名称：</span>{item.name}
                    </div>
                    <ul>
                        <List
                            item={item}
                        />
                    </ul>
                    <div style={styles.title}>
                        项目展示：
                    </div>
                        {/*{*/}
                            {/*item.multi.map((i,index)=>{*/}
                                {/*return <img src={require(`../${i}`)} alt="" style={styles.img} key={index}/>*/}
                            {/*})*/}
                        {/*}*/}
                        <MultiList
                            item={item}
                        />
                </div>
            </div>
        );
    }
}

/**
 * 职责列表
 * @param item 职责列表对象
 * @returns {*}
 * @constructor
 */
function List({item}){
return <ul>
    {
        item.duty.map((im,index)=>{
            return <li key={index} style={styles.li}>{index+1}、{im}</li>
        })
    }
</ul>
}

/**
 * 多媒体列表
 * @param item 多媒体列表对象
 * @returns {*}
 * @constructor
 */
function MultiList({item}){
    if(item.multi.type===0){
        return <div>
            {item.multi.source.map((key,index)=>{
                return <img src={require(`../${key}`)} alt="" style={styles.img} key={index}/>
            })}
        </div>
    }else{
        if(item.multi.type===1){
            return <div style={{textIndent:'64px',fontSize:'16px'}}>
                <a href={item.url} target={'_blank'}>{item.multi.source}</a>
            </div>
        }else{
            if(item.multi.type===2){
                return <div style={{width:'100%',display:'flex',overflow:'hidden',justifyContent:'center'}}>
                    {item.multi.source.map((key,index)=>{
                        return  <video src={require(`../${key}`)} controls="controls" autoPlay={false} style={styles.video} key={index}/>
                    })}
                </div>
            }else{
                return <div>
                    {item.multi.source}
                </div>
            }
        }
    }


}
const styles={
    container:{
        width:'100%',
        overflow:'hidden',
        marginTop:'20px',
    },
    title:{
        fontSize:'16px',
        marginBottom:'20px'
    },
    li:{
        textIndent:'64px'
    },
    img:{
        width:'280px',
        height:'360px',
        float:'left',
        marginLeft:'20px',
        marginBottom:'10px'
    },
    video:{
        width:'600px',
        height:'300px'
    }
};
const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps)(Project);
import React from 'react';
//控制文本框组件内容,置空等

const MyInput=({value='',onChange})=>{
    return <input value={value} onChange={onChange}/>;
}

class Demo extends React.Component{
    state={
        text:'test',
    }
    onTextChange=(event)=>{
        this.setState({text:event.target.value});
        console.log(event.target.value);
    }
    onTextReset=()=>{
        this.setState({text:''});
    }

    render() {
        return (
            <div>
            <MyInput value={this.state.text} onChange={this.onTextChange}/>
            <button onClick={this.onTextReset}>重置</button>
            </div>
        );
    }

}

export default Demo;
import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

//Tab标签
class Demo extends React.Component {
    state = {
        activeKey: '1',
    }

    onTabChange = (activeKey) => {
        this.setState({ activeKey });
        console.log(activeKey)
    }

    render() {
        return (
            <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                <TabPane tab="Tab 1" key="1">tab1</TabPane>
                <TabPane tab="Tba 2" key="2">tab2</TabPane>
            </Tabs>
        );
    }
}

export default Demo;
import {Divider, Input, Table} from "antd";
import React from 'react';
import $ from 'jquery'

const {Search} = Input;

class Module extends React.Component {
    state = {
        dataSource: []
    }

    componentDidMount() {
        $.ajax({
            url:
                "https://search.heweather.net/find?location=%E6%AD%A6%E6%B1%89&key=b44262251121469585bc2d212d33a3b3",
            type: 'GET'
        }).then(res => {
            const dataSource = res.HeWeather6[0].basic
            this.setState({dataSource: dataSource})
        }).catch(err => {
            console.error(err)
        })
    }

    handleSearch = searchStr => {
        console.log(searchStr)

        $.ajax({
            url:
                "https://search.heweather.net/find?location=%E5%8C%97%E4%BA%AC&key=b44262251121469585bc2d212d33a3b3",
            type: "GET"
        })
            .then(res => {
                const dataSource = res.HeWeather6[0].basic;
                this.setState({dataSource: dataSource});
            })
            .catch(err => {
                console.error(err);
            });

    }

    render() {
        const columns = [
            {
                title: "Cid",
                dataIndex: "cid",
                key: "cid",
                render: text => <a>{text}</a>
            },
            {
                title: "国家",
                dataIndex: "cnty",
                key: "cnty"
            },
            {
                title: "lat",
                dataIndex: "lat",
                key: "lat"
            },
            {
                title: "location",
                key: "location",
                dataIndex: "location"
            },
            {
                title: "lon",
                key: "lon",
                dataIndex: "lon"
            },
            {
                title: "parent_city",
                key: "parent_city",
                dataIndex: "parent_city"
            },
            {
                title: "tz",
                key: "tz",
                dataIndex: "tz"
            },
            {
                title: "type",
                key: "type",
                dataIndex: "type"
            },
            {
                title: "Action",
                key: "action",
                render: (text, record) => (
                    <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical"/>
            <a>Delete</a>
          </span>
                )
            }
        ];

        const {dataSource} = this.state;

        return (
            <div>
                <Search
                    placeholder="输入"
                    onSearch={this.handleSearch}
                    enterButton
                    style={{width: "320px"}}
                />
                <Table columns={columns} dataSource={dataSource}/>
            </div>
        );
    }
}

export default Module
import React, { Component } from 'react'
import './index.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
       this.state = {
            carname: "京Q392U9",
            mobile: '18510637932',
            brandList: [
                { id: 1, name: '大地车险', select: true },
                { id: 2, name: '人保财险', select: true },
                { id: 3, name: '太平洋车险', select: false },
                { id: 4, name: '阳光车险', select: false }
            ]
        }
    }
    goPrices = () => {
        this.props.history.push('/prices')
    }
    Toggle = (index) => {
        let newbrandList = this.state.brandList.map((item) => {
            return item
        })
        newbrandList[index].select = !this.state.brandList[index].select
        this.setState({
            brandList: newbrandList
        })
    }
    render() {
        
        return (
            <div className='home clearfix'>
                <div className='header'>
                    <div className="title">
                        车险
                </div>
                    <div className="body">
                        <span>行驶车辆&#58;
                    </span>
                        <span>
                            北京
                    </span>
                    </div>
                </div>
                {/* 车辆信息 */}
                <div className="carInfo">
                    <p>
                        <span>车牌</span>
                        <span>{this.state.carname}</span>
                    </p>
                    <p>
                        <span>手机号</span>
                        <span>{this.state.mobile}</span>
                    </p>
                </div>
                {/* 保险品牌 */}
                <div className="brand">
                    <p className="heading">
                    </p>
                    <div className="content">
                        {this.state.brandList.map((item, index) => {
                            return <div className="item" key={item.id}>
                                <img className="hot" src={require('../../assets/images/hot .png')} alt='' />
                                <img className="logo" src={require('../../assets/images/logo_1.png')} alt="" />
                                <p className="brandName">{item.name}</p>
                                <img onClick={()=>{this.Toggle(index)}} className="success" src={item.select ? require('../../assets/images/success.png') : require('../../assets/images/false.png')} alt="" />
                            </div>
                        })}
                    </div>
                </div>
                <div className="agreement">
                    请务必阅读&nbsp;&nbsp;<span>《平台服务协议》&nbsp;&nbsp;《服务告知书》&nbsp;&nbsp;《车险报价服务题型说明》</span>
                </div>
                <div className="btn">
                    <p onClick={this.goPrices} >一键报价</p>
                    
                </div>
            </div>
        )
    }
}

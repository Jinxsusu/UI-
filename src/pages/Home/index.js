import React, { Component } from 'react'
import './index.css'
import { Card} from 'antd-mobile'
export default class Home extends Component {
    state = {
        city:'北京'
    }
    render() {
        return (
            <div className="home">
                <div className="header">
                <Card full>
                    <Card.Body>
                        <div>车险</div>
                    </Card.Body>
                        <Card.Footer content="行驶车辆&#58;" extra={<span>{this.state.city}</span>} />
                    </Card>
                </div>
            </div>
        )
    }
}

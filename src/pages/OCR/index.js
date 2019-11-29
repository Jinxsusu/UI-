import React, { Component } from 'react'
// import { Card } from 'antd-mobile';
import './index.css'
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
class OCR extends Component {
    state = {

    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="OCR">
                < div className="header">
                    <img src={require("../../assets/images/right-ocr.png")} alt="" />
                    <span className="title">
                        信息完善
                    </span>
                </div>
                <div className="push">
                    <img src={require('../../assets/images/ocr.png')} alt="" />
                </div>
                <List renderHeader={() => 'Format'}>
                    <InputItem
                        {...getFieldProps('bankCard', {
                            initialValue: '8888 8888 8888 8888',
                        })}
                        type="bankCard"
                    >银行卡</InputItem>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="186 1234 1234"
                    >手机号码</InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="****"
                    >密码</InputItem>
                    <InputItem
                        {...getFieldProps('number')}
                        type="number"
                        placeholder="click to show number keyboard"
                    >数字键盘</InputItem>
                    <InputItem
                        {...getFieldProps('digit')}
                        type="digit"
                        placeholder="click to show native number keyboard"
                    >数字键盘</InputItem>
                </List>
            </div>
        )
    }
}
const NewOCR = createForm()(OCR);
export default NewOCR
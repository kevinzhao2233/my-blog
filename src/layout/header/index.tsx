import React from 'react';
import ExtraBtn from './components/extraBtn';
import './index.scss';

interface P{}
interface S{
  isOpenExtra: boolean
}

export default class Header extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.handleChangeExtraState = this.handleChangeExtraState.bind(this);
  }

  // 改变 extra 部分的 state，传递给子组件的方法
  handleChangeExtraState(e: boolean) {
    console.log(e);
  }

  render() {
    return (
      <div className="app-header">
        <div className="logo" />
        <ul className="nav-box">
          <li className="nav-item cursor-p">导航1</li>
          <li className="nav-item cursor-p">导航2</li>
        </ul>
        <div className="extra">
          <ExtraBtn onChange={this.handleChangeExtraState} />
        </div>
      </div>
    );
  }
}

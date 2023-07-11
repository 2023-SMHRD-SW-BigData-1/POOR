import React from 'react'
import ReactDOM from 'react-dom'
// import { render } from 'react-dom'
// import mainImg from '../img/캡처.PNG'
// import titleImg from '../img/타이틀.PNG'
import '../css/singInCss.css'

const SignIn = () => {

const { Component } = React;


const ActionPanel = ({ signIn, slide }) => {

    const heading = signIn ? '회원가입' : '로그인';
  const paragraph = signIn ? '환영합니다! 거지의 꿈이 처음이시라면 회원가입 해주세요!' : '거지의 꿈에 회원가입이 되어 있으시면 로그인 해주세요!';
  const button = signIn ? 'Join' : 'Login';

  return (
    <div className="Panel ActionPanel">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <button onClick={slide}>{button}</button>
    </div>
  );
};


const FormPanel = ({ signIn }) => {

    const heading = signIn ? '로그인' : '회원가입';

//   const social = [
//     {
//       href: '#',
//       icon: 'f'
//     },
//     {
//       href: '#',
//       icon: 't'
//     },
//     {
//       href: '#',
//       icon: 'in'
//     }
//   ];

  const paragraph = '소통에 합리적 소비를 더하다!'
  const paragraph2 = '거지의 꿈과 함께하세요.';

  const inputs = [
    {
      type: 'text',
      placeholder: 'ID'
    },
    {
      type: 'password',
      placeholder: 'Password'
    }
  ];

  if (!signIn) {
    inputs.unshift({
      type: 'text',
      placeholder: 'Name'
    });
  }

  const link = {
    href: '#',
    text: '아이디찾기'
  }
  const linkPw = {
    href: '#',
    text: '비밀번호찾기'
  }

  const button = signIn ? 'Login' : 'Join';

  return (
    <div className="Panel FormPanel">
      <h2>{heading}</h2>
      {/* <div className="Social">
        {
          social.map(({ href, icon }) => <a href={href} key={icon}>{icon}</a>)
        }
      </div> */}
      <h4>{paragraph}</h4>
      <h4>{paragraph2}</h4>
      <form>
        {
          inputs.map(({ type, placeholder }) => <input type={type} key={placeholder} placeholder={placeholder} />)
        }
      </form>
      <div className='searchLink'>
        <a href={link.href} >{link.text}</a>
        <a href={linkPw.href} >{linkPw.text}</a>
      </div>
      <button>{button}</button>
    </div>
  );
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      signIn: true,
      transition: false
    }
    this.slide = this.slide.bind(this);
  }
  slide() {
    const { signIn, transition } = this.state;

    if (transition) {
      return;
    }

    const formPanel = document.querySelector('.FormPanel');
    const actionPanel = document.querySelector('.ActionPanel');
    const actionPanelChildren = actionPanel.children;

    const formBoundingRect = formPanel.getBoundingClientRect();
    const actionBoundingRect = actionPanel.getBoundingClientRect();

    formPanel.style.transition = 'all 0.7s cubic-bezier(.63,.39,.54,.91)';
    actionPanel.style.transition = 'all 0.7s cubic-bezier(.63,.39,.54,.91)';
    [...actionPanelChildren].forEach(child => child.style.transition = 'all 0.35s cubic-bezier(.63,.39,.54,.91)');

    this.setState({
      transition: true
    })

    if (signIn) {
      formPanel.style.transform = `translateX(${actionBoundingRect.width}px)`;
      actionPanel.style.transform = `translateX(${-formBoundingRect.width}px)`;

      [...actionPanelChildren].forEach(child => {
        child.style.transform = `translateX(${actionBoundingRect.width / 2}px)`;
        child.style.opacity = 0;
        child.style.visibility = 'hidden';
      });

      formPanel.style.borderRadius = '0 20px 20px 0';
      actionPanel.style.borderRadius = '20px 0 0 20px';
    } else {
      formPanel.style.transform = `translateX(${-actionBoundingRect.width}px)`;
      actionPanel.style.transform = `translateX(${formBoundingRect.width}px)`;

      [...actionPanelChildren].forEach(child => {
        child.style.transform = `translateX(${-actionBoundingRect.width / 2}px)`;
        child.style.opacity = 0;
        child.style.visibility = 'hidden';
      });


      formPanel.style.borderRadius = '20px 0 0 20px';
      actionPanel.style.borderRadius = '0 20px 20px 0';

    }
    const timeoutState = setTimeout(() => {

      [...actionPanelChildren].forEach(child => {
        child.style.transition = 'none';
        child.style.transform = `translateX(${signIn ? (-actionBoundingRect.width / 3) : (actionBoundingRect.width / 3)}%)`;
      });

      this.setState({
        signIn: !signIn
      });

      clearTimeout(timeoutState);
    }, 350);

    const timeoutChildren = setTimeout(() => {
      [...actionPanelChildren].forEach(child => {
        child.style.transition = 'all 0.35s cubic-bezier(.63,.39,.54,.91)';
        child.style.transform = `translateX(0)`;
        child.style.opacity = 1;
        child.style.visibility = 'visible';
      });
      clearTimeout(timeoutChildren);
    }, 400);

    const timeoutTransition = setTimeout(() => {
      formPanel.style.transition = 'none';
      actionPanel.style.transition = 'none';
      formPanel.style.transform = 'translate(0)';
      actionPanel.style.transform = 'translate(0)';
      actionPanel.style.order = signIn ? -1 : 1;

      this.setState({
        transition: false
      })

      clearTimeout(timeoutTransition);
    }, 700);

  }
  render() {
    return (
      <div className="singInApp">
        <FormPanel signIn={this.state.signIn} />
        <ActionPanel signIn={this.state.signIn} slide={this.slide} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


}
export default SignIn
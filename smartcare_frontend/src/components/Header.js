import {Layout} from 'antd'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <Layout.Header>
      <div className="header-left">
        <div className="header-logo"><img draggable="false" src={require('../assets/images/logo.svg').default} alt="" /></div>
      </div>
      <div className="nav">
        <ul>
          <li className='active'><Link to="/">Trang chủ</Link></li>
          <li><Link to="/">Tin tức</Link></li>
          <li><Link to="/">Dự đoán</Link></li>
          <li><Link to="/">Trợ giúp & Hỏi đáp</Link></li>
        </ul>
      </div>
      
      <div className="header-right">
        <Link className='link-login' to="/login">Login</Link>
      </div>
    </Layout.Header>
  )
}

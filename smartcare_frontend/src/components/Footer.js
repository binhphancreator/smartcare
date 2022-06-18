function Footer() {
  return (<>
    <footer className='footer'>
      <div className='container' style={{ display: "flex", "justifyContent": "space-between", "marginTop": "1.5rem" }}>
        <div className='footer-left'>
          <div className='footer-logo'><img src={require('../assets/images/logo.svg').default} alt="" /></div>
          <p>Smartcare là hệ thống dự đoán tình trạng sức khỏe của bạn dựa trên mô hình trí tuệ nhân tạo</p>
        </div>

        <div className="footer-right">

          <div className="footer-nav-item">
            <h1>Features</h1>
            <div className="footer-nav-link">Tin tức</div>
            <div className="footer-nav-link">Dự đoán bệnh tim</div>
          </div>

          <div className="footer-nav-item">
            <h1>About</h1>
            <div className="footer-nav-link">Về chúng tôi</div>
            <div className="footer-nav-link">Giới thiệu Smartcare</div>
          </div>

          <div className="footer-nav-item">
            <h1>Contact</h1>
            <div className="footer-nav-link">FAQs</div>
            <div className="footer-nav-link">Trung tâm trợ giúp</div>
            <div className="footer-nav-link">Liên hệ</div>
          </div>

        </div>
      </div>
    </footer>
  </>)
}

export default Footer

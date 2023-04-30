const service = [
  "運送說明", "退換貨相關", "付款資訊", "FAQ"
]
const about = [
  "品牌故事", "媒體聯繫", "Press kit"
]
const info = [
  "隱私權政策", "Cookie", "GDPR"
]

function FooterItem({data}){
  const list = {data}.map(item => 
    <a className ="page-link" href="#">{data}</a>   
  )
  return <div className ="section-content">{list}</div>
}

function FooterSection({data, name}){
  return(
    <section className="footer-section">
      <h2 className ="section-title">{name}</h2>
      <div className ="section-content">
        <FooterItem data={data}/>
      </div>
    </section>
  )
}

export default function Footer(){
  return(
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <svg className="icon-logo">
            <use xlinkHref="#svg-icon-logo"></use>
          </svg>
        </div>
        <FooterSection data={service} name="客戶服務"/>
        <FooterSection data={about} name="關於我們"/>
        <FooterSection data={info} name="資訊"/>
        <section className="footer-section">
          <h2 className="section-title">追蹤 ALPHA Shop</h2>
          <div className="section-content">
            <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
              <svg className="social-icon cursor-point">
                <use xlink:href="#svg-icon-facebook"></use>
              </svg>
              <svg className="social-icon cursor-point">
                <use xlinkHref="#svg-icon-instagram"></use>
              </svg>
              <svg className="social-icon cursor-point">
                <use xlinkHref="#svg-icon-whatsapp"></use>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
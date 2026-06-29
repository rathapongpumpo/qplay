import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>QuickPay TopUp</h3>
            <p style={{ fontSize: "0.9rem", marginBottom: "16px" }}>
              ผู้ให้บริการเติมเงินและชำระเงินออนไลน์ รวดเร็ว ปลอดภัย เชื่อถือได้ 24 ชั่วโมง
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              บริษัท ควิกเพย์ ท็อปอัพ จำกัด<br />
              QuickPay TopUp Co., Ltd.
            </p>
          </div>

          <div className="footer-links">
            <h4>ลิงก์ด่วน</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/">หน้าแรก</Link>
              </li>
              <li>
                <Link href="/#topup-widget">บริการเติมเงิน</Link>
              </li>
              <li>
                <Link href="/agent">สมัครเป็นตัวแทน</Link>
              </li>
              <li>
                <Link href="/#contact-section">ติดต่อเรา / ที่ตั้งบริษัท</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>ข้อมูลติดต่อ</h4>
            <ul className="footer-links-list" style={{ pointerEvents: "none" }}>
              <li>
                <i className="fa-solid fa-location-dot" style={{ marginRight: "10px", color: "var(--accent-gold)" }}></i>
                65/17 ม.4 ซ.ระเง็ง ต.วิชิต อ.เมือง จ.ภูเก็ต 83000
              </li>
              <li>
                <i className="fa-solid fa-phone" style={{ marginRight: "10px", color: "var(--accent-gold)" }}></i>
                076-XXXXXX (จำลอง)
              </li>
              <li>
                <i className="fa-solid fa-envelope" style={{ marginRight: "10px", color: "var(--accent-gold)" }}></i>
                support@quickpaytopup.co.th (จำลอง)
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} บริษัท ควิกเพย์ ท็อปอัพ จำกัด. สงวนลิขสิทธิ์ตามกฎหมาย.</p>
        </div>
      </div>
    </footer>
  );
}

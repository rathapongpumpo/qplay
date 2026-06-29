import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <Image
                src="/assets/19140_0.jpg"
                alt="QuickPay TopUp Logo"
                width={80}
                height={80}
                className="footer-logo-image-zoom"
              />
            </div>
            <h3>QuickPay TopUp</h3>
            <p style={{ fontSize: "0.9rem", marginBottom: "16px" }}>
              ผู้ให้บริการเติมเงินและชำระเงินออนไลน์ รวดเร็ว ปลอดภัย เชื่อถือได้ ตลอด 24 ชั่วโมง
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
                <Link href="/#topup-services">บริการเติมเงิน</Link>
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
            <h4>ช่องทางการติดต่อหลัก</h4>
            <p style={{ fontSize: "0.9rem", marginBottom: "12px", color: "var(--text-muted)" }}>
              ติดต่อสอบถาม แจ้งปัญหา หรือทำรายการเติมเงินผ่านช่องทาง LINE ของเราได้โดยตรง
            </p>
            <ul className="footer-links-list">
              <li>
                <i className="fa-brands fa-line" style={{ marginRight: "10px", color: "#06c755", fontSize: "1.2rem" }}></i>
                LINE Support: @quickpay (แอดไลน์ผ่าน QR Code ด้านบน)
              </li>
              <li>
                <i className="fa-solid fa-location-dot" style={{ marginRight: "10px", color: "var(--accent-gold)" }}></i>
                65/17 ม.4 ซ.ระเง็ง ต.วิชิต อ.เมือง จ.ภูเก็ต 83000
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

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AgentPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    businessType: "individual",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API registration
    setTimeout(() => {
      setSubmitting(false);
      setRegistered(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      fullname: "",
      phone: "",
      email: "",
      businessType: "individual",
      message: "",
    });
    setRegistered(false);
  };

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh", paddingBottom: "80px" }}>
        {/* Glow Background */}
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>

        {/* Header */}
        <header className="container agent-header">
          <div style={{ color: "var(--accent-gold)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>
            QuickPay TopUp Partnership
          </div>
          <h1 className="gradient-text" style={{ fontSize: "3rem", marginBottom: "16px" }}>
            ร่วมเป็นพันธมิตรกับควิกเพย์
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
            เพิ่มโอกาสสร้างรายได้ที่มั่นคงและกำไรสูง ด้วยระบบเชื่อมต่อ API เติมเกมอัตโนมัติและแผงควบคุมหลังบ้านที่เข้าใจง่ายสำหรับตัวแทนจำหน่ายทั่วประเทศ
          </p>
        </header>

        {/* Details & Form Grid */}
        <section className="container">
          <div className="topup-layout">
            
            {/* Benefits Content */}
            <div className="card">
              <h3 className="gradient-text" style={{ fontSize: "1.5rem", marginBottom: "24px" }}>
                สิทธิพิเศษสำหรับตัวแทนจำหน่าย
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div className="feature-icon-wrapper" style={{ margin: "0", minWidth: "48px", height: "48px", fontSize: "1.2rem" }}>
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>อัตรากำไรและส่วนลดพิเศษ</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      ได้รับเรทราคาต้นทุนสำหรับเกมยอดนิยมและบัตรเติมเงินในราคาพิเศษ เพื่อเพิ่มมาร์จิ้นกำไรสูงสุดให้ธุรกิจของคุณ
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div className="feature-icon-wrapper" style={{ margin: "0", minWidth: "48px", height: "48px", fontSize: "1.2rem" }}>
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>API เชื่อมต่ออัตโนมัติ</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      สามารถใช้ API เชื่อมต่อกับหน้าร้านค้าของคุณ เพื่อส่งยอดและตัดเงินได้อย่างสะดวกรวดเร็ว ตลอด 24 ชั่วโมง
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div className="feature-icon-wrapper" style={{ margin: "0", minWidth: "48px", height: "48px", fontSize: "1.2rem" }}>
                    <i className="fa-solid fa-clipboard-list"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>ระบบรายงานยอดขายครบวงจร</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      สรุปสถิติ ยอดคำสั่งซื้อ และรายได้สะสมประจำวัน/ประจำเดือนผ่านระบบ Dashboard หลังบ้านแบบ Real-time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="card">
              <h3 style={{ fontSize: "1.3rem", marginBottom: "20px", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
                ฟอร์มสมัครตัวแทนจำหน่าย
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">ชื่อ - นามสกุล / ชื่อผู้ติดต่อ</label>
                  <input
                    type="text"
                    id="fullname"
                    required
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                    placeholder="กรอกชื่อและนามสกุลของคุณ"
                    className="form-input"
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="phone">เบอร์โทรศัพท์ติดต่อ</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="เช่น 0891234567"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">อีเมล</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="businessType">ประเภทธุรกิจ</label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="form-input"
                    style={{ background: "rgba(10, 25, 49, 0.8)", border: "1px solid var(--border-color)" }}
                  >
                    <option value="individual">บุคคลธรรมดา / สตรีมเมอร์ / เพจเกม</option>
                    <option value="shop">ร้านอินเทอร์เน็ต / ร้านเติมเงินทั่วไป</option>
                    <option value="company">บริษัทจำกัด / ห้างหุ้นส่วนสามัญ</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">รายละเอียดเพิ่มเติม (ถ้ามี)</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="เช่น ระบุชื่อเว็บไซต์ของคุณ หรือระดับยอดขายที่คาดหวังต่อเดือน"
                    className="form-input"
                    style={{ minHeight: "100px", resize: "vertical" }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={submitting}>
                  {submitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: "8px" }}></i>
                      กำลังดำเนินการ...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i> ส่งข้อมูลสมัครตัวแทน
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {/* Success Modal */}
      {registered && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">
              <i className="fa-solid fa-circle-check" style={{ color: "var(--success)" }}></i>
            </div>
            <h3 className="modal-title">ส่งข้อมูลใบสมัครเรียบร้อย</h3>
            <p className="modal-desc">
              ขอบคุณ <strong>คุณ {formData.fullname}</strong> ที่สนใจร่วมธุรกิจกับเรา 
              ขณะนี้คำขอของคุณถูกบันทึกเรียบร้อย และเจ้าหน้าที่ฝ่ายพันธมิตรธุรกิจจะติดต่อกลับไปยังเบอร์โทร <strong>{formData.phone}</strong> หรืออีเมล <strong>{formData.email}</strong> ภายใน 24 ชั่วโมง
            </p>
            <button onClick={handleResetForm} className="btn btn-primary" style={{ width: "100%" }}>
              ตกลง
            </button>
          </div>
        </div>
      )}
    </>
  );
}

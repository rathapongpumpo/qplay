"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real game and card options from source images
const GAMES = [
  { id: "garena", name: "Garena Shells", currency: "Shells", icon: "🎮" },
  { id: "freefire", name: "Free Fire", currency: "Diamonds", icon: "💎" },
  { id: "rov", name: "ROV", currency: "Voucher", icon: "⚔️" },
  { id: "pubg", name: "PUBG Mobile", currency: "UC", icon: "🪂" },
  { id: "mlbb", name: "Mobile Legends", currency: "Diamonds", icon: "👑" },
  { id: "rom", name: "Ragnarok M", currency: "Zeny", icon: "🛡️" },
  { id: "genshin", name: "Genshin Impact", currency: "Genesis Crystals", icon: "✨" },
  { id: "wildrift", name: "League of Legends: Wild Rift", currency: "Wild Cores", icon: "🐉" },
  { id: "fcmobile", name: "FC Mobile", currency: "FC Points", icon: "⚽" },
];

const CARDS = [
  { id: "googleplay", name: "Google Play Gift Card", icon: "🤖" },
  { id: "appstore", name: "App Store & iTunes", icon: "🍎" },
  { id: "steam", name: "Steam Wallet", icon: "🎮" },
  { id: "playstation", name: "PlayStation Store Card", icon: "🎮" },
  { id: "nintendo", name: "Nintendo eShop Card", icon: "🔴" },
  { id: "truewallet", name: "TrueMoney Wallet", icon: "🧡" },
  { id: "line", name: "LINE Prepaid Card", icon: "🟢" },
  { id: "riotpin", name: "Riot Games PIN", icon: "🔴" },
];

const MOBILES = [
  { id: "ais", name: "AIS 1-2-Call", icon: "🟢" },
  { id: "true", name: "TrueMove H", icon: "🔴" },
  { id: "dtac", name: "dtac", icon: "🔵" },
  { id: "mybynt", name: "my by NT", icon: "🟡" },
];

const PACKAGES = [
  { value: 50, label: "50 บาท" },
  { value: 100, label: "100 บาท" },
  { value: 300, label: "300 บาท" },
  { value: 500, label: "500 บาท" },
  { value: 1000, label: "1000 บาท" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("games");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [playerInfo, setPlayerInfo] = useState<string>("");
  const [showLineModal, setShowLineModal] = useState<boolean>(false);

  const handleSelectService = (service: any) => {
    setSelectedService(service);
    setSelectedPackage(null);
  };

  const handleOpenLineModal = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLineModal(true);
  };

  const handleQuickLine = () => {
    setShowLineModal(true);
  };

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        {/* Glow Effects */}
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>

        {/* Hero Section */}
        <section className="section hero">
          <div className="container">
            <div className="hero-subtitle">QuickPay TopUp Co., Ltd.</div>
            <h1 className="hero-title gradient-text">
              ผู้ให้บริการเติมเงินระบบอัตโนมัติ<br />
              แอดไลน์ทำรายการได้ทันที 24 ชั่วโมง
            </h1>
            <p className="hero-desc">
              บริษัท ควิกเพย์ ท็อปอัพ จำกัด บริการเติมเกมออนไลน์ บัตรดิจิทัล และเติมเงินมือถือทุกระบบ สะดวก รวดเร็ว มั่นคง ปลอดภัย 100%
            </p>
            <button onClick={handleQuickLine} className="btn btn-primary" style={{ margin: "0 auto", padding: "16px 40px", borderRadius: "30px" }}>
              <i className="fa-brands fa-line" style={{ marginRight: "8px", fontSize: "1.2rem" }}></i> แอดไลน์เติมเกมได้ทันที
            </button>
          </div>
        </section>

        {/* Features list */}
        <section className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3>เติมไว ตลอด 24 ชม.</h3>
              <p>เชื่อมต่อระบบ API ค่ายเกมโดยตรง ทำรายการและอนุมัติเครดิตเข้าเกมทันใจ</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>ปลอดภัยมาตรฐานสากล</h3>
              <p>ระบบความปลอดภัยระดับสากล ป้องกันข้อมูลลูกค้าอย่างหนาแน่นและรัดกุม</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3>แอดมินดูแลใกล้ชิด</h3>
              <p>มีเจ้าหน้าที่คอยอำนวยความสะดวกและแนะนำขั้นตอนการทำงานอย่างเป็นกันเอง</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-square-check"></i>
              </div>
              <h3>จดทะเบียนถูกต้องตามกฎหมาย</h3>
              <p>ดำเนินกิจการในรูปแบบบริษัทจำกัด มั่นใจได้ในความมั่นคงทางธุรกิจ 100%</p>
            </div>
          </div>
        </section>

        {/* Source Images Showcases (รูปจาก source) */}
        <section className="section" id="topup-services" style={{ background: "rgba(10, 25, 49, 0.3)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "16px" }}>
              สินค้าและบริการทั้งหมดของเรา
            </h2>
            <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: "600px", margin: "0 auto 40px auto", fontSize: "0.95rem" }}>
              แสดงข้อมูลบริการเติมเกม บัตรเติมเงิน และเครือข่ายมือถือของ QuickPay TopUp จากเอกสารข้อมูลจริงของบริษัท
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              <div className="card" style={{ padding: "16px" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", color: "var(--primary-light)" }}>
                  <i className="fa-solid fa-gamepad" style={{ marginRight: "10px" }}></i>รายการเติมเกมและช่องทางเติมเงินระบบมือถือ
                </h3>
                <div style={{ position: "relative", width: "100%", height: "420px", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                  <Image 
                    src="/assets/19134_0.jpg"
                    alt="QuickPay Game Topup Banner List"
                    fill
                    style={{ objectFit: "contain", background: "#050c1a" }}
                  />
                </div>
              </div>

              <div className="card" style={{ padding: "16px" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", color: "var(--accent-gold)" }}>
                  <i className="fa-solid fa-ticket" style={{ marginRight: "10px" }}></i>รายการบัตรเติมเงินดิจิทัลและสตรีมมิ่ง
                </h3>
                <div style={{ position: "relative", width: "100%", height: "420px", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                  <Image 
                    src="/assets/19138_0.jpg"
                    alt="QuickPay Gift Card Showcase Banner"
                    fill
                    style={{ objectFit: "contain", background: "#050c1a" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Topup Selector to Line */}
        <section className="section" id="topup-widget">
          <div className="container">
            <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "12px" }}>
              ทำรายการผ่านหน้าเว็บ
            </h2>
            <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: "600px", margin: "0 auto 40px auto", fontSize: "0.95rem" }}>
              เลือกเกมและแพ็คเกจที่คุณต้องการ จากนั้นกดเติมเงินระบบจะแนะนำช่องทางติดต่อทำรายการผ่าน LINE อัตโนมัติ
            </p>

            <div className="topup-layout">
              {/* Widget Card */}
              <div className="card">
                {/* Tabs */}
                <div className="tabs-header">
                  <button
                    onClick={() => setActiveTab("games")}
                    className={`tab-btn ${activeTab === "games" ? "active" : ""}`}
                  >
                    เติมเกมออนไลน์
                  </button>
                  <button
                    onClick={() => setActiveTab("cards")}
                    className={`tab-btn ${activeTab === "cards" ? "active" : ""}`}
                  >
                    บัตรดิจิทัล
                  </button>
                  <button
                    onClick={() => setActiveTab("mobiles")}
                    className={`tab-btn ${activeTab === "mobiles" ? "active" : ""}`}
                  >
                    เติมเงินมือถือ
                  </button>
                </div>

                {/* Tab Items Grid */}
                {activeTab === "games" && (
                  <div className="items-grid">
                    {GAMES.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectService(item)}
                        className={`item-card ${selectedService?.id === item.id ? "selected" : ""}`}
                      >
                        <div className="item-icon-container" style={{ fontSize: "1.8rem", background: "rgba(0,180,216,0.15)", width: "50px", height: "50px", borderRadius: "50%" }}>
                          {item.icon}
                        </div>
                        <div className="item-name">{item.name}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "cards" && (
                  <div className="items-grid">
                    {CARDS.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectService(item)}
                        className={`item-card ${selectedService?.id === item.id ? "selected" : ""}`}
                      >
                        <div className="item-icon-container" style={{ fontSize: "1.8rem", background: "rgba(255,183,3,0.15)", width: "50px", height: "50px", borderRadius: "50%" }}>
                          {item.icon}
                        </div>
                        <div className="item-name">{item.name}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "mobiles" && (
                  <div className="items-grid">
                    {MOBILES.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectService(item)}
                        className={`item-card ${selectedService?.id === item.id ? "selected" : ""}`}
                      >
                        <div className="item-icon-container" style={{ fontSize: "1.8rem", background: "rgba(46,196,182,0.15)", width: "50px", height: "50px", borderRadius: "50%" }}>
                          {item.icon}
                        </div>
                        <div className="item-name">{item.name}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 2: Form */}
                {selectedService && (
                  <form onSubmit={handleOpenLineModal} style={{ marginTop: "32px", borderTop: "1px solid var(--border-color)", paddingTop: "24px" }}>
                    <div className="form-group">
                      <label htmlFor="player-id">
                        {activeTab === "mobiles" ? "เบอร์โทรศัพท์มือถือ" : "ไอดีผู้ใช้ / Player ID (สำหรับใช้ยืนยันการเติมเงิน)"}
                      </label>
                      <input
                        type="text"
                        id="player-id"
                        required
                        value={playerInfo}
                        onChange={(e) => setPlayerInfo(e.target.value)}
                        placeholder={activeTab === "mobiles" ? "กรอกเบอร์มือถือ เช่น 0891234567" : "กรอกไอดีเกมของคุณ"}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label>เลือกจำนวนเงิน / แพ็คเกจเติมเงิน</label>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "12px", marginTop: "8px" }}>
                        {PACKAGES.map((pkg) => (
                          <div
                            key={pkg.value}
                            onClick={() => setSelectedPackage(pkg)}
                            className={`item-card ${selectedPackage?.value === pkg.value ? "selected" : ""}`}
                            style={{ padding: "12px 8px" }}
                          >
                            <span style={{ fontWeight: "700", color: "var(--accent-gold)" }}>{pkg.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: "100%", marginTop: "16px" }}
                      disabled={!playerInfo || !selectedPackage}
                    >
                      <i className="fa-brands fa-line" style={{ marginRight: "8px", fontSize: "1.2rem" }}></i>
                      กดเพื่อเติมเงินผ่าน LINE
                    </button>
                  </form>
                )}
              </div>

              {/* Side Summary */}
              <div className="card summary-card">
                <h3 className="summary-title">สรุปคำขอสั่งเติมเงิน</h3>
                {selectedService ? (
                  <>
                    <div className="summary-row">
                      <span className="summary-label">บริการ:</span>
                      <span className="summary-value" style={{ color: "var(--primary-light)", fontWeight: "bold" }}>
                        {selectedService.name}
                      </span>
                    </div>

                    {playerInfo && (
                      <div className="summary-row">
                        <span className="summary-label">{activeTab === "mobiles" ? "เบอร์มือถือ:" : "ไอดีผู้ใช้:"}</span>
                        <span className="summary-value" style={{ wordBreak: "break-all" }}>{playerInfo}</span>
                      </div>
                    )}

                    {selectedPackage && (
                      <div className="summary-row">
                        <span className="summary-label">ราคาแพ็คเกจ:</span>
                        <span className="summary-value" style={{ color: "var(--accent-gold)", fontWeight: "700" }}>{selectedPackage.label}</span>
                      </div>
                    )}

                    <div className="summary-divider"></div>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", textAlign: "center", marginBottom: "16px" }}>
                      ระบบจะแสดงช่องทางแอดไลน์ของแอดมิน เพื่อทำรายการตัดเครดิตและเติมเงินผ่านบัญชีจริง
                    </p>

                    <button onClick={handleQuickLine} className="btn btn-secondary" style={{ width: "100%" }}>
                      <i className="fa-brands fa-line" style={{ color: "#06c755", marginRight: "8px" }}></i>
                      ติดต่อ LINE ทันที
                    </button>
                  </>
                ) : (
                  <div style={{ textAlign: "center", color: "var(--text-muted)", padding: "40px 0" }}>
                    <i className="fa-solid fa-cart-shopping" style={{ fontSize: "3rem", marginBottom: "16px", opacity: 0.3 }}></i>
                    <p>เลือกระบบเกมเพื่อดูข้อมูลสรุป</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* API Provider Workflow (ปรับปรุงตามรูปที่แนบมา) */}
        <section className="section workflow-section">
          <div className="container">
            <div style={{ color: "var(--accent-gold)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", textAlign: "center", marginBottom: "12px" }}>
              API Provider Concept
            </div>
            <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "16px" }}>
              ระบบ API Provider เติมเงินอัตโนมัติทำงานอย่างไร?
            </h2>
            <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: "700px", margin: "0 auto 40px auto", fontSize: "0.95rem" }}>
              <strong>API Provider</strong> คือผู้ให้บริการระบบเชื่อมต่อ API หรือผู้ให้บริการระบบเติมเงินอัตโนมัติ 
              ทำหน้าที่เป็นตัวกลางเชื่อมต่อระหว่างผู้ใช้บริการและผู้จำหน่ายรายใหญ่เพื่อความรวดเร็ว
            </p>

            <div className="workflow-timeline">
              <div className="workflow-step">
                <div className="workflow-step-num">1</div>
                <h4>เข้าสู่เว็บไซต์</h4>
                <p>ลูกค้าหรือตัวแทนเข้าใช้งานผ่านหน้าเว็บไซต์ของตนเอง</p>
              </div>

              <div className="workflow-step">
                <div className="workflow-step-num">2</div>
                <h4>ระบุคำสั่งเติมเงิน</h4>
                <p>ลูกค้าทำรายการและระบุแพ็คเกจเติมเกม (เช่น ยอด 500 บาท)</p>
              </div>

              <div className="workflow-step">
                <div className="workflow-step-num">3</div>
                <h4>ส่งคำสั่งผ่าน API</h4>
                <p>ระบบเว็บไซต์ของคุณจะทำการส่งชุดคำสั่ง (API) ไปยัง API Provider แบบอัจฉริยะ</p>
              </div>

              <div className="workflow-step">
                <div className="workflow-step-num">4</div>
                <h4>เชื่อมโยงสู่ผู้จัดจำหน่าย</h4>
                <p>API Provider นำคำสั่งซื้อไปทำการตัดจ่ายเครดิตตรงกับค่ายเกมและตัวแทนค่ายใหญ่</p>
              </div>

              <div className="workflow-step">
                <div className="workflow-step-num">5</div>
                <h4>ส่งผลการทำงานกลับ</h4>
                <p>เมื่อเติมเงินสำเร็จ ระบบจะแจ้งสถานะตอบกลับมายังเว็บของคุณเพื่อเติมเงินเข้าตัวผู้ใช้ทันที</p>
              </div>
            </div>

            <div className="card" style={{ marginTop: "40px", padding: "24px 32px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--primary-light)" }}>สรุปหัวใจหลักของระบบ:</h3>
              <ul style={{ listStyleType: "none", paddingLeft: "0", display: "flex", flexWrap: "wrap", gap: "24px" }}>
                <li style={{ flex: "1 1 250px" }}>
                  <strong style={{ color: "var(--accent-gold)", fontSize: "1.1rem" }}>API</strong> = ช่องทางหรือชุดคำสั่งทางโปรแกรมที่ใช้สำหรับคุยและเชื่อมโยงระหว่างระบบคอมพิวเตอร์ต่างเว็บไซต์
                </li>
                <li style={{ flex: "1 1 250px" }}>
                  <strong style={{ color: "var(--accent-gold)", fontSize: "1.1rem" }}>Provider</strong> = ผู้ให้บริการระบบเชื่อมต่อที่เป็นศูนย์กลางการกระจายสินค้าและตัดยอดเงิน
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real Public API Providers Table (ตามรูปที่แนบมา) */}
        <section className="section partner-section">
          <div className="container">
            <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "16px" }}>
              พันธมิตรเครือข่ายผู้ให้บริการ API เติมเกม
            </h2>
            <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
              การจัดลำดับพันธมิตรและนิติบุคคลผู้ให้บริการเชื่อมต่อระบบการเติมเงิน/Top-up อย่างเป็นทางการในประเทศไทย
            </p>

            <div className="partner-table-container">
              <table className="partner-table">
                <thead>
                  <tr>
                    <th>ผู้ให้บริการ API / ค่ายใหญ่</th>
                    <th>สถานะนิติบุคคล / ข้อมูลการตรวจสอบสาธารณะ</th>
                    <th>ประเภทบริการ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="partner-name">Codashop / Coda Payments</span>
                    </td>
                    <td>
                      บริษัท โคด้า เพย์เมนท์ส (ประเทศไทย) จำกัด<br />
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>เลขจดทะเบียนผู้เสียภาษี: 0105560169229 (ยังดำเนินกิจการอยู่)</span>
                    </td>
                    <td><span className="partner-status-tag">API Provider หลักต่างประเทศ</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="partner-name">Garena / Termgame</span>
                    </td>
                    <td>
                      Garena Online Thailand (บริษัท การีนา ออนไลน์ ประเทศไทย จำกัด)<br />
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>ศูนย์บริการเติมเกม Garena อย่างเป็นทางการในไทย</span>
                    </td>
                    <td><span className="partner-status-tag" style={{ background: "rgba(230, 57, 70, 0.15)", color: "var(--danger)", border: "1px solid rgba(230, 57, 70, 0.3)" }}>ค่ายผู้พัฒนาและจำหน่ายหลัก</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="partner-name">WonDD / วันดีดี คอร์ปอเรชั่น</span>
                    </td>
                    <td>
                      บริษัท วันดีดี คอร์ปอเรชั่น จำกัด<br />
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>ผู้ให้บริการระบบตัดยอดเงินและเติมเงินมือถือ/เกม อัตโนมัติ</span>
                    </td>
                    <td><span className="partner-status-tag">นิติบุคคลเชื่อมต่อระบบ API</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="partner-name">Easycard / หจก. อีซี่การ์ด.เกมส์</span>
                    </td>
                    <td>
                      ห้างหุ้นส่วนจำกัด อีซี่การ์ด.เกมส์<br />
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>จดทะเบียนทะเบียนพาณิชย์ถูกต้องและเป็นตัวแทนจำหน่าย</span>
                    </td>
                    <td><span className="partner-status-tag">ตัวแทนจำหน่าย API เติมเกม</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="partner-name">Over Topup</span>
                    </td>
                    <td>
                      ผู้ให้บริการเติมเกมออนไลน์รายใหญ่และตัวแทนจำหน่ายอิสระ<br />
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>บริการเชื่อมต่อและอำนวยความสะดวกแบบครอบคลุมในไทย</span>
                    </td>
                    <td><span className="partner-status-tag">ผู้ให้บริการระบบและตัวแทน</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Office & Maps Location */}
        <section className="section info-section" id="contact-section">
          <div className="container">
            <div className="info-grid">
              <div className="info-content">
                <div style={{ color: "var(--primary-light)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>
                  ที่ตั้งสำนักงานใหญ่
                </div>
                <h2>บริษัท ควิกเพย์ ท็อปอัพ จำกัด</h2>
                <p>
                  เราเป็นผู้ให้บริการระบบ API และอำนวยความสะดวกสำหรับการเติมเงินมือถือ/เกม สำนักงานใหญ่ตั้งอยู่ที่เมืองภูเก็ต 
                  เชื่อมต่อและดูแลอย่างใกล้ชิดด้วยจริยธรรมการทำธุรกิจที่มั่นคง
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="contact-text">
                      <h4>ที่อยู่สำนักงานใหญ่</h4>
                      <p>65/17 ม.4 ซ.ระเง็ง ต.วิชิต ถ.เจ้าฟ้า อ.เมือง จ.ภูเก็ต 83000</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="contact-text">
                      <h4>เวลาทำการสนับสนุน</h4>
                      <p>บริการออนไลน์ 24 ชั่วโมง มีแอดมินดูแลทำรายการผ่านระบบ LINE</p>
                    </div>
                  </div>

                  {/* Line QR Code Contact */}
                  <div className="contact-item" style={{ marginTop: "24px", alignItems: "center", gap: "20px" }}>
                    <div style={{ background: "#ffffff", padding: "8px", borderRadius: "12px", border: "1px solid var(--border-color)", display: "inline-block", flexShrink: 0 }}>
                      <Image 
                        src="/assets/add.jpg" 
                        alt="LINE QR Code Contact" 
                        width={120} 
                        height={120} 
                        style={{ display: "block", borderRadius: "8px" }}
                      />
                    </div>
                    <div className="contact-text">
                      <h4>
                        <i className="fa-brands fa-line" style={{ color: "#06c755", marginRight: "8px", fontSize: "1.2rem", verticalAlign: "middle" }}></i>
                        ช่องทางติดต่อ LINE Support
                      </h4>
                      <p style={{ color: "var(--primary-light)", fontWeight: "600" }}>แอดไลน์หลักเพื่อสั่งซื้อหรือแจ้งปัญหา</p>
                      <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>สแกน QR Code เพื่อสอบถามแอดมินหรือสมัครระบบตัวแทนได้ทันที</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery from source assets */}
              <div className="office-gallery">
                <div className="gallery-large">
                  <Image 
                    src="/assets/19135_0.jpg" 
                    alt="QuickPay TopUp Premium Office Area" 
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="gallery-image"
                    priority
                  />
                </div>
                <div className="gallery-column">
                  <div className="gallery-small">
                    <Image 
                      src="/assets/19138_0.jpg" 
                      alt="Cards showcase gallery" 
                      fill
                      sizes="(max-width: 768px) 100vw, 15vw"
                      className="gallery-image"
                    />
                  </div>
                  <div className="gallery-small">
                    <Image 
                      src="/assets/19139_0.jpg" 
                      alt="QuickPay TopUp Company sign board" 
                      fill
                      sizes="(max-width: 768px) 100vw, 15vw"
                      className="gallery-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* LINE QR Code Add Friends Modal */}
      {showLineModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "450px" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-20px", marginRight: "-20px" }}>
              <button 
                onClick={() => setShowLineModal(false)}
                style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "1.5rem" }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <i className="fa-brands fa-line" style={{ fontSize: "3.5rem", color: "#06c755" }}></i>
            </div>
            
            <h3 className="modal-title">แอดไลน์เพื่อทำรายการเติมเงิน</h3>
            <p className="modal-desc" style={{ fontSize: "0.9rem" }}>
              {selectedService && selectedPackage ? (
                <>
                  คุณเลือกทำรายการ: <strong>{selectedService.name}</strong> แพ็คเกจ <strong>{selectedPackage.label}</strong><br />
                  กรุณาสแกน QR Code ด้านล่างเพื่อส่งข้อมูลและทำรายการกับแอดมินทาง LINE ได้เลยครับ
                </>
              ) : (
                "สแกน QR Code ด้านล่างเพื่อติดต่อทำรายการเติมเกม บัตรเติมเงิน หรือสมัครระบบตัวแทน"
              )}
            </p>
            
            <div style={{ background: "#ffffff", padding: "16px", borderRadius: "16px", display: "inline-block", margin: "10px auto 20px auto", border: "1px solid var(--border-color)" }}>
              <Image 
                src="/assets/add.jpg" 
                alt="LINE QR Code Contact" 
                width={180} 
                height={180} 
                style={{ display: "block", borderRadius: "10px" }}
              />
            </div>
            
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
              แอดไลน์ไอดี: <strong style={{ color: "var(--primary-light)", fontSize: "1rem" }}>@quickpay</strong> (มี @ ด้านหน้า)
            </p>

            <button onClick={() => setShowLineModal(false)} className="btn btn-primary" style={{ width: "100%" }}>
              ปิดหน้าต่างนี้
            </button>
          </div>
        </div>
      )}
    </>
  );
}

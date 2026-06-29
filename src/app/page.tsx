"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data structures matching source images
const GAMES = [
  { id: "garena", name: "Garena Shells", currency: "Shells", icon: "🎮", defaultIdLabel: "บัญชี Garena ID" },
  { id: "freefire", name: "Free Fire", currency: "Diamonds", icon: "💎", defaultIdLabel: "Player ID (UID)" },
  { id: "rov", name: "ROV", currency: "Voucher", icon: "⚔️", defaultIdLabel: "OpenID / Garena Account" },
  { id: "pubg", name: "PUBG Mobile", currency: "UC", icon: "🪂", defaultIdLabel: "Character ID" },
  { id: "mlbb", name: "Mobile Legends", currency: "Diamonds", icon: "👑", defaultIdLabel: "User ID (Zone ID)" },
  { id: "rom", name: "Ragnarok M", currency: "Zeny", icon: "🛡️", defaultIdLabel: "Character ID (Server ID)" },
  { id: "genshin", name: "Genshin Impact", currency: "Genesis Crystals", icon: "✨", defaultIdLabel: "UID (Server)" },
  { id: "wildrift", name: "League of Legends: Wild Rift", currency: "Wild Cores", icon: "🐉", defaultIdLabel: "Riot ID" },
  { id: "fcmobile", name: "FC Mobile", currency: "FC Points", icon: "⚽", defaultIdLabel: "User ID" },
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

const PACKAGE_TEMPLATES = [
  { value: 50, rate: 1.0 },
  { value: 100, rate: 1.05 },
  { value: 300, rate: 1.1 },
  { value: 500, rate: 1.15 },
  { value: 1000, rate: 1.2 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("games");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [playerInfo, setPlayerInfo] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string>("");

  const scrollToWidget = () => {
    document.getElementById("topup-widget")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedService(null);
    setSelectedPackage(null);
    setPlayerInfo("");
    setPaymentMethod("");
    setCurrentStep(1);
  };

  const handleSelectService = (service: any) => {
    setSelectedService(service);
    setSelectedPackage(null);
    setCurrentStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerInfo.trim().length > 0) {
      setCurrentStep(3);
    }
  };

  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(pkg);
    setCurrentStep(4);
  };

  const handleConfirmTopup = () => {
    if (selectedService && selectedPackage && paymentMethod) {
      const tid = "QP-" + Math.floor(100000 + Math.random() * 900000);
      setTransactionId(tid);
      setShowSuccessModal(true);
    }
  };

  const handleReset = () => {
    setSelectedService(null);
    setPlayerInfo("");
    setSelectedPackage(null);
    setPaymentMethod("");
    setCurrentStep(1);
    setShowSuccessModal(false);
  };

  const getStepClass = (step: number) => {
    if (currentStep === step) return "step-item active";
    if (currentStep > step) return "step-item completed";
    return "step-item";
  };

  const getPackagesList = () => {
    if (!selectedService) return [];
    const unitSymbol = selectedService.currency || "Points";
    return PACKAGE_TEMPLATES.map((tpl) => {
      const units = Math.floor(tpl.value * tpl.rate);
      return {
        id: `pkg-${tpl.value}`,
        title: `${units} ${unitSymbol}`,
        price: tpl.value,
        desc: `ได้รับ ${units} ${unitSymbol} ทันทีเข้าบัญชี`,
      };
    });
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
              บริการเติมเงินเกมและชำระเงินออนไลน์<br />
              สะดวกรวดเร็ว ตลอด 24 ชั่วโมง
            </h1>
            <p className="hero-desc">
              บริษัท ควิกเพย์ ท็อปอัพ จำกัด เติมเกมออนไลน์ บัตรดิจิทัล และระบบเติมเงินมือถือ เชื่อมต่ออัตโนมัติผ่านระบบ API ความปลอดภัยสูง
            </p>
            <button onClick={scrollToWidget} className="btn btn-primary" style={{ margin: "0 auto", padding: "16px 40px", borderRadius: "30px" }}>
              <i className="fa-solid fa-gamepad" style={{ marginRight: "8px" }}></i> เริ่มทำรายการเติมเงิน
            </button>
          </div>
        </section>

        {/* Feature Badges */}
        <section className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3>เติมเงินระบบอัตโนมัติ</h3>
              <p>ทำรายการเติมเงินผ่านระบบตัดเครดิตและชุดคำสั่ง API โดยตรง สะดวกรวดเร็ว</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>ปลอดภัยมาตรฐานสากล</h3>
              <p>ปกป้องข้อมูลบัญชีผู้เล่นและประวัติการสั่งซื้อด้วยระบบรักษาความปลอดภัยมาตรฐาน</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-check-to-slot"></i>
              </div>
              <h3>จดทะเบียนถูกต้อง</h3>
              <p>ดำเนินกิจการในรูปแบบบริษัทจดทะเบียนถูกต้องตามกฎหมาย มีที่ตั้งสำนักงานชัดเจน</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3>มีทีมงานดูแล 24 ชั่วโมง</h3>
              <p>มีเจ้าหน้าที่ฝ่ายบริการลูกค้าสแตนด์บายคอยช่วยเหลือแก้ไขปัญหาผ่าน LINE</p>
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
              แสดงรายละเอียดหมวดหมู่บริการเติมเกม บัตรดิจิทัล และเติมเงินมือถือของบริษัท ควิกเพย์ ท็อปอัพ จำกัด จากแหล่งข้อมูลจริง
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

        {/* Interactive Topup Widget (4 steps as requested) */}
        <section className="section" id="topup-widget" style={{ paddingTop: "60px" }}>
          <div className="container">
            <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "40px" }}>
              ระบบส่งข้อมูลทำรายการเติมเงิน
            </h2>

            <div className="topup-layout">
              {/* Main Widget Card */}
              <div className="card">
                {/* Stepper Progress */}
                <div className="stepper">
                  <div className={getStepClass(1)}>
                    <div className="step-dot">1</div>
                    <div className="step-label">เลือกบริการ</div>
                  </div>
                  <div className={getStepClass(2)}>
                    <div className="step-dot">2</div>
                    <div className="step-label">ข้อมูลผู้ใช้</div>
                  </div>
                  <div className={getStepClass(3)}>
                    <div className="step-dot">3</div>
                    <div className="step-label">เลือกราคา</div>
                  </div>
                  <div className={getStepClass(4)}>
                    <div className="step-dot">4</div>
                    <div className="step-label">ชำระเงิน</div>
                  </div>
                </div>

                {/* Step 1: Choose Service Tab & List */}
                {currentStep === 1 && (
                  <div>
                    <div className="tabs-header">
                      <button
                        onClick={() => handleTabChange("games")}
                        className={`tab-btn ${activeTab === "games" ? "active" : ""}`}
                      >
                        เติมเกมออนไลน์
                      </button>
                      <button
                        onClick={() => handleTabChange("cards")}
                        className={`tab-btn ${activeTab === "cards" ? "active" : ""}`}
                      >
                        บัตรดิจิทัล
                      </button>
                      <button
                        onClick={() => handleTabChange("mobiles")}
                        className={`tab-btn ${activeTab === "mobiles" ? "active" : ""}`}
                      >
                        เติมเงินมือถือ
                      </button>
                    </div>

                    {/* Services Items Grid */}
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
                  </div>
                )}

                {/* Step 2: Input Player Info */}
                {currentStep === 2 && selectedService && (
                  <div>
                    <h3 style={{ marginBottom: "20px" }}>กรอกข้อมูลสำหรับ {selectedService.name}</h3>
                    <form onSubmit={handleNextStep2}>
                      <div className="form-group">
                        <label htmlFor="player-info-input">
                          {activeTab === "mobiles" ? "กรอกเบอร์มือถือผู้รับเงิน" : (selectedService.defaultIdLabel || "กรอกบัญชีผู้ใช้ / Player ID")}
                        </label>
                        <input
                          type={activeTab === "mobiles" ? "tel" : "text"}
                          id="player-info-input"
                          required
                          value={playerInfo}
                          onChange={(e) => setPlayerInfo(e.target.value)}
                          placeholder={activeTab === "mobiles" ? "เช่น 0891234567" : "กรอกข้อมูลบัญชีเกมของคุณที่นี่"}
                          className="form-input"
                          pattern={activeTab === "mobiles" ? "[0-9]{10}" : undefined}
                        />
                      </div>

                      <div className="button-row">
                        <button type="button" onClick={() => setCurrentStep(1)} className="btn btn-secondary">
                          ย้อนกลับ
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={!playerInfo.trim()}>
                          ดำเนินการต่อ
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Step 3: Select Package */}
                {currentStep === 3 && selectedService && (
                  <div>
                    <h3 style={{ marginBottom: "20px" }}>เลือกแพ็คเกจเติมเงิน ({selectedService.name})</h3>
                    <div className="packages-list">
                      {getPackagesList().map((pkg) => (
                        <div
                          key={pkg.id}
                          onClick={() => handleSelectPackage(pkg)}
                          className={`package-item ${selectedPackage?.id === pkg.id ? "selected" : ""}`}
                        >
                          <div className="package-details">
                            <span className="package-title">{pkg.title}</span>
                            <span className="package-subtitle">{pkg.desc}</span>
                          </div>
                          <span className="package-price">฿{pkg.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="button-row">
                      <button type="button" onClick={() => setCurrentStep(2)} className="btn btn-secondary">
                        ย้อนกลับ
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Choose Payment Method */}
                {currentStep === 4 && selectedService && selectedPackage && (
                  <div>
                    <h3 style={{ marginBottom: "20px" }}>เลือกช่องทางการชำระเงิน</h3>
                    <div className="payment-grid">
                      <div
                        onClick={() => setPaymentMethod("promptpay")}
                        className={`payment-card ${paymentMethod === "promptpay" ? "selected" : ""}`}
                      >
                        <div className="payment-logo promptpay">QR Pay</div>
                        <div className="payment-name">QR PromptPay</div>
                      </div>
                      <div
                        onClick={() => setPaymentMethod("wallet")}
                        className={`payment-card ${paymentMethod === "wallet" ? "selected" : ""}`}
                      >
                        <div className="payment-logo wallet">True Wallet</div>
                        <div className="payment-name">TrueMoney Wallet</div>
                      </div>
                      <div
                        onClick={() => setPaymentMethod("creditcard")}
                        className={`payment-card ${paymentMethod === "creditcard" ? "selected" : ""}`}
                      >
                        <div className="payment-logo card-pay"><i className="fa-solid fa-credit-card"></i></div>
                        <div className="payment-name">บัตรเครดิต/เดบิต</div>
                      </div>
                    </div>

                    {/* QR Code Container simulation for PromptPay */}
                    {paymentMethod === "promptpay" && (
                      <div className="qr-container">
                        <div className="qr-title">สแกนชำระเงินเพื่อส่งข้อมูลทำรายการ</div>
                        <div className="qr-placeholder">
                          {/* Simulated QR logo */}
                          <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "2rem", color: "#004d80", fontWeight: "bold" }}>THAI QR</div>
                            <div style={{ fontSize: "0.75rem", color: "#333", marginTop: "8px" }}>PROMPTPAY QR SYSTEM</div>
                            <div style={{ border: "2px solid #333", width: "100px", height: "100px", margin: "10px auto", background: "repeating-linear-gradient(45deg, #ccc, #ccc 10px, #aaa 10px, #aaa 20px)" }}></div>
                          </div>
                        </div>
                        <div className="qr-instructions">
                          ยอดเงินชำระ: <strong style={{ color: "var(--primary-blue)", fontSize: "1.1rem" }}>฿{selectedPackage.price}.00</strong><br />
                          กรุณาโอนเงินตามยอดที่ระบบกำหนดเพื่อเตรียมแจ้งสลิปในขั้นตอนถัดไป
                        </div>
                      </div>
                    )}

                    <div className="button-row">
                      <button type="button" onClick={() => setCurrentStep(3)} className="btn btn-secondary">
                        ย้อนกลับ
                      </button>
                      <button
                        type="button"
                        onClick={handleConfirmTopup}
                        disabled={!paymentMethod}
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-wallet"></i> ยืนยันและแจ้งโอนเงิน
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Side Summary Panel */}
              <div className="card summary-card">
                <h3 className="summary-title">สรุปรายการคำสั่งซื้อ</h3>
                
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
                        <span className="summary-label">แพ็คเกจที่เลือก:</span>
                        <span className="summary-value">{selectedPackage.title}</span>
                      </div>
                    )}

                    {paymentMethod && (
                      <div className="summary-row">
                        <span className="summary-label">ช่องทางชำระเงิน:</span>
                        <span className="summary-value" style={{ textTransform: "uppercase" }}>{paymentMethod}</span>
                      </div>
                    )}

                    <div className="summary-divider"></div>
                    
                    <div className="summary-row">
                      <span className="summary-label" style={{ fontSize: "1.1rem" }}>ยอดชำระสุทธิ:</span>
                      <span className="summary-value summary-total">
                        ฿{selectedPackage ? selectedPackage.price : 0}.00
                      </span>
                    </div>

                    <div className="topup-status-box">
                      <i className="fa-solid fa-shield-halved" style={{ color: "var(--success)", marginRight: "6px" }}></i>
                      ปลอดภัย 100% ผ่านระบบ QuickPay TopUp
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: "center", color: "var(--text-muted)", padding: "40px 0" }}>
                    <i className="fa-solid fa-cart-shopping" style={{ fontSize: "3rem", marginBottom: "16px", opacity: 0.3 }}></i>
                    <p>กรุณาเลือกบริการเติมเงิน เพื่อดำเนินการต่อ</p>
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
                  พร้อมมีแอดมินคอยช่วยเหลือดูแลทำรายการผ่านระบบ LINE ตลอด 24 ชั่วโมง
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

      {/* Final Step Success modal displaying LINE QR Code as requested */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "450px" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-20px", marginRight: "-20px" }}>
              <button 
                onClick={handleReset}
                style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "1.5rem" }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="modal-icon" style={{ marginBottom: "12px" }}>
              <i className="fa-solid fa-circle-notch fa-spin" style={{ color: "var(--accent-gold)" }}></i>
            </div>
            
            <h3 className="modal-title" style={{ fontSize: "1.4rem" }}>ขั้นตอนสุดท้าย: แอดไลน์ส่งหลักฐาน</h3>
            
            <p className="modal-desc" style={{ fontSize: "0.88rem", marginTop: "8px" }}>
              ระบบได้รับข้อมูลคำสั่งซื้อหมายเลข <strong>{transactionId}</strong> เรียบร้อยแล้ว<br />
              กรุณา **แอดไลน์ส่งรูปภาพสลิปโอนเงิน** ด้านล่างเพื่อยืนยันรายการและเติมเงินเข้าบัญชีเกม
            </p>

            {selectedService && selectedPackage && (
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "12px", borderRadius: "8px", border: "1px solid var(--border-color)", margin: "12px 0", textAlign: "left", fontSize: "0.85rem" }}>
                <div>• บริการ: <strong>{selectedService.name}</strong></div>
                <div>• ไอดีผู้ใช้: <strong>{playerInfo}</strong></div>
                <div>• ยอดโอน: <strong style={{ color: "var(--accent-gold)" }}>฿{selectedPackage.price}.00</strong></div>
              </div>
            )}

            <div style={{ background: "#ffffff", padding: "12px", borderRadius: "16px", display: "inline-block", margin: "10px auto 16px auto", border: "1px solid var(--border-color)" }}>
              <Image 
                src="/assets/add.jpg" 
                alt="LINE QR Code Contact" 
                width={160} 
                height={160} 
                style={{ display: "block", borderRadius: "8px" }}
              />
            </div>
            
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
              สแกน QR Code หรือแอดไลน์ไอดี: <strong style={{ color: "var(--success)", fontSize: "1rem" }}>@quickpay</strong>
            </p>

            <button onClick={handleReset} className="btn btn-primary" style={{ width: "100%" }}>
              เสร็จสิ้น / กลับหน้าหลัก
            </button>
          </div>
        </div>
      )}
    </>
  );
}

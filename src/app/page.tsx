"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data structures matching source images
const GAMES = [
  { id: "garena", name: "Garena Shells", currency: "Shells", image: "🎮", defaultIdLabel: "บัญชี Garena ID" },
  { id: "freefire", name: "Free Fire", currency: "Diamonds", image: "💎", defaultIdLabel: "Player ID (UID)" },
  { id: "rov", name: "ROV", currency: "Voucher", image: "⚔️", defaultIdLabel: "OpenID / Garena Account" },
  { id: "pubg", name: "PUBG Mobile", currency: "UC", image: "🪂", defaultIdLabel: "Character ID" },
  { id: "mlbb", name: "Mobile Legends", currency: "Diamonds", image: "👑", defaultIdLabel: "User ID (Zone ID)" },
  { id: "rom", name: "Ragnarok M", currency: "Zeny", image: "🛡️", defaultIdLabel: "Character ID (Server ID)" },
  { id: "genshin", name: "Genshin Impact", currency: "Genesis Crystals", image: "✨", defaultIdLabel: "UID (Server)" },
  { id: "wildrift", name: "League of Legends: Wild Rift", currency: "Wild Cores", image: "🐉", defaultIdLabel: "Riot ID" },
  { id: "fcmobile", name: "FC Mobile", currency: "FC Points", image: "⚽", defaultIdLabel: "User ID" },
];

const CARDS = [
  { id: "googleplay", name: "Google Play Gift Card", image: "🤖" },
  { id: "appstore", name: "App Store & iTunes", image: "🍎" },
  { id: "steam", name: "Steam Wallet", image: "🎮" },
  { id: "playstation", name: "PlayStation Store Card", image: "🎮" },
  { id: "nintendo", name: "Nintendo eShop Card", image: "🔴" },
  { id: "truewallet", name: "TrueMoney Wallet", image: "🧡" },
  { id: "line", name: "LINE Prepaid Card", image: "🟢" },
  { id: "riotpin", name: "Riot Games PIN", image: "🔴" },
];

const MOBILES = [
  { id: "ais", name: "AIS 1-2-Call", image: "🟢" },
  { id: "true", name: "TrueMove H", image: "🔴" },
  { id: "dtac", name: "dtac", image: "🔵" },
  { id: "mybynt", name: "my by NT", image: "🟡" },
];

const ENTERTAINMENT = [
  { id: "netflix", name: "Netflix Gift Card", image: "🎬" },
  { id: "spotify", name: "Spotify Premium", image: "🎵" },
];

// Price packages based on selections
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

  // Auto-scroll logic to widget
  const scrollToWidget = () => {
    document.getElementById("topup-widget")?.scrollIntoView({ behavior: "smooth" });
  };

  // Reset steps on tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedService(null);
    setSelectedPackage(null);
    setPlayerInfo("");
    setPaymentMethod("");
    setCurrentStep(1);
  };

  // Select service card
  const handleSelectService = (service: any) => {
    setSelectedService(service);
    setSelectedPackage(null);
    setCurrentStep(2);
  };

  // Go to step 3 after info validation
  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerInfo.trim().length > 0) {
      setCurrentStep(3);
    }
  };

  // Select package
  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(pkg);
    setCurrentStep(4);
  };

  // Confirm and Generate transaction
  const handleConfirmTopup = () => {
    if (selectedService && selectedPackage && paymentMethod) {
      // Simulate transaction ID
      const tid = "QP-" + Math.floor(100000 + Math.random() * 900000);
      setTransactionId(tid);
      setShowSuccessModal(true);
    }
  };

  // Reset widget state to step 1
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

  // Render packages list based on service
  const getPackagesList = () => {
    if (!selectedService) return [];
    
    // Custom calculation for games vs cards vs topup
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
              พบกับโปรโมชั่นเติมเกมราคาสุดพิเศษ สะดวก ปลอดภัย ด้วยระบบหลังบ้านอัตโนมัติและระบบตัวแทนจำหน่ายที่ครบครัน
            </p>
            <button onClick={scrollToWidget} className="btn btn-primary" style={{ margin: "0 auto", padding: "16px 40px", borderRadius: "30px" }}>
              <i className="fa-solid fa-gamepad" style={{ marginRight: "8px" }}></i> เริ่มเติมเงินเลย
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
              <h3>เติมไว ได้รับรหัสทันที</h3>
              <p>ทำรายการเติมเงินผ่านระบบอัตโนมัติ เงินเข้าไวทันใจภายในไม่กี่วินาที</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>ปลอดภัย มาตรฐานสากล</h3>
              <p>ข้อมูลและประวัติการชำระเงินถูกดูแลด้วยระบบรักษาความปลอดภัยหนาแน่น</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-check-to-slot"></i>
              </div>
              <h3>เชื่อถือได้ ตรวจสอบได้</h3>
              <p>มีระบบออกใบสรุปรายงานยอดการสั่งซื้อ สะดวกต่อการจัดการบัญชี</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3>บริการดี ดูแลทุกท่าน</h3>
              <p>มีทีมงานช่วยเหลือและดูแลแก้ไขปัญหาให้ตลอด 24 ชั่วโมง</p>
            </div>
          </div>
        </section>

        {/* Interactive Topup Widget */}
        <section className="section" id="topup-widget" style={{ paddingTop: "20px" }}>
          <div className="container">
            <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "40px" }}>
              เลือกระบบบริการเติมเงิน
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
                        <i className="fa-solid fa-gamepad" style={{ marginRight: "8px" }}></i>
                        เติมเกมออนไลน์
                      </button>
                      <button
                        onClick={() => handleTabChange("cards")}
                        className={`tab-btn ${activeTab === "cards" ? "active" : ""}`}
                      >
                        <i className="fa-solid fa-ticket" style={{ marginRight: "8px" }}></i>
                        บัตรดิจิทัล
                      </button>
                      <button
                        onClick={() => handleTabChange("mobiles")}
                        className={`tab-btn ${activeTab === "mobiles" ? "active" : ""}`}
                      >
                        <i className="fa-solid fa-mobile-screen-button" style={{ marginRight: "8px" }}></i>
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
                            <div className="item-icon-container" style={{ fontSize: "1.8rem", background: "rgba(0,180,216,0.15)" }}>
                              {item.image}
                            </div>
                            <div className="item-name">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === "cards" && (
                      <div className="items-grid">
                        {[...CARDS, ...ENTERTAINMENT].map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelectService(item)}
                            className={`item-card ${selectedService?.id === item.id ? "selected" : ""}`}
                          >
                            <div className="item-icon-container" style={{ fontSize: "1.8rem", background: "rgba(255,183,3,0.15)" }}>
                              {item.image}
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
                            <div className="item-icon-container" style={{ fontSize: "1.8rem", background: "rgba(46,196,182,0.15)" }}>
                              {item.image}
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
                          title={activeTab === "mobiles" ? "กรุณากรอกเบอร์โทรศัพท์ 10 หลัก" : undefined}
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
                        <div className="qr-title">สแกนชำระเงินเพื่อทำรายการ</div>
                        <div className="qr-placeholder">
                          {/* Simulated QR logo */}
                          <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "2rem", color: "#004d80", fontWeight: "bold" }}>THAI QR</div>
                            <div style={{ fontSize: "0.75rem", color: "#333", marginTop: "8px" }}>PROMPTPAY SIMULATED</div>
                            <div style={{ border: "2px solid #333", width: "100px", height: "100px", margin: "10px auto", background: "repeating-linear-gradient(45deg, #ccc, #ccc 10px, #aaa 10px, #aaa 20px)" }}></div>
                          </div>
                        </div>
                        <div className="qr-instructions">
                          ยอดเงินชำระ: <strong style={{ color: "var(--primary-blue)", fontSize: "1.1rem" }}>฿{selectedPackage.price}.00</strong><br />
                          กรุณาโอนเงินตามจำนวนนี้ภายใน 10 นาที ระบบจะยืนยันยอดอัตโนมัติ
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
                        <i className="fa-solid fa-wallet"></i> ยืนยันชำระเงิน
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

        {/* Company Office Details & Map (From source images data) */}
        <section className="section info-section" id="contact-section">
          <div className="container">
            <div className="info-grid">
              <div className="info-content">
                <div style={{ color: "var(--primary-light)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>
                  ที่ตั้งและออฟฟิศหลัก
                </div>
                <h2>บริษัท ควิกเพย์ ท็อปอัพ จำกัด</h2>
                <p>
                  เราเป็นผู้ให้บริการชำระเงินออนไลน์และเติมเงินมือถือ/เกม ที่ได้รับความไว้วางใจจากตัวแทนทั่วประเทศ 
                  สำนักงานใหญ่ตั้งอยู่ในย่านทำเลทองของจังหวัดภูเก็ต พร้อมระบบการจัดการเซิร์ฟเวอร์สำรองที่มั่นคงและพนักงานคอยบริการ
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
                      <h4>เวลาทำการ</h4>
                      <p>ออนไลน์ผ่านระบบอัตโนมัติ 24 ชั่วโมง (ฝ่ายสนับสนุนลูกค้าติดต่อได้ตลอดเวลา)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery containing images from /public/assets */}
              <div className="office-gallery">
                <div className="gallery-large">
                  <Image 
                    src="/assets/19135_0.jpg" 
                    alt="QuickPay TopUp Premium Office Meeting Area" 
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

      {/* Success Transaction Simulated Modal */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">
              <i className="fa-solid fa-circle-check" style={{ color: "var(--success)" }}></i>
            </div>
            <h3 className="modal-title">ส่งคำร้องการเติมเงินสำเร็จ</h3>
            <p className="modal-desc">
              รายการหมายเลข <strong>{transactionId}</strong> ของคุณสำหรับ {selectedService?.name} จำนวน {selectedPackage?.title} ยอดชำระ ฿{selectedPackage?.price}
              ได้รับข้อมูลและอยู่ในระหว่างดำเนินการ จะเข้าบัญชีภายใน 1-3 นาที!
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <button onClick={handleReset} className="btn btn-primary" style={{ width: "100%" }}>
                กลับหน้าหลัก / ทำรายการใหม่
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// 語言資料表
const texts = {
  zh: {
    siteTitle: "達鐿（越南）領航增材科技技術中心",
    about: "關於我們",
    contact: "聯絡方式",
    language: "🌐 中文",
    menu: "選單",
    introTitle: "公司簡介",
    "heroSub": "以技術創新為核心 × 推動製造業升級",
    introContent1: "中國總公司成立於2018年，2024年於越南成立技術中心，位於平陽省宜安神浪2工業區，擁有500台3D打印設備，專注於設計、製造、後處理的一站式增材製造服務，提供高效、精準、具競爭力的解決方案。",
    introList1: "設備技術<br />越南基地擁有40+台3D 打印設備，涵蓋 SLA 光固化、SLM 金屬打印、CNC、3D掃描、真空復模等技術，並配備噴塗、後處理工藝，可靈活應對試產與量產需求。",
    introList2: "應用領域<br />廣泛應用於 鞋業、汽車、醫療、電子、家電、建築、藝術設計等行業，提供高效製造支持。",
    introList3: "願景使命<br />以技術創新、品質至上 為核心，推動 3D 打印發展，助力全球製造業升級，創造更大價值！",
    missionTitle: "企業背景介紹",
    missionContent: "達鐿（越南）領航增材科技技術中心攜手中國領先研發企業——金石集團，共同推動3D打印技術產業化應用，全方位拓展戰略市場。我們以「一體化服務」為核心理念，提供 從前期設計、中期製造到後期處理的完整解決方案，率先實現3D打印技術的規模化生產，滿足小批量試產至大規模量產的多元需求，並積極拓展全球市場。目前，我們的技術與服務網絡遍佈 中國多個城市，包括東莞、武漢、鳳崗、中山、深圳、佛山、惠州、上海，為各地客戶提供高效、精準、具競爭力的增材製造解決方案。",
  //手辦應用
    "figure-page-title": "手辦應用",
    "figure-page-subtitle": "創意設計 × 快速打樣 × 高自由度",
    "overview-title": "應用概述",
    "figure.service.point1.title": "快速實務呈現",
    "figure.service.point1.item1": "即時調整：方便設計師快速檢視模型的樣式、顏色、結構，並進行針對性優化",
    "figure.service.point1.item2": "高速製作：3D打印技術可將設計圖紙迅速轉化為實物•速度比傳統製造快5-10倍",
    "figure.service.point2.title": "個性化設計",
    "figure.service.point2.item1": "靈活應對市場需求：3D打印支援小批量定制，適合經常更新設計的產品",
    "figure.service.point2.item2": "高自由度創作：滿足客戶多樣化需求，無論是複雜結構或獨特風格，皆可快速成型",
    "figure-overview-summary":"3D打印技術讓手辦設計更高效、靈活、個性化，助力創作者突破想像極限",
    //家電應用 
    "appliance-page-title": "家電應用",
    "appliance-hero-sub": "提升效率 × 靈活設計 × 快速量產",
    "appliance-overview-title": "應用概述",
    "appliance.design": "設計與驗證",
    "appliance.item1": "概念設計與展示：幫助團隊高效協作、縮短產品開發週期、降低設計缺陷",
    "appliance.item2": "裝配與功能測試：驗證產品性能，降低生產成本，提高市場競爭力",
    "appliance.item3": "模具原型製作：低成本打造多款原型，加速研發進程",
    "appliance.market": "市場應用",
    "appliance.item4": "快速試製與小批量生產：減少開模成本，靈活應對市場需求",
    "appliance.item5": "應用於多種家電產品：如空調、冰箱、洗衣機、音響、小家電等",
    "appliance.item6": "提升生產效率，加速新品上市，提高市場佔有率",
    "appliance.summary": "3D列印技術正在重塑家電製造領域，為設計者與企業帶來更高效、更靈活的解決方案",
    
    //汽車應用
    "auto-page-title": "汽車應用",
    "auto-page-subtitle": "智慧製造 × 零件開發 × 高精度成型",
    "auto-overview-title": "應用概述",
    "auto.point1.title": "應用領域",
    "auto.point1.item1": "生產工具：汽車品牌利用 3D 打印製作工裝夾具，提升生產效率。",
    "auto.point1.item2": "非關鍵零部件：快速製造保險桿、內飾件，縮短研發週期。",
    "auto.point1.item3": "改裝與定制：支援小批量生產與個性化設計，滿足改裝市場需求。",
    "auto.point2.title": "材料創新",
    "auto.point2.item1": "類PP樹脂：高韌性，適用於卡扣等裝配部件。",
    "auto.point2.item2": "耐高溫陶瓷：可承受200°C，適用於發動機零件。",
    "auto.point2.item3": "高透光亞克力：用於車燈試製，加速產品開發。",
    "auto-overview-summary": "3D打印為汽車產業帶來靈活高效的製造方式，未來應用潛力無限",
    "auto-example1": "▲ 內飾件3D列印樣件",
    "auto-example2": "▲ 發動機罩功能模型",
    "auto.point3.title": "材料技術進展",
    "auto.point3.item1": "類PP樹脂：具高韌性與良好裝配性",
    "auto.point3.item2": "耐高溫陶瓷：適用於引擎周邊結構",
    "auto.point3.item3": "高透光亞克力：常用於車燈殼體開發",

    //醫療應用
    "med-page-title": "醫療應用",
    "med-page-subtitle": "個性化醫材 × 模型導板 × 精準製造",
    "med-overview-title": "應用概述",
    "med.point1.title": "快速製造模具原型",
    "med.point1.item1": "降低成本與時間：3D打印技術可快速成型，免去傳統鋼模與石膏模具的繁瑣製程",
    "med.point1.item2": "一次成型：減少製作步驟，提高效率",
    "med.point2.title": "醫療設備設計創新",
    "med.point2.item1": "突破傳統製造極限：可製作複雜結構以滿足臨床需求",
    "med.point2.item2": "滿足個性化需求：支援精細化、定制化的設備設計",
    "med.point3.title": "輔助醫材與器械製造",
    "med.point3.item1": "高精度術前模型、手術導板",
    "med.point3.item2": "小批量、多品類製造：加速臨床應用轉化",
    "med.point3.item3": "縮短交付周期：提升治療效率",
    "med-overview-summary": "3D列印為醫療產業帶來更快速、精準、個性化的解決方案，推動未來醫療創新與照護發展",
    
    //金屬3D應用
    "metal-page-title": "金屬3D列印應用",
    "metal-page-subtitle": "突破限制 × 高效製造 × 精密成型",
    "metal-overview-title": "應用概述",
    "metal.point1.title": "突破傳統製造限制",
    "metal.point1.item1": "高難度結構與個性化設計也能實現，製造更自由",
    "metal.point1.item2": "整體成形，省去拆分與焊接，降低品質風險",
    "metal.point2.title": "提升生產效率與品質",
    "metal.point2.item1": "減少組裝工序，提升結構穩定性",
    "metal.point2.item2": "材料使用精準，降低浪費與成本",
    "metal.point2.item3": "生產快速靈活，加速新品研發週期",
    "metal.point3.title": "應用產業範圍",
    "metal.point3.item1": "航空航太：關鍵結構與輕量零件",
    "metal.point3.item2": "汽車與模具：熱交換器、鞋模開發",
    "metal.point3.item3": "醫療器材：鈦合金骨骼與客製義肢",
    "metal-overview-summary": "金屬3D打印正引領製造革新，不僅提升效率，也實現環保永續的目標。",
   
    //復模技術
     "vacuum-page-title": "復模技術 - 達鐿（越南）增材科技技術中心",
    "vacuum-page-subtitle": "快速複製 × 成本低廉 × 高精度原型",
    "vacuum-overview-title": "應用概述",
    "vacuum.point1.title": "復模的工藝特色",
    "vacuum.point1.item1": "成本低：無需昂貴模具，適合小批量生產",
    "vacuum.point1.item2": "製作快：短時間內複製數十件產品",
    "vacuum.point1.item3": "高精度：完整複製細節與紋理",
    "vacuum.point1.item4": "材料多樣：ABS、PP、硅膠、透明樹脂等",
    "vacuum.point1.item5": "可後處理：支援噴油、上色、電鍍",
    "vacuum.point2.title": "常見應用場景",
    "vacuum.point2.item1": "產品打樣與驗證",
    "vacuum.point2.item2": "功能測試模型製作",
    "vacuum.point2.item3": "小批量市場試產",
    "vacuum-overview-summary": "復模是將3D打印原型轉化為可大量複製的經濟解法，廣泛應用於汽車、醫療、電子等領域。",
    

    //footer|header
    "Contact-page-title":"聯絡我們 | 達意公司",
    footer: '© 2025 達鐿（越南）領航增材科技中心',
    siteTitle: '達鐿（越南）領航增材科技技術中心',

    //contact 文本
    contactTitle: '聯絡我們',
    contactDesc: '無論您有列印需求、技術諮詢；或是合作提案，我們都非常樂意與您交流！<br />請隨時透過電話或Email與我們聯繫，我們將盡快回覆您，提供最合適的解決方案！。',
    addressTitle: '地址',
    emailTitle: '電子郵件',
    facebookTitle: '官方粉絲專頁',
    phoneTitle: '電話',
    //雕塑應用
    "sculpture-page-title": "雕塑應用 - 達鐿（越南）增材科技技術中心",
    "sculpture-page-subtitle": "創作自由 × 還原真實 × 永續工藝",
    "sculpture-overview-title": "應用概述",
    "sculpture.point1.title": "成品製作",
    "sculpture.point1.item1": "簡化傳統泥塑工藝，提升創作效率，降低人為誤差",
    "sculpture.point1.item2": "可打印任意尺寸，滿足各類雕塑需求",
    "sculpture.point1.item3": "無汙染、無廢棄物，更加環保可續",
    "sculpture.point2.title": "翻製模具",
    "sculpture.point2.item1": "高精度細節還原，確保藝術作品的質感與層次",
    "sculpture.point2.item2": "支持異形與複雜紋理設計，突破傳統翻模限制",
    "sculpture-summary": "3D列印技術正改變藝術創作流程，使雕塑從靈感到實體更快速、精準且具永續性。",
    

  },
  en: {
    siteTitle: "TAYI (VIETNAM) 3D PRINTING TECHNICAL CENTER",
    about: "About Us",
    contact: "Contact",
    language: "🌐 English",
    menu: "Menu",
    "heroSub": "Driven by Innovation × Upgrading Manufacturing",
    introTitle: "Company Introduction",
    introContent1: "Founded in 2018 in China, TaYi 3D Printing Technical Center (TaYi) in Vietnam was established in 2024, located in Song Than 2 Industrial Park, Di An, Binh Duong Province. Equipped with 500 3D printers, we offer end-to-end additive manufacturing services—from design and production to post-processing—delivering efficient, precise, and competitive solutions.",
    introList1: "Equipment & Technology<br />Our Vietnam base operates over 40 3D printers, covering SLA, SLM metal printing, CNC, 3D scanning, vacuum casting, and includes spraying and post-processing, providing flexible support for both prototyping and mass production.",
    introList2: "Application Fields<br />Widely applied in footwear, automotive, medical, electronics, home appliances, architecture, and art design industries, offering high-efficiency manufacturing support.",
    introList3: "Vision & Mission<br />With a core focus on innovation and top quality, we drive the advancement of 3D printing to help upgrade global manufacturing and create greater value.",
    missionTitle: "Corporate Background",
    missionContent: "TaYi in collaboration with leading Chinese R&D enterprise Jinshi Group, promotes the industrial application of 3D printing and expands strategic markets. Embracing an “integrated service” philosophy, we provide complete solutions from early design, mid-stage production, to post-processing. As pioneers in large-scale 3D printing production, we meet diverse demands from small-batch trials to mass production while actively expanding in global markets. Our service network spans major cities in China, including Dongguan, Wuhan, Fenggang, Zhongshan, Shenzhen, Foshan, Huizhou, and Shanghai, offering efficient, precise, and competitive additive manufacturing solutions.",
    missionTitle: "Company Background",
    missionContent: "TaYi collaborates with China’s leading R&D enterprise — Jinshi Group — to drive the industrial application of 3D printing technology and expand strategic markets. We uphold the philosophy of 'integrated services, offering complete solutions from initial design and mid-stage production to post-processing. We are among the first to achieve large-scale 3D printing production, meeting diverse needs from small batch trials to mass manufacturing while actively expanding into global markets.",
    //footer|header
    "Contact-page-title":"Contact us | TaYi.co",
    footer: '© 2025 TAYI (VIETNAM) 3D PRINTING TECHNICAL CENTER',
    //contact文本
    contactTitle: 'Contact Us',
    contactDesc: 'Whether you have printing needs, technical inquiries, or collaboration proposals, we are more than happy to connect with you!<br />Feel free to reach out to us by phone or email — we will get back to you as soon as possible with the most suitable solution.',
    addressTitle: 'Address',
    emailTitle: 'Email',
    facebookTitle: 'Official Fan Page',
    phoneTitle: 'Phone',
   
    //手辦應用
    "figure-page-title": "Figure Design",
    "figure-page-subtitle": "Creative Design × Rapid Prototyping × High Flexibility",
    "overview-title": "Application Overview",
    "figure.service.point1.title": "Rapid Prototyping",
    "figure.service.point1.item1": "Real-time adjustment: Allows designers to quickly check styles, colors, and structures of the model for targeted optimization.",
    "figure.service.point1.item2": "High-speed production: 3D printing rapidly converts blueprints into physical objects, 5–10 times faster than traditional methods.",
    "figure.service.point2.title": "Personalized Design",
    "figure.service.point2.item1": "Flexible to market needs: Supports small-batch customization, ideal for frequently updated designs.",
    "figure.service.point2.item2": "High creative freedom: Satisfies diverse customer demands, enabling quick formation of complex or unique structures.",
    "figure-overview-summary":"3D printing technology makes figure design more efficient, flexible, and personalized, empowering creators to push the boundaries of imagination",


    //家電應用 
    "appliance-page-title": "Home Appliance Applications",
    "appliance-hero-sub": "Enhance Efficiency × Flexible Design × Rapid Production",
    "appliance-overview-title": "Application Overview",
    "appliance.design": "Design & Validation",
    "appliance.item1": "Concept design & showcase: Enables efficient team collaboration, shortens development cycle, reduces design flaws",
    "appliance.item2": "Assembly & functional testing: Validates product performance, reduces production cost, boosts competitiveness",
    "appliance.item3": "Mold prototyping: Low-cost prototyping of multiple variants to accelerate R&D",
    "appliance.market": "Market Applications",
    "appliance.item4": "Rapid prototyping and small-batch production: Reduce mold costs and flexibly respond to market demands",
    "appliance.item5": "Applied to various home appliances: such as air conditioners, refrigerators, washing machines, audio equipment, and small appliances",
    "appliance.item6": "Improve production efficiency, accelerate product launches, and increase market share",
    "appliance.summary": "3D printing is reshaping home appliance manufacturing, offering more efficient and flexible solutions for designers and enterprises",


     //汽車應用
    "auto-page-title": "Automotive Applications",
    "auto-page-subtitle": "Precision × Rapid Prototyping × Flexible Customization",
    "auto-overview-title": "Application Overview",
    "auto.point1.title": "Application Areas",
    "auto.point1.item1": "Production tools: Car brands use 3D printing to make jigs and fixtures, improving efficiency.",
    "auto.point1.item2": "Non-critical parts: Quickly produce bumpers and interior parts, reducing R&D time.",
    "auto.point1.item3": "Customization: Supports small-batch production and personalized designs for aftermarket needs.",
    "auto.point2.title": "Material Innovations",
    "auto.point2.item1": "PP-like resin: High toughness, suitable for snap-fit parts.",
    "auto.point2.item2": "High-temp ceramics: Withstands 200°C, suitable for engine components.",
    "auto.point2.item3": "High-transparency acrylic: Used for headlamp prototyping, speeding up development.",
    "auto-overview-summary": "3D printing empowers the automotive industry with flexible and efficient manufacturing — the future is promising",
    "auto-example1": "▲ 3D printed interior prototype",
    "auto-example2": "▲ Engine hood functional model",
    "auto.point3.title": "Advancements in Material Technology",
    "auto.point3.item1": "PP-like Resin: High toughness and good assembly compatibility",
    "auto.point3.item2": "High-Temperature Ceramics: Suitable for engine-adjacent structures",
    "auto.point3.item3": "High-Transparency Acrylic: Commonly used in headlamp housing development",
    //醫療應用
    "med-page-title": "Medical Applications",
    "med-page-subtitle": "Personalized Devices × Surgical Guides × Precision Manufacturing",
    "med-overview-title": "Application Overview",
    "med.point1.title": "Rapid Mold Prototyping",
    "med.point1.item1": "Reduce cost and time: 3D printing enables fast forming, eliminating complex traditional mold processes.",
    "med.point1.item2": "One-time forming: Fewer steps, higher efficiency.",
    "med.point2.title": "Medical Device Design Innovation",
    "med.point2.item1": "Break traditional manufacturing limits: Create complex structures for clinical needs.",
    "med.point2.item2": "Customized design: Supports detailed and tailored medical equipment.",
    "med.point3.title": "Medical Aids and Instrument Manufacturing",
    "med.point3.item1": "High-precision surgical guides and pre-op models",
    "med.point3.item2": "Small-batch, multi-type production: Accelerate clinical application",
    "med.point3.item3": "Shorter lead time: Improve treatment efficiency",
    "med-overview-summary": "3D printing empowers medical innovation with faster, more precise, and personalized solutions, driving the future of healthcare.",
 
    //金屬3D應用
    "metal-page-title": "Metal 3D Printing Applications",
    "metal-page-subtitle": "Breakthrough × Efficiency × Precision",
    "metal-overview-title": "Application Overview",
    "metal.point1.title": "Break Through Traditional Manufacturing Limits",
    "metal.point1.item1": "Enables complex geometries and personalized design freedom",
    "metal.point1.item2": "Monolithic printing reduces assembly and welding risks",
    "metal.point2.title": "Boost Production Efficiency and Quality",
    "metal.point2.item1": "Fewer assemblies, better structural integrity",
    "metal.point2.item2": "Optimized material use reduces waste and cost",
    "metal.point2.item3": "Agile manufacturing accelerates R&D cycles",
    "metal.point3.title": "Industry Applications",
    "metal.point3.item1": "Aerospace: Key structural and lightweight components",
    "metal.point3.item2": "Automotive & Tooling: Heat exchangers, shoe mold development",
    "metal.point3.item3": "Medical Devices: Titanium implants and custom prosthetics",
    "metal-overview-summary": "Metal 3D printing is revolutionizing manufacturing—boosting efficiency and promoting sustainability.",
   
    //復膜技術
    "vacuum-page-title": "Vacuum Casting",
    "vacuum-page-subtitle": "Rapid Replication × Cost-effective × High Precision Prototyping",
    "vacuum-overview-title": "Application Overview",
    "vacuum.point1.title": "Process Advantages",
    "vacuum.point1.item1": "Low Cost: No expensive molds required, ideal for small-batch production",
    "vacuum.point1.item2": "Fast Production: Replicate dozens of parts quickly",
    "vacuum.point1.item3": "High Precision: Accurately replicates details and textures",
    "vacuum.point1.item4": "Material Flexibility: ABS, PP, silicone, transparent resin, etc.",
    "vacuum.point1.item5": "Post-processing: Supports painting, coloring, electroplating",
    "vacuum.point2.title": "Typical Applications",
    "vacuum.point2.item1": "Product prototyping and verification",
    "vacuum.point2.item2": "Functional testing model fabrication",
    "vacuum.point2.item3": "Small batch trial production",
    "vacuum-overview-summary": "Vacuum casting is an economical solution to mass-produce 3D printed prototypes, widely used in automotive, medical, and electronics industries.",
    
    //雕塑應用
    "sculpture-page-title": "Sculpture Application",
    "sculpture-page-subtitle": "Creative Freedom × True-to-life Detail × Sustainable Craft",
    "sculpture-overview-title": "Application Overview",
    "sculpture.point1.title": "Finished Production",
    "sculpture.point1.item1": "Simplifies traditional clay modeling process, improving creative efficiency and reducing human error",
    "sculpture.point1.item2": "Capable of printing in any size to meet diverse sculpture needs",
    "sculpture.point1.item3": "Pollution-free and waste-free, more eco-friendly and sustainable",
    "sculpture.point2.title": "Mold Reproduction",
    "sculpture.point2.item1": "High-precision detail reproduction ensures the texture and quality of artworks",
    "sculpture.point2.item2": "Supports complex shapes and textures, surpassing traditional mold limitations",
    "sculpture-summary": "3D printing is transforming the artistic process, enabling faster, more accurate, and sustainable realization from idea to physical form.",
  


  },
 
    vi: {
    siteTitle: "TAYI (VIETNAM) 3D PRINTING TECHNICAL CENTER",
    about: "Về Chúng Tôi",
    contact: "Liên Hệ",
    language: "🌐 Tiếng Việt",
    menu: "Menu",
    introTitle: "About Us",
    "heroSub": "Lấy đổi mới công nghệ làm cốt lõi × Thúc đẩy nâng cấp ngành sản xuất",
    introTitle: "Giới thiệu công ty",
    introContent1: "Tổng công ty ở Trung Quốc thành lập năm 2018, chúng tôi vận hành hơn 500 máy in 3D, cung cấp các giải pháp sản xuất bồi đắp tiên tiến, năm 2024 chúng tôi mở rộng kỹ thuật sang Việt Nam tại KCN sóng thân 2 Tỉnh Bình Dương, cung cấp dịch vụ in 3D trọn gói từ thiết kế sản xuất cung cấp hiệu quả và chính xác.",
    introList1: " Công Nghệ & Sản Xuất<br />Ở Việt Nam có hơn 40 máy in 3D hiện đại, bao gồm SLA, SLM, CNC, Scan 3D, và đúc chân không, cùng với khả năng sơn và xử lý sau in và có thể phản ứng linh hoạt theo nhu cầu sản xuất thử nghiệm và sản xuất hàng loạt",
    introList2: " Ngành phục vụ<br /> Được sử dụng rộng rải như giầy dép, ô tô, y tế, điện tử, thiết bị gia dụng, xây dựng và những nghành công nghiệp khác, cung cấp hổ trợ hiệu quả.",
    introList3: "Tầm nhìn<br />Với sự đổi mới phát tiển công nghệ in 3D, nâng cao chất lượng là cốt lõi, và tạo ra nhiều giá trị sản xuất hơn cho các nghành công nghiệp trên toàn cầu và coi trọng nó.Giới Thiệu Về Công Ty",
    missionTitle: "Giới Thiệu Về Công Ty",
    missionContent: "TAYI (Việt Nam) hợp tác cùng Kings Group, cùng nhau thúc đẩy công nghiệp hóa in 3D với các dịch vụ tích hợp từ thiết kế đến sản xuất, chúng tôi cung cấp các giải pháp linh hoạt từ tạo mẫu thử đến sản xuất hàng loạt, phục vụ thị trường toàn cầu.<br />Mạng lưới của chúng tôi trải dài tại Đông Quản, Vũ Hán, Phượng Cương, Trung Sơn, Thâm Quyến, Phật Sơn, Huệ Châu và Thượng Hải, mang đến các giải pháp sản xuất bồi đắp hiệu quả, chính xác và cạnh tranh.",
    
    //contact文本
    "Contact-page-title":"Contact us | TaYi.co",
    footer: '© 2025 TAYI (VIETNAM) 3D PRINTING TECHNICAL CENTER',
    contactTitle: 'Liên hệ với chúng tôi',
    contactDesc: 'Dù bạn có nhu cầu in ấn, tư vấn kỹ thuật hay đề xuất hợp tác, chúng tôi luôn sẵn sàng kết nối cùng bạn!<br />Hãy liên hệ với chúng tôi qua điện thoại hoặc email — chúng tôi sẽ phản hồi sớm nhất và cung cấp giải pháp phù hợp nhất cho bạn.',
    addressTitle: 'Địa chỉ',
    emailTitle: 'Email',
    facebookTitle: 'Trang fanpage chính thức',
    phoneTitle: 'Số điện thoại',

    //手辦應用
    "figure-page-title": "Ứng dụng Trong Mô Hình Nhân Vật",
    "figure-page-subtitle": "Thiết kế sáng tạo × Nguyên mẫu nhanh × Tính linh hoạt cao",
    "overview-title": "Tổng Quan Dịch Vụ",
    "figure.service.point1.title": "Hiện thực hóa nhanh chóng",
    "figure.service.point1.item1": "Điều chỉnh theo thời gian thực: Giúp nhà thiết kế dễ dàng kiểm tra kiểu dáng, màu sắc, kết cấu và tối ưu hóa hiệu quả.",
    "figure.service.point1.item2": "Sản xuất tốc độ cao: Công nghệ in 3D chuyển đổi bản vẽ thành vật thể nhanh gấp 5–10 lần so với phương pháp truyền thống.",
    "figure.service.point2.title": "Thiết kế cá nhân hóa",
    "figure.service.point2.item1": "Linh hoạt theo nhu cầu thị trường: In 3D hỗ trợ sản xuất số lượng ít, phù hợp với sản phẩm thay đổi thiết kế thường xuyên.",
    "figure.service.point2.item2": "Tự do sáng tạo cao: Đáp ứng đa dạng yêu cầu của khách hàng, từ cấu trúc phức tạp đến phong cách độc đáo đều có thể tạo hình nhanh chóng.",
    "figure-overview-summary":" Công nghệ in 3D giúp thiết kế mô hình hiệu quả hơn, linh hoạt hơn và mang tính cá nhân hóa cao, hỗ trợ các nhà sáng tạo vượt qua giới hạn của trí tưởng tượng",
    //家電應用
    "appliance-page-title": "Ứng dụng Gia dụng",
    "appliance-hero-sub": "Tăng hiệu suất × Thiết kế linh hoạt × Sản xuất nhanh chóng",
    "appliance-overview-title": "Tổng quan dịch vụ",
    "appliance.design": "Thiết kế & Đánh giá",
    "appliance.item1": "Thiết kế khái niệm & trưng bày: Hỗ trợ nhóm hợp tác hiệu quả, rút ngắn chu kỳ phát triển, giảm lỗi thiết kế",
    "appliance.item2": "Lắp ráp & kiểm tra chức năng: Xác nhận hiệu suất sản phẩm, giảm chi phí sản xuất, nâng cao khả năng cạnh tranh",
    "appliance.item3": "Làm mẫu khuôn: Tạo mẫu tiết kiệm chi phí cho nhiều phiên bản, đẩy nhanh R&D",
    "appliance.market": "Ứng dụng thị trường",
    "appliance.item4": "Chế tạo thử nghiệm nhanh và sản xuất lô nhỏ: Giảm chi phí khuôn mẫu, linh hoạt đáp ứng nhu cầu thị trường",
    "appliance.item5": "Ứng dụng cho nhiều loại thiết bị gia dụng: như máy lạnh, tủ lạnh, máy giặt, thiết bị âm thanh và đồ gia dụng nhỏ",
    "appliance.item6": "Nâng cao hiệu suất sản xuất, đẩy nhanh việc tung sản phẩm mới, tăng thị phần",

    "appliance.summary": "Công nghệ in 3D đang tái định hình lĩnh vực sản xuất đồ gia dụng, mang lại giải pháp hiệu quả và linh hoạt hơn cho nhà thiết kế và doanh nghiệp",
   
    //汽車應用
    "auto-page-title": "Ứng dụng ngành ô tô",
    "auto-page-subtitle": "Gia công chính xác × Mẫu nhanh × Tùy biến linh hoạt",
    "auto-overview-title": "Tổng quan dịch vụ",
    "auto.point1.title": "Lĩnh vực ứng dụng",
    "auto.point1.item1": "Dụng cụ sản xuất: Sử dụng in 3D để chế tạo đồ gá, nâng cao hiệu suất sản xuất.",
    "auto.point1.item2": "Bộ phận không quan trọng: Nhanh chóng sản xuất cản xe, chi tiết nội thất, rút ngắn thời gian R&D.",
    "auto.point1.item3": "Tùy chỉnh: Hỗ trợ sản xuất quy mô nhỏ và thiết kế cá nhân hóa, đáp ứng nhu cầu thị trường độ chế.",
    "auto.point2.title": "Đổi mới vật liệu",
    "auto.point2.item1": "Nhựa giống PP: Độ dẻo cao, phù hợp với bộ phận lắp ráp kiểu ngàm.",
    "auto.point2.item2": "Gốm chịu nhiệt: Chịu được nhiệt độ 200°C, dùng cho bộ phận động cơ.",
    "auto.point2.item3": "Acrylic trong suốt: Dùng cho tạo mẫu đèn xe, tăng tốc độ phát triển sản phẩm.",
    "auto-overview-summary": "In 3D đang mang đến sự linh hoạt và hiệu quả cho ngành công nghiệp ô tô, hứa hẹn tiềm năng lớn trong tương lai",
    "auto.point3.title": "Tiến bộ về công nghệ vật liệu",
    "auto.point3.item1": "Nhựa giống PP: Độ dẻo cao, dễ lắp ráp",
    "auto.point3.item2": "Gốm chịu nhiệt: Phù hợp cho cấu trúc quanh động cơ",
    "auto.point3.item3": "Acrylic trong suốt cao: Thường dùng trong phát triển vỏ đèn xe",
    //醫療應用
    "med-page-title": "Ứng dụng y tế",
    "med-page-subtitle": "Thiết bị cá nhân hóa × Hướng dẫn phẫu thuật × Sản xuất chính xác",
    "med-overview-title": "Tổng quan dịch vụ",
    "med.point1.title": "Tạo mẫu khuôn nhanh",
    "med.point1.item1": "Giảm chi phí và thời gian: In 3D giúp tạo hình nhanh chóng, loại bỏ quy trình khuôn truyền thống.",
    "med.point1.item2": "Định hình một lần: Ít bước hơn, hiệu quả cao hơn.",
    "med.point2.title": "Đổi mới thiết kế thiết bị y tế",
    "med.point2.item1": "Vượt giới hạn sản xuất: Tạo cấu trúc phức tạp đáp ứng nhu cầu lâm sàng.",
    "med.point2.item2": "Tùy chỉnh cá nhân: Hỗ trợ thiết kế thiết bị y tế chi tiết và theo yêu cầu.",
    "med.point3.title": "Sản xuất dụng cụ và thiết bị hỗ trợ",
    "med.point3.item1": "Mô hình phẫu thuật chính xác, hướng dẫn phẫu thuật",
    "med.point3.item2": "Sản xuất đa dạng, số lượng ít: Đẩy nhanh ứng dụng lâm sàng",
    "med.point3.item3": "Rút ngắn thời gian giao hàng: Nâng cao hiệu quả điều trị",
    "med-overview-summary": "In 3D mang lại giải pháp nhanh chóng, chính xác và cá nhân hóa cho ngành y tế, thúc đẩy đổi mới và chăm sóc sức khỏe trong tương lai",
        
    //金屬3D應用
    "metal-page-title": "Ứng Dụng In 3D Kim Loại",
    "metal-page-subtitle": "Đột Phá × Hiệu Quả × Chính Xác",
    "metal-overview-title": "Tổng Quan Dịch Vụ",
    "metal.point1.title": "Phá vỡ giới hạn sản xuất truyền thống",
    "metal.point1.item1": "Dễ dàng sản xuất cấu trúc phức tạp và thiết kế cá nhân hóa",
    "metal.point1.item2": "In nguyên khối giúp tránh chia nhỏ và hàn, giảm rủi ro chất lượng",
    "metal.point2.title": "Nâng cao hiệu suất và chất lượng",
    "metal.point2.item1": "Giảm công đoạn lắp ráp, tăng độ ổn định kết cấu",
    "metal.point2.item2": "Tối ưu hóa sử dụng vật liệu, giảm lãng phí và chi phí",
    "metal.point2.item3": "Sản xuất linh hoạt, rút ngắn thời gian R&D",
    "metal.point3.title": "Lĩnh vực ứng dụng",
    "metal.point3.item1": "Hàng không vũ trụ: linh kiện kết cấu và nhẹ",
    "metal.point3.item2": "Ô tô & Khuôn mẫu: bộ trao đổi nhiệt, khuôn giày",
    "metal.point3.item3": "Thiết bị y tế: cấy ghép titanium, chân tay giả tùy chỉnh",
    "metal-overview-summary": "In 3D kim loại đang cách mạng hóa sản xuất, vừa tăng hiệu quả vừa hướng đến phát triển bền vững.",
  
    //復模技術
    "vacuum-page-title": "Công nghệ đúc chân không - Trung tâm Công nghệ Gia công bồi đắp DATIN (Việt Nam)",
    "vacuum-page-subtitle": "Sao chép nhanh × Chi phí thấp × Nguyên mẫu chính xác cao",
    "vacuum-overview-title": "Tổng quan dịch vụ",
    "vacuum.point1.title": "Đặc điểm quy trình đúc chân không",
    "vacuum.point1.item1": "Chi phí thấp: Không cần khuôn đắt tiền, phù hợp sản xuất số lượng nhỏ",
    "vacuum.point1.item2": "Thời gian nhanh: Có thể sao chép hàng chục sản phẩm trong thời gian ngắn",
    "vacuum.point1.item3": "Độ chính xác cao: Tái tạo đầy đủ chi tiết và kết cấu",
    "vacuum.point1.item4": "Vật liệu đa dạng: ABS, PP, silicon, nhựa trong suốt, v.v.",
    "vacuum.point1.item5": "Xử lý hậu kỳ: Hỗ trợ sơn, nhuộm màu, mạ điện",
    "vacuum.point2.title": "Ứng dụng phổ biến",
    "vacuum.point2.item1": "Tạo mẫu và xác minh sản phẩm",
    "vacuum.point2.item2": "Sản xuất mô hình thử nghiệm chức năng",
    "vacuum.point2.item3": "Thử nghiệm sản xuất số lượng nhỏ",
    "vacuum-overview-summary": "Đúc chân không là giải pháp kinh tế để sản xuất hàng loạt nguyên mẫu in 3D, được ứng dụng rộng rãi trong ô tô, y tế và điện tử.",

    //雕塑應用
     "sculpture-page-title": "Ứng Dụng Điêu Khắc - Trung Tâm Công Nghệ Gia Tăng Tayi (Việt Nam)",
  "sculpture-page-subtitle": "Tự Do Sáng Tạo × Tái Hiện Chân Thật × Thủ Công Bền Vững",
  "sculpture-overview-title": "Tổng Quan Ứng Dụng",
  "sculpture.point1.title": "Chế Tác Thành Phẩm",
  "sculpture.point1.item1": "Đơn giản hóa quy trình điêu khắc truyền thống, nâng cao hiệu quả sáng tác và giảm sai sót thủ công",
  "sculpture.point1.item2": "In được mọi kích thước, đáp ứng nhu cầu đa dạng về điêu khắc",
  "sculpture.point1.item3": "Không ô nhiễm, không chất thải – thân thiện với môi trường và bền vững hơn",
  "sculpture.point2.title": "Sao Chép Khuôn",
  "sculpture.point2.item1": "Tái tạo chi tiết chính xác cao, đảm bảo kết cấu và độ tinh xảo của tác phẩm",
  "sculpture.point2.item2": "Hỗ trợ thiết kế hình dạng phức tạp, vượt qua giới hạn của phương pháp đúc truyền thống",
  "sculpture-summary": "Công nghệ in 3D đang thay đổi quy trình sáng tạo nghệ thuật, giúp hiện thực hóa tác phẩm nhanh hơn, chính xác hơn và bền vững hơn.",
   
}

}
// 語言套用函式
function applyLang(lang) {
  const langText = texts[lang];
  if (!langText) return;

  // 替換所有 data-key 對應的內容
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (langText[key]) {
      el.innerHTML = langText[key];
      el.classList.add("lang-ready");// 翻譯完才顯示
    }
  });

  // 特殊 ID 映射
  const idMap = {
    'hero-title': 'page-title',
    'hero-sub': 'page-subtitle',
    'site-title': 'siteTitle'
  };

  for (const [id, key] of Object.entries(idMap)) {
    const el = document.getElementById(id);
    if (el && langText[key]) {
      el.innerHTML = langText[key];
      el.classList.add("lang-ready");
    }
  }

  // 更新頁面標題
  if (langText['page-title'] && langText['siteTitle']) {
    document.title = `${langText['page-title']} - ${langText['siteTitle']}`;
  }

  // 語言按鈕（桌機 / 手機）
  const btnDesktop = document.getElementById("lang-btn-desktop");
  const btnMobile = document.getElementById("lang-btn-mobile");
  if (btnDesktop && langText.language) btnDesktop.innerHTML = langText.language; btnDesktop.classList.add("lang-ready");
  if (btnMobile && langText.language) btnMobile.innerHTML = langText.language; btnMobile.classList.add("lang-ready");
}

function loadComponent(selector, url, callback = () => {}) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById(selector);
      if (container) {
        container.innerHTML = html;

        // 取得目前語言並套用（確保載入的 HTML 也被翻譯）
        const lang = localStorage.getItem('lang') || 'zh';
        applyLang(lang);

        callback(); // 再綁定語言切換事件
      }
    })
    .catch(err => console.error(`載入 ${url} 失敗：`, err));
}

// 綁定語言切換按鈕
function bindLangSwitch() {
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', e => {
      e.preventDefault();
      const lang = option.dataset.lang;
      localStorage.setItem('lang', lang);
      applyLang(lang);
    });
  });
}

// 頁面載入
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('lang') || 'zh';

  // 載入 Header → 套用語言 → 綁定語言切換
  loadComponent("include-header", "../../components/header.html", bindLangSwitch);

  // 載入浮動聯絡元件 → 也要套用語言（如果有文字）
  loadComponent("include-contact", "../../components/floating-contact.html");
});



export const fetchCities = (
    state: string,
    setCities: (value: string[]) => void
) => {
    if (state === "") setCities(["شهر"]);
    if (state === "اصفهان")
        setCities([
            "شهر",
            "ابريشم",
            "ابوزيدآباد",
            "اردستان",
            "اريسمان",
            "اژيه",
            "اسفرجان",
            "اسلام آباد",
            "اشن",
            "اصغرآباد",
            "اصفهان",
            "امين آباد",
            "ايمان شهر",
            "آران وبيدگل",
            "بادرود",
            "باغ بهادران",
            "بهارستان",
            "بوئين ومياندشت",
            "پيربكران",
            "تودشك",
            "تيران",
            "جعفرآباد",
            "جندق",
            "جوجيل",
            "چادگان",
            "چرمهين",
            "چمگردان",
            "حسن اباد",
            "خالدآباد",
            "خميني شهر",
            "خوانسار",
            "خوانسارك",
            "خور",
            "خوراسگان",
            "خورزوق",
            "داران ـ فريدن",
            "درچه پياز",
            "دستگردوبرخوار",
            "دهاقان",
            "دهق",
            "دولت آباد",
            "ديزيچه",
            "رزوه",
            "رضوان شهر",
            "رهنان",
            "زاينده رود",
            "زرين شهر ـ لنجان",
            "زواره",
            "زيار",
            "زيبا شهر",
            "سپاهان شهر",
            "سده لنجان",
            "سميرم",
            "شاهين شهر",
            "شهرضا",
            "شهرك صنعتي مورچ",
            "شهرك مجلسي",
            "شهرک صنعتي محمودآباد",
            "طالخونچه",
            "عسگران",
            "علويچه",
            "غرغن",
            "فرخي",
            "فريدون شهر",
            "فلاورجان",
            "فولادشهر",
            "فولادمباركه",
            "قهد ريجان",
            "كاشان",
            "كليشادوسودرجان",
            "كمشچه",
            "كوهپايه",
            "گز",
            "گلپايگان",
            "گلدشت",
            "گلشهر",
            "گوگد",
            "مباركه",
            "مهاباد",
            "مورچه خورت",
            "ميمه",
            "نائين",
            "نجف آباد",
            "نصر آباد",
            "نطنز",
            "نيك آباد",
            "بهارستان",
            "هرند",
            "ورزنه",
            "ورنامخواست",
            "ویلاشهر",
        ]);
    if (state === "البرز")
        setCities([
            "شهر",
            "اشتهارد",
            "آسارا",
            "چهارباغ",
            "سيف آباد",
            "شهر جديد هشتگرد",
            "طالقان",
            "كرج",
            "كمال شهر",
            "كوهسار ـ چندار",
            "گرمدره",
            "ماهدشت",
            "محمدشهر",
            "مشکين دشت",
            "نظرآباد",
            "هشتگرد ـ ساوجبلاغ",
        ]);
    if (state === "اردبیل")
        setCities([
            "شهر",
            "ابي بيگلو",
            "اردبيل",
            "اصلاندوز",
            "بيله سوار",
            "پارس آباد",
            "تازه كند انگوت",
            "جعفرآباد",
            "خلخال",
            "سرعين",
            "شهرك شهيد غفاري",
            "كلور",
            "كوارئيم",
            "گرمي ",
            "گيوي ـ كوثر",
            "لاهرود",
            "مشگين شهر",
            "نمين",
            "نير",
            "هشتجين",
        ]);
    if (state === "آذربایجان شرقی")
        setCities([
            "شهر",
            "ابشاحمد",
            "اذغان",
            "اسب فروشان",
            "اسكو",
            "اغچه ريش",
            "اقمنار",
            "القو",
            "اهر",
            "ايلخچي",
            "آذرشهر",
            "باسمنج",
            "بخشايش ـ كلوانق",
            "بستان آباد",
            "بناب",
            "بناب جديد ـ مرند",
            "تبريز",
            "ترك",
            "تسوج",
            "جلفا",
            "خامنه",
            "خداآفرين",
            "خسروشهر",
            "خضرلو",
            "خلجان",
            "سبلان",
            "سراب",
            "سردرود",
            "سيس",
            "شادبادمشايخ",
            "شبستر",
            "شربيان",
            "شرفخانه",
            "شهر جديد سهند",
            "صوفيان",
            "عجب شير",
            "قره اغاج ـ چاراويماق",
            "قره بابا",
            "كردكندي",
            "كليبر",
            "كندرود",
            "كندوان",
            "گوگان",
            "مراغه",
            "مرند",
            "ملكان",
            "ممقان",
            "ميانه",
            "هاديشهر",
            "هريس",
            "هشترود",
            "هوراند",
            "ورزقان",
        ]);
    if (state === "آذربایجان غربی")
        setCities([
            "شهر",
            "اروميه",
            "اشنويه",
            "ايواوغلي",
            "بازرگان",
            "بوكان",
            "پسوه",
            "پلدشت",
            "پيرانشهر",
            "تازه شهر",
            "تكاب",
            "چهاربرج قديم",
            "خوي",
            "ديزج",
            "ديزجديز",
            "ربط",
            "زيوه",
            "سردشت",
            "سلماس",
            "سيلوانا",
            "سيلوه",
            "سيه چشمه ـ چالدران",
            "شاهين دژ",
            "شوط",
            "قره ضياء الدين ـ چايپاره",
            "قوشچي",
            "كشاورز (اقبال)",
            "ماكو",
            "محمد يار",
            "محمودآباد",
            "مهاباد",
            "مياندوآب",
            "مياوق",
            "ميرآباد",
            "نقده",
            "نوشين شهر",
        ]);
    if (state === "تهران")
        setCities([
            "شهر",
            "احمدآبادمستوفي",
            "ادران",
            "اسلام آباد",
            "اسلام شهر",
            "اكبرآباد",
            "اميريه",
            "انديشه",
            "اوشان",
            "آبسرد",
            "آبعلي",
            "باغستان",
            "باقر شهر",
            "برغان",
            "بومهن",
            "پارچين",
            "پاكدشت",
            "پرديس",
            "پرند",
            "پس قلعه",
            "پيشوا",
            "تجزيه مبادلات لشكر  ",
            "تهران",
            "جاجرود",
            "چرمسازي سالاريه",
            "چهاردانگه",
            "حسن آباد",
            "حومه گلندوك",
            "خاتون آباد",
            "خاوه",
            "خرمدشت",
            "دركه",
            "دماوند",
            "رباط كريم",
            "رزگان",
            "رودهن",
            "ري",
            "سعيدآباد",
            "سلطان آباد",
            "سوهانك",
            "شاهدشهر",
            "شريف آباد",
            "شمس آباد",
            "شهر قدس",
            "شهرآباد",
            "شهرجديدپرديس",
            "شهرقدس(مويز)",
            "شهريار",
            "شهرياربردآباد",
            "صالح آباد",
            "صفادشت",
            "فرودگاه امام خميني",
            "فرون آباد",
            "فشم",
            "فيروزكوه",
            "قرچك",
            "قيام دشت",
            "كهريزك",
            "كيلان",
            "گلدسته",
            "گلستان (بهارستان)",
            "گيلاوند",
            "لواسان",
            "لوسان بزرگ",
            "مارليك",
            "مروزبهرام",
            "ملارد",
            "منطقه 11 پستي تهران",
            "منطقه 13 پستي تهران",
            "منطقه 14 پستي تهران",
            "منطقه 15 پستي تهران",
            "منطقه 16 پستي تهران",
            "منطقه 17 پستي تهران  ",
            "منطقه 18 پستي تهران  ",
            "منطقه 19 پستي تهران  ",
            "نسيم شهر (بهارستان)",
            "نصيرآباد",
            "واوان",
            "وحيديه",
            "ورامين",
            "وهن آباد",
        ]);
    if (state === "گیلان")
        setCities([
            "شهر",
            "احمد سرگوراب",
            "اسالم",
            "اسكلك",
            "اسلام آباد",
            "اطاقور",
            "املش",
            "آبكنار",
            "آستارا",
            "آستانه اشرفيه",
            "بازاراسالم",
            "بازارجمعه شاندرمن",
            "برهسر",
            "بلترك",
            "بلسبنه",
            "بندرانزلي",
            "پاشاكي",
            "پرهسر",
            "پلاسي",
            "پونل",
            "پيربست لولمان",
            "توتكابن",
            "جوكندان",
            "جيرنده",
            "چابكسر",
            "چاپارخانه",
            "چوبر",
            "خاچكين",
            "خشك بيجار",
            "خطبه سرا",
            "خمام",
            "ديلمان",
            "رانكوه",
            "رحيم آباد",
            "رستم آباد",
            "رشت",
            "رضوان شهر",
            "رودبار",
            "رودسر",
            "سراوان",
            "سنگر",
            "سياهكل",
            "شاندرمن",
            "شفت",
            "صومعه سرا",
            "طاهر گوداب",
            "طوللات",
            "فومن",
            "قاسم آبادسفلي",
            "كپورچال",
            "كلاچاي",
            "كوچصفهان",
            "كومله",
            "كياشهر",
            "گشت",
            "لاهيجان",
            "لشت نشا",
            "لنگرود",
            "لوشان",
            "لولمان",
            "لوندويل",
            "ليسار",
            "ماسال",
            "ماسوله",
            "منجيل",
            "هشتپر ـ طوالش",
            "واجارگاه",
        ]);
    if (state === "خوزستان")
        setCities([
            "شهر",
            "اروندكنار",
            "اميديه",
            "انديمشك",
            "اهواز",
            "ايذه",
            "آبادان",
            "آغاجاري",
            "باغ ملك",
            "بندرامام خميني",
            "بهبهان",
            "جايزان",
            "جنت مكان",
            "چمران ـ شهرك طالقاني ",
            "حميديه",
            "خرمشهر",
            "دزآب",
            "دزفول",
            "دهدز",
            "رامشير",
            "رامهرمز",
            "سربندر",
            "سردشت",
            "سماله",
            "سوسنگرد ـ دشت آزادگان",
            "شادگان",
            "شرافت",
            "شوش",
            "شوشتر",
            "شيبان",
            "صالح مشطت",
            "كردستان بزرگ",
            "گتوند",
            "لالي",
            "ماهشهر",
            "مسجد سليمان",
            "ملاثاني",
            "ميانكوه",
            "هفتگل",
            "هنديجان",
            "هويزه",
            "ويس",
        ]);
    if (state === "فارس")
        setCities([
            "شهر",
            " بيضا",
            "اردكان ـ سپيدان",
            "ارسنجان",
            "استهبان",
            "اشكنان ـ اهل",
            "اقليد",
            "اكبرآبادكوار",
            "اوز",
            "ايزدخواست",
            "آباده",
            "آباده طشك",
            "بالاده",
            "بانش",
            "بنارويه",
            "بهمن",
            "بوانات",
            "بوانات(سوريان)",
            "بيرم",
            "جنت شهر(دهخير)",
            "جهرم",
            "جويم",
            "حاجي آباد ـ زرين دشت",
            "حسن آباد",
            "خرامه",
            "خرمی",
            "خشت",
            "خنج",
            "خيرآبادتوللي",
            "داراب",
            "داريان",
            "دهرم",
            "رونيز ",
            "زاهدشهر",
            "زرقان",
            "سروستان",
            "سعادت شهر ـ پاسارگاد",
            "سيدان",
            "ششده",
            "شهر جديد صدرا",
            "شيراز",
            "صغاد",
            "صفاشهر ـ خرم بيد",
            "طسوج",
            "علاءمرودشت",
            "فدامي",
            "فراشبند",
            "فسا",
            "فيروزآباد",
            "فيشور",
            "قادرآباد",
            "قائميه",
            "قطب آباد",
            "قطرويه",
            "قير و كارزين",
            "كازرون",
            "كام فيروز",
            "كلاني",
            "كنارتخته",
            "كوار",
            "گراش",
            "گويم",
            "لار ـ لارستان",
            "لامرد",
            "مبارك آباد",
            "مرودشت",
            "مشكان",
            "مصيري ـ رستم",
            "مظفري",
            "مهر",
            "ميمند",
            "نورآباد ـ ممسني",
            "ني ريز",
            "وراوي",
        ]);
    if (state === "قزوین")
        setCities([
            "شهر",
            "َآوج",
            "ارداق",
            "اسفرورين",
            "اقباليه",
            "الوند ـ البرز",
            "آبگرم",
            "آبيك",
            "آقابابا",
            "بوئين زهرا",
            "بیدستان",
            "تاكستان",
            "حصاروليعصر",
            "خاكعلي",
            "خرم دشت",
            "دانسفهان",
            "سيردان",
            "شال",
            "شهر صنعتي البرز",
            "ضياآباد",
            "قزوين",
            "ليا",
            "محمديه",
            "محمود آباد نمونه",
            "معلم كلايه",
            "نرجه",
        ]);
    if (state === "سمنان")
        setCities([
            "شهر",
            "ارادان",
            "اميريه",
            "ايوانكي",
            "بسطام",
            "بيارجمند",
            "خيرآباد",
            "دامغان",
            "درجزين",
            "سرخه",
            "سمنان",
            "شاهرود",
            "شهميرزاد",
            "گرمسار",
            "مجن",
            "مهدي شهر",
            "ميامي",
            "ميغان",
        ]);
    if (state === "قم")
        setCities([
            "شهر",
            "دستجرد",
            "سلفچگان",
            "شهر جعفریه",
            "قم",
            "قنوات",
            "كهك",
        ]);
    if (state === "مرکزی")
        setCities([
            "شهر",
            "اراك",
            "آستانه",
            "آشتيان",
            "تفرش",
            "توره",
            "جاورسيان",
            "خسروبيك",
            "خشك رود",
            "خمين",
            "خنداب",
            "دليجان",
            "ريحان عليا",
            "زاويه",
            "ساوه",
            "شازند",
            "شهراب",
            "شهرك مهاجران",
            "فرمهين",
            "كميجان",
            "مامونيه ـ زرنديه",
            "محلات",
            "ميلاجرد",
            "هندودر",
        ]);
    if (state === "زنجان")
        setCities([
            "شهر",
            " آب بر ـ طارم",
            "ابهر",
            "اسفجين",
            "پري",
            "حلب",
            "خرمدره",
            "دستجرده",
            "دندي",
            "زرين آباد ـ ايجرود",
            "زرين رود",
            "زنجان",
            "سلطانيه",
            "صائين قلعه",
            "قيدار",
            "گرماب",
            "گيلوان",
            "ماهنشان",
            "همايون",
            "هيدج",
        ]);
    if (state === "مازندران")
        setCities([
            "شهر",
            "اسلام آباد",
            "اميركلا",
            "ايزدشهر",
            "آمل",
            "آهنگركلا",
            "بابل",
            "بابلسر",
            "بلده",
            "بهشهر",
            "بهنمير",
            "پل سفيد ـ سوادكوه",
            "تنكابن",
            "جويبار",
            "چالوس",
            "چمستان",
            "خرم آباد",
            "خوشرودپی",
            "رامسر",
            "رستم كلا",
            "رويانشهر",
            "زاغمرز",
            "زرگر محله",
            "زيرآب",
            "سادات محله",
            "ساري",
            "سرخرود",
            "سلمانشهر",
            "سنگده",
            "سوا",
            "سورك",
            "شيرگاه",
            "شيرود",
            "عباس آباد",
            "فريدون كنار",
            "قائم شهر",
            "كلارآباد",
            "كلاردشت",
            "كيا كلا",
            "كياسر",
            "گزنك",
            "گلوگاه",
            "گهرباران",
            "محمودآباد",
            "مرزن آباد",
            "مرزي كلا",
            "نشتارود",
            "نكاء",
            "نور",
            "نوشهر",
        ]);
    if (state === "گلستان")
        setCities([
            "شهر",
            "انبار آلوم",
            "اينچه برون",
            "آزادشهر",
            "آق قلا",
            "بندر گز",
            "بندرتركمن",
            "جلين",
            "خان ببين",
            "راميان",
            "سيمين شهر",
            "علي آباد",
            "فاضل آباد",
            "كردكوي",
            "كلاله",
            "گاليكش",
            "گرگان",
            "گميش تپه",
            "گنبدكاوس",
            "مراوه تپه",
            "مينودشت",
        ]);
    if (state === "همدان")
        setCities([
            "شهر",
            "ازندريان",
            "اسدآباد",
            "اسلام آباد",
            "بهار",
            "پايگاه نوژه",
            "تويسركان",
            "دمق",
            "رزن",
            "سامن",
            "سركان",
            "شيرين سو",
            "صالح آباد",
            "فامنين",
            "قروه درجزين",
            "قهاوند",
            "كبودرآهنگ",
            "گيان",
            "لالجين",
            "ملاير",
            "نهاوند",
            "همدان",
        ]);
    if (state === "کردستان")
        setCities([
            "شهر",
            "اورامانتخت",
            "بانه",
            "بلبان آباد",
            "بيجار",
            "دلبران",
            "دهگلان",
            "ديواندره",
            "سروآباد",
            "سريش آباد",
            "سقز",
            "سنندج",
            "قروه",
            "كامياران",
            "مريوان",
            "موچش",
        ]);
    if (state === "کرمانشاه")
        setCities([
            "شهر",
            "اسلام آباد غرب",
            "باينگان",
            "بيستون",
            "پاوه",
            "تازه آباد ـ ثلاث باباجاني",
            "جوانرود",
            "روانسر",
            "ريجاب",
            "سراب ذهاب",
            "سرپل ذهاب",
            "سنقر",
            "صحنه",
            "فرامان",
            "فش",
            "قصرشيرين",
            "كرمانشاه",
            "كنگاور",
            "گيلانغرب",
            "نودشه",
            "هرسين",
            "هلشي",
        ]);
    if (state === "لرستان")
        setCities([
            "شهر",
            "ازنا",
            "الشتر ـ سلسله",
            "اليگودرز",
            "برخوردار",
            "بروجرد",
            "پل دختر",
            "تقي آباد",
            "چغلوندی",
            "چقابل",
            "خرم آباد",
            "دورود",
            "زاغه",
            "سپيددشت",
            "شول آباد",
            "كوناني",
            "كوهدشت",
            "معمولان",
            "نورآباد ـ دلفان",
            "واشيان نصيرتپه",
        ]);
    if (state === "بوشهر")
        setCities([
            "شهر",
            "ابدان",
            "اهرم ـ تنگستان",
            "آباد",
            "آبپخش",
            "بادوله",
            "برازجان ـ دشتستان",
            "بردخون",
            "بندردير",
            "بندرديلم",
            "بندرريگ",
            "بندركنگان",
            "بندرگناوه",
            "بوشهر",
            "تنگ ارم",
            "جزيره خارك",
            "جم",
            "چغارك",
            "خورموج ـ دشتي",
            "دلوار",
            "ريز",
            "سعدآباد",
            "شبانكاره",
            "شنبه",
            "شول",
            "عالی شهر",
            "عسلويه",
            "كاكي",
            "كلمه",
            "نخل تقي",
            "وحدتيه",
        ]);
    if (state === "کرمان")
        setCities([
            "شهر",
            "اختيارآباد",
            "ارزوئیه",
            "امين شهر",
            "انار",
            "باغين",
            "بافت",
            "بردسير",
            "بلوك",
            "بم",
            "بهرمان",
            "پاريز",
            "جواديه فلاح",
            "جوشان",
            "جيرفت",
            "چترود",
            "خانوك",
            "دوساري",
            "رابر",
            "راور",
            "راين",
            "رفسنجان",
            "رودبار",
            "ريگان",
            "زرند",
            "زنگي آباد",
            "سرچشمه",
            "سريز",
            "سيرجان",
            "شهربابك",
            "صفائيه",
            "عنبرآباد",
            "فارياب",
            "فهرج",
            "قلعه گنج",
            "كاظم آباد",
            "كرمان",
            "كهنوج",
            "كهنوج( مغزآباد)",
            "كوهبنان",
            "كيان شهر",
            "گلباف",
            "ماهان",
            "محمدآباد ـ ريگان",
            "محي آباد",
            "منوجان",
            "نجف شهر",
            "نگار",
        ]);
    if (state === "هرمزگان")
        setCities([
            "شهر",
            "ابوموسي",
            "ايسين",
            "بستك",
            "بندرخمير",
            "بندرعباس",
            "بندرلنگه",
            "بندزك كهنه",
            "پارسيان",
            "پدل",
            "پل شرقي",
            "تياب",
            "جاسك",
            "جزيره سيري",
            "جزيره لاوان",
            "جزيره هنگام",
            "جزيرهلارك",
            "جناح",
            "چارك",
            "حاجي آباد",
            "درگهان",
            "دشتي",
            "دهبارز ـ رودان",
            "رويدر",
            "زيارت علي",
            "سردشت ـ بشاگرد",
            "سندرك",
            "سيريك",
            "فارغان",
            "فين",
            "قشم",
            "كنگ",
            "كيش",
            "ميناب",
        ]);
    if (state === "چهارمحال و بختیاری")
        setCities([
            "شهر",
            "اردل",
            "آلوني",
            "باباحيدر",
            "بروجن",
            "بلداجي",
            "بن",
            "جونقان",
            "چالشتر",
            "چلگرد ـ كوهرنگ",
            "دزك",
            "دستنائ",
            "دشتك",
            "سامان",
            "سودجان",
            "سورشجان",
            "شلمزار ـ كيار",
            "شهركرد",
            "فارسان",
            "فرادنبه",
            "فرخ شهر",
            "كیان",
            "گندمان",
            "گهرو",
            "لردگان",
            "مال خليفه",
            "ناغان",
            "هاروني",
            "هفشجان",
            "وردنجان",
        ]);
    if (state === "یزد")
        setCities([
            "شهر",
            "ابركوه",
            "احمدآباد",
            "اردكان",
            "بافق",
            "بفروئيه",
            "بهاباد",
            "تفت",
            "حميديا",
            "زارچ",
            "شاهديه",
            "صدوق",
            "طبس",
            "عشق آباد",
            "فراغه",
            "مروست",
            "مهريز",
            "ميبد",
            "نير",
            "هرات ـ خاتم",
            "يزد",
        ]);
    if (state === "سیستان و بلوچستان")
        setCities([
            "شهر",
            "اسپكه",
            "ايرانشهر",
            "بزمان",
            "بمپور",
            "بنت",
            "بنجار",
            "پسكو",
            "تيموراباد",
            "جالق",
            "چابهار",
            "خاش",
            "دوست محمد ـ هيرمند",
            "راسك",
            "زابل",
            "زابلي",
            "زاهدان",
            "زهك",
            "ساربوك",
            "سراوان",
            "سرباز",
            "سنگان",
            "سوران ـ سيب سوران",
            "سيركان",
            "فنوج",
            "قصرقند",
            "كنارك",
            "كيتج",
            "گلمورتي ـ دلگان",
            "گوهركوه",
            "محمدآباد",
            "ميرجاوه",
            "نصرت آباد",
            "نگور",
            "نيك شهر",
            "هيدوچ",
        ]);
    if (state === "ایلام")
        setCities([
            "شهر",
            "اركواز",
            "ارمو",
            "ايلام",
            "ايوان",
            "آبدانان",
            "آسمان آباد",
            "بدره",
            "توحيد",
            "چشمه شيرين",
            "چوار",
            "دره شهر",
            "دهلران",
            "سرابله ـ شيروان و چرداول",
            "شباب ",
            "شهرك اسلاميه",
            "لومار",
            "مهران",
            "موسيان",
            "ميمه",
        ]);
    if (state === "کهگلویه و بویراحمد")
        setCities([
            "شهر",
            "باشت",
            "پاتاوه",
            "چرام",
            "دهدشت ـ كهگيلويه",
            "دوگنبدان ـ گچساران",
            "ديشموك",
            "سپيدار",
            "سوق",
            "سي سخت ـ دنا",
            "قلعه رئيسي",
            "لنده",
            "ليكك",
            "مادوان",
            "ياسوج ـ 7591",
        ]);
    if (state === "خراسان شمالی")
        setCities([
            "شهر",
            "اسفراين",
            "ايور",
            "آشخانه ـ مانه و سلمقان",
            "بجنورد",
            "جاجرم",
            "درق",
            "راز",
            "شوقان",
            "شيروان",
            "فاروج",
            "گرمه",
        ]);
    if (state === "خراسان جنوبی")
        setCities([
            "شهر",
            "ارسك",
            "اسديه ـ درميان",
            "آرين شهر",
            "آيسك",
            "بشرويه",
            "بیرجند",
            "حاجي آباد",
            "خضري دشت بياض",
            "خوسف",
            "زهان",
            "سر بیشه",
            "سرايان",
            "سه قلعه",
            "فردوس",
            "قائن ـ قائنات",
            "گزيک",
            "مود",
            "نهبندان",
            "نیمبلوك",
        ]);
    if (state === "خراسان رضوی")
        setCities([
            "شهر",
            "ابدال آباد",
            "ازادوار",
            "باجگيران",
            "باخرز",
            "باسفر",
            "بجستان",
            "بردسكن",
            "برون",
            "بزنگان",
            "بند قرائ",
            "بيدخت",
            "تايباد",
            "تربت جام",
            "تربت حيدريه",
            "جغتاي",
            "جنگل",
            "چمن آباد",
            "چناران",
            "خليل آباد",
            "خواف",
            "داورزن",
            "درگز",
            "دولت آباد ـ زاوه",
            "رادكان",
            "رشتخوار",
            "رضويه",
            "ريوش(كوهسرخ)",
            "سبزوار",
            "سرخس",
            "سلطان آباد",
            "سنگان",
            "شانديز",
            "صالح آباد",
            "طرقبه ـ بينالود",
            "طوس سفلي",
            "فريمان",
            "فيروزه ـ تخت جلگه",
            "فيض آباد ـ مه ولات",
            "قاسم آباد",
            "قدمگاه",
            "قوچان",
            "كاخك",
            "كاشمر",
            "كلات",
            "گلبهار",
            "گناباد",
            "لطف آباد",
            "مشهد",
            "مشهدريزه",
            "مصعبي",
            "نشتيفان",
            "نقاب ـ جوين",
            "نيشابور",
            "نيل شهر",
        ]);
};
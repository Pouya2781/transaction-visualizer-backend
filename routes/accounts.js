var express = require('express');

var router = express.Router();

const transactionData = [
    {
        SourceAccount: 6534454617,
        DestinationAccount: 6039548046,
        Amount: "500,000,000",
        Date: "1399/04/23",
        TransactionID: 153348811341,
        Type: "پایا"
    },
    {
        SourceAccount: 6039548046,
        DestinationAccount: 5287517379,
        Amount: "100,000,000",
        Date: "1399/04/23",
        TransactionID: 192524206627,
        Type: "پایا"
    },
    {
        SourceAccount: 6039548046,
        DestinationAccount: 5718373092,
        Amount: "200,000,000",
        Date: "1399/04/27",
        TransactionID: 113480622054,
        Type: "پایا"
    },
    {
        SourceAccount: 6039548046,
        DestinationAccount: 9862369812,
        Amount: "300,000,000",
        Date: "1399/04/28",
        TransactionID: 114556773378,
        Type: "پایا"
    },
    {
        SourceAccount: 5287517379,
        DestinationAccount: 1205418051,
        Amount: "50,000,000",
        Date: "1399/04/29",
        TransactionID: 185136982986,
        Type: "کارت به کارت"
    },
    {
        SourceAccount: 9862369812,
        DestinationAccount: 3714493428,
        Amount: "350,000,000",
        Date: "1399/04/30",
        TransactionID: 197303042408,
        Type: "پایا"
    },
    {
        SourceAccount: 5718373092,
        DestinationAccount: 3714493428,
        Amount: "2,000,000,000",
        Date: "1399/04/31",
        TransactionID: 173993949660,
        Type: "ساتنا"
    },
    {
        SourceAccount: 1205418051,
        DestinationAccount: 7434776097,
        Amount: "800,000,000",
        Date: "1399/04/31",
        TransactionID: 107213392290,
        Type: "پایا"
    },
    {
        SourceAccount: 3714493428,
        DestinationAccount: 7434776097,
        Amount: "1,000,000,000",
        Date: "1399/04/31",
        TransactionID: 131554897007,
        Type: "ساتنا"
    },
    {
        SourceAccount: 4727992815,
        DestinationAccount: 7434776097,
        Amount: "2,000,000,000",
        Date: "1399/05/01",
        TransactionID: 163090175418,
        Type: "ساتنا"
    },
    {
        SourceAccount: 7434776097,
        DestinationAccount: 3084026274,
        Amount: "4,000,000,000",
        Date: "1399/05/02",
        TransactionID: 126328028392,
        Type: "ساتنا"
    },
    {
        SourceAccount: 4727992815,
        DestinationAccount: 3084026274,
        Amount: "200,000,000",
        Date: "1399/05/03",
        TransactionID: 133232291681,
        Type: "پایا"
    }
]


const accountsData = [
    {
        AccountID: 6534454617,
        CardID: "6104335000000190",
        Sheba: "IR120778801496000000198",
        AccountType: "پس انداز",
        BranchTelephone: 55638667,
        BranchAddress: "تهران-خیابان خیام-بالاتر از چهارراه گلوبندک",
        BranchName: "گلوبندک",
        OwnerName: "افسر",
        OwnerFamilyName: "طباطبایی",
        OwnerID: 1227114110
    },
    {
        AccountID: 4000000028,
        CardID: "6037699000000020",
        Sheba: "IR033880987114000000028",
        AccountType: "سپرده",
        BranchTelephone: 77547230,
        BranchAddress: "تهران-خيابان شهيد مدنی-نبش خيابان اميرشرفی",
        BranchName: "امیر شرفی",
        OwnerName: "ایرج",
        OwnerFamilyName: "مددی",
        OwnerID: 3658507956
    },
    {
        AccountID: 3000000406,
        CardID: "6221060000000400",
        Sheba: "IR248204855973000000406",
        AccountType: "سپرده",
        BranchTelephone: 22760489,
        BranchAddress: "تهران-خيابان دولت-خيابان ديباجی جنوبی-نبش خيابان شهيد عرفاتی-شماره 82",
        BranchName: "ديباجی جنوبی",
        OwnerName: "ترانه",
        OwnerFamilyName: "برزگری",
        OwnerID: 233079137
    },
    {
        AccountID: 4000000290,
        CardID: "6219867000000290",
        Sheba: "IR806364680364000000290",
        AccountType: "جاری",
        BranchTelephone: 22960013,
        BranchAddress: "تهران-چهارراه پاسداران-میدان حسین‌آباد-ساختمان مهدی-پلاک 120",
        BranchName: "میدان حسین آباد",
        OwnerName: "ترمه",
        OwnerFamilyName: "نصیری",
        OwnerID: 3472758002
    },
    {
        AccountID: 6039548046,
        CardID: "6104333000000360",
        Sheba: "IR437427012782000000361",
        AccountType: "پس انداز",
        BranchTelephone: 33502628,
        BranchAddress: "تهران-خیابان ری-نرسیده به سه‌ راه امین حضور-جنب کوچه آبشار",
        BranchName: "آبشار",
        OwnerName: "ارژنگ",
        OwnerFamilyName: "مرتضوی",
        OwnerID: 8260281348
    },
    {
        AccountID: 9000000331,
        CardID: "6221062000000330",
        Sheba: "IR382666702669000000331",
        AccountType: "پس انداز",
        BranchTelephone: 22237244,
        BranchAddress: "تهران-خيابان شريعتی-خيابان موسی وند-خيابان کريمی-شماره 151",
        BranchName: "خيابان بوعلی",
        OwnerName: "تینا",
        OwnerFamilyName: "اشتیانی",
        OwnerID: 9650799964
    },
    {
        AccountID: 2000000307,
        CardID: "5028064000000300",
        Sheba: "IR515705817182000000307",
        AccountType: "سپرده",
        BranchTelephone: 77728343,
        BranchAddress: "تهران-تهرانپارس-خیابان رشید-نبش کوچه 148 غربی-پلاک 119",
        BranchName: "تهرانپارس - رشید",
        OwnerName: "ارین",
        OwnerFamilyName: "نجفی",
        OwnerID: 2383698300
    },
    {
        AccountID: 3000000352,
        CardID: "6104335000000350",
        Sheba: "IR447139041943000000352",
        AccountType: "جاری",
        BranchTelephone: 55898061,
        BranchAddress: "تهران-خیابان 15 خرداد-بازار عباس آباد-سرای آزادی-طبقه دوم",
        BranchName: "سرای آزادی",
        OwnerName: "حمید",
        OwnerFamilyName: "یثربی",
        OwnerID: 1782886202
    },
    {
        AccountID: 8000000459,
        CardID: "6395999000000450",
        Sheba: "IR999469685408000000459",
        AccountType: "جاری",
        BranchTelephone: 77227190,
        BranchAddress: "تهران-خیابان فرجام شرقی-بین سراج و چهارراه ولیعصر-جنب گزینش ناجا-پلاک 1/514",
        BranchName: "فرجام شرقی",
        OwnerName: "خسرو",
        OwnerFamilyName: "صفوی",
        OwnerID: 5674868748
    },
    {
        AccountID: 8000000402,
        CardID: "6393468000000400",
        Sheba: "IR666786156808000000402",
        AccountType: "جاری",
        BranchTelephone: 66571376,
        BranchAddress: "تهران-خیابان امیر آباد شمالی-روبروی پمپ بنزین-نبش کوچه اشراقی",
        BranchName: "امیر آباد شمالی",
        OwnerName: "دارا",
        OwnerFamilyName: "زمان زاده",
        OwnerID: 6935043332
    },
    {
        AccountID: 5287517379,
        CardID: "6219867000000430",
        Sheba: "IR768572504519000000439",
        AccountType: "سپرده",
        BranchTelephone: 55481172,
        BranchAddress: "تهران-خيابان کارگرجنوبی-ضلع شمال شرقی ميدان قزوين-پلاک 18",
        BranchName: "میدان قزوین",
        OwnerName: "دریا",
        OwnerFamilyName: "حسین زاده",
        OwnerID: 9823618218
    },
    {
        AccountID: 9862369812,
        CardID: "6104336000000280",
        Sheba: "IR555340066618000000280",
        AccountType: "جاری",
        BranchTelephone: 88556268,
        BranchAddress: "تهران-خیابان شهید مطهری-نرسیده به خیابان قائم مقام فراهانی-پلاک 257",
        BranchName: "استاد مطهری",
        OwnerName: "کامران",
        OwnerFamilyName: "رضایی",
        OwnerID: 2684955349
    },
    {
        AccountID: 5718373092,
        CardID: "6221065000000320",
        Sheba: "IR254972538744000000320",
        AccountType: "پس انداز",
        BranchTelephone: 66362188,
        BranchAddress: "تهران-خيابان آزادی-نبش خيابان آذربايجان-شماره 332",
        BranchName: "آزادی",
        OwnerName: "کیانوش",
        OwnerFamilyName: "قاضی",
        OwnerID: 1181323213
    },
    {
        AccountID: 1205418051,
        CardID: "6104332000000060",
        Sheba: "IR782956669947000000060",
        AccountType: "سپرده",
        BranchTelephone: 33769073,
        BranchAddress: "تهران-شهرری-شهرک دولت آباد-فلکه اول",
        BranchName: "دولت آباد",
        OwnerName: "ژیلا",
        OwnerFamilyName: "زمان زاده",
        OwnerID: 4398373386
    },
    {
        AccountID: 1000000236,
        CardID: "6037697000000230",
        Sheba: "IR311031297571000000236",
        AccountType: "جاری",
        BranchTelephone: 55707330,
        BranchAddress: "تهران-خیابان قزوین-نرسیده به دو راهی قپان-پلاک 843",
        BranchName: "امین الملک",
        OwnerName: "ساناز",
        OwnerFamilyName: "حسن پور",
        OwnerID: 8655501965
    },
    {
        AccountID: 3714493428,
        CardID: "6280233000000450",
        Sheba: "IR590757191926000000453",
        AccountType: "سپرده",
        BranchTelephone: 55746611,
        BranchAddress: "تهران-خیابان قزوین-دوراهی‌قپان-خیابان فرهنگ-پلاک 945",
        BranchName: "اذری",
        OwnerName: "ستایش",
        OwnerFamilyName: "سالاری",
        OwnerID: 8083189094
    },
    {
        AccountID: 7000000069,
        CardID: "5041728000000060",
        Sheba: "IR537707653587000000069",
        AccountType: "پس انداز",
        BranchTelephone: 33136732,
        BranchAddress: "تهران-خیابان 17 شهریور-پایین تر از پل آهنگ-پلاک 954",
        BranchName: "17شهریور",
        OwnerName: "نقی",
        OwnerFamilyName: "طباطبایی",
        OwnerID: 7518497901
    },
    {
        AccountID: 4727992815,
        CardID: "5028064000000040",
        Sheba: "IR129871182765000000045",
        AccountType: "جاری",
        BranchTelephone: 55601544,
        BranchAddress: "تهران-خیابان مولوی غربی-بعد از میدان محمدیه-پلاک 744",
        BranchName: "مولوی غربی",
        OwnerName: "نگار",
        OwnerFamilyName: "احمدی",
        OwnerID: 1247145263
    },
    {
        AccountID: 9000000487,
        CardID: "5028066000000480",
        Sheba: "IR541008141089000000487",
        AccountType: "سپرده",
        BranchTelephone: 66067052,
        BranchAddress: "تهران-خیابان آزادی-ما بین خیابان شهیدان و خیابان جیحون-ابتدای کوچه مشعوف-پلاک 378",
        BranchName: "آزادی - یادگار",
        OwnerName: "مهتاب",
        OwnerFamilyName: "قاضی",
        OwnerID: 466444575
    },
    {
        AccountID: 7434776097,
        CardID: "6219869000000180",
        Sheba: "IR955348247339000000184",
        AccountType: "سپرده",
        BranchTelephone: 22234427,
        BranchAddress: "تهران-بلوار 35 متری قیطریه-روبروی پارک قیطریه-پلاک 85",
        BranchName: "قیطریه",
        OwnerName: "بامداد",
        OwnerFamilyName: "برزگری",
        OwnerID: 7333935716
    },
    {
        AccountID: 7000000021,
        CardID: "6037999000000020",
        Sheba: "IR357530402617000000021",
        AccountType: "جاری",
        BranchTelephone: 55000069,
        BranchAddress: "تهران-خانی آباد نو-خیابان شهرداری-نبش خیابان مینا",
        BranchName: "خانی آباد نو",
        OwnerName: "بهناز",
        OwnerFamilyName: "اشتیانی",
        OwnerID: 3184365126
    },
    {
        AccountID: 3084026274,
        CardID: "6104333000000000",
        Sheba: "IR378370321425000000008",
        AccountType: "پس انداز",
        BranchTelephone: 66057406,
        BranchAddress: "تهران-خیابان آزادی-مقابل دانشگاه صنعتی شریف-نبش کوچه حیدرتاش-پلاک 240",
        BranchName: "آزادی",
        OwnerName: "انوش",
        OwnerFamilyName: "ابراهیمی",
        OwnerID: 2746339440
    },
    {
        AccountID: 4000000400,
        CardID: "5028063000000400",
        Sheba: "IR508577914084000000400",
        AccountType: "جاری",
        BranchTelephone: 88717727,
        BranchAddress: "تهران-خیابان احمد قصیر-بین خیابان پنجم و خیابان هفتم-پلاک 16",
        BranchName: "احمد قصیر",
        OwnerName: "پرهام",
        OwnerFamilyName: "عسگرپور",
        OwnerID: 5125488187
    },
    {
        AccountID: 1000000358,
        CardID: "5028067000000350",
        Sheba: "IR463499058601000000358",
        AccountType: "سپرده",
        BranchTelephone: 56696077,
        BranchAddress: "تهران-اسلامشهر‏-ابتدای بیست متری امام خمینی (ره)-جنب مسجد امام نقی(ع)",
        BranchName: "اسلامشهر",
        OwnerName: "پیروز",
        OwnerFamilyName: "شکاری",
        OwnerID: 9710095137
    },
    {
        AccountID: 8000000190,
        CardID: "6221064000000190",
        Sheba: "IR401698532368000000190",
        AccountType: "جاری",
        BranchTelephone: 46889990,
        BranchAddress: "تهران-بلوار انقلاب-نبش خيابان کشاورز",
        BranchName: "شهر قدس",
        OwnerName: "مانی",
        OwnerFamilyName: "عبدلی",
        OwnerID: 8320298705
    },
    {
        AccountID: 9000000405,
        CardID: "6395995000000400",
        Sheba: "IR500379357299000000405",
        AccountType: "پس انداز",
        BranchTelephone: 22844370,
        BranchAddress: "تهران-خیابان خواجه عبدالله انصاری-نبش کوچه ششم-پلاک 110",
        BranchName: "خواجه عبدالله انصاری",
        OwnerName: "شیرین",
        OwnerFamilyName: "ابراهیم نژاد",
        OwnerID: 4031019294
    }
]





/* GET home page. */
router.get('/', function(req, res, next) {
    const accountId = req.query['id'];

    res.send(accountsData.find(x => x.AccountID == accountId))
});


router.post('/', function(req, res, next) {
    const accountId = req.body["id"];
    console.log(req.body)

    res.send(transactionData.filter(x=>x.SourceAccount == accountId))
});


module.exports = router;

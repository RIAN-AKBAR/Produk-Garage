// ==================== KONFIGURASI GLOBAL ====================
// maintenance_mode: true = maintenance aktif, false = normal
// member_mode: true = mode DAFTAR MEMBER, false = mode DAFTAR EVENT

const CONFIG = {
    maintenance_mode: false,
    member_mode: true
};

// Data Produk
const PRODUCTS_DATA = [
    {
        "id": 1,
        "name": "UG Custom Racing Suit - Purple Edition",
        "link": "https://www.roblox.com/catalog/99896736437430",
        "description": "Premium racing suit dengan desain eksklusif",
        "image": "https://tr.rbxcdn.com/180DAY-0395f3bbeea9affd57289b87157e7c79/420/420/Shirt/Webp/noFilter",
        "category": "shirt",
        "stock": 500
    },
    {
        "id": 2,
        "name": "UTARA - Pink Racing Love",
        "link": "https://www.roblox.com/catalog/97458917858087",
        "description": "Racing suit edisi pink dengan motif love",
        "image": "https://tr.rbxcdn.com/180DAY-31fac13af671a5ed95a0d6be4d83e906/420/420/Shirt/Webp/noFilter",
        "category": "shirt",
        "stock": 500
    },
    {
        "id": 3,
        "name": "UTARA GARAGE Racing Team Jersey",
        "link": "https://www.roblox.com/catalog/92566480248771",
        "description": "Jersey resmi tim racing UTARA GARAGE",
        "image": "https://tr.rbxcdn.com/180DAY-1257e0965317839a002d6fdd068f1979/420/420/Shirt/Webp/noFilter",
        "category": "jacket",
        "stock": 500
    },
    {
        "id": 4,
        "name": "UTARA: White Dragon Essence",
        "link": "https://www.roblox.com/catalog/116066867510980",
        "description": "Desain naga putih yang elegan dan misterius",
        "image": "https://tr.rbxcdn.com/180DAY-f431fa825ebfd58cee969699d2511868/420/420/Shirt/Webp/noFilter",
        "category": "shirt",
        "stock": 500
    },
    {
        "id": 5,
        "name": "UG Custom Racing Suit - Purple Edition ( Pants )",
        "link": "https://www.roblox.com/catalog/108307125035213",
        "description": "Classic Pants",
        "image": "https://tr.rbxcdn.com/180DAY-6e4997899894bc638eb64dffc3f3d167/420/420/Pants/Webp/noFilter",
        "category": "trousers",
        "stock": 500
    }
];

// Konfigurasi Pendaftaran Member
const MEMBER_CONFIG = {
    admin_email: "utaragarageofficial@gmail.com",
    min_age: 15
};

// Konfigurasi Event WhatsApp
const EVENT_CONFIG = {
    whatsapp_number: "6281234567890",
    message: "Assalamualaikum Bang Saya Mau Daftar Event"
};

// ==================== DATA MEMBER (LAMA 26 + BARU 10 = 36) ====================
const MEMBERS_DATA = [
    // --- MEMBER LAMA (26) ---
    {
        "username": "alxximutt",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-C5B5BBC6057732B73A2F01F047FD8FDD-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/9459373793"
    },
    {
        "username": "kuda_moshing",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E857EEF4C8FC95D107AFAD9BEAD83DE8-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10312979135"
    },
    {
        "username": "top123projk",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-0B65858085006EBCF7846E444271E3B0-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/3843647029"
    },
    {
        "username": "sbdkece",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-DAC84187B8184491A6373CA3D2001650-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/8146723399"
    },
    {
        "username": "GOOD_GILZ",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-FEADD62CA27FC2722632F3880761A0E2-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/8377093645"
    },
    {
        "username": "baariw",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-9D3AC489EC381B0B31DAF8EA1254DD57-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/2376399949"
    },
    {
        "username": "FIVEPK9",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E974C40B67F10A4162205BE07C007D13-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10081427988"
    },
    {
        "username": "TracyTerracotta208",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-FB3FC511650D0D3A5BB8C745976DC5F9-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/9096496111"
    },
    {
        "username": "owiiingg",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-99DE50DCF29C1687F1A6C82D4CB3C188-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/8732719127"
    },
    {
        "username": "yaaaannl",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-768332C850ADA00FF9DBEE9D27D1ABB2-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10642570952"
    },
    {
        "username": "76aple_royal",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-10A859A1F4681BE9AB2AB04507323EA8-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10996945008"
    },
    {
        "username": "anakhalal711",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-70B906E4E3F5A2FE149F6319977236BD-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/9769432551"
    },
    {
        "username": "itssliff21",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-2CCDF180463715FC86EE96DAE6ED54D4-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/9412333332"
    },
    {
        "username": "1RENG777",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-26E3E1F384BC6A25DD9A0E071FD21E22-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10650806951"
    },
    {
        "username": "Rogerss720",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1A8C72F626F1B8635116C55CF154DC1F-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10549419575"
    },
    {
        "username": "216XAPIN",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-6122FDE5D6CFFCEBFDC8D0B9589BF56D-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10861905147"
    },
    {
        "username": "tann_sultaneee",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E64C1347E73AF7C5FA2BCD338F7D1F5C-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10887057706"
    },
    {
        "username": "kolikusge",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-7FAB95974F9C6D6B6AB767F17AC46318-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/8105138695"
    },
    {
        "username": "hazzx66",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-69577F381B3B1D6B801946650FBC63F8-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/7746039898"
    },
    {
        "username": "SKUY56789",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-383FCF1FCE73D4CDA2A7E8658B50328A-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/2937268106"
    },
    {
        "username": "nemar_jrjr",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-B1F9446BC4EC37ED208DE68643BD7C2F-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10866583654"
    },
    {
        "username": "bakso_malang921",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-CB1A0CF8EA184B3E4C8C39908316E0F7-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10260583289"
    },
    {
        "username": "n1z4m28",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-89751B7D72EFF50BB80E3EAC2F5B7812-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/1813361916"
    },
    {
        "username": "JOKI_DRAG03",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-3D50652D56E6074D7D7562C31D020190-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/8798243979"
    },
    {
        "username": "Veroo_vero0",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-D75DE0070581DA2C6163FEE25D082F45-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/8237789298"
    },
    {
        "username": "pupu065",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-57966CB507B34000562E776AD802FE8F-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/4781655517"
    },

    // --- MEMBER BARU (10, tanpa duplikat) ---
    {
        "username": "waz123497",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-EC3B375133CF90597B84DD033F0A5BD0-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/8847797335"
    },
    {
        "username": "216XAPINX",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-EE3EDF7AC609E098FB8B155243C2A86A-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/10861905147"
    },
    {
        "username": "Rip_TSQGH",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-DDF46E68364277EB45257D1214315864-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/7543024402"
    },
    {
        "username": "gungujay1",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-FA5265A84581B49C0FDD5B12DB4E0334-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/6030866366"
    },
    {
        "username": "10NaeLL",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E9765CDE6DB0C04D65128339F201F496-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/10658119451"
    },
    {
        "username": "arsadgnt",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-9DAF75CBE499E1BDFFF6A1C56930B8CF-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/9129689545"
    },
    {
        "username": "icida72",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-44BE71C80F3E79446D5527C41DF40D86-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/4518865283"
    },
    {
        "username": "ziss_ajee23",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-87E01DD36A8BB0AA785E75231F6AD00E-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/11019348468"
    },
    {
        "username": "benicio_azam",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-BAA17445CC17B2B05708DC27BB704C15-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/2464696754"
    },
    {
        "username": "aple_royal",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-314BCBFD968876C341F3D2434BCF1140-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/11043996118"
    },
    {
        "username": "Rip_TSQGH",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-DDF46E68364277EB45257D1214315864-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/users/7543024402"
    },
    {
        "name": "sunjaya_211",
        "avatar": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-D07CC7CABDFEBE4BF9C1359B62AF0649-Png/150/150/AvatarHeadshot/Webp/noFilter",
        "profile_link": "https://www.roblox.com/id/users/10404698712"
    },
];

// ==================== DATA ADMIN ====================
const ADMIN_DATA = [
 
    {
        "name": "BRIAN",
        "role": "OWNER",
        "title": "Founder & Creative Director",
        "profile": "https://www.roblox.com/users/3624054708/profile",
        "photo": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1E6F2F7197750D011DB7AC78A24FD707-Png/150/150/AvatarHeadshot/Webp/noFilter"
    },
    {
        "name": "RYAN",
        "role": "PARTNER",
        "title": "Web Developer",
        "profile": "https://www.roblox.com/users/1210293463/profile",
        "photo": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-A47999B915DF81863CAB7A71ABFC4875-Png/150/150/AvatarHeadshot/Webp/noFilter"
    },
    {
        "name": "DAVIDD",
        "role": "ADMIN",
        "title": "Contributor",
        "profile": "https://www.roblox.com/users/9925671622/profile",
        "photo": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1F01A40F02D4A323D4AB9BE9F78DECD5-Png/150/150/AvatarHeadshot/Webp/noFilter"
    },
    {
        "name": "TON",
        "role": "ADMIN",
        "title": "Donatur & Support",
        "profile": "https://www.roblox.com/users/1574004264/profile",
        "photo": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-414E9E9FB1F41CC4DCD349336E113F6E-Png/150/150/AvatarHeadshot/Webp/noFilter"
    },
    {
        "name": "Alexander",
        "role": "ADMIN",
        "title": "Donatur & Support",
        "profile": "https://www.roblox.com/users/8610088002/profile",
        "photo": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-A1252E3A4A8C8AF2D881F0DC530874E1-Png/150/150/AvatarHeadshot/Webp/noFilter"
    },
    {
        "name": "NAVAA",
        "role": "ADMIN",
        "title": "Contributor",
        "profile": "https://www.roblox.com/users/2617253374/profile",
        "photo": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-90C3CEC8A71411A516626437E6BB1F67-Png/150/150/AvatarHeadshot/Webp/noFilter"
    },
    {
        "name": "Nararya",
        "role": "DONATUR",
        "title": "Donatur",
        "profile": "https://www.roblox.com/users/4885409097/profile",
        "photo": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-8E32FADF36265DAF5AF1C4DD8E1ED085-Png/150/150/AvatarHeadshot/Webp/noFilter"
    }
];

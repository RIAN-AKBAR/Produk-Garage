// ==================== KONFIGURASI GLOBAL ====================
// maintenance_mode: true = maintenance aktif, false = normal
// member_mode: true = mode DAFTAR MEMBER, false = mode DAFTAR EVENT

const CONFIG = {
    maintenance_mode: false,  // Ganti jadi true untuk maintenance, false untuk normal
    member_mode: false         // true = DAFTAR MEMBER, false = DAFTAR EVENT
};

// Data Produk (bisa diedit langsung di sini)
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
    whatsapp_number: "6281234567890", // Ganti dengan nomor WhatsApp tujuan
    message: "Assalamualaikum Bang Saya Mau Daftar Event"
};

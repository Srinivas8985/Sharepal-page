import React, { useState } from 'react';

const tabs = ["Photography", "Gaming", "Outdoor", "Entertainment"];
const cats = [
  { id: "all", label: "All", icon: "/icons/all.png" },
  { id: "gta", label: "GTA VI", icon: "/icons/gta.png" },
  { id: "ps5", label: "PS5 Console", icon: "/icons/ps5.png" },
  { id: "xbox", label: "Xbox Console", icon: "/icons/xbox.png" },
  { id: "vr", label: "VR", icon: "/icons/vr.png" },
  { id: "blank", label: "", icon: "/icons/vr.png" } // Fallback for the empty one in HTML
];

const productsData = [
  {
    "id": 18273,
    "name": "PS5 + Games (100+) + 1 Controller",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-1-controller/ps5-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    "rating": 4.6,
    "booked_count": 649,
    "tag": "Trending",
    "per_day_rent": 200,
    "out_of_stock": false
  },
  {
    "id": 20242,
    "name": "PS5 All in one Combo + 2 Controllers",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-with-100-games-with-2-controllers/ps5-with-2-controllers-with-ea-play-with-ps-plus-deluxe-subscription-combo-on-rent-sharepal-1.webp",
    "rating": 4.5,
    "booked_count": 604,
    "tag": "Trending",
    "per_day_rent": 440,
    "out_of_stock": false
  },
  {
    "id": 18255,
    "name": "PS5 + Games (100+) + 2 Controllers",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-2-controllers/ps5-with-100-games-with-2-controllers-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 397,
    "tag": "Trending",
    "per_day_rent": 260,
    "out_of_stock": false
  },
  {
    "id": 20105,
    "name": "FC25 + 2 Controllers Combo",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-fc25/ps5-with-fc25-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 209,
    "tag": "Trending",
    "per_day_rent": 165,
    "out_of_stock": false
  },
  {
    "id": 8185,
    "name": "PS5 + 1 Controller (Disc or Digital) (No Games Included)",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-1-controller/ps5-console-with-1-controller-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 236,
    "tag": "",
    "per_day_rent": 160,
    "out_of_stock": false
  },
  {
    "id": 18117,
    "name": "PS5 + EA Play + 2 Controllers",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-combo-with-2-controllers/ps5-ea-play-combo-with-2-controllers-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 167,
    "tag": "",
    "per_day_rent": 260,
    "out_of_stock": true
  },
  {
    "id": 19716,
    "name": "PS5 All in one Combo + 1 Controller",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-with-100-games-with-1-controller/ps5-with-controller-with-ea-play-with-ps-plus-deluxe-subscription-combo-on-rent-sharepal-1.webp",
    "rating": 4.5,
    "booked_count": 187,
    "tag": "Trending",
    "per_day_rent": 260,
    "out_of_stock": true
  },
  {
    "id": 19680,
    "name": "PS5 + 2 Controllers (Disc or Digital) (No Games Included)",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-2%20controllers/ps5-console-with-2-controllers-on-rent-sharepal-1.webp",
    "rating": 4.2,
    "booked_count": 210,
    "tag": "",
    "per_day_rent": 200,
    "out_of_stock": false
  },
  {
    "id": 17795,
    "name": "God Of War Ragnarök + 1 Controller (Digital Game)",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-god-of-war-ragnarok/ps5-with-god-of-war-ragnarok-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    "rating": 4.6,
    "booked_count": 164,
    "tag": "",
    "per_day_rent": 200,
    "out_of_stock": false
  },
  {
    "id": 18055,
    "name": "PS5 + EA Play + 1 Controller",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ea-play-combo-with-1-controller/ps5-with-controller-with-ea-play-combo-on-rent-sharepal-1.webp",
    "rating": 4.5,
    "booked_count": 211,
    "tag": "",
    "per_day_rent": 180,
    "out_of_stock": false
  },
  {
    "id": 20104,
    "name": "Uncharted Series + 1 Controller (Digital Game)",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-uncharted/ps5-with-uncharted-legacy-of-thieves-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    "rating": 4.6,
    "booked_count": 171,
    "tag": "",
    "per_day_rent": 200,
    "out_of_stock": false
  },
  {
    "id": 20103,
    "name": "Cricket 24 + 2 Controllers (Digital Game)",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-cricket-24/ps5-with-cricket-24-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 186,
    "tag": "",
    "per_day_rent": 200,
    "out_of_stock": false
  },
  {
    "id": 36028,
    "name": "PS5 + FC26 + 1 Controller",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-1-controller/ps5-with-fifa-26-with-1-controller-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 2527,
    "tag": "New",
    "per_day_rent": 310,
    "out_of_stock": false
  },
  {
    "id": 20102,
    "name": "Ghost of Tsushima + 1 Controller (Digital Game)",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-ghost-of-tsushima/ps5-with-ghost-of-tsushima-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    "rating": 4.6,
    "booked_count": 140,
    "tag": "",
    "per_day_rent": 200,
    "out_of_stock": false
  },
  {
    "id": 20224,
    "name": "PS5 Mega Racing Wheel Combo",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-mega-racing-combo/ps5-with-controller-with-ps-plus-deluxe-subscription-with-ea-play-with-wheel-combo-on-rent-sharepal-1%20(1).webp",
    "rating": 4.8,
    "booked_count": 139,
    "tag": "",
    "per_day_rent": 310,
    "out_of_stock": true
  },
  {
    "id": 36039,
    "name": "PS5 + FC26 + 2 Controllers",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-2-controllers/ps5-with-fifa-26-with-2-controllers-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 1524,
    "tag": "New",
    "per_day_rent": 310,
    "out_of_stock": false
  },
  {
    "id": 20098,
    "name": "FC24 + 2 Controllers (Digital Game)",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-fc24/ps5-with-fc24-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 165,
    "tag": "",
    "per_day_rent": 200,
    "out_of_stock": true
  },
  {
    "id": 36050,
    "name": "PS5 + FC26 + 4 Controllers",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-4-controllers/ps5-with-fifa-26-with-4-controllers-on-rent-sharepal-1.webp",
    "rating": 4.8,
    "booked_count": 1224,
    "tag": "New",
    "per_day_rent": 310,
    "out_of_stock": false
  },
  {
    "id": 20100,
    "name": "Spider-Man Miles Morales + 1 Controller (Digital Game)",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-spiderman-miles-morales/ps5-with-spiderman-miles-morales-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
    "rating": 4.6,
    "booked_count": 123,
    "tag": "",
    "per_day_rent": 200,
    "out_of_stock": false
  },
  {
    "id": 37512,
    "name": "PS5 + FC27 + 2 Controllers",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-2-controllers/ps5-with-fifa-27-with-2-controllers-on-rent-sharepal-1.webp",
    "rating": 0,
    "booked_count": 652,
    "tag": "New",
    "per_day_rent": 300,
    "out_of_stock": false
  },
  {
    "id": 37501,
    "name": "PS5 + FC27 + 1 Controller",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-1-controller/ps5-with-fifa-27-with-1-controller-on-rent-sharepal-1.webp",
    "rating": 0,
    "booked_count": 658,
    "tag": "New",
    "per_day_rent": 250,
    "out_of_stock": false
  },
  {
    "id": 37534,
    "name": "PS5 + FC27 + 4 Controllers",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa27-4-controllers/ps5-with-fifa-27-with-4-controllers-on-rent-sharepal-1.webp",
    "rating": 0,
    "booked_count": 651,
    "tag": "New",
    "per_day_rent": 350,
    "out_of_stock": false
  },
  {
    "id": 37616,
    "name": "PlayStation Portal Remote Player",
    "image": "https://images.sharepal.in/categories/gaming-consoles/ps5/ps-portal-remote-player/ps-portal-on-rent-1.webp",
    "rating": 0,
    "booked_count": 10000,
    "tag": "Vote to Launch",
    "per_day_rent": 158.25,
    "out_of_stock": false
  }
];

const faqs = [
  "How can I rent from SharePal?",
  "If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?",
  "When does the rental start?",
  "What will be the condition of the products at the time of delivery?",
  "Why is verification required?"
];

const reviews = [
  { initials: "AA", name: "Name One", desc: "City • Category" },
  { initials: "PS", name: "Name Two", desc: "City • Category" },
  { initials: "JS", name: "Name Three", desc: "City • Category" },
  { initials: "MM", name: "Name Four", desc: "City • Category" },
];

const stats = [
  { val: "0Cr+", label: "Saved Together" },
  { val: "0M Kg", label: "CO₂E Emissions Saved" },
  { val: "0K+", label: "Products In Circulation" },
];

const footerGroups = [
  { title: "Action Cameras", links: ["Action Cameras", "Pocket Cameras", "GoPro Cameras", "DJI Cameras", "DJI Drones", "360 Cameras"] },
  { title: "Cameras", links: ["DSLR Cameras", "Cameras", "iPhones", "DSLR Gimbal Combos", "Wildlife Photography", "Tripod and camera accessories"] },
  { title: "Trekking Gear", links: ["Trekking Gear", "Trekking Jackets", "Trek/Snow Pants", "Trekking Shoes", "Trek Accessories"] },
  { title: "Riding Gear", links: ["Riding Gear", "Riding Luggage", "Riding Jackets", "Riding Essentials", "Riding Boots", "Binoculars"] },
  { title: "Creator Gear", links: ["Wireless & Collar Mics", "Professional Cameras", "Mirrorless Cameras", "UNLMTD Vlogging", "Mobile Gimbals", "Vlogging"] },
  { title: "Gaming Console", links: ["PS5 Console", "VR", "Racing Wheel", "Big Screen Gaming", "Xbox Console"] },
  { title: "Winter Wear", links: ["Snow Boots", "Winter Jackets", "Backpacks"] },
  { title: "Camping Gear", links: ["Camping Gear", "Camping Stools & Tables", "Camping Tents", "Sleeping Bags & Mats"] },
  { title: "Audio Visual Equipment", links: ["Projectors", "VR", "Mics", "Speakers"] },
];

const footerLinks2 = [
  { title: "SharePal", links: [{ l: "About" }, { l: "Why SharePal" }, { l: "Sitemap" }, { l: "CarePal" }] },
  { title: "Become a Pal", links: [{ l: "SharePal for Creators" }, { l: "Careers" }, { l: "SharePal for Brands" }, { l: "Asset Funding Program", tag: "New" }, { l: "Rent Your Gear", tag: "New" }] },
  { title: "Information", links: [{ l: "How it works?" }, { l: "FAQs" }, { l: "Verification" }, { l: "Cancellation Policy" }, { l: "Life at SharePal" }] },
  { title: "Policies", links: [{ l: "Terms & Condition" }, { l: "Shipping policy" }, { l: "Damage Policy" }, { l: "Terms of Use" }, { l: "Privacy Policy" }] },
  { title: "Need Help", links: [{ l: "🎧 Contact Support" }, { l: "Contact Us" }, { l: "✉ care@sharepal.in" }, { l: "in  ◎  f" }] },
];

function ProductCard({ item }) {
  if (item.tag === 'Vote to Launch') {
    return (
      <div className="relative">
        <div className="bg-white rounded-[20px] h-[288px] grid place-items-center p-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#dcdce4] overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
        <span className="absolute top-[15px] left-[15px] border-[1.5px] border-[#a6e22e] text-[#222] bg-[#f3ffd6] rounded-lg px-3 py-0.5 text-[15px] font-semibold shadow-sm">
          Vote to Launch
        </span>
        <div className="bg-[#f1fbd6] rounded-[14px] mt-2.5 p-[10px_10px_6px] text-[13px] color-[#304000]">
          ✦ We launch if 1k people join the waitlist. Get notified first!
          <div className="bg-[#d8d8df] h-6 rounded-xl mt-1.5 text-center text-white text-[12px] leading-6 font-bold">
            14/1000 Joined
          </div>
        </div>
        <h3 className="text-[20px] leading-[30px] font-semibold mx-[10px] mt-[22px] pb-3 border-b border-[#dcdce4] text-[#0b0b14]">{item.name}</h3>
        <div className="bg-[#9ef01a] rounded-[14px] h-[50px] grid place-items-center font-semibold mx-[10px] mt-[25px] cursor-pointer text-[#0b0b14] hover:bg-[#8ade15] transition-colors">
          Join Waitlist
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="bg-white rounded-[20px] h-[288px] grid place-items-center p-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#dcdce4] overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
      </div>
      {item.tag && (
        <span className={`absolute top-[15px] left-[15px] border-[1.5px] rounded-lg px-3 py-0.5 text-[15px] font-semibold bg-white shadow-sm ${
          item.tag === 'Trending' ? 'border-[#e8590c] text-[#e8590c]' : 'border-[#0f72c8] text-[#0f72c8]'
        }`}>
          {item.tag}
        </span>
      )}
      <h3 className="text-[20px] leading-[30px] font-semibold mx-[10px] mt-4 min-h-[60px] text-[#0b0b14]">{item.name}</h3>
      <div className="flex justify-between items-center border-t border-[#dcdce4] mx-[10px] mt-5 pt-2.5 text-[#8a8a98] text-[18px] leading-[24px]">
        <div>
          Select Dates to view price
          <i className="block text-[#222] font-bold not-italic blur-[4px]">₹{item.per_day_rent}</i>
        </div>
        <div className="w-[60px] h-[60px] shrink-0 border-2 border-[#0a0c30] rounded-full grid place-items-center text-[32px] text-[#0a0c30] cursor-pointer hover:bg-[#0a0c30] hover:text-white transition-colors">
          +
        </div>
      </div>
    </div>
  );
}

export default function GamingGadgetsPage() {
  const [activeTab, setActiveTab] = useState("Gaming");
  const [activeCat, setActiveCat] = useState("all");

  // Reorder items: put Vote to Launch first, then others
  const portalItem = productsData.find(p => p.tag === 'Vote to Launch');
  const otherItems = productsData.filter(p => p.tag !== 'Vote to Launch');
  
  // Create grids matching the design layout (1st grid has 4 items, 2nd has 4, 3rd has the rest)
  const g1Items = portalItem ? [portalItem, ...otherItems.slice(0, 3)] : otherItems.slice(0, 4);
  const g2Items = portalItem ? otherItems.slice(3, 7) : otherItems.slice(4, 8);
  const g3Items = portalItem ? otherItems.slice(7) : otherItems.slice(8);

  return (
    <div className="bg-[#f3f4f7] text-[#0b0b14] min-h-screen font-sans pt-[80px]">
      {/* Tabs */}
      <nav className="flex justify-center h-[55px] border-b border-[#dcdce4] bg-white relative z-10">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`w-[233px] text-center pt-4 font-semibold relative text-[#3b3b48] cursor-pointer hover:text-[#4c1b8e] transition-colors ${
              t === activeTab ? 'text-[#4c1b8e] w-[150px] mx-[40px]' : ''
            }`}
          >
            {t}
            {t === activeTab && (
              <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-[#4c1b8e]"></span>
            )}
          </button>
        ))}
      </nav>

      {/* Main Layout */}
      <div className="container mx-auto px-5">
        <main className="flex flex-col lg:flex-row gap-8 items-start mt-8 pb-10">
          
          {/* Aside Sidebar */}
          <aside className="w-full lg:w-[120px] shrink-0 bg-white rounded-[20px] py-[12px] lg:sticky lg:top-[160px] flex flex-row lg:flex-col gap-3 items-center overflow-x-auto lg:overflow-y-auto lg:h-[522px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#dcdce4] scrollbar-hide">
            {cats.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`w-[80px] text-center font-semibold text-[14px] flex flex-col items-center cursor-pointer transition-colors ${
                  c.id === activeCat ? 'text-[#1b3fd8]' : 'text-[#a0a0ad]'
                }`}
              >
                <div className={`w-[64px] h-[64px] rounded-[14px] mb-1.5 grid place-items-center transition-all ${
                  c.id === activeCat ? 'border-2 border-[#1b3fd8] bg-white' : 'bg-white'
                }`}>
                  {c.icon.startsWith('/') ? (
                    <img src={c.icon} alt={c.label} className="w-8 h-8 object-contain" />
                  ) : (
                    <div className="text-3xl">{c.icon}</div>
                  )}
                </div>
                <span className="whitespace-nowrap">{c.label}</span>
              </button>
            ))}
          </aside>

          {/* Right Content */}
          <div className="flex-1 min-w-0">
            {/* Hero */}
            <div className="h-[285px] rounded-[16px] bg-gradient-to-r from-[#5a17ab] to-[#8b2cd9] relative text-white text-center pt-[42px] overflow-hidden shadow-md isolate">
              <div className="absolute top-1/2 -translate-y-1/2 left-[20px] w-[260px] h-[260px] hidden xl:grid place-items-center">
                <img src={productsData[2].image} alt="Hero Left" className="w-full h-full object-contain mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[20px] w-[260px] h-[260px] hidden xl:grid place-items-center">
                <img src={productsData[14].image} alt="Hero Right" className="w-full h-full object-contain mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
              </div>
              
              <h1 className="m-0 text-[30px] lg:text-[52px] font-bold">Gaming Consoles</h1>
              <p className="mx-auto mt-3.5 max-w-[660px] text-[18px] lg:text-[23px] font-semibold leading-[34px]">
                Rent the latest gaming gadgets from <b className="italic font-extrabold text-[#9ef01a]">SharePal</b> PS5, Xbox, Oculus VR, Racing Wheel on rent.
              </p>
              
              <div className="absolute bottom-8 left-0 right-0 flex gap-10 justify-center text-[25px] font-medium">
                <span>XBOX</span>
                <span>PS5</span>
                <span>Meta</span>
              </div>
            </div>

            {/* Grid 1 Title */}
            <div className="flex justify-between items-baseline border-b border-[#dcdce4] pt-[22px] pb-5 m-0 mt-2">
              <h2 className="m-0 text-[30px] font-bold">Gaming Gadgets On Rent</h2>
              <span className="text-[#767684] text-[20px]">Total items: <b className="text-[#0b0b14] font-medium">{productsData.length} items</b></span>
            </div>

            {/* Grid 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-[50px] pt-[45px] px-[15px] items-start">
              {g1Items.map((item, idx) => <ProductCard key={idx} item={item} />)}
            </div>

            {/* Banner A */}
            <div className="rounded-[16px] mt-[45px] overflow-hidden shadow-md">
              <img src="https://images.sharepal.in/sharepal-banners/assets-fund-banner.png" alt="Become an Asset Partner" className="w-full h-auto object-cover block" referrerPolicy="no-referrer" />
            </div>

            {/* Grid 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-[50px] pt-[45px] px-[15px] items-start">
              {g2Items.map((item, idx) => <ProductCard key={idx} item={item} />)}
            </div>

            {/* Banner B */}
            <div className="rounded-[16px] mt-[45px] overflow-hidden shadow-md">
              <img src="https://images.sharepal.in/sharepal-banners/ews-generic-banner-desktop.png" alt="Generic Banner" className="w-full h-auto object-cover block" referrerPolicy="no-referrer" />
            </div>

            {/* Grid 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-[50px] pt-[45px] px-[15px] items-start">
              {g3Items.map((item, idx) => <ProductCard key={idx} item={item} />)}
            </div>

            {/* Show More */}
            <div className="text-center border-t border-[#dcdce4] mt-[45px] pt-[36px] text-[#767684] text-[20px]">
              Showing {g1Items.length + g2Items.length + g3Items.length} of {productsData.length} results
              <button className="w-[360px] h-[64px] border-2 border-[#0a0c30] rounded-[34px] mt-[22px] mx-auto grid place-items-center text-[#0b0b14] text-[20px] font-semibold cursor-pointer hover:bg-[#0a0c30] hover:text-white transition-colors">
                Show More
              </button>
            </div>
            
          </div>
        </main>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[1520px] mx-auto px-5 pb-10">
        <div className="bg-white rounded-[30px] p-[48px_50px_80px] mt-[70px] shadow-sm border border-[#dcdce4]">
          <h2 className="m-0 mb-8 text-[32px] font-bold">Frequently Asked Questions (FAQs)</h2>
          <div>
            {faqs.map((q, i) => (
              <p key={i} className={`m-0 h-[70px] px-5 flex justify-between items-center text-[20px] text-[#0b0b14] rounded-[14px] cursor-pointer hover:bg-gray-50 ${
                i === 4 ? 'bg-[#f1f1f3]' : ''
              }`}>
                {q} <span className="text-gray-400">⌄</span>
              </p>
            ))}
          </div>
          <button className="w-full bg-[#f3f4f7] rounded-[30px] h-[55px] grid place-items-center mt-2.5 text-[20px] font-semibold hover:bg-gray-200 transition-colors">
            View more FAQ's
          </button>
        </div>
        <div className="text-[#767684] mt-[70px] text-[18px]">
          Bangalore &nbsp;›&nbsp; <b className="text-[#0b0b14] font-medium">Gaming gadgets on rent</b>
        </div>
      </div>

      {/* Reviews & Stats Section */}
      <div className="bg-white text-center mt-[35px] pt-[44px] pb-20 text-[#0a0c1f] border-t border-[#dcdce4]">
        <h2 className="m-0 text-[32px] md:text-[60px] font-extrabold">
          Served more than <span className="text-[#e8590c]">1 Lakh Orders</span>
        </h2>
        
        <div className="overflow-hidden max-w-[1860px] mx-auto mt-[70px] text-left">
          <div className="flex gap-5 w-max animate-marquee">
            {[...reviews, ...reviews, ...reviews].map((r, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[400px] shrink-0 border border-[#e3e3ea] rounded-[26px] p-5 bg-[#fafafb] h-[280px] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="text-[#f0a500] text-[24px] tracking-[2px] flex gap-1.5 items-center">
                <div className="w-[30px] h-[30px] rounded-full bg-[#e9e9ef] grid place-items-center text-xs text-black font-bold border border-[#dcdce4]">G</div>
                ★★★★★
              </div>
              <p className="font-semibold text-[20px] leading-[30px] my-5 text-[#14142a]">
                “ Placeholder customer review text goes here. Replace with your own genuine testimonials. ”
              </p>
              <div className="flex gap-4 items-center text-[#767684] text-[17px]">
                <b className="w-[52px] h-[52px] rounded-full bg-[#dbe0f7] text-[#1b3fd8] grid place-items-center text-xl">{r.initials}</b>
                <div>
                  <span className="font-bold text-[#0b0b14] block">{r.name}</span>
                  {r.desc}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-around max-w-[1520px] mx-auto mt-[60px] border-t border-[#e8e8ee] border-b py-[34px] gap-5">
          {stats.map((s, i) => (
            <div key={i} className="text-[24px] text-[#555]">
              <strong className="block text-[72px] font-extrabold leading-[84px] text-transparent bg-clip-text bg-gradient-to-r from-[#1b3fd8] to-[#7ad110]">
                {s.val}
              </strong>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#020a2c] text-white pt-[92px] pb-[40px]">
        <div className="max-w-[1520px] mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-[50px] gap-x-5 mb-[52px]">
            {footerGroups.map((g, i) => (
              <div key={i}>
                <h4 className="m-0 mb-7 text-[24px] font-semibold">{g.title}</h4>
                {g.links.map((l, j) => (
                  <a key={j} href="#" className="block text-[#b8bccd] mb-4 text-[18px] leading-[22px] hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            ))}
          </div>
          
          <div className="text-[#b8bccd] text-[18px] leading-[25px]">
            <h5 className="text-[18px] text-white m-0 mb-1.5 underline">Renting from SharePal in Bangalore</h5>
            Placeholder SEO paragraph about renting in your city. Replace with your own copy describing your products, delivery and rental tenures.<br/><br/>
            <b className="text-white font-bold">Categories on Rent</b>
            <h5 className="mt-4 text-[18px] text-white font-bold underline">Action Cameras on Rent</h5>
            Placeholder category description text goes here.<br/>
            <b className="text-white text-[14px] font-bold mt-2 inline-block cursor-pointer">Read More ⌄</b>
          </div>

          <div className="h-[50px] bg-gradient-to-r from-[#0a1560] to-[#061046] mt-[50px] flex items-center font-bold italic text-[38px] text-[#2a52ff] pl-0.5 rounded-lg w-max pr-4">
            Share<b className="text-[#9ef01a]">Pal</b>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
            {footerLinks2.map((g, i) => (
              <div key={i}>
                <h4 className="m-0 mb-10 text-[19px] font-semibold">{g.title}</h4>
                {g.links.map((l, j) => (
                  <a key={j} href="#" className="block text-[#c9cde0] mb-8 text-[18px] hover:text-white transition-colors flex items-center gap-1">
                    {l.l}
                    {l.tag && <em className="bg-[#9ef01a] text-black not-italic text-[12px] px-2.5 py-0.5 rounded-xl ml-1 font-bold">{l.tag}</em>}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between border-t border-[#1d2a7a] mt-[30px] pt-[30px] text-[#5b7bff] text-[18px] gap-4">
            <span className="cursor-pointer hover:text-white transition-colors">Go up ︿</span>
            <span>© 2026. SharePal Pvt Ltd</span>
            <span>Made with ♥ for India</span>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-[14px] bg-[#020b2b] text-white border-2 border-[#9ef01a] rounded-[34px] px-6 py-4 font-semibold text-[17px] z-50 whitespace-nowrap shadow-xl cursor-pointer hover:bg-[#041144]">
        🗓 Select rental dates to view prices
      </div>
      
      <div className="fixed right-[60px] bottom-[60px] w-[72px] h-[72px] z-50 cursor-pointer hover:scale-105 transition-transform">
        <div className="absolute right-0 top-0 w-[58px] h-[54px] bg-[#1b3fd8] rounded-[50%_50%_50%_8px]"></div>
        <div className="absolute left-0 bottom-0 w-[58px] h-[54px] bg-[#9ef01a] rounded-[50%_50%_50%_4px] rounded-bl-none"></div>
        {/* Actual chat icon SVG can go here */}
        <svg className="absolute inset-0 m-auto w-8 h-8 text-white z-10 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>

    </div>
  );
}

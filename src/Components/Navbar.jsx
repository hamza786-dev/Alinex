// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import Company from "../Assets/company.jpg";
// import Service from "../Assets/service.jpg";
// import news1 from "../Assets/news1.jpg";
// import news2 from "../Assets/news2.jpg";
// import news3 from "../Assets/news3.jpg";
// import career1 from "../Assets/career1.jpg";
// import career2 from "../Assets/career2.jpg";

// const navItems = [
//   { label: "Our Company", href: "/our-company" },
//   { label: "Our Services", href: "/services" },
//   { label: "Our Projects", href: "/team" },
//   { label: "News & Insights", href: "/news-and-insights" },
//   { label: "Careers", href: "/careers" },
//   { label: "Contact Us", href: "/contact-us" },
//   { label: "Become a Subcontractor", href: "/gallery" },
// ];

// export default function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null); // desktop
//   const [mobileOpen, setMobileOpen] = useState(false); // whole mobile menu
//   const [mobileDropdown, setMobileDropdown] = useState(null); // mobile dropdowns
//   const closeTimeoutRef = useRef(null);

//   const handleMouseEnter = (index) => {
//     clearTimeout(closeTimeoutRef.current);
//     setOpenDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     closeTimeoutRef.current = setTimeout(() => {
//       setOpenDropdown(null);
//     }, 200);
//   };

//   // Reusable dropdown content (desktop + mobile)
//   const renderDropdownContent = (index) => {
//     if (index === 0) {
//       return (
//         <div className="flex flex-col md:flex-row p-0 min-h-[100%] mt-4 md:mt-6">
//           {/* Column 1 */}
//           <div className="md:w-1/5 bg-[rgb(195,155,70)] text-white p-6 flex flex-col justify-between">
//             <div>
//               <h4 className="font-bold mb-2">About Us</h4>
//               <p className="mb-4 text-sm text-gray-100">
//                 Turner is a North America-based, international construction
//                 services company and a leader in diverse markets.
//               </p>
//             </div>
//             <a
//               href="/about"
//               className="text-sm font-semibold hover:underline flex items-center text-white mt-4"
//             >
//               GET TO KNOW US <span className="ml-1">→</span>
//             </a>
//           </div>

//           {/* Column 2 */}
//           <div className="px-6 border-gray-200 md:border-r">
//             <h4 className="font-semibold text-gray-800 mb-2">Who We Are</h4>
//             <ul className="space-y-1 text-gray-600 text-sm">
//               <li>
//                 <a href="/about" className="hover:text-blue-700">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/leadership" className="hover:text-blue-700">
//                   Our Leadership
//                 </a>
//               </li>
//               <li>
//                 <a href="/sectors" className="hover:text-blue-700">
//                   Market Sectors
//                 </a>
//               </li>
//               <li>
//                 <a href="/foundation" className="hover:text-blue-700">
//                   Turner Foundation
//                 </a>
//               </li>
//               <li>
//                 <a href="/international" className="hover:text-blue-700">
//                   Turner International
//                 </a>
//               </li>
//               <li>
//                 <a href="/affiliates" className="hover:text-blue-700">
//                   Affiliates
//                 </a>
//               </li>
//               <li>
//                 <a href="/locations" className="hover:text-blue-700">
//                   Locations
//                 </a>
//               </li>
//               <li>
//                 <a href="/city" className="hover:text-blue-700">
//                   Turner City
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div className="px-6 border-gray-200 md:border-r">
//             <h4 className="font-semibold text-gray-800 mb-2">Our Culture</h4>
//             <ul className="space-y-1 text-gray-600 text-sm">
//               <li>
//                 <a href="/esg" className="hover:text-blue-700">
//                   Our ESG Strategy
//                 </a>
//               </li>
//               <li>
//                 <a href="/community" className="hover:text-blue-700">
//                   Community & Citizenship
//                 </a>
//               </li>
//               <li>
//                 <a href="/dei" className="hover:text-blue-700">
//                   Diversity, Equity, Inclusion
//                 </a>
//               </li>
//               <li>
//                 <a href="/sustainability" className="hover:text-blue-700">
//                   Sustainability
//                 </a>
//               </li>
//               <li>
//                 <a href="/ethics" className="hover:text-blue-700">
//                   Ethics & Compliance
//                 </a>
//               </li>
//               <li>
//                 <a href="/innovation" className="hover:text-blue-700">
//                   Innovation
//                 </a>
//               </li>
//               <li>
//                 <a href="/safety" className="hover:text-blue-700">
//                   Safety & Wellness
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4 */}
//           <div className="px-6 border-gray-200 md:border-r">
//             <h4 className="font-semibold text-gray-800 mb-2">Resources</h4>
//             <ul className="space-y-1 text-gray-600 text-sm">
//               <li>
//                 <a href="/inquiries" className="hover:text-blue-700">
//                   General Inquiries
//                 </a>
//               </li>
//               <li>
//                 <a href="/cost-index" className="hover:text-blue-700">
//                   Cost Index
//                 </a>
//               </li>
//               <li>
//                 <a href="/university" className="hover:text-blue-700">
//                   Turner University
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 5 */}
//           <div className="md:w-1/5 pl-6 mt-4 md:mt-0">
//             <h4 className="font-semibold text-gray-800 mb-2">
//               Become a Subcontractor
//             </h4>
//             <img src={Company} alt="Subcontractors" className="rounded-md mb-2" />
//             <a
//               href="/become-a-subcontractor"
//               className="text-sm text-blue-700 font-semibold hover:underline"
//             >
//               Learn How
//             </a>
//           </div>
//         </div>
//       );
//     }

//     if (index === 1) {
//       return (
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-[22%] bg-[rgb(195,155,70)] text-white p-6">
//             <h4 className="text-lg font-semibold mb-2">Our Services</h4>
//             <p className="text-sm leading-relaxed">
//               Our people bring their technical knowledge, experience, and
//               resourcefulness to the delivery of our construction services.
//             </p>
//           </div>
//           <div className="md:w-[53%] grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:border-x border-gray-200">
//             <div>
//               <h4 className="text-gray-800 font-semibold mb-2">Approach</h4>
//               <ul className="space-y-1 text-sm text-gray-600">
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Preconstruction
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Construction Management
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Project Management
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Lean Construction
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-gray-800 font-semibold mb-2">Expertise</h4>
//               <ul className="space-y-1 text-sm text-gray-600">
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Accelerated Payment Program
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Fabrication Shop
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Insurance & Surety
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Offsite Manufacturing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Risk Management
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Self-Perform Operations
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Supply Chain Management
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Turner Engineering Group
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Turner Technical Services
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-700">
//                     Virtual Design & Construction
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="md:w-[25%] p-6">
//             <h4 className="text-gray-800 font-semibold mb-2">Our Markets</h4>
//             <img src={Service} alt="Our Markets" className="rounded-md mb-2" />
//             <a
//               href="#"
//               className="text-sm text-blue-700 font-semibold hover:underline"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       );
//     }

//     if (index === 3) {
//       return (
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-[25%] bg-[rgb(195,155,70)] text-white p-6">
//             <h4 className="text-lg font-semibold mb-2">News & Insights</h4>
//             <p className="text-sm leading-relaxed">
//               Stay up to date with the latest news and insights from Turner.
//               Learn from our industry experts sharing innovation, market insight,
//               and thought leadership.
//             </p>
//             <a
//               href="/insights"
//               className="text-sm font-semibold underline mt-2 inline-block"
//             >
//               Browse Insights →
//             </a>
//           </div>
//           <div className="md:w-[75%] p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <img src={news1} alt="News 1" className="rounded-md mb-2" />
//               <h5 className="font-semibold text-gray-800 text-sm">
//                 Turner/Bryne/Straight Line JV Reaches Milestone on $550 Million
//                 University Health Palo Alto Hospital
//               </h5>
//             </div>
//             <div>
//               <img src={news2} alt="News 2" className="rounded-md mb-2" />
//               <h5 className="font-semibold text-gray-800 text-sm">
//                 Dornan Recognized as One of Ireland’s Best Employers
//               </h5>
//             </div>
//             <div>
//               <img src={news3} alt="News 3" className="rounded-md mb-2" />
//               <h5 className="font-semibold text-gray-800 text-sm">
//                 Buffalo and Erie County Botanical Gardens’ $31 Million Expansion
//                 Breaks Ground
//               </h5>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (index === 4) {
//       return (
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-[25%] bg-[rgb(195,155,70)] text-white p-6">
//             <h4 className="text-lg font-semibold mb-2">Careers</h4>
//             <p className="text-sm leading-relaxed">
//               An awarding and fulfilling career awaits you at Turner! Join our
//               team and build some of the most exciting and innovative projects
//               around the world.
//             </p>
//             <a
//               href="/careers"
//               className="text-sm font-semibold underline mt-2 inline-block"
//             >
//               Explore Careers at Turner →
//             </a>
//           </div>
//           <div className="md:w-[35%] p-6 md:border-r border-gray-200">
//             <h4 className="text-gray-800 font-semibold mb-2">Join The Team</h4>
//             <ul className="space-y-1 text-sm text-gray-600">
//               <li>
//                 <a href="#" className="hover:text-blue-700">
//                   Life At Turner
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-700">
//                   Turner Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-700">
//                   Students & Entry Level
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-700">
//                   Experienced Professionals
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-700">
//                   Labor & Skilled Trade
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-700">
//                   Military Professionals
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="md:w-[40%] p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <img
//                 src={career1}
//                 alt="Career Start"
//                 className="rounded-md mb-2"
//               />
//               <h5 className="font-semibold text-gray-800 text-sm">
//                 Your Career Starts Here
//               </h5>
//             </div>
//             <div>
//               <img
//                 src={career2}
//                 alt="Next Level"
//                 className="rounded-md mb-2"
//               />
//               <h5 className="font-semibold text-gray-800 text-sm">
//                 Your Next Level Awaits
//               </h5>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return null;
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-md border-b border-gray-200">
//       <nav className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
//         {/* Logo + Divider */}
//         <div className="flex items-center space-x-4">
//           <a
//             href="/"
//             className="text-3xl font-extrabold tracking-tight text-black"
//           >
//             Turner
//           </a>
//           <div className="h-6 w-px bg-gray-400"></div>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 text-black text-sm font-semibold relative">
//           {navItems.map((item, index) => (
//             <li key={index} className="relative py-2 group">
//               {index === 0 || index === 1 || index === 3 || index === 4 ? (
//                 <div
//                   className="relative"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="relative inline-block">
//                     <a
//                       href={item.href}
//                       className="transition-colors duration-300 hover:text-black"
//                     >
//                       {item.label}
//                     </a>
//                     <span className="absolute left-0 -bottom-[2px] h-[3px] w-0 bg-[rgb(195,155,70)] transition-all duration-300 group-hover:w-full"></span>
//                   </div>

//                   {/* Desktop Dropdown */}
//                   <div
//                     className={`absolute top-full mt-2 w-[1100px] bg-white shadow-xl border-t border-gray-200 z-50 transition-all duration-300 left-1/2 ${
//                       openDropdown === index
//                         ? "opacity-100 translate-y-0 visible"
//                         : "opacity-0 -translate-y-4 invisible pointer-events-none"
//                     } ${
//                       index === 3
//                         ? "translate-x-[-65%]"
//                         : index === 4
//                         ? "translate-x-[-75%]"
//                         : "translate-x-[-45%]"
//                     }`}
//                   >
//                     {renderDropdownContent(index)}
//                   </div>
//                 </div>
//               ) : (
//                 <a
//                   href={item.href}
//                   className="transition-colors duration-300 hover:text-black"
//                 >
//                   {item.label}
//                   <span className="absolute left-0 -bottom-[2px] h-[3px] w-0 bg-[rgb(195,155,70)] transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-black text-2xl"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? "✖" : "☰"}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-4 space-y-2">
//           {navItems.map((item, index) => (
//             <div key={index} className="border-b border-gray-100 pb-2">
//               {index === 0 || index === 1 || index === 3 || index === 4 ? (
//                 <>
//                   <button
//                     onClick={() =>
//                       setMobileDropdown(
//                         mobileDropdown === index ? null : index
//                       )
//                     }
//                     className="flex justify-between items-center w-full text-left font-semibold text-gray-800 py-2"
//                   >
//                     {item.label}
//                     <span>{mobileDropdown === index ? "−" : "+"}</span>
//                   </button>
//                   {mobileDropdown === index && (
//                     <div className="pl-4 pt-2 text-sm text-gray-700">
//                       {renderDropdownContent(index)}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <a
//                   href={item.href}
//                   className="block font-semibold text-gray-800 py-2"
//                 >
//                   {item.label}
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }
















import React, { useState, useRef } from "react";
import Company from "../Assets/company.jpg";
import Service from "../Assets/service.jpg";
import news1 from "../Assets/news1.jpg";
import news2 from "../Assets/news2.jpg";
import news3 from "../Assets/news3.jpg";
import career1 from "../Assets/career1.jpg";
import career2 from "../Assets/career2.jpg";

const navItems = [
  { label: "Our Company", href: "/our-company" },
  { label: "Our Services", href: "/services" },
  { label: "Our Projects", href: "/team" },
  { label: "News & Insights", href: "/news-and-insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Become a Subcontractor", href: "/gallery" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const renderDropdownContent = (index) => {
    if (index === 0) {
      return (
        <div className="flex flex-col md:flex-row p-0 min-h-[100%] mt-4 md:mt-6">
          <div className="md:w-1/5 bg-[rgb(195,155,70)] text-white p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-bold mb-2">About Us</h4>
              <p className="mb-4 text-sm text-gray-100">
                Turner is a North America-based, international construction
                services company and a leader in diverse markets.
              </p>
            </div>

            <a
              href="/our-company"
              className="text-sm font-semibold hover:underline flex items-center text-white mt-4"
            >
              GET TO KNOW US <span className="ml-1">→</span>
            </a>
          </div>

          <div className="px-6 border-gray-200 md:border-r">
            <h4 className="font-semibold text-gray-800 mb-2">Who We Are</h4>

            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                <a href="/our-company" className="hover:text-blue-700">
                  About Us
                </a>
              </li>

              <li>
                <a href="/leadership" className="hover:text-blue-700">
                  Our Leadership
                </a>
              </li>

              <li>
                <a href="/sectors" className="hover:text-blue-700">
                  Market Sectors
                </a>
              </li>

              <li>
                <a href="/foundation" className="hover:text-blue-700">
                  Turner Foundation
                </a>
              </li>

              <li>
                <a href="/international" className="hover:text-blue-700">
                  Turner International
                </a>
              </li>

              <li>
                <a href="/affiliates" className="hover:text-blue-700">
                  Affiliates
                </a>
              </li>

              <li>
                <a href="/locations" className="hover:text-blue-700">
                  Locations
                </a>
              </li>

              <li>
                <a href="/city" className="hover:text-blue-700">
                  Turner City
                </a>
              </li>
            </ul>
          </div>

          <div className="px-6 border-gray-200 md:border-r">
            <h4 className="font-semibold text-gray-800 mb-2">
              Our Culture
            </h4>

            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                <a href="/esg" className="hover:text-blue-700">
                  Our ESG Strategy
                </a>
              </li>

              <li>
                <a href="/community" className="hover:text-blue-700">
                  Community & Citizenship
                </a>
              </li>

              <li>
                <a href="/dei" className="hover:text-blue-700">
                  Diversity, Equity, Inclusion
                </a>
              </li>

              <li>
                <a href="/sustainability" className="hover:text-blue-700">
                  Sustainability
                </a>
              </li>

              <li>
                <a href="/ethics" className="hover:text-blue-700">
                  Ethics & Compliance
                </a>
              </li>

              <li>
                <a href="/innovation" className="hover:text-blue-700">
                  Innovation
                </a>
              </li>

              <li>
                <a href="/safety" className="hover:text-blue-700">
                  Safety & Wellness
                </a>
              </li>
            </ul>
          </div>

          <div className="px-6 border-gray-200 md:border-r">
            <h4 className="font-semibold text-gray-800 mb-2">
              Resources
            </h4>

            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                <a href="/inquiries" className="hover:text-blue-700">
                  General Inquiries
                </a>
              </li>

              <li>
                <a href="/cost-index" className="hover:text-blue-700">
                  Cost Index
                </a>
              </li>

              <li>
                <a href="/university" className="hover:text-blue-700">
                  Turner University
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/5 pl-6 mt-4 md:mt-0">
            <h4 className="font-semibold text-gray-800 mb-2">
              Become a Subcontractor
            </h4>

            <img
              src={Company}
              alt="Subcontractors"
              className="rounded-md mb-2"
            />

            <a
              href="/become-a-subcontractor"
              className="text-sm text-blue-700 font-semibold hover:underline"
            >
              Learn How
            </a>
          </div>
        </div>
      );
    }

    if (index === 1) {
      return (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[22%] bg-[rgb(195,155,70)] text-white p-6">
            <h4 className="text-lg font-semibold mb-2">
              Our Services
            </h4>

            <p className="text-sm leading-relaxed">
              Our people bring their technical knowledge, experience, and
              resourcefulness to the delivery of our construction services.
            </p>
          </div>

          <div className="md:w-[53%] grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:border-x border-gray-200">
            <div>
              <h4 className="text-gray-800 font-semibold mb-2">
                Approach
              </h4>

              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <a href="/services/preconstruction" className="hover:text-blue-700">
                    Preconstruction
                  </a>
                </li>

                <li>
                  <a href="/services/construction-management" className="hover:text-blue-700">
                    Construction Management
                  </a>
                </li>

                <li>
                  <a href="/services/project-management" className="hover:text-blue-700">
                    Project Management
                  </a>
                </li>

                <li>
                  <a href="/services/lean-construction" className="hover:text-blue-700">
                    Lean Construction
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-800 font-semibold mb-2">
                Expertise
              </h4>

              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <a href="/services/accelerated-payment" className="hover:text-blue-700">
                    Accelerated Payment Program
                  </a>
                </li>

                <li>
                  <a href="/services/fabrication-shop" className="hover:text-blue-700">
                    Fabrication Shop
                  </a>
                </li>

                <li>
                  <a href="/services/insurance-surety" className="hover:text-blue-700">
                    Insurance & Surety
                  </a>
                </li>

                <li>
                  <a href="/services/offsite-manufacturing" className="hover:text-blue-700">
                    Offsite Manufacturing
                  </a>
                </li>

                <li>
                  <a href="/services/risk-management" className="hover:text-blue-700">
                    Risk Management
                  </a>
                </li>

                <li>
                  <a href="/services/self-perform" className="hover:text-blue-700">
                    Self-Perform Operations
                  </a>
                </li>

                <li>
                  <a href="/services/supply-chain" className="hover:text-blue-700">
                    Supply Chain Management
                  </a>
                </li>

                <li>
                  <a href="/services/engineering" className="hover:text-blue-700">
                    Turner Engineering Group
                  </a>
                </li>

                <li>
                  <a href="/services/technical-services" className="hover:text-blue-700">
                    Turner Technical Services
                  </a>
                </li>

                <li>
                  <a href="/services/virtual-design" className="hover:text-blue-700">
                    Virtual Design & Construction
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-[25%] p-6">
            <h4 className="text-gray-800 font-semibold mb-2">
              Our Markets
            </h4>

            <img
              src={Service}
              alt="Our Markets"
              className="rounded-md mb-2"
            />

            <a
              href="/services"
              className="text-sm text-blue-700 font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      );
    }

    if (index === 3) {
      return (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[25%] bg-[rgb(195,155,70)] text-white p-6">
            <h4 className="text-lg font-semibold mb-2">
              News & Insights
            </h4>

            <p className="text-sm leading-relaxed">
              Stay up to date with the latest news and insights from Turner.
              Learn from our industry experts sharing innovation, market
              insight, and thought leadership.
            </p>

            <a
              href="/news-and-insights"
              className="text-sm font-semibold underline mt-2 inline-block"
            >
              Browse Insights →
            </a>
          </div>

          <div className="md:w-[75%] p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <img
                src={news1}
                alt="News 1"
                className="rounded-md mb-2"
              />

              <h5 className="font-semibold text-gray-800 text-sm">
                Turner/Bryne/Straight Line JV Reaches Milestone on $550 Million
                University Health Palo Alto Hospital
              </h5>
            </div>

            <div>
              <img
                src={news2}
                alt="News 2"
                className="rounded-md mb-2"
              />

              <h5 className="font-semibold text-gray-800 text-sm">
                Dornan Recognized as One of Ireland’s Best Employers
              </h5>
            </div>

            <div>
              <img
                src={news3}
                alt="News 3"
                className="rounded-md mb-2"
              />

              <h5 className="font-semibold text-gray-800 text-sm">
                Buffalo and Erie County Botanical Gardens’ $31 Million
                Expansion Breaks Ground
              </h5>
            </div>
          </div>
        </div>
      );
    }

    if (index === 4) {
      return (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[25%] bg-[rgb(195,155,70)] text-white p-6">
            <h4 className="text-lg font-semibold mb-2">
              Careers
            </h4>

            <p className="text-sm leading-relaxed">
              An awarding and fulfilling career awaits you at Turner! Join our
              team and build some of the most exciting and innovative projects
              around the world.
            </p>

            <a
              href="/careers"
              className="text-sm font-semibold underline mt-2 inline-block"
            >
              Explore Careers at Turner →
            </a>
          </div>

          <div className="md:w-[35%] p-6 md:border-r border-gray-200">
            <h4 className="text-gray-800 font-semibold mb-2">
              Join The Team
            </h4>

            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <a href="/careers/life-at-turner" className="hover:text-blue-700">
                  Life At Turner
                </a>
              </li>

              <li>
                <a href="/careers" className="hover:text-blue-700">
                  Turner Careers
                </a>
              </li>

              <li>
                <a href="/careers/students" className="hover:text-blue-700">
                  Students & Entry Level
                </a>
              </li>

              <li>
                <a href="/careers/experienced-professionals" className="hover:text-blue-700">
                  Experienced Professionals
                </a>
              </li>

              <li>
                <a href="/careers/labor-skilled-trade" className="hover:text-blue-700">
                  Labor & Skilled Trade
                </a>
              </li>

              <li>
                <a href="/careers/military-professionals" className="hover:text-blue-700">
                  Military Professionals
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-[40%] p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src={career1}
                alt="Career Start"
                className="rounded-md mb-2"
              />

              <h5 className="font-semibold text-gray-800 text-sm">
                Your Career Starts Here
              </h5>
            </div>

            <div>
              <img
                src={career2}
                alt="Next Level"
                className="rounded-md mb-2"
              />

              <h5 className="font-semibold text-gray-800 text-sm">
                Your Next Level Awaits
              </h5>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-md border-b border-gray-200">
      <nav className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo + Divider */}
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="text-3xl font-extrabold tracking-tight text-black"
          >
            Turner
          </a>

          <div className="h-6 w-px bg-gray-400"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-black text-sm font-semibold relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative py-2 group"
            >
              {index === 0 ||
              index === 1 ||
              index === 3 ||
              index === 4 ? (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative inline-block">
                    <a
                      href={item.href}
                      className="transition-colors duration-300 hover:text-black"
                    >
                      {item.label}
                    </a>

                    <span className="absolute left-0 -bottom-[2px] h-[3px] w-0 bg-[rgb(195,155,70)] transition-all duration-300 group-hover:w-full"></span>
                  </div>

                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute top-full mt-2 w-[1100px] bg-white shadow-xl border-t border-gray-200 z-50 transition-all duration-300 left-1/2 ${
                      openDropdown === index
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-4 invisible pointer-events-none"
                    } ${
                      index === 3
                        ? "translate-x-[-65%]"
                        : index === 4
                        ? "translate-x-[-75%]"
                        : "translate-x-[-45%]"
                    }`}
                  >
                    {renderDropdownContent(index)}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="transition-colors duration-300 hover:text-black"
                >
                  {item.label}

                  <span className="absolute left-0 -bottom-[2px] h-[3px] w-0 bg-[rgb(195,155,70)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-4 space-y-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-100 pb-2"
            >
              {index === 0 ||
              index === 1 ||
              index === 3 ||
              index === 4 ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === index ? null : index
                      )
                    }
                    className="flex justify-between items-center w-full text-left font-semibold text-gray-800 py-2"
                  >
                    {item.label}

                    <span>
                      {mobileDropdown === index ? "−" : "+"}
                    </span>
                  </button>

                  {mobileDropdown === index && (
                    <div className="pl-4 pt-2 text-sm text-gray-700">
                      {renderDropdownContent(index)}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="block font-semibold text-gray-800 py-2"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
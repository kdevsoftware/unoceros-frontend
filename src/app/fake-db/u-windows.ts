const _ITEM_LIST = "item-list";
const _BLOG_LIST = "blog-list";
const _BACKGROUND_LIST = "background-list";
const _HTML = "html";

export const uWindows = [
  // level-1
  {
    id: "about-unoceros",
    title: "About Unoceros",
    mobile_title: "About Unoceros",
    type: _ITEM_LIST,
    items: []
  },
  {
    id: "blogs",
    title: "Blogs",
    mobile_title: "Blogs",
    type: _BLOG_LIST,
    items: [
      {
        id: "the-coming-regulatory-tidal-wave",
        image: "assets/image/banners/blog01.jpg",
        title: "The Comning Regulatory Tidal Wave.txt",
        message: "the-coming-regulatory-tidal-wave"
      },
      {
        id: "a-new-worker-economy-where-you-dont-have-to-work",
        image: "assets/image/banners/blog02.jpg",
        title: 'A New "Worker" Economy Where You Don\'t Have to Work.txt',
        message: "a-new-worker-economy-where-you-dont-have-to-work"
      },
      {
        id: "when-the-user-becomes-the-product",
        image: "assets/image/banners/blog03.jpg",
        title: "When the user becomes the product.txt",
        message: "when-the-user-becomes-the-product"
      },
      {
        id: "unoceros-guiding-principles",
        image: "assets/image/banners/blog04.jpg",
        title: "Unoceros Guiding Principles.txt",
        message: "unoceros-guiding-principles"
      }
    ]
  },
  {
    id: "company",
    title: "Company",
    mobile_title: "Company",
    type: _ITEM_LIST,
    items: [
      {
        id: "about",
        icon: "assets/image/icons/file.svg",
        title: "About",
        message: "about"
      },
      {
        id: "principles",
        icon: "assets/image/icons/file.svg",
        title: "Priciples",
        message: "principles"
      }
    ]
  },
  {
    id: "projects",
    title: "Projects",
    mobile_title: "Projects",
    type: _ITEM_LIST,
    items: [
      {
        id: "concepts",
        icon: "assets/image/icons/file.svg",
        title: "Concepts",
        message: "concepts"
      }
    ]
  },
  {
    id: "products",
    title: "Products",
    mobile_title: "Products",
    type: _ITEM_LIST,
    items: [
      {
        id: "trust-technologies",
        icon: "assets/image/icons/file.svg",
        title: "Trust Technologies",
        message: "trust-technologies"
      }
    ]
  },
  {
    id: "legal",
    title: "Legal",
    mobile_title: "Legal",
    type: _ITEM_LIST,
    items: [
      {
        id: "about",
        icon: "assets/image/icons/file.svg",
        title: "About",
        message: "about"
      },
      {
        id: "principles",
        icon: "assets/image/icons/file.svg",
        title: "Priciples",
        message: "principles"
      }
    ]
  },
  {
    id: "background-setting",
    title: "Change Background",
    mobile_title: "Change Background",
    type: _BACKGROUND_LIST,
    backgrounds: [
      {
        id: "blue-print",
        background: `linear-gradient(0deg, transparent 50%, rgba(255, 255, 255, .2) 51%, rgba(255, 255, 255, .09) 55%, transparent 56%, transparent) top left / 35px 35px repeat, linear-gradient( 90deg, transparent 50%, rgba(255, 255, 255, .2) 51%, rgba(255, 255, 255, .09) 55%, transparent 56%, transparent) top left / 35px 35px repeat, #0592FF`,
        title: "Blue Print"
      },
      {
        id: "shamrock-shake",
        background: "#37CFB1",
        title: "Shamrock Shake"
      },
      {
        id: "pikachu",
        background: "#FFC900",
        title: "Pikachu"
      },
      {
        id: "salmon",
        background: "#FF8A6A",
        title: "Salmon"
      },
      {
        id: "royalty",
        background: "#8F5CD0",
        title: "Royalty"
      },
      {
        id: "pink-panther",
        background: "#F589C3",
        title: "Pink Panther"
      },
      {
        id: "invisible",
        background: "url(assets/image/banners/bg02.jpg) center / cover",
        title: "Invisible"
      },
      {
        id: "dog-vision",
        background: "#E4E4E4",
        title: "Dog Vision"
      },
      {
        id: "blank-canvas",
        background: "transparent",
        title: "Blank Canvas"
      }
    ]
  },
  {
    id: "trash",
    title: "Trash",
    mobile_title: "Trash",
    type: _ITEM_LIST,
    items: []
  },

  // level-2
  // blogs
  {
    id: "the-coming-regulatory-tidal-wave",
    title: "The Comning Regulatory Tidal Wave",
    mobile_title: "Blogs",
    type: _HTML,
    content: `
            <div class="content-frame">
                <div class="content-container">
                    <div class="document-container">
                        <img class="banner" src="assets/image/banners/blog01.jpg">
                        <h3 class="title">The Coming Regulatory Tidal Wave</h3>
                        <p>The writing is on the wall. With the recent passage of the GDPR by the EU (addressed in another article), regulation around the collection, usage, and value of personal data is clearly here and it’s only just beginning. Let’s take a close look at a recent piece of legislation that is guaranteed to have a lasting impact on how the regulatory landscape develops in the United States.</p>
                        <p>The state of California recently passed the <a href="#">California Consumer Privacy Act of 2018 (CCPA). The CCPA</a>, largely understood to be a political response to the rash of high profile data breaches in the years preceding, grants new rights to consumers with respect to their personal information. This law, which will go into effect in 2020, imposes serious responsibilities and liabilities on businesses who engage in commercial activities with residents of California.</p>      
                        <p>Under the CCPA, consumers gain the rights to (1) know when and what personal information is collected by businesses and for what purposes as well as the categories of any third party with which the information is shared, (2) request copies of all personal information that a business retains about the consumer, (3) deletion of any personal information retained by the business upon request of the consumer, (4) opt out of their personal information being sold to third parties by the business. To comply with this opt out requirement, businesses must add a “clear and conspicuous” link on their homepage titled “Do Not Sell My Personal Information,” and to (5) equal service and price. This final right means that businesses cannot provide a lesser service or charge a higher price for the same level of service if a consumer refuses to provide personal information.</p>      
                        <p>To make it perfectly clear how onerous this is for companies, “collecting” is defined under the law as “buying, renting, gathering, obtaining, receiving, or accessing any personal information pertaining to a consumer by any means. This includes receiving information from the consumer, either actively or passively, or by observing the consumer’s behavior.</p>      
                        <p class="sub-title">Repercussions for violations:<p>      
                        <p><span class="sub-title">State Action:</span> The California Attorney General may levy, after a 30-day grace period for company remedy/cure, fines of up to $2500 per violation for companies who negligently violate the CCPA and fines of up to $7500 per violation for companies who intentionally violate the CCPA.</p>      
                        <p><span class="sub-title">Private Action:</span> Private parties can also bring suit if companies fail to implement reasonable security measures to protect personal information that they retain (this refers to data breaches). Consumers may seek restitution from the Business in violation of this act with a minimum of one hundred dollars ($100) and a maximum of seven hundred and fifty dollars ($750) per violation.</p>      
                    </div>
                </div>
            </div>
        `
  },
  {
    id: "a-new-worker-economy-where-you-dont-have-to-work",
    title: 'A New "Worker" Economy Where You Don\'t Have to Work',
    mobile_title: "Blogs",
    type: _HTML,
    content: `
            <div class="content-frame">
                <div class="content-container">
                    <div class="document-container">
                        <img class="banner" src="assets/image/banners/blog02.jpg">
                        <h3 class="title">A New Worker Economy Where You Don't Have to Work</h3>
                        <p>The writing is on the wall. With the recent passage of the GDPR by the EU (addressed in another article), regulation around the collection, usage, and value of personal data is clearly here and it’s only just beginning. Let’s take a close look at a recent piece of legislation that is guaranteed to have a lasting impact on how the regulatory landscape develops in the United States.</p>
                        <p>The state of California recently passed the <a href="#">California Consumer Privacy Act of 2018 (CCPA). The CCPA</a>, largely understood to be a political response to the rash of high profile data breaches in the years preceding, grants new rights to consumers with respect to their personal information. This law, which will go into effect in 2020, imposes serious responsibilities and liabilities on businesses who engage in commercial activities with residents of California.</p>      
                        <p>Under the CCPA, consumers gain the rights to (1) know when and what personal information is collected by businesses and for what purposes as well as the categories of any third party with which the information is shared, (2) request copies of all personal information that a business retains about the consumer, (3) deletion of any personal information retained by the business upon request of the consumer, (4) opt out of their personal information being sold to third parties by the business. To comply with this opt out requirement, businesses must add a “clear and conspicuous” link on their homepage titled “Do Not Sell My Personal Information,” and to (5) equal service and price. This final right means that businesses cannot provide a lesser service or charge a higher price for the same level of service if a consumer refuses to provide personal information.</p>      
                        <p>To make it perfectly clear how onerous this is for companies, “collecting” is defined under the law as “buying, renting, gathering, obtaining, receiving, or accessing any personal information pertaining to a consumer by any means. This includes receiving information from the consumer, either actively or passively, or by observing the consumer’s behavior.</p>      
                        <p class="sub-title">Repercussions for violations:<p>      
                        <p><span class="sub-title">State Action:</span> The California Attorney General may levy, after a 30-day grace period for company remedy/cure, fines of up to $2500 per violation for companies who negligently violate the CCPA and fines of up to $7500 per violation for companies who intentionally violate the CCPA.</p>      
                        <p><span class="sub-title">Private Action:</span> Private parties can also bring suit if companies fail to implement reasonable security measures to protect personal information that they retain (this refers to data breaches). Consumers may seek restitution from the Business in violation of this act with a minimum of one hundred dollars ($100) and a maximum of seven hundred and fifty dollars ($750) per violation.</p>      
                    </div>
                </div>
            </div>
        `
  },
  {
    id: "when-the-user-becomes-the-product",
    title: "When the user becomes the product",
    mobile_title: "Blogs",
    type: _HTML,
    content: `
            <div class="content-frame">
                <div class="content-container">
                    <div class="document-container">
                        <img class="banner" src="assets/image/banners/blog03.jpg">
                        <h3 class="title">When the use becomes the product</h3>
                        <p>The writing is on the wall. With the recent passage of the GDPR by the EU (addressed in another article), regulation around the collection, usage, and value of personal data is clearly here and it’s only just beginning. Let’s take a close look at a recent piece of legislation that is guaranteed to have a lasting impact on how the regulatory landscape develops in the United States.</p>
                        <p>The state of California recently passed the <a href="#">California Consumer Privacy Act of 2018 (CCPA). The CCPA</a>, largely understood to be a political response to the rash of high profile data breaches in the years preceding, grants new rights to consumers with respect to their personal information. This law, which will go into effect in 2020, imposes serious responsibilities and liabilities on businesses who engage in commercial activities with residents of California.</p>      
                        <p>Under the CCPA, consumers gain the rights to (1) know when and what personal information is collected by businesses and for what purposes as well as the categories of any third party with which the information is shared, (2) request copies of all personal information that a business retains about the consumer, (3) deletion of any personal information retained by the business upon request of the consumer, (4) opt out of their personal information being sold to third parties by the business. To comply with this opt out requirement, businesses must add a “clear and conspicuous” link on their homepage titled “Do Not Sell My Personal Information,” and to (5) equal service and price. This final right means that businesses cannot provide a lesser service or charge a higher price for the same level of service if a consumer refuses to provide personal information.</p>      
                        <p>To make it perfectly clear how onerous this is for companies, “collecting” is defined under the law as “buying, renting, gathering, obtaining, receiving, or accessing any personal information pertaining to a consumer by any means. This includes receiving information from the consumer, either actively or passively, or by observing the consumer’s behavior.</p>      
                        <p class="sub-title">Repercussions for violations:<p>      
                        <p><span class="sub-title">State Action:</span> The California Attorney General may levy, after a 30-day grace period for company remedy/cure, fines of up to $2500 per violation for companies who negligently violate the CCPA and fines of up to $7500 per violation for companies who intentionally violate the CCPA.</p>      
                        <p><span class="sub-title">Private Action:</span> Private parties can also bring suit if companies fail to implement reasonable security measures to protect personal information that they retain (this refers to data breaches). Consumers may seek restitution from the Business in violation of this act with a minimum of one hundred dollars ($100) and a maximum of seven hundred and fifty dollars ($750) per violation.</p>      
                    </div>
                </div>
            </div>
        `
  },
  {
    id: "unoceros-guiding-principles",
    title: "Unoceros Guiding Principles",
    mobile_title: "Blogs",
    type: _HTML,
    content: `
            <div class="content-frame">
                <div class="content-container">
                    <div class="document-container">
                        <img class="banner" src="assets/image/banners/blog04.jpg">
                        <h3 class="title">Unoceros Guiding Principles</h3>
                        <p>The writing is on the wall. With the recent passage of the GDPR by the EU (addressed in another article), regulation around the collection, usage, and value of personal data is clearly here and it’s only just beginning. Let’s take a close look at a recent piece of legislation that is guaranteed to have a lasting impact on how the regulatory landscape develops in the United States.</p>
                        <p>The state of California recently passed the <a href="#">California Consumer Privacy Act of 2018 (CCPA). The CCPA</a>, largely understood to be a political response to the rash of high profile data breaches in the years preceding, grants new rights to consumers with respect to their personal information. This law, which will go into effect in 2020, imposes serious responsibilities and liabilities on businesses who engage in commercial activities with residents of California.</p>      
                        <p>Under the CCPA, consumers gain the rights to (1) know when and what personal information is collected by businesses and for what purposes as well as the categories of any third party with which the information is shared, (2) request copies of all personal information that a business retains about the consumer, (3) deletion of any personal information retained by the business upon request of the consumer, (4) opt out of their personal information being sold to third parties by the business. To comply with this opt out requirement, businesses must add a “clear and conspicuous” link on their homepage titled “Do Not Sell My Personal Information,” and to (5) equal service and price. This final right means that businesses cannot provide a lesser service or charge a higher price for the same level of service if a consumer refuses to provide personal information.</p>      
                        <p>To make it perfectly clear how onerous this is for companies, “collecting” is defined under the law as “buying, renting, gathering, obtaining, receiving, or accessing any personal information pertaining to a consumer by any means. This includes receiving information from the consumer, either actively or passively, or by observing the consumer’s behavior.</p>      
                        <p class="sub-title">Repercussions for violations:<p>      
                        <p><span class="sub-title">State Action:</span> The California Attorney General may levy, after a 30-day grace period for company remedy/cure, fines of up to $2500 per violation for companies who negligently violate the CCPA and fines of up to $7500 per violation for companies who intentionally violate the CCPA.</p>      
                        <p><span class="sub-title">Private Action:</span> Private parties can also bring suit if companies fail to implement reasonable security measures to protect personal information that they retain (this refers to data breaches). Consumers may seek restitution from the Business in violation of this act with a minimum of one hundred dollars ($100) and a maximum of seven hundred and fifty dollars ($750) per violation.</p>      
                    </div>
                </div>
            </div>
        `
  },

  // company
  {
    id: "about",
    title: "About Unoceros",
    mobile_title: "About Unoceros",
    type: _HTML,
    content: `
            <div class="content-frame">
                <div class="content-container">
                    <div class="document-container">
                        <h3 class="title">About Unoceros</h3>
                        <p>Unoceros has been building innovative technology since 2014.</p>
                        <p>Our team, like much of our technology, is distributed. Hailing from the United States, Canada, Brazil, Uruguay, and China, our people are as diverse as our ideas. Our diversity similarly informs our conviction that the benefits of our technology can be and should be for everyone.</p>
                        <p>As an engineering-focused business our aim is to make life easier for fellow developers. At the same time, our user-centric approach ensures that our products don’t benefit one party at the expense of the other.</p>
                    </div>
                </div>
            </div>
        `
  },
  {
    id: "principles",
    title: "Principles",
    mobile_title: "Principles",
    type: _HTML,
    content: `
            <div class="content-frame">
                <div class="content-container">
                    <div class="document-container">
                        <h3 class="title">Unoceros Principles</h3>
                        <p>Unoceros builds technology from the users perspective. Whether we’re developers, business owners, or customers we are all users of technology. Recognizing that, we build tools for developers that rebalance the ownership of personal data between user and company. This rebalancing creates value for both parties. For companies, holding personal data has become a costly liability and an anchor on growth. By granting users full custodianship over their personal information they gain both the market value of their data and the choice of where/when to share it. Our tools ensure that when they choose to share it with you, they grant explicit permission for your purposes eliminating any potential liabilities associated with the processing of that data.</p>
                        <p>As a user-centric team, our goals, principles, and philosophies are developed and articulated from a user’s perspective:</p>
                        <p>I have the right to own my security, privacy, and trust in a digital world. If any part of me, my hardware, or my information are being valued, then I have a right to understand, control, and gain from that value</p>
                    </div>
                </div>
            </div>
        `
  },

  // projects
  {
    id: "concepts",
    title: "Concepts",
    mobile_title: "Concepts",
    type: _HTML,
    content: `
            <div class="content-frame">
                <div class="content-container">
                    <div class="document-container">
                        <h3 class="title">Unoceros Concepts</h3>
                        <p>Unoceros builds technology from the users perspective. Whether we’re developers, business owners, or customers we are all users of technology. Recognizing that, we build tools for developers that rebalance the ownership of personal data between user and company. This rebalancing creates value for both parties. For companies, holding personal data has become a costly liability and an anchor on growth. By granting users full custodianship over their personal information they gain both the market value of their data and the choice of where/when to share it. Our tools ensure that when they choose to share it with you, they grant explicit permission for your purposes eliminating any potential liabilities associated with the processing of that data.</p>
                        <p>As a user-centric team, our goals, principles, and philosophies are developed and articulated from a user’s perspective:</p>
                        <p>I have the right to own my security, privacy, and trust in a digital world. If any part of me, my hardware, or my information are being valued, then I have a right to understand, control, and gain from that value</p>
                    </div>
                </div>
            </div>
        `
  },

  // products
  {
    id: "trust-technologies",
    title: "Trust Technologies",
    mobile_title: "Trust Technologies",
    type: _HTML,
    content: `
            <div class="content-frame">
                <div class="content-container">
                    <div class="document-container">
                        <h3 class="title">Make your Job Easier by Implementing Trust Technologies</h3>
                        <p>Simplify user account management, reduce data liability, and load test for network stability with our suite of developer tools.</p>
                        <p>Trust TechnologiesTM reduce the liabilities and costs associated with handling personal information. By giving users greater control over what information is shared by their devices, companies protect themselves from data breaches and are better prepared for onerous data privacy regulations. Simultaneously, they can engage with customers on a more personal basis by making the digital exchange of information explicitly permissible.</p>
                        <p>ZeroLoginTM (patent pending) enables users to create and access their account without any collection or storage of personal information. Users regulate the collection and storage of their personal information by maintaining account data on their local hardware rather than a business’s servers.</p>
                        <p>ZeroLogin does away with the friction that current OAuth login solutions create for your users, while eliminating the legal liability of securing and maintaining user data.</p>
                        <p>Our DataPayment™ (patent pending) software enables businesses to purchase user data directly from the source. Users benefit by earning the market-value of their information, while businesses benefit by eliminating the rising costs of data breach liability and bypassing increasingly onerous government regulation. By purchasing the data, the business effectively owns the data.</p>
                        <p>Once integrated, our DataPaymentTM feature, is presented as a simple one-click button on the user’s login or signup screen.</p>
                    </div>
                </div>
            </div>
        `
  }
];

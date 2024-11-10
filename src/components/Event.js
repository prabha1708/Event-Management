import React, { useState } from "react";
import "./App1.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const showPage = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Evento</h1>
          <p>Where your dreams become grand celebrations</p>
        </div>
      </header>

      {/* Navigation */}
      <nav>
        <ul>
          <li><button onClick={() => showPage("home")}>Home</button></li>
          <li><button onClick={() => showPage("services")}>Services</button></li>
          <li><button onClick={() => showPage("gallery")}>Gallery</button></li>
          <li><button onClick={() => showPage("packages")}>Packages</button></li>
          <li><button onClick={() => showPage("events")}>Events</button></li>
          <li><button onClick={() => showPage("Registration")}>Registration</button></li>
         
        </ul>
      </nav>

      <div id="content">
        {/* Home Section */}
        {activePage === "home" && (
          <section id="home" className="page home-section">
            <div className="intro">
              <h2>Creating Magic in Every Moment</h2>
              <p>From intimate gatherings to grand celebrations, we bring your vision to life with elegance and perfection.</p>
            </div>

            {/* Video Container */}
            <div className="video-container">
              <iframe
                width="1160"
                height="750"
                src="https://www.youtube.com/embed/kebq86BTZFA?autoplay=1&mute=1&loop=1&playlist=kebq86BTZFA"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Introduction Video"
              ></iframe>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activePage === "services" && (
          <section id="services" className="page services-section">
            <h2>Our Expertise</h2>
            <p>Click on a service to explore the options available.</p>
            <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("live-art")}>
                <img
                  src="https://www.brides.com/thmb/8S6uoSorf-35HBnchg0rlkmQLuI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fbcopy-01ab8a451ca24a57adeaf953056e909b.png"
                  alt="Live Art Creation"
                />
                <h3>Live Art Creation</h3>
              </div>
              <div className="gallery-box" onClick={() => showPage("makeover")}>
                <img
                  src="https://www.shutterstock.com/image-photo/beautiful-young-bride-wedding-makeup-600nw-1132446170.jpg"
                  alt="Bride & Groom Makeover"
                />
                <h3>Bride & Groom Makeover</h3>
              </div>
              <div className="gallery-box" onClick={() => showPage("catering")}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfjhxltuP6fiG-8GuxyKGEuUWvVP2a46Lnw&s"
                  alt="Delicious Food Catering"
                />
                <h3>Delicious Food Catering</h3>
              </div>
              <div className="gallery-box" onClick={() => showPage("theme")}>
                <img
                  src="https://i.pinimg.com/originals/3a/c0/3f/3ac03f54f65c9591c160a18ab0d3234f.jpg"
                  alt="Theme Selection"
                />
                <h3>Theme Selection</h3>
              </div>
              <div className="gallery-box" onClick={() => showPage("photo")}>
                <img
                  src="https://i.pinimg.com/236x/ea/ae/6c/eaae6c804e04c616731f9685b7ce23db.jpg"
                  alt="Photography"
                />
                <h3>Photography</h3>
              </div>
            </div>
          </section>
        )}
        {/* live-art Section */}
        {activePage === "live-art" && (
          <section id="live-art" className="page Live-art-section">
            <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("live-art")}>
              <h3>Live Painting</h3>
                <img
                  src="https://www.brides.com/thmb/8S6uoSorf-35HBnchg0rlkmQLuI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fbcopy-01ab8a451ca24a57adeaf953056e909b.png"
                  alt="Live Art Creation"
                />
                <p>Experience the magic of live painting at your event, capturing moments in real-time.</p>
              </div>
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("live-art")}>
              <h3>Live Photos</h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCMWhO9qR_liSL-hFStpyg9hgHPT-Gts3jA&s"
                  alt="Live photos"
                />
                <p>Our photographers will capture every moment as it happens, providing memories to last a lifetime.</p>
              </div>
              
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("live-art")}>
              <h3>Album creation</h3>
                <img
                  src="https://i.pinimg.com/564x/a6/72/e9/a672e9aefb0baac5889eb90c99b191ea.jpg"
                  alt="Live Art Creation"
                />
                <p>Receive a beautiful album commemorating the highlights of your event, curated with care.</p>
              </div>
              </div>
          </section>
        )}
        {/* makeover Section */}
        {activePage === "makeover" && (
          <section id="makeover" className="page makeover-section">
            <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("makeover")}>
              <h3>Makeup</h3>
                <img
                  src="https://www.shutterstock.com/image-photo/beautiful-young-bride-wedding-makeup-600nw-1132446170.jpg"
                  alt="Live Art Creation"
                />
                <p>Our professional makeup artists will enhance your natural beauty with styles ranging from elegant to glam.</p>
              </div>
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("makeover")}>
              <h3>Hair style</h3>
                <img
                  src="https://i.pinimg.com/736x/df/37/8e/df378e23cf8dc07f24a9cb102655ead6.jpg"
                  alt="Live photos"
                />
                <p>Choose from a variety of stunning hairstyles that complement your look on your special day.</p>
              </div>
              
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("makeover")}>
              <h3>Groom makeover</h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGSJtUwVzOrJ3UWzYeom-YjsKZCRy74xhyA&s"
                  alt="Live Art Creation"
                />
                <p>Our personalized grooming packages include haircuts, shaves, and skincare treatments to ensure you look your best.</p>
              </div>
              </div>
          </section>
        )}
       {/* catering Section */}
       
        
        {/* Gallery Section */}
        {activePage === "gallery" && (
          <section id="gallery" className="page">
            <h2>Gallery of Memories</h2>
            <div className="gallery-container">
              <div className="gallery-box">
                <img
                  src="https://wevaphotography.com/wp-content/uploads/2021/12/First-Dance.jpg"
                  alt="Enchanting Receptions"
                />
                <h3>Enchanting Receptions</h3>
              </div>
              <div className="gallery-box">
                <img
                  src="https://img.myloview.com/posters/indian-wedding-ceremony-stage-decoration-with-lighting-and-flower-700-188195727.jpg"
                  alt="Captivating Decor"
                />
                <h3>Captivating Decor</h3>
              </div>
              <div className="gallery-box">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/029/317/657/small_2x/celebration-setting-lively-decorations-make-for-a-spirited-birthday-party-background-ai-generated-photo.jpg"
                  alt="Birthday"
                />
                <h3>Birthday</h3>
              </div>
              <div className="gallery-box">
                <img
                  src="https://cdn.sanity.io/images/ocl5w36p/production/920942a6b84ec3af7236307326fa4b9d6f181b15-952x660.jpg?w=480&fm=webp&dpr=2"
                  alt="Wedding"
                />
                <h3>Wedding</h3>
              </div>
              <div className="gallery-box">
                <img
                  src="https://www.i-eventplanner.com/wp-content/uploads/2015/07/graduate.jpg"
                  alt="Convocation Event"
                />
                <h3>Convocation Event</h3>
              </div>
              <div className="gallery-box">
                <img
                  src="https://mindowl.org/wp-content/uploads/2024/02/leisure-holidays-people-concept-happy-family-having-festive-dinner-summer-garden-party-celebrating-scaled.jpg"
                  alt="Family Gather"
                />
                <h3>Family Gather</h3>
              </div>
            </div>
          </section>
        )}

        {/* Packages Section */}
        {activePage === "packages" && (
          <section id="packages" className="page">
            <h2>Our Exclusive Packages</h2>
            <div className="package-boxes">
              <div className="package-box">
                <h3>Basic Package</h3>
                <span>70K</span>
                <ul>
                  <li>Venue Decoration</li>
                  <li>Delicious Food Catering</li>
                  <li>Basic Photography</li>
                </ul>
                <button className="btn">Book Now</button>
              </div>
              <div className="package-box">
                <h3>Premium Package</h3>
                <span>100K-150K</span>
                <ul>
                  <li>Complete Event Planning</li>
                  <li>Live Art</li>
                  <li>Professional Photography</li>
                </ul>
                <button className="btn">Book Now</button>
              </div>
              <div className="package-box">
                <h3>Diamond Package</h3>
                <span>150K-200K</span>
                <ul>
                  <li>Luxury Venue</li>
                  <li>Makeover</li>
                  <li>Exclusive Photography & Videography</li>
                </ul>
                <button className="btn">Book Now</button>
              </div>
            </div>
          </section>
        )}
        {/* traditional Section */}
        {activePage === "traditional" && (
          <section id="traditional" className="page traditional-section">
            <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("traditional")}>
              <h3>Wedding</h3>
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_400/https://sambhramaa.com/wp-content/uploads/2021/04/Traditional-South-Indian-Wedding-Sanasambhramaa-1-800x400.jpg"
                  alt="Live Art Creation"
                />
                <p>Experience the joy and grandeur of a traditional wedding with beautiful rituals and vibrant celebrations.</p>
              </div>
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("traditional")}>
              <h3>Birthday</h3>
                <img
                  src="https://m.media-amazon.com/images/I/713bvfjRYtL.jpg"
                  alt="Live photos"
                />
              <p>Celebrate your special day with friends and family, complete with fun activities and a memorable cake.</p>
              </div>
              
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("traditional")}>
              <h3>Engagement</h3>
                <img
                  src="https://i.pinimg.com/736x/5d/76/16/5d76169e9ead18ecfd6c0da352f1cdbf.jpg"
                  alt="Live Art Creation"
                />
                <p>Mark the beginning of your love story with an engagement ceremony that reflects your unique style.</p>
              </div>
              </div>
          </section>
        )}
        {/*catering*/}
        {activePage === "catering" && (
          <section id="catering" className="page catering-section">
            <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("catering")}>
              <h3>Snacks</h3>
                <img
                  src="https://i.pinimg.com/236x/9c/89/f4/9c89f45cb6045aa895a70590c92006e3.jpg"
                  alt="snack1"
                />
               <img
                  src="https://i.pinimg.com/236x/d8/61/7e/d8617e9ed9f9c226d2e359da6e8f56e1.jpg"
                  alt="Snack 2"
                  />
                <img
                  src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
                  alt="Snack 3"
                />
                </div>
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("catering")}>
              <h3>Drinks</h3>
               <img
                  src="https://i.pinimg.com/474x/bc/fb/2c/bcfb2c0122a007d25bcaf3068d11b40c.jpg"
                  alt="Drink 1"
                />
                 <img
                  src="https://i.pinimg.com/236x/c9/40/8d/c9408d27d5ff6875cc2972a02333d8e1.jpg"
                  alt="Drink 2"
                />
                 <img
                  src="https://i.pinimg.com/236x/c0/89/5d/c0895d66833cd787c54a6bfc1f859a97.jpg"
                  alt="Drink 3"
                />
               </div>~
              </div>
          <div className="gallery-container">
                  <div className="gallery-box" onClick={() => showPage("catering")}>
                  <h3>Food Section</h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1-9DaZWjZCuy17R4Lw66Iloco6tNp59AtQ&s"
                  alt="Food 1"
                />
              <img
                  src="https://i.pinimg.com/236x/d5/9a/bd/d59abd704a27f12d4aeda7373a90583d.jpg"
                  alt="Food 2"
                />
                 <img
                  src="https://i.pinimg.com/236x/4f/25/4c/4f254c0dc7c7175f5b05990585c9d1bc.jpg"
                  alt="Food 3"
                />
               </div>
              </div>

          </section>
        )}
        {/*photography*/}
        {activePage === "photo" && (
    <section id="photo" className="page photo-section">
      <div className="gallery-container">
        <div className="gallery-box" onClick={() => showPage("photo")}>
        <h3>Pre-wedding Photography</h3>
          <img
            src="https://i.pinimg.com/236x/8d/e4/0a/8de40ae7434b29a723a4ecd28aced199.jpg"
            alt="Photography Creation"
          />
          <p>Capture beautiful moments leading up to your big day with scenic and romantic pre-wedding photography.</p>
        </div>
        </div>
        <div className="gallery-container">
        <div className="gallery-box" onClick={() => showPage("photo")}>
        <h3>Post-wedding Photography</h3>
          <img
            src="https://i.pinimg.com/236x/bc/ae/ee/bcaeeec420afbf3781001317b8c325df.jpg"
            alt="Live photos"
          />
          <p>Celebrate the beginning of your journey with elegant post-wedding photography, capturing timeless memories.</p>
        </div>
        </div>
        <div className="gallery-container">
        <div className="gallery-box" onClick={() => showPage("live-art")}>
        <h3>Album creation</h3>
          <img
            src="https://i.pinimg.com/474x/12/d6/d5/12d6d5d962a491436dbf07ddd4ebd9bf.jpg"
            alt="Live Art Creation"
          />
          <p>Choose from beautifully designed albums to showcase your special moments in a way that tells your story.</p>
        </div>
        </div>
        <div className="gallery-container">
        <div className="gallery-box" onClick={() => showPage("live-art")}>
        <h3>Event Photography</h3>
          <img
            src="https://i.pinimg.com/236x/0d/55/7f/0d557fcef7f082d6f82950d5f6481e27.jpg"
            alt="Live Art Creation"
          />
          <p>From engagements to receptions, capture every event with stunning photography that keeps memories alive.</p>
        </div>
        </div>
    </section>
  )}

        {/* Events Section */}
        {activePage === "events" && (
          <section id="events" className="page">
            <h2>Our Events</h2>
            <p>Explore the different types of events we can help you celebrate.</p>
            <div className="event-container" onClick={() => showPage("traditional")}>Traditional Events</div>
            <div className="event-container" onClick={() => showPage("corporate")}>Corporate Events</div>
            <div className="event-container" onClick={() => showPage("fiesta")}>Fiesta Events</div>
            <div className="event-container" onClick={() => showPage("international")}>International Events</div>
          </section>
        )}
        {/* corporate Section */}
        {activePage === "corporate" && (
          <section id="corporate" className="page corporate-section">
            <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("corporate")}>
              <h3>Annual Meeting</h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnO2u8H7VJiHnA9dUR50wXfryR-zA72JsDw&s"
                  alt="Annual Meeting"
                />
                <p>Gather your team for a productive annual meeting filled with presentations and networking opportunities..</p>
              </div>
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("corporate")}>
              <h3>Product Launch</h3>
                <img
                  src="https://www.bizzabo.com/wp-content/uploads/2018/11/3686-1024x683.jpg"
                  alt="Product Launch"
                />
              <p>Unveil your latest product in a grand launch event that leaves a lasting impression on your audience.</p>
              </div>
              
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("corporate")}>
              <h3>Team Building</h3>
                <img
                  src="https://cdn.prod.website-files.com/5f8b3f92189560cd389cf2b3/63e0f444704454f369c23257_5-Min-Team-Building-Activities.jpg"
                  alt="Team Building"
                />
                <p>Enhance team dynamics with engaging activities and exercises designed for collaboration and bonding.</p>
              </div>
              </div>
          </section>
        )}
         
        {/* international Section */}
        {activePage === "international" && (
          <section id="international" className="page international-section">
            <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("international")}>
              <h3>Global Conference</h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIi__PVkaYjDbG9L6g4w0LJDDmIV4p6EgtYQ&s"
                  alt="Live Art Creation"
                />
                <p>Connect with leaders from around the world at our global conference featuring discussions and networking.</p>
              </div>
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("international")}>
              <h3>Cultural Exchange</h3>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b4/A_cultural_programme%2C_organized_on_the_eve_of_departure_of_500_member_Indian_Youth_Delegation_to_China%2C_in_New_Delhi_on_September_18%2C_2011.jpg"
                  alt="Live photos"
                />
              <p>Experience the beauty of different cultures through interactive exchanges and celebrations.</p>
              </div>
              
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("international")}>
              <h3>International Gala</h3>
                <img
                  src="https://twelvny.com/sites/default/files/field/image/article/ajax/BFA_10709_1298956_0.jpg"
                  alt="Live Art Creation"
                />
      <p>Enjoy a night of elegance and sophistication at our international gala with guests from various countries.</p>
              </div>
              </div>
          </section>
        )}
        {/* fiesta Section */}
        {activePage === "fiesta" && (
          <section id="fiesta" className="page fiesta-section">
            <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("fiesta")}>
              <h3>Holi</h3>
                <img
                  src="https://static.toiimg.com/photo/63039736.cms"
                  alt="Live Art Creation"
                />
                <p>Experience the joy and grandeur of a traditional wedding with beautiful rituals and vibrant celebrations.</p>
              </div>
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("fiesta")}>
              <h3>Birthday</h3>
                <img
                  src="https://blog.empuls.io/content/images/2023/10/284-1.webp"
                  alt="Live photos"
                />
              <p>Light up your life and share in the joy of Diwali with beautiful decorations and festivities.</p>
              </div>
              
              </div>
              <div className="gallery-container">
              <div className="gallery-box" onClick={() => showPage("fiesta")}>
              <h3>Vinayakachavithi</h3>
                <img
                  src="https://images.news18.com/ibnlive/uploads/2022/08/ganesh-chaturthi-2022-rituals-1.jpg"
                  alt="Live Art Creation"
                />
                      <p>Honor Lord Ganesha with a celebration full of devotion, traditions, and delightful rituals.</p>
              </div>
              </div>
          </section>
        )}
        
      </div>
    </div>
    
  );
}

export default App;

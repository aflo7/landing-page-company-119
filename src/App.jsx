
import './App.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoPeopleOutline } from 'react-icons/io5';

function App() {
  return (
    <>
      <div className="outer">
        <nav>
          <div className="top-nav-wrapper">
            <div className="top-nav">
              <FaPhoneAlt color="red" />
              <p>(440) 565-5655</p>
            </div>
          </div>
          <div className="bottom-nav">
            <h1>Company 119</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <GiHamburgerMenu color="red" size="2rem" />
              <FaSearch size="1.2rem" />
            </div>
          </div>
        </nav>
        <div style={{ backgroundColor: 'rgb(237, 234, 230)' }}>
          <div className="top-main">
            <div className="top-main-inner">
              <div className="bottom-nav-desktop">
                <h1>Company 119</h1>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
                >
                  <GiHamburgerMenu
                    color="red"
                    size="2rem"
                    id="giHamburgerMenu"
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '40px'
                    }}
                    className='mock-text-wrapper'
                  >
                    <div>Mock</div>
                    <div>Mock</div>
                    <div>Mock</div>

                    <FaSearch size="1.2rem" />
                  </div>
                </div>
              </div>

              <div className="careers-wrapper">
                <h2>Mock page</h2>
                <p>
                  Come <span className="work-span">work</span> with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bottom-main">
          <IoPeopleOutline className="io-people-outline" size="4rem" />
          <h3>
            Join Our <span className="dynamic-text">Dynamic</span> Team.
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam obcaecati, aliquam incidunt culpa quibusdam? Nostrum nobis natus sint dolore, pariatur reprehenderit autem, porro eius facilis id repudiandae debitis obcaecati.</p>
        </div>
      </div>
    </>
  );
}

export default App;

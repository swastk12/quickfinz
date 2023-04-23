import "./landing.css";
import ImageSlider from "./slideshow";

const Home = () => {
  const slides = [
    {
      url: "images/slide1.jpeg",
      title: "beach",
    },
    {
      url: "images/slide2.jpg",
      title: "boat",
    },
    {
      url: "https://img.freepik.com/free-photo/lifestyle-credit-payment-using-shopping_1150-1702.jpg?w=740&t=st=1681736921~exp=1681737521~hmac=40413460a67bef073ff857e89d9b818c222555e11a273abe07827dd122757395",
      title: "forest",
    },
    {
      url: "https://img.freepik.com/premium-photo/model-house-stack-coins-money-with-umbrella-nature-green-background_106094-592.jpg?w=740",
      title: "city",
    },
    {
      url: "https://img.freepik.com/free-photo/saving-money-car-trade-car-cash_1150-18254.jpg?w=740&t=st=1681736852~exp=1681737452~hmac=7daf399cd7613ddfcf83582088e4a433cd016ece8c8e855b4dfafa4d10c22a88",
      title: "italy",
    },
  ];
  const containerStyles = {
    width: "750px",
    height: "300px",
    margin: "0 auto",
  };

  return (
    <>
      <section>
        <div class="grid-flex">
          <div class="col col-image">
            <div>
              <hr></hr>
              <div className="slide pl-5" style={containerStyles}>
                <ImageSlider slides={slides} parentWidth={750} />
              </div>
            </div>
          </div>
          <div class="col col-image ">
            <div className="ccard mt-3 pl-5 ml-5">
              <img src="images/static.jpg"  alt="funny GIF" width="80%" />
            </div>
          </div>
        </div>
      </section>



      <section>
        <div class="grid-flex">
         <div class="col col-text">
            <div class="banner-texts videobnr ">
              <h1>Apply for personal credit products on QUICKFINZ</h1>
              <p>
                <strong>
                  We make it easy to get the most out of your virtual machine.
                </strong>{" "}
                Our tools make it simple to track how your Droplets are
                performing and help you to respond quickly
              </p>
              <button className="btn">  More</button>
            </div>
          </div>

          <div class="containeer">
  <div class="video">
    <div class="video__frame">
      <iframe src="https://player.vimeo.com/video/39822385" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>
  </div>
        </div>
      </section>





      <section>
       
      </section>

      <div class="container">
        <div class="row">
          <div class="mb-30 col-md-6 col-lg-3">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/cFV8mR/monitoring.png"
                alt="monitoring"
              />
              <h3 class="card-title">Monitoring</h3>
              <p class="card-text">
                Collect metrics on visibility, monitor Droplet{" "}
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-3">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/jfmg6R/cloud_firewalls.png"
                alt="monitoring"
              />
              <h3 class="card-title">Cloud Firewalls</h3>
              <p class="card-text">Perfect for both staging and production </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-3">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/fcnzt6/team_management.png"
                alt="team management"
              />
              <h3 class="card-title">Team Management</h3>
              <p class="card-text">
                With Digital Teams you can invite and manage{" "}
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-3">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/evyiLm/backups.png"
                alt="monitoring"
              />
              <h3 class="card-title">Backups</h3>
              <p class="card-text">
                Backups run automatically on your Droplets{" "}
              </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-3">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/g9bERR/snapshots.png"
                alt="snapshots"
              />
              <h3 class="card-title">Snapshots</h3>
              <p class="card-text">Scale out your system effortlessly. Just </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-3">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/cFV8mR/monitoring.png"
                alt="monitoring"
              />
              <h3 class="card-title">Monitoring</h3>
              <p class="card-text">Collect metrics on visibility, monitor </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-3">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/cFV8mR/monitoring.png"
                alt="monitoring"
              />
              <h3 class="card-title">Monitoring</h3>
              <p class="card-text">Collect metrics on visibility, monitor </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-30 col-md-6 col-lg-3">
            <div class="card">
              <img
                class="card-icon"
                src="https://image.ibb.co/cFV8mR/monitoring.png"
                alt="monitoring"
              />
              <h3 class="card-title">Monitoring</h3>
              <p class="card-text">Collect metrics on visibility, monitor </p>
              <a class="card-link" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div class="grid-flex">
          <div class="col col-image">
            <div className="animation">
              <img src="images/homeloan.png" loop="infinite" width="100%"  />
            </div>
          </div>

          <div class="col col-text">
            <div class="banner-texts bnr">
              <h1>Apply for personal credit products on QUICKFINZ</h1>
              <p>
                <strong>
                  We make it easy to get the most out of your virtual machine.
                </strong>{" "}
                Our tools make it simple to track how your Droplets are
                performing and help you to respond quickly
              </p>
              <button className="btn"> JOIN </button>
            </div>
          </div>
        </div>
      </section>

  



      <section className="bgcolor">

        <div class="grid-flex">
          <div class="col col-text">
            <div class="banner-texts bnrr mt-5 pt-5">
              <h1>
              Apply for personal credit products on QUICKFINZ
              </h1>
              <p>
                <strong>
                  We make it easy to get the most out of your virtual machine.
                </strong>{" "}
                Our tools make it simple to track how your Droplets are
                performing and help you to respond quickly
                Our tools make it simple to track how your Droplets are
                performing and help you to respond quickly
              </p>
              <button className="btn"> MORE </button>
            </div>
          </div>

          <div class="col col-image ">
            <div className="ccard">
              <img src="images/Component.png" alt="funny GIF" width="100%" />
            </div>
          </div>
        </div>
      </section>




      <section>
        <div class="cover"></div>
      </section>















      <section className="bgcolor">
        <div class="grid-flex">
          <div class="col col-text">
            <div class="banner-texts bnrs pt-5 mt-5">
              <h1>
                {" "}
                Download App <img src="/images/Quickfinz.png"  class="logo" />
              </h1>
              <p>
                <strong>
                  We make it easy to get the most out of your virtual machine.
                </strong>{" "}
                Our tools make it simple to track how your Droplets are
                performing and help you to respond quickly
                Our tools make it simple to track how your Droplets are
                performing and help you to respond quickly
              </p>
              <button className="btn mt-5 "> Download Now </button>
            </div>
          </div>

          <div class="col col-image">
            <div className="cele">
              <img src="images/mobileapp.png" alt="funny GIF" width="80%" height= "50%" />
          
            </div>
        
          </div>
        </div>
      </section>





 
      <section class="containers">
    
      <div class="cards">
        <div class="image">
        <img src="images/image-1.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn">  More</button>
      </div>
      <div class="cards">
        <div class="image">
        <img src="images/image-2.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn">  More</button>
      </div>
      <div class="cards">
        <div class="image">
        <img src="images/image-3.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn">  More</button>
      </div>
      <div class="cards">
        <div class="image">
        <img src="images/image-4.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn">  More</button>
      </div>
      <div class="cards">
        <div class="image">
        <img src="images/image-4.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn">  More</button>
      </div>
      <div class="cards">
        <div class="image">
        <img src="images/image-5.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn">  More</button>
      </div>
      <div class="cards">
        <div class="image">
        <img src="images/image-2.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn">  More</button>
      </div>
      <div class="cards">
        <div class="image">
        <img src="images/image-3.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
        <button className="btn"> More</button>
      </div>
    </section>






      <section>
        <div className="mng">
          <h1>Let’s Get you Insured</h1>
          <hr></hr>
        </div>

        <div class="pic-ctn">
          <img src="https://picsum.photos/200/300?t=1" alt="" class="pic" />
          <img src="https://picsum.photos/200/300?t=2" alt="" class="pic" />
          <img src="https://picsum.photos/200/300?t=3" alt="" class="pic" />
          <img src="https://picsum.photos/200/300?t=4" alt="" class="pic" />
          <img src="https://picsum.photos/200/300?t=5" alt="" class="pic" />
        </div>
      </section>

      <section>
        <div class="slider sli">
          <div class="slide-track">
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>



















      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">C</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Java
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Android</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

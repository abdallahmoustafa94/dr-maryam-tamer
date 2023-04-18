/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio ">
      <div className="container">

      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">


          <div className="gallery full-width">
            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6 lg-mr"
                  : "col-12"
                } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/final/case1.jpeg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="text-left">A Complete Zirconium Makeover for Upper and Lower Arches!</h6>

              </div>
              <div className="btn-more">
                <Link href="/cases/1">
                  <a className="simple-btn mt-3">
                    Read More
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/final/case2.jpeg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="text-left">Stunning Zirconium Crowns and Bridge Makeover!</h6>

              </div>
              <div className="btn-more">
                <Link href="/cases/2">
                  <a className="simple-btn mt-3">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/final/case3.jpeg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="text-left">Smile makeover done using 8 Emax porcelain veneers</h6>

              </div>
              <div className="btn-more">
                <Link href="/cases/3">
                  <a className="simple-btn mt-3">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={`${grid === 3
                ? "col-lg-4 col-md-6"
                : grid === 2
                  ? "col-md-6"
                  : "col-12"
                } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/final/case4.jpeg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6 className="text-left">Restoring Fallen Crowns with Emax Replacements to Match Natural Teeth</h6>

              </div>
              <div className="btn-more">
                <Link href="/cases/4">
                  <a className="simple-btn mt-3">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

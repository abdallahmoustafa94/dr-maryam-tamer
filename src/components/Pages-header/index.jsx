/* eslint-disable @next/next/no-img-element */
import useMediaQuery from "../../hooks/useMediaQuery";
const PagesHeader = ({title}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header >
      <div
                  className="bg-img valign"
                  style={{ backgroundImage: isMobile ? `url(/final/sliderbgnew.avif)` : `url(/final/cover-2.jpeg)`,height:'70vh'}}
                  data-overlay-dark="6"
                >
                 
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center mt-30 text-center">
                           <p style={{fontSize:'24px'}}>{title}</p>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
     
    </header>
  );
};

export default PagesHeader;
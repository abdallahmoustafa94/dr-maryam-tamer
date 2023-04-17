import ReactCompareImage from "react-compare-image"

const Cases = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="compare-image-container">
              <ReactCompareImage
                leftImage="/final/case1b.jpeg"
                rightImage="/final/case1a.jpeg"
                className="compare-image" // Add your CSS class name her
                leftImageLabel="Before"
                rightImageLabel="After"
                rightImageCss={{width:'400px'}}
                leftImageCss={{width:'400px'}}
                aspectRatio="wider"

              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="compare-image-container">
              <ReactCompareImage
                aspectRatio="wider"
                leftImage="/final/case2b.jpeg"
                rightImage="/final/case2a.jpeg"
                className="compare-image" // Add your CSS class name here
                rightImageCss={{width:'400px'}}
                leftImageCss={{width:'400px'}}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="compare-image-container">
              <ReactCompareImage
                aspectRatio="taller"
                leftImage="/final/maryam.png"
                rightImage="/final/maryam-2.png"
                className="compare-image" // Add your CSS class name here
                rightImageCss={{height:'400px'}}
                leftImageCss={{height:'400px'}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cases;

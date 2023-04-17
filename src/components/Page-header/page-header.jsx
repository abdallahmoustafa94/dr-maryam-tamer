import React from 'react'

const PageHeader = ({title, paragraph, className}) => {
    return (
      <section className={`page-header ${className && className} `}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className=" text-center" style={{paddingTop:'100px'}}>
                <h5 className="mb-10">{title}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default PageHeader;
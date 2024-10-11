import React, { useState, useEffect } from 'react'
import Search from '../components/Search/search'
import InlineCardList from '../components/CardList/InlineCardList/InlineCardList'
import { Container, Row } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom';

type Props = {}

const LandingPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || '');

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchTerm(query);
    }
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <Container className=''>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Punny headline</h1>
            <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
            <Search onClick={handleSearchSubmit} handleSearch={handleSearch} search={searchTerm}/>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>

        <div className=" bg-dark">
          <div className="card flex-md-row mb-4 box-shadow h-md-250 bg-dark text-white">
          <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_19234b9e5d1%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_19234b9e5d1%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22130.7%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style={{width: 200, height: 250}} />
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">World</strong>
              <h3 className="mb-0">
                <a className="" href="#">Featured post</a>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Continue reading</a>
            </div>
            
        </div>
    
    <Row>
    <div className="">
          <div className="card flex-md-row mb-4 box-shadow  bg-dark text-white">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">Design</strong>
              <h3 className="mb-0">
                <a className="" href="#">Post title</a>
              </h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_19234b9e5d2%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_19234b9e5d2%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22130.7%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style={{width: 200, height: 250}} />
          </div>
        </div>
    </Row>
        
      </div>
    </Container>
    <div>
        <InlineCardList cards={[{id: 1, title: 'title', text: 'text', imageSrc: 'imageSrc'}, {id: 2, title: 'title', text: 'text', imageSrc: 'imageSrc'}, {id: 3, title: 'title', text: 'text', imageSrc: 'imageSrc'}]}></InlineCardList>
    </div>
    </>
  )
}

export default LandingPage
import React from 'react';

import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';

const Content = function Content() {
  return (
    <div className="next-steps my-5">
      <h2 className="my-5 text-center">What can I do next?</h2>
      <Row className="d-flex justify-content-between">
        {contentData.map((col) => (
          <Col key={col.link} md={5} className="mb-4">
            <h6 className="mb-3">
              <a href={col.link}>
                <FontAwesomeIcon icon="link" className="mr-2" />
                {col.title}
              </a>
            </h6>
            <p>{col.description}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Content;

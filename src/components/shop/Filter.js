import React from 'react';
import {
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenCategory: false,
      isOpenSortby: false
    }

    this.toggleCat = this.toggleCat.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
  }

  toggleCat() {
    this.setState({ isOpenCategory: !this.state.isOpenCategory });
  }

  toggleSort() {
    this.setState({ isOpenSortby: !this.state.isOpenSortby });
  }

  render() {
    const { isOpenCategory, isOpenSortby } = this.state;
    const { setCategory, setSortBy } = this.props;

    return (
      <Container fluid>
        <Row className="border border-darkTransparent mb-4 rounded bg-white">
          <Col className="text-center" md={12} sm={6} xs={6}>
            <p className="mt-3">Set Category</p>
            <ButtonDropdown isOpen={isOpenCategory} toggle={this.toggleCat}>
              <DropdownToggle caret>
                Category
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setCategory('All')}>
                  All
                </DropdownItem>
                <DropdownItem onClick={() => setCategory('Gospel')}>
                  Gospel
                </DropdownItem>
                <DropdownItem onClick={() => setCategory('Country')}>
                  Country
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <hr className="mb-0 d-none d-md-block"/>
          </Col>
          
          <Col className="text-center mb-4" md={12} sm={6} xs={6}>
            <p className="mt-3">Sort Options</p>
            <ButtonDropdown isOpen={isOpenSortby} toggle={this.toggleSort}>
              <DropdownToggle caret>
                Sort By
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem onClick={() => setSortBy('name-asc')}>
                  A-Z Ascending
                </DropdownItem>
                <DropdownItem onClick={() => setSortBy('name-desc')}>
                  A-Z Descending
                </DropdownItem>
                <DropdownItem onClick={() => setSortBy('price-asc')}>
                  Lowest Price
                </DropdownItem>
                <DropdownItem onClick={() => setSortBy('price-desc')}>
                  Highest Price
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Filter;

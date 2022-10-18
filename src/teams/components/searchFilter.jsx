import { Container, Row } from 'react-bootstrap';
import React from 'react';
import StarPicker from 'react-star-picker';

import '../css/search_filter.css';

export default function SearchFilter({teamFilter, setTeamFilter}) {
  const setFilter = (e, key) => {
    setTeamFilter({
      ...teamFilter,
      [key]: e.target.value
    })
  }

  return (
    <Container className="search_filter_width">
      <Row>
        <input
          placeholder="Search"
          type="text"
          onChange={e => setFilter(e, 'search')}
          className="search_filter_search_box"
        />
      </Row>
      <Row className="search_filter_rating">Rating</Row>
      <div>
        <StarPicker
          className="search_filter_start_rateing"
          onChange={e => setFilter({
            target: {
              value: e
            }
          }, 'rating')}
          value={teamFilter.rating}
        />
      </div>
      <Row className="search_filter_subtitile">Has Office Hours</Row>
      <div className="row">
        <div className="search_filter_padding">
          <label htmlFor="officehrs">
            <input type="radio" name="officehours" id="officehrs" onChange={e => setFilter(e, 'officeHours')}/> Yes
          </label>
          <label htmlFor="noofficehrs" className="search_filter_padding-2">
            <input type="radio" name="officehours" id="noofficehrs" onChange={e => setFilter(e, 'officeHours')} value={''}/> No
          </label>
        </div>
      </div>
      <Row className="search_filter_subtitile">Has LinkedIn</Row>
      <div className="row">
        <div className="search_filter_padding">
          <label htmlFor="haslinkedin">
            <input type="radio" name="linkedin" id="haslinkedin" onChange={e => setFilter(e, 'linkedin')}/> Yes
          </label>
          <label htmlFor="nolinkedin" className="search_filter_padding-2">
            <input type="radio" name="linkedin" id="nolinkedin" onChange={e => setFilter(e, 'linkedin')} value={''}/> No
          </label>
        </div>
      </div>
      <Row className="search_filter_subtitile">Has Discord</Row>
      <div className="row">
        <div className="search_filter_padding">
          <label htmlFor="hasdiscord">
            <input type="radio" name="discord" id="hasdiscord" onChange={e => setFilter(e, 'discord')}/> Yes
          </label>
          <label htmlFor="nodiscord" className="search_filter_padding-2">
            <input type="radio" name="discord" id="nodiscord" onChange={e => setFilter(e, 'discord')} value={''}/> No
          </label>
        </div>
      </div>
    </Container>
  );
}
